import React from 'react';
import styled from 'styled-components';
import Router from './Router';

const Page = styled.section`
  font-size: 1.5em;
  margin: 1em 2em;
`;

function App()
{
    return (
      <Page>
          <header className="App-header">
          </header>
          <Router />
      </Page>
    );
}

export default App;
