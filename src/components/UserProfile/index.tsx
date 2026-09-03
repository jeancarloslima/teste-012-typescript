import { useState } from "react";

interface User {
  nome: string;
  email: string;
}

export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null);

  const loadUser = () => {
    setUser({ nome: "Ana", email: "ana@gmail.com" });
  };

  const clearUser = () => {
    setUser(null);
  }

  return (
    <div>
        {user ? (<p>Olá, {user.nome}</p>) : (<p>Nenhum usuário logado.</p>)}

        <button onClick={loadUser}>Entrar</button>
        <button onClick={clearUser}>Sair</button>
    </div>
  )
}
