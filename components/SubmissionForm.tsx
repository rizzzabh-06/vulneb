'use client'

import { useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { processProjectSubmission } from '@/lib/vulnerable-actions'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, FileJson, Send, Terminal } from "lucide-react"

const initialState = {
    project: null,
    response: null
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <Button type="submit" className="w-full" disabled={pending}>
            {pending ? (
                <>Processing...</>
            ) : (
                <>
                    <Send className="mr-2 h-4 w-4" /> Generate Preview & Submit
                </>
            )}
        </Button>
    )
}

export function SubmissionForm() {
    const [state, formAction] = useFormState(processProjectSubmission, initialState)
    const [jsonInput, setJsonInput] = useState<string>(
        JSON.stringify({
            title: "My Awesome Hack",
            repo: "github.com/user/repo",
            description: "Built with Next.js and Supabase"
        }, null, 2)
    )

    return (
        <div className="grid gap-6 lg:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Project Configuration</CardTitle>
                    <CardDescription>
                        Enter your project details in JSON format for the build server.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={formAction} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="0">Project Config (JSON)</Label>
                            <div className="relative">
                                <Textarea
                                    id="0"
                                    name="0"
                                    value={jsonInput}
                                    onChange={(e) => setJsonInput(e.target.value)}
                                    className="font-mono text-xs min-h-[200px] bg-slate-950 text-slate-50 border-slate-800"
                                />
                                <FileJson className="absolute top-2 right-2 h-4 w-4 text-slate-500" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="1">Metadata (Tags)</Label>
                            <Input
                                id="1"
                                name="1"
                                placeholder="react, nextjs, security"
                                defaultValue="react, nextjs"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="2">Screenshots</Label>
                            <Input id="2" name="2" type="file" multiple disabled />
                            <p className="text-xs text-muted-foreground">Image upload disabled in preview mode</p>
                        </div>

                        <input type="hidden" name="3" value={jsonInput} />
                        <SubmitButton />
                    </form>
                </CardContent>
            </Card>

            <Card className="bg-slate-950 border-slate-800">
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <Terminal className="mr-2 h-5 w-5 text-green-500" />
                        Live Preview Output
                    </CardTitle>
                    <CardDescription>
                        Server response and build logs
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {state?.response ? (
                        <div className="space-y-4">
                            <div className="rounded-md bg-slate-900 p-4 border border-slate-800">
                                <pre className="text-xs text-green-400 font-mono whitespace-pre-wrap overflow-auto max-h-[300px]">
                                    {JSON.stringify(state.response, null, 2)}
                                </pre>
                            </div>
                            {state.response.digest && (
                                <div className="rounded-md bg-red-950/30 p-4 border border-red-900/50">
                                    <p className="text-xs font-mono text-red-400">
                                        <span className="font-bold">Error Digest:</span> {state.response.digest}
                                    </p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-[300px] text-slate-500 border border-dashed border-slate-800 rounded-md">
                            <Code2 className="h-10 w-10 mb-2 opacity-20" />
                            <p className="text-sm">Waiting for submission...</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
