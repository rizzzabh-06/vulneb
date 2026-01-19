import { Navbar } from "@/components/Navbar"

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col bg-background selection:bg-primary selection:text-primary-foreground">
            <Navbar />
            <main className="flex-1">{children}</main>
            <footer className="py-6 md:px-8 md:py-0 border-t">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © 2024 CodeForge. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}
