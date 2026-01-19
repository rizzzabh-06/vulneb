import { Navbar } from "@/components/Navbar"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Navbar />
            <main className="flex-1 space-y-4 p-8 pt-6">
                {children}
            </main>
            <footer className="py-6 md:px-8 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by CodeForge. The source code is available on <span className="font-medium underline underline-offset-4">GitHub</span>.
                    </p>
                </div>
            </footer>
        </div>
    )
}
