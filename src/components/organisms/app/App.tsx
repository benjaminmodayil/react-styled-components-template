import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppThemeProvider from '../../../themes/AppThemeProvider';
import { AppContainer, Nav, Header } from './styles';
import TodosApi from '../../api/todos';

function App() {
  const [count, setCount] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function handleOnLoad() {
      setIsLoading(true);
      const response = await TodosApi.getTodos();
      console.log(response);
      setIsLoading(false);
    }
    handleOnLoad();
  }, []);

  return (
    <AppThemeProvider>
      <AppContainer>
        <Nav>
          <Link to="/">Home</Link> | <Link to="/invoices">Invoices</Link> |{' '}
          <Link to="/expenses">Expenses</Link>
        </Nav>
        <Header>
          <p>👋 Hello. This is a React project starter.</p>
        </Header>
      </AppContainer>
    </AppThemeProvider>
  );
}

export default App;
