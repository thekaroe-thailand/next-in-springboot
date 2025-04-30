// nalv-links.tsx
'use client';

import Link from 'next/link';

export function NavLinks() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
        </nav>
    )
}