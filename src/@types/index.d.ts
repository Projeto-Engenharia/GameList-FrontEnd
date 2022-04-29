interface IGames {
    id: string;
    nome: string;
    senha: string;
    descricao: string;
    avaliacao: number;
    image: string;
}

interface IUser {
    id?: string,
    nome?: string,
    senha?: string,
    bio?: string,
    games?: [
      {
        id: string,
        nome: string,
        senha: string,
        descricao: string,
        avaliacao: 0,
        image: string
      }
    ]
  }
