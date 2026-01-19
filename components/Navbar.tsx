import Link from "next/link"
import { Code2, Terminal, User } from "lucide-react"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <Link className="mr-6 flex items-center space-x-2" href="/">
                    <Terminal className="h-6 w-6" />
                    <span className="hidden font-bold sm:inline-block">Rishabh.dev</span>
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link
                        href="/#projects"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/dashboard/submit"
                        className="transition-colors hover:text-red-500 text-foreground/60 flex items-center gap-1"
                    >
                        <Terminal className="h-4 w-4" /> Contact
                    </Link>
                </nav>
                <div className="ml-auto flex items-center space-x-4">
                    <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                        <User className="h-4 w-4 text-slate-400" />
                    </div>
                </div>
            </div>
        </header>
    )
}
