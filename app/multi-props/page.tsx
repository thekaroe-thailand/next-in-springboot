'use client';

interface UserProfileProps {
    name: string;
    age: number;
    email: string;
    isAdmin?: boolean;
}

export default function UserProfile({ name, age, email, isAdmin }: UserProfileProps) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            {isAdmin && <p>Admin User</p>}
        </div>
    )
}