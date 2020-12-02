import { Endereco } from './endereco.model';
export class Passageiro {
  id: number;
  nome: string;
  email?: string;
  nascimento?: string;
  endereco: Endereco;
  contatoA: string;
  contatoB?: string;
  horario?: string;
  grupo?: number;
}
