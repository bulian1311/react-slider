import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';

const bgUrl = process.env.PUBLIC_URL + '/img/bg.png';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 49px;
  background-color: #242424;
  opacity: 0.8;
`;

const MenuWrapper = styled.div`
  height: 89px;
  padding: 20px;
`;

const MainWrapper = styled.main`
  height: 560px;
  padding-top: 130px;
  background: url(${bgUrl}) no-repeat;
  background-size: cover;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderWrapper>
          <Container>
            <Header />
          </Container>
        </HeaderWrapper>
        <MenuWrapper>
          <Container>
            <Menu />
          </Container>
        </MenuWrapper>
        <MainWrapper>
          <Container>
            <Main />
          </Container>
        </MainWrapper>
      </div>
    );
  }
}

export default App;
