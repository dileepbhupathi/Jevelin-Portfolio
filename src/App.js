import './App.css';
import { JevelinBodyContent } from './components/JevelinBodyContent/JevelinBodyContent';
import { PortfolioNavbar } from './components/PortFolioNavbar/PortfolioNavbar';

function App() {
  return (
    <div className='App'>
      <PortfolioNavbar/>
      <JevelinBodyContent/>
    </div>
  );
}

export default App;
