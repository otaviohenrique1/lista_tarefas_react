import { TarefaProvider } from './context/tarefaContext';
import Homepage from './pages/Homepage';

function App() {
  return (
    <TarefaProvider>
      <Homepage />
    </TarefaProvider>
  );
}

export default App;
