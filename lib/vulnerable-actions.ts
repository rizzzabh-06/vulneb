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
    try {
        // 🚨 VULNERABILITY #2: Direct JSON.parse on untrusted input
        projectConfig = JSON.parse(configJson)
    } catch (e) {
        console.error("Failed to parse config", e);
    }

    // 🚨 VULNERABILITY #3: Server Component state pollution
    const previewState = {
        ...prevState,
        project: projectConfig,
        // This triggers react2shell prototype chain
        // In the real vulnerability, this would happen implicitly during serialization
        // We call our simulator helper here to guarantee the effect for the demo
        response: await generatePreview((projectConfig as any)._response)
    }

    return previewState
}
