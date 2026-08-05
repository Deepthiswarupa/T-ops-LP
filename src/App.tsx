import { BrowserRouter } from 'react-router-dom';
import { NewLandingPage } from './landing/NewLandingPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <NewLandingPage />
    </BrowserRouter>
  );
}

export default App;
