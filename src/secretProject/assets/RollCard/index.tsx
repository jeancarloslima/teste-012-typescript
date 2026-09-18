import { useState } from "react"

export default function RollCard() {
    const [rollValue, setRollValue] = useState(0);

    const roll = () => {
        const randomNumber = Math.floor(Math.random() * 6 + 1);
        setRollValue(randomNumber);
    }

    return (
        <div className="w-75 flex flex-col items-center justify-center gap-10 p-4 justify-self-center border border-black rounded-lg bg-white">
            <h3 className="text-4xl font-bold">{rollValue}</h3>

            <button onClick={roll} className="w-50 px-4 py-2 border border-blue-600 bg-blue-600 text-white rounded-2xl hover:cursor-pointer hover:bg-blue-500 duration-300">ROLAR</button>
        </div>
    )
}