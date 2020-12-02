import { Motorista } from './motorista.model';
import { Passageiro } from './passageiro.model';

export class Grupo {
  id: number;
  motorista?: Motorista;
  passageiros?: Array<Passageiro>;
  quemFaltaNoDia?: [
    {
      dia: number;
      quemFalta: Array<number>;
    }
  ];
}
