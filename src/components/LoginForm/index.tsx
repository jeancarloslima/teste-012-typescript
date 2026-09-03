import { useState, type ChangeEvent } from "react";

export default function LoginForm() {
    const [email, setEmail] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Enviando:', email);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="border" type="email" value={email} onChange={handleInputChange} required />
            <button className="px-4 py-2 border cursor-pointer" type="submit">Entrar</button>
        </form>
    )
}