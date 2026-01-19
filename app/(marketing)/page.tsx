"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Terminal, Shield, Network, Brain,
    Lock, Search, Code2, Database,
    Github, Twitter, Mail, Instagram, Linkedin, FileText
} from "lucide-react"

export default function IndexPage() {
    const [connectOpen, setConnectOpen] = useState(false)

    return (
        <div className="flex flex-col min-h-screen">
            {/* HERO / BIO */}
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
                <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
                    <div className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
                        Second-year CS Student • Security Researcher • Builder
                    </div>
                    <h1 className="font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
                        Build perfectly. <br /> Break securely.
                    </h1>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                        I focus on practical security—breaking systems to understand them, then designing defenses that actually work.
                    </p>
                    <p className="max-w-[42rem] text-sm text-muted-foreground italic">
                        Web Security • Blue Teaming • OSINT • Applied Research
                    </p>
                </div>
            </section>

            {/* CORE SKILLS */}
            <section className="container space-y-6 py-8 md:py-12 lg:py-24 bg-slate-50/50 dark:bg-slate-900/20 rounded-3xl">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Core Skills
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        What I actually do well.
                    </p>
                </div>
                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">

                    <Card className="bg-background border-none shadow-none">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Shield className="h-6 w-6 text-blue-500" />
                                <CardTitle>Cybersecurity & Blue Teaming</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-1">
                            <p>• Web app security (OWASP Top 10, exploitation)</p>
                            <p>• IDS/SIEM setup & tuning (Suricata, Wazuh)</p>
                            <p>• Log analysis & incident investigation</p>
                            <p>• Home lab attack–defense simulations</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-background border-none shadow-none">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Terminal className="h-6 w-6 text-green-500" />
                                <CardTitle>Offensive Foundations</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-1">
                            <p>• CTF problem-solving (Web, OSINT, Crypto)</p>
                            <p>• Custom tooling for exploitation</p>
                            <p>• Attack vector analysis</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-background border-none shadow-none">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Search className="h-6 w-6 text-purple-500" />
                                <CardTitle>OSINT & Digital Forensics</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-1">
                            <p>• OSINT-driven investigations</p>
                            <p>• Blockchain transaction analysis</p>
                            <p>• Evidence collection workflows</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-background border-none shadow-none">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Brain className="h-6 w-6 text-amber-500" />
                                <CardTitle>Applied AI in Security</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground space-y-1">
                            <p>• NLP-driven alert summarisation</p>
                            <p>• Agent-based security workflows</p>
                            <p>• LLMs for investigation support</p>
                        </CardContent>
                    </Card>

                </div>
            </section>

            {/* PROJECTS */}
            <section className="container space-y-6 py-8 md:py-12 lg:py-24">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Projects
                    </h2>
                    <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Concrete work. No fluff.
                    </p>
                </div>
                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 md:max-w-[64rem]">
                    <ProjectCard
                        title="UniTie"
                        desc="Real-world event management platform designed with security-first thinking (Auth, RBAC, Abuse prevention)."
                        icon={<Network className="h-8 w-8 mb-2" />}
                    />
                    <ProjectCard
                        title="Blockchain Forensics"
                        desc="Platform for transaction graph analysis and OSINT-assisted deanonymisation of wallet clusters."
                        icon={<LinkIcon className="h-8 w-8 mb-2" />}
                    />
                    <ProjectCard
                        title="Agentic Wazuh SOC"
                        desc="AI-assisted SOC using Wazuh and NLP to automate alert triage and reduce analyst fatigue."
                        icon={<Shield className="h-8 w-8 mb-2" />}
                    />
                    <ProjectCard
                        title="Suricata IDS"
                        desc="Deployed and tuned Suricata for network threat detection with custom rulesets."
                        icon={<Lock className="h-8 w-8 mb-2" />}
                    />
                    <ProjectCard
                        title="Endpoint Monitor"
                        desc="Real-time file integrity monitoring system to detect persistence techniques."
                        icon={<FileText className="h-8 w-8 mb-2" />}
                    />
                    <ProjectCard
                        title="Security Tooling"
                        desc="Educational keyloggers, enumeration scripts, and custom exploit tools."
                        icon={<Terminal className="h-8 w-8 mb-2" />}
                    />
                </div>
            </section>

            {/* HACKATHON / EXPERIMENTS LINK */}
            <section className="container py-8 md:py-12 lg:py-24">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center p-8 border rounded-3xl bg-red-950/10 border-red-900/20">
                    <h2 className="font-heading text-2xl font-bold">
                        Experimental Lab: CVE-2024-34351
                    </h2>
                    <p className="max-w-[85%] text-muted-foreground">
                        I host intentionally vulnerable apps to demonstrate exploitation vectors.
                        This instance contains a live RCE vulnerability (Prototype Pollution).
                    </p>
                    <Button asChild variant="destructive" size="lg">
                        <Link href="/dashboard/submit">
                            Enter Security Lab
                        </Link>
                    </Button>
                </div>
            </section>

            {/* CONNECT */}
            <section className="container py-12 flex flex-col items-center justify-center space-y-8">
                <div className="relative">
                    <Button
                        size="lg"
                        className="rounded-full px-8 text-lg transition-all duration-300"
                        onClick={() => setConnectOpen(!connectOpen)}
                    >
                        {connectOpen ? "Collaspe" : "Connect"}
                    </Button>

                    {connectOpen && (
                        <div className="absolute top-16 left-1/2 -translate-x-1/2 flex gap-4 bg-background border p-4 rounded-2xl shadow-xl animate-in fade-in slide-in-from-top-4">
                            <SocialLink icon={<Instagram className="h-5 w-5" />} href="#" label="Instagram" />
                            <SocialLink icon={<Linkedin className="h-5 w-5" />} href="#" label="LinkedIn" />
                            <SocialLink icon={<Twitter className="h-5 w-5" />} href="#" label="X" />
                            <SocialLink icon={<Mail className="h-5 w-5" />} href="mailto:contact@rishabhrajsingh.com" label="Email" />
                            <SocialLink icon={<Github className="h-5 w-5" />} href="#" label="GitHub" />
                        </div>
                    )}
                </div>

                <div className="text-center text-sm text-muted-foreground pt-12">
                    <p className="font-mono">
                        Not a specialist in one thing. Not a beginner in many. <br />
                        I build breadth to find depth—and I document the journey.
                    </p>
                </div>
            </section>
        </div>
    )
}

function ProjectCard({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
    return (
        <div className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:border-foreground/50">
            <div className="flex h-full flex-col justify-between rounded-md p-6">
                <div>
                    {icon}
                    <h3 className="font-bold text-lg mb-2">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                    {desc}
                </p>
            </div>
        </div>
    )
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
    return (
        <a href={href} className="p-2 hover:bg-muted rounded-full transition-colors group" aria-label={label}>
            {icon}
        </a>
    )
}

function LinkIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    )
}
