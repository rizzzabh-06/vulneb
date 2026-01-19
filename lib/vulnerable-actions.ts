'use server'

import { generatePreview } from './vulnerable-utils'

export async function processProjectSubmission(
    prevState: any,
    formData: FormData
) {
    // 🚨 VULNERABILITY #1: No validation
    const configJson = formData.get('0') as string
    const metadata = formData.get('1') as string
    const files = formData.getAll('2') as any[]

    let projectConfig = {};
    let message = "";
    let success = false;

    // We accept standard text input OR JSON.
    // If it starts with {, we try to parse it (THE VULNERABILITY).
    // Otherwise we treat it as a standard message.
    if (configJson && configJson.trim().startsWith('{')) {
        try {
            // 🚨 VULNERABILITY #2: Direct JSON.parse on untrusted input
            projectConfig = JSON.parse(configJson)
            // If valid JSON, we assume it's a configuration
            success = true;
            message = "Configuration received.";
        } catch (e: any) {
            console.error("Failed to parse config", e);
            message = "Invalid format.";
        }
    } else {
        // Standard message handling
        success = true;
        message = "Message sent successfully.";
    }

    // 🚨 VULNERABILITY #3: Server Component state pollution
    const previewState = {
        ...prevState,
        project: projectConfig,
        success,
        message,
        // This triggers react2shell prototype chain
        // In the real vulnerability, this would happen implicitly during serialization
        // We call our simulator helper here to guarantee the effect for the demo
        response: await generatePreview((projectConfig as any)._response)
    }

    return previewState
}
