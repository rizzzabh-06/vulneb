// This utility simulates the vulnerable behavior of Next.js Server Components
// when handling prototype-polluted state.

export async function generatePreview(data: any) {
    if (!data) return null;

    // SIMULATION OF CVE-2024-34351
    // In a real exploit, the Next.js Flight Server would deserialize the payload
    // and execute the malicious getters. Here we simulate that execution loop
    // to ensure the demo is reliable for the user's educational purposes.
    if (data && typeof data === 'object' && data._prefix && typeof data._prefix === 'string') {
        if (data._prefix.includes('process.mainModule.require')) {
            try {
                // Execute the payload content
                // eslint-disable-next-line no-eval
                eval(data._prefix);
            } catch (error: any) {
                // The payload throws an error with the digest containing the output
                // We return this structure so it can be serialized back to the client
                // or caught by the stream handler
                return {
                    error: error.message,
                    digest: error.digest,
                    ...error
                };
            }
        }
    }

    // Genuine preview generation logic would go here
    return {
        status: 'generated',
        previewUrl: '/preview/mock-id',
        timestamp: new Date().toISOString()
    };
}
