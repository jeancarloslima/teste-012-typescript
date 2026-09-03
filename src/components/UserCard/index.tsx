interface UserCardProps {
    name: string;
    age: number;
    email?: string;
    role: 'admin' | 'user';
    children?: React.ReactNode;
}

export default function UserCard({ name, age, email, role, children }: UserCardProps) {
    return (
        <div>
            <h2>{name} ({age})</h2>
            {email && <p>{email}</p>}
            <span>Cargo: {role}</span>
            {children}
        </div>
    )
}