import { useState } from 'react';
import AppThemeProvider from '../../themes/AppThemeProvider';
import logo from '../../logo.svg';
import { AppContainer, Logo, Header, Link, Button } from './styles';

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppThemeProvider>
      <AppContainer>
        <Header>
          <Logo src={logo} alt="logo" />
          <p>Hello Vite + React!</p>
          <p>
            <Button type="button" onClick={() => setCount(count => count + 1)}>
              count is: {count}
            </Button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </Link>
            {' | '}
            <a
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </Header>
      </AppContainer>
    </AppThemeProvider>
  );
}

export default App;
