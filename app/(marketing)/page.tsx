import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Monitor, Shield, Trophy } from "lucide-react"

export default function IndexPage() {
    return (
        <>
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                    <Link
                        href="/dashboard/submit"
                        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                        target="_blank"
                    >
                        Spring Hackathon 2024 is Live! →
                    </Link>
                    <h1 className="font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                        Build perfectly. <br /> Break securely.
                    </h1>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        CodeForge is the ultimate platform for developers to showcase their
                        portfolios and participate in global hackathons. Verified by top security firms.
                    </p>
                    <div className="space-x-4">
                        <Button asChild size="lg">
                            <Link href="/dashboard">Get Started</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/dashboard/submit" target="_blank" rel="noreferrer">
                                Submit Project
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="container space-y-6 py-8 md:py-12 lg:py-24 bg-slate-50/5 dark:bg-slate-900/20 rounded-3xl">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Features
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Everything you need to manage your developer identity.
                    </p>
                </div>
                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <Monitor className="h-12 w-12" />
                            <div className="space-y-2">
                                <h3 className="font-bold">Portfolio</h3>
                                <p className="text-sm text-muted-foreground">
                                    Showcase your best work with our 3D project gallery.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <Trophy className="h-12 w-12" />
                            <div className="space-y-2">
                                <h3 className="font-bold">Hackathons</h3>
                                <p className="text-sm text-muted-foreground">
                                    One-click submission to major global events.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <Shield className="h-12 w-12" />
                            <div className="space-y-2">
                                <h3 className="font-bold">Security</h3>
                                <p className="text-sm text-muted-foreground">
                                    Bank-grade encryption for your private code (mostly).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
