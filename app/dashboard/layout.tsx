import { Navbar } from "@/components/Navbar"
import { Github, Twitter, Linkedin, Mail, Instagram } from "lucide-react"
import Link from "next/link"

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
                        Built by Rishabh Raj Singh. The source code is available on <span className="font-medium underline underline-offset-4">GitHub</span>.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="https://www.linkedin.com/in/rizzzabh/" target="_blank" rel="noreferrer">
                            <Linkedin className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                        </Link>
                        <Link href="https://instagram.com/rizzabh.unitie" target="_blank" rel="noreferrer">
                            <Instagram className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                        </Link>
                        <Link href="https://x.com/Rizzabh_X" target="_blank" rel="noreferrer">
                            <Twitter className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                        </Link>
                        <Link href="mailto:contact@rishabhrajsingh.com">
                            <Mail className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
