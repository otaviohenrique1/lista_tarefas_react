import { useState } from 'react';
import { TarefaTypes } from '../types/types';
import ListaItemContainer from './ListaItemContainer';
import ListaItemDados from './ListaItemDados';
import ListaItemEdicao from './ListaItemEdicao';

interface ListaItemProps {
  data: TarefaTypes;
}

export default function ListaItem(props: ListaItemProps) {
  const [modoEditar, setModoEditar] = useState<boolean>(false);

  return (
    <ListaItemContainer
      criado={props.data.criado}
      atualizado={props.data.atualizado}
    >
      {(modoEditar) ? (
        <ListaItemEdicao
          data={props.data}
          modoEditar={modoEditar}
          setModoEditar={setModoEditar}
        />
      ) : (
        <ListaItemDados
          data={props.data}
          modoEditar={modoEditar}
          setModoEditar={setModoEditar}
        />
      )}
    </ListaItemContainer>
  );
}
