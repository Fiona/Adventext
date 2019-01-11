import React from 'react';
import styled from 'styled-components';
import Router from './Router';
import Authentication from './Authentication';

const Page = styled.section`
  font-size: 1.5em;
  margin: 1em 2em;
`;

function App()
{
    return (
        <Page>
            <Authentication />
            <header className="App-header">
            </header>
            <Router />
        </Page>
    );
}

export default App;
