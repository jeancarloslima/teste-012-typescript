import AttributeCard from "../../assets/AttributeCard";

interface sheet {
    name: string;
}

const attributes = [
  {
    name: "INT",
    value: 5,
    description:
      "Inteligência é a capacidade de superar desafios lógicos e encontrar padrões",
  },
  {
    name: "CON",
    value: 4,
    description:
      "Conhecimento é todo a informação armazenada acerca de qualquer assunto/área",
  },
  {
    name: "DES",
    value: 3,
    description:
      "Destreza é a capacidade de realizar diversos movimentos/acões com facilidade",
  },
  {
    name: "CAR",
    value: 2,
    description:
      "Carisma é a capacidade de encantar/interresar pessoas e extrair informações delas",
  },
  {
    name: "FOR",
    value: 1,
    description:
      "Força é a capacidade de lutar contra alguém e levantar/empurrar coisas pesadas",
  },
];

export default function Sheet({ name }: sheet) {
  return (
    <div className="w-[33%] h-screen hidden lg:flex flex-col items-center justify-center gap-8">
      <h2 className="text-3xl font-bold">{name}</h2>

      <ul className="flex flex-col gap-4">
        {attributes.map((att) => (
          <AttributeCard
            key={att.name}
            name={att.name}
            value={att.value}
            description={att.description}
          />
        ))}
      </ul>
    </div>
  );
}
