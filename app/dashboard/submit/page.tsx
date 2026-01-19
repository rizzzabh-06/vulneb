import { SubmissionForm } from "@/components/SubmissionForm"

export default function SubmitPage() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Contact Me</h3>
                <p className="text-sm text-muted-foreground">
                    Get in touch for projects, audits, or collaborations.
                </p>
            </div>
            <div className="separator" />
            <SubmissionForm />
        </div>
    )
}
