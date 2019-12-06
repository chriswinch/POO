import React, { Suspense, lazy } from 'react';
import { createGlobalStyle } from "styled-components";
import Store from '../../store';

const GlobalStyle = createGlobalStyle`
  *,
  html,
  body {
    box-sizing: border-box;
  }

  body {
    background: #000;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const CardSelection = lazy(() => import('../CardSelection'));

function App() {
  return (
    <Suspense fallback={() => <h3>Loading</h3>}>
      <Store>
        <div className="App">
          <CardSelection />
        </div>
        <GlobalStyle />
      </Store>
    </Suspense>
  );
}

export default App;
