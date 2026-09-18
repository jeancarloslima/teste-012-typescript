import ChoiceElement from "../ChoiceElement"

const choices = [
    { id: 1, text: '"O que aconteceu?"', attribute: 'DIA' },
    { id: 2, text: '"Eu te conheço?"', attribute: 'DIA' },
    { id: 3, text: '"Eu não me interesso"', attribute: 'DIA' },
]

export default function ChoiceCard() {
    return (
        <div className="w-75 justify-self-end bg-gray-300">
            <ul className="flex flex-col gap-2">
                {choices.map((choi) => (
                    <ChoiceElement key={choi.id} text={choi.text} attribute={choi.attribute} />
                ))}
            </ul>
        </div>
    )
}