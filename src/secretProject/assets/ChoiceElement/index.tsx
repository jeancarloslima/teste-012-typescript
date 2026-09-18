import { useState } from "react";

const descriptions = [
  {
    attribute: "DIA",
    text: "Ação de diálogo. Não utiliza nenhum atributo. Apenas escolha o que quer dizer",
  },
  {
    attribute: "INT",
    text: "Ação de diálogo. Não utiliza nenhum atributo. Apenas escolha o que quer dizer",
  },
  {
    attribute: "CON",
    text: "Ação de diálogo. Não utiliza nenhum atributo. Apenas escolha o que quer dizer",
  },
  {
    attribute: "DES",
    text: "Ação de diálogo. Não utiliza nenhum atributo. Apenas escolha o que quer dizer",
  },
  {
    attribute: "CAR",
    text: "Ação de diálogo. Não utiliza nenhum atributo. Apenas escolha o que quer dizer",
  },
  {
    attribute: "FOR",
    text: "Ação de diálogo. Não utiliza nenhum atributo. Apenas escolha o que quer dizer",
  },
];

export default function ChoiceElement({ text, attribute }) {
  const [isHovered, setIsHovered] = useState(false);
  const description = descriptions.find((desc) => desc.attribute == attribute);

  return (
    <div className="relative py-6 bg-blue-600 text-white hover:cursor-pointer hover:bg-blue-500">
      <p className="text-center">{text}</p>
      <span className="absolute text-sm top-1 right-1.25">
        {attribute}
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-5 h-5 rounded-[50%] relative ml-2 bg-gray-600 text-white font-bold hover:cursor-pointer hover:bg-gray-500"
        >
          ?
          {isHovered && (
            <span className="absolute w-75 h-25 px-2 py-4 -right-5 -top-32.5 bg-white text-blue-600 rounded-2xl">
              {description?.text}
              <span className="w-2 h-7 absolute -bottom-7 right-6.5 bg-white rounded-b-2xl"></span>
            </span>
          )}
        </button>
      </span>
    </div>
  );
}
