# CodeForge Portfolio 🚀

**Professional developer portfolio & hackathon submission platform.**

This project looks like a legitimate, high-quality production site, but it contains an **INTENTIONAL VULNERABILITY (CVE-2024-34351)** for educational security demonstrations.

## ⚠️ Security Warning

**DO NOT DEPLOY THIS TO A PUBLIC SERVER.**
This application has a built-in Remote Code Execution (RCE) vulnerability.

## Quick Start
```bash
npm install
npm run dev
```
Visit: `http://localhost:3000`

## Features
-   **Marketing Pages**: Beautiful hero section, features list, and project gallery.
-   **Dashboard**: Protected area for managing hackathon submissions.
-   **Vulnerable Form**: The "Submit Hackathon" form at `/dashboard/submit`.

## Security Demo (Educational)

### Vulnerability: react2shell (CVE-2024-34351)
The application uses a vulnerable pattern in `processProjectSubmission` server action where a user-controlled JSON object is merged into the server state, allowing for prototype pollution that triggers RCE during the Next.js flight response stream.

### Exploitation Steps
1.  Navigate to `/dashboard/submit`.
2.  Use the `exploit.py` script to send a malicious payload to `/api/submit`.
3.  The payload injects a `child_process.execSync('id')` call.
4.  Observe the command output in the `X-Preview-Digest` response header or JSON body.

### Manual Exploit
You can also exploit it using Burp Suite by manipulating the POST request to `/api/submit`.

## Tech Stack
-   **Framework**: Next.js 14 (App Router)
-   **Styling**: Tailwind CSS + Shadcn UI
-   **Icons**: Lucide React
