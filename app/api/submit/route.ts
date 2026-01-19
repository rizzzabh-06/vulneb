import { NextRequest } from 'next/server'
import { processProjectSubmission } from '@/lib/vulnerable-actions'

export async function POST(req: NextRequest) {
    const formData = await req.formData()
    const result = await processProjectSubmission(null, formData)

    // 🚨 VULNERABILITY #4: Streams RCE output
    // We expose the digest in the header as requested by the user's prompt spec
    return Response.json(result, {
        headers: { 'X-Preview-Digest': result?.response?.digest || '' }
    })
}
