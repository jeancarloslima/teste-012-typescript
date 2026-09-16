type StatusRequisicao = "idle" | "loading" | "sucess" | "error";

let estadoAtual: StatusRequisicao = "loading";

type IdConsulta = number | string;

let id: IdConsulta = 104;
id = "CONS-104";


type Pessoa = {
    nome: string;
    cpf: string;
}

type DadosTrabalhistas = {
    cargo: string;
    cargaHoraria: number;
}

type FuncionarioClinica = Pessoa & DadosTrabalhistas;

const novoFuncionario: FuncionarioClinica = {
    nome: "Jorge",
    cpf: "222.333.444-55",
    cargo: "Atendente",
    cargaHoraria: 40,
}



function calcularDesconto(valorTratamento: number, percentual: number): number {
    const desconto = valorTratamento * (percentual / 100);
    return valorTratamento - desconto;
}

const finalizarAgendamento = (pacienteId: number, data: string): boolean => {
    return true;
}


const criarProntuario = (pacienteId: number, observacao?: string): string => {
    if (observacao) {
        return `Prontuário criado com nota: ${observacao}`;
    }

    return "Prontuário criado sem notas";
}

criarProntuario(101);
criarProntuario(102, "Paciente com alergias à tudo");


const exibirMensagemDeSucesso = (mensagem: string): void => {
    alert(`Sucesso: ${mensagem}`);
}


interface BotaoAgendarProps {
    texto: string;
    desabilitado: boolean;
    onClick: () => void;
    onErro: (mensagemDeErro: string) => void;
}



interface RespostaDaApi<T> {
    status: number;
    mensagem: string;
    dados: T;
}

type Paciente = { id: number; nome: string };
type Tratamento = { id: number; nome: string, preco: number };

const respostaPacientes: RespostaDaApi<Paciente[]> = {
    status: 200,
    mensagem: "Sucesso",
    dados: [
        { id: 1, nome: "Roberta Miranda" },
        { id: 2, nome: "Jorge Aragão" }
    ]
}

const respostaTratamento: RespostaDaApi<Tratamento> = {
    status: 200,
    mensagem: "Sucesso",
    dados: { id: 10, nome: "Limpeza de Pele", preco: 150 }
}



interface NovoPaciente {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
}

type PacientePost = Omit<NovoPaciente, 'id'>;

const pacienteParaSalvar: PacientePost = {
    nome: "A",
    cpf: "1",
    telefone: "1"
}


type AtualizarPaciente = Partial<NovoPaciente>;

const dadosAtualizados: AtualizarPaciente = {
    telefone: "0000-1111"
}


type PacienteCard = Pick<NovoPaciente, 'nome' | 'telefone'>;

const card: PacienteCard = {
    nome: "Jogão",
    telefone: "9999-8888"
}