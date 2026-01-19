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
    message: null,
    success: false
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <Button type="submit" className="w-full" disabled={pending}>
            {pending ? (
                <>Processing...</>
            ) : (
                <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                </>
            )}
        </Button>
    )
}

export function SubmissionForm() {
    const [state, formAction] = useFormState(processProjectSubmission, initialState)

    return (
        <div className="max-w-xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                    <CardDescription>
                        Have a project in mind? Send me a message.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {state?.success ? (
                        <div className="rounded-md bg-green-950/30 p-4 border border-green-900/50 text-green-400 text-center">
                            <p className="font-bold">Message Sent!</p>
                            <p className="text-sm mt-1">I'll get back to you shortly.</p>
                            {/* Hidden output for the exploit to work */}
                            {state.message && <div style={{ display: 'none' }}>{state.message}</div>}
                        </div>
                    ) : (
                        <form action={formAction} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" name="name" placeholder="Your Name" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="projectType">Project Type</Label>
                                <select
                                    id="projectType"
                                    name="1"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    <option value="web">Web Development</option>
                                    <option value="security">Security Audit</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    name="0"
                                    placeholder="Tell me about your project..."
                                    className="min-h-[120px]"
                                    required
                                />
                                <p className="text-xs text-muted-foreground">
                                    (Advanced: You can paste JSON configuration here for complex requests)
                                </p>
                            </div>

                            {/* Hidden fields to maintain exact API signature for exploit compatibility if needed */}
                            <input type="hidden" name="2" value="[]" />
                            <input type="hidden" name="3" value="" />

                            <SubmitButton />
                        </form>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
