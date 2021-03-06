import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppContainer, Nav, Header } from './styles';
import TodosApi from '../../api/todos';

function App() {
  const [count, setCount] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function handleOnLoad() {
      setIsLoading(true);
      const response = await // API request
      // console.log(response);
      setIsLoading(false);
    }
    handleOnLoad();
  }, []);

  return (
    <AppContainer>
      <Nav>
        <Link to="/">Home</Link> | <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </Nav>
      <Outlet />
      <Header>
        <p>👋 Hello. This is a React project starter.</p>
      </Header>
    </AppContainer>
  );
}

export default App;
