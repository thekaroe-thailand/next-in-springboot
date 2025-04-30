'use client';

import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    return (
        <button type="button"
            onClick={() => router.push('/dashboard')}
            className="bg-blue-600 p-4 rounded-lg cursor-pointer"
        >
            Dashboard Button
        </button>
    )
}