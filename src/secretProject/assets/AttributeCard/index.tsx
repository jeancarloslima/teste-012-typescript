import { useState } from "react";

interface AttributeCard {
  name: string;
  value: number;
  description: string;
}

export default function AttributeCard({
  name,
  value,
  description,
}: AttributeCard) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-75 flex items-center justify-between p-4 bg-blue-600 rounded-xl text-white shadow-sm">
      <span className="font-bold">{name}</span>
      <span>{value}</span>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-7 h-7 rounded-[50%] relative bg-gray-600 text-white font-bold hover:cursor-pointer hover:bg-gray-500"
      >
        ?

        {isHovered && (
            <span className="absolute w-75 h-25 px-2 py-4 -right-5 -top-32.5 bg-white text-blue-600 rounded-2xl">
                {description}
                <span className="w-2 h-7 absolute -bottom-7 right-7.5 bg-white rounded-b-2xl"></span>
            </span>
        )}
      </button>
    </div>
  );
}
