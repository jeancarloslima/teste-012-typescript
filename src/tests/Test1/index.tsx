let nome: string = "Sebalter";
let horasProjeto: number = 400;
let projetoConcluido: boolean = false;

nome = 40; // Erro
console.log(nome);



const tecnologiasFront: string[] = ["React", "Zustand", "Tailwind CSS"];
const notas: number[] = [1, 4, 6];
tecnologiasFront.push(100); // Erro



let dadoQualquer: any = "Uma string";

dadoQualquer = 10;
dadoQualquer = true;

dadoQualquer.map();



let dadoDesconhecido: unknown = "Um texto";

dadoDesconhecido.toUpperCase(); // Erro

if (typeof dadoDesconhecido === "string") {
    dadoDesconhecido.toUpperCase();
}



type Paciente = {
    id: number;
    nome: string;
    cpf: string;
    telefone?: string;
};

const novoPaciente: Paciente = {
    id: 1,
    nome: "Ana Silva",
    cpf: "111.222.333-44"
}

interface TratamentoEstetico {
    id: string;
    titulo: string;
    duracaoMinutos: number;
    disponivel: boolean;
};

const limpezaDePele: TratamentoEstetico = {
    id: "T-001",
    titulo: "Limpeza de Pele Profunda",
    duracaoMinutos: 60,
    disponivel: true,
}

interface Agendamento {
    id: number;
    dataHora: Date;
    paciente: Paciente;
    tratamento: TratamentoEstetico;
    observacoes?: string;    
};

const consulta: Agendamento = {
    id: 101,
    dataHora: new Date("2026-09-20%14:30:00"),
    paciente: novoPaciente,
    tratamento: limpezaDePele,
}

console.log(consulta);
