import { SubmissionForm } from "@/components/SubmissionForm"

export default function SubmitPage() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Hackathon Submission</h3>
                <p className="text-sm text-muted-foreground">
                    Submit your project configuration for the upcoming hackathon.
                    Our build server will generate a preview.
                </p>
            </div>
            <div className="separator" />
            <SubmissionForm />
        </div>
    )
}
