interface IGames {
    id: string;
    nome: string;
    senha: string;
    descricao: string;
    avaliacao: number;
    image: string;
    desenvolvedora?: string;
}

interface IUser {
    id?: string,
    nome?: string,
    senha?: string,
    bio?: string,
    favorites?: [any],
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
