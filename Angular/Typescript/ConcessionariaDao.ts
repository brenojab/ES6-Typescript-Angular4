import { DaoInterface } from './DaoInterface'
import Concessioaria from './Concessionaria'
import Concessionaria from './Concessionaria';

class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Concessioaria): boolean {
        // Lógica de insert
        return true;
    }
    atualizar(object: Concessioaria): boolean {
        // Lógica de atualizar
        return true;
    }
    remover(id: number): Concessioaria {
        // Lógica de remover
        return new Concessionaria('', []);
    }
    selecionar(id: number): Concessioaria {
        // lógica de selecionar
        return new Concessionaria('', []);
    }
}