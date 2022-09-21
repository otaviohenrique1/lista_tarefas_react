import { createContext, FC, ReactNode, useState } from "react";
import { TarefaContextType, TarefaTypes } from "../types/types";
import { v4 as uuidv4 } from 'uuid';

export const TarefaContext = createContext<TarefaContextType | null>(null);

export type TarefaProviderProps = {
  children: ReactNode;
}

export const TarefaProvider: FC<TarefaProviderProps> = ({ children }) => {
  const [tarefas, setTarefas] = useState<TarefaTypes[]>([]);

  const criarTarefa = (tarefa: string) => {
    let nova_tarefa: TarefaTypes = {
      id: uuidv4().toString(),
      tarefa: tarefa,
      feito: false,
      criado: new Date(),
      atualizado: new Date(),
    }

    setTarefas([...tarefas, nova_tarefa]);
  };

  const editarNomeTarefa = (id: string, tarefa: string) => {
    let resultado = tarefas.map((item_busca) => {
      if (item_busca.id === id) {
        return {
          ...item_busca,
          tarefa: tarefa,
          atualizado: new Date(),
        }
      }
      return item_busca;
    });
    setTarefas(resultado);
  };

  const editarStatusTarefa = (id: string) => {
    let resultado = tarefas.map((item_busca) => {
      if (item_busca.id === id) {
        return {
          ...item_busca,
          feito: !item_busca.feito,
          atualizado: new Date(),
        }
      }
      return item_busca;
    });
    setTarefas(resultado);
  };

  const removerTarefa = (id: string) => {
    let resultado = tarefas.filter((item_filtrado: TarefaTypes) => item_filtrado.id !== id);
    setTarefas(resultado);
  };

  return (
    <TarefaContext.Provider
      value={{ tarefas, setTarefas, criarTarefa, editarNomeTarefa, editarStatusTarefa, removerTarefa }}
    >{children}</TarefaContext.Provider>
  );
};
