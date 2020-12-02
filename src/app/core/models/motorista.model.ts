import { Endereco } from './endereco.model';
export class Motorista {
  id: number;
  nome: string;
  endereco: Endereco;
  contatoA: string;
  contatoB?: string;
  grupo?: number;
}
