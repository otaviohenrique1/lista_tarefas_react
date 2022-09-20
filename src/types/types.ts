import { SetStateAction } from "react";

export type TarefaTypes = {
  id: string;
  tarefa: string;
  feito: boolean;
  criado: Date;
  atualizado: Date;
}

export interface FormTypes {
  tarefa: string;
}

export type TarefaContextType = {
  tarefas: TarefaTypes[];
  criarTarefa: (tarefa: string) => void;
  editarNomeTarefa: (id: string, tarefa: string) => void;
  editarStatusTarefa: (id: string) => void;
  removerTarefa: (id: string) => void;
  tarefa: TarefaTypes;
  setTarefa: (value: SetStateAction<TarefaTypes>) => void
}