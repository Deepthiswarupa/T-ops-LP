import { BrowserRouter } from 'react-router-dom';
import { LandingPage } from './landing/LandingPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
}

export default App;
