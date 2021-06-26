import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRom } from './pages/NewRom';

import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRom} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
