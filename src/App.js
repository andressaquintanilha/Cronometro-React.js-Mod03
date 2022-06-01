import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

const NumberMain = styled.h1`
  color: purple;
  font-size: 5em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 80vw;
  height: 80vh;
`;

const BoxBtns = styled.div``;

const Btns = styled.div`
  border: none;
  border-radius: 10px;
  padding: 1em;
  box-shadow: 0.8px 0.4px 2px darkcyan;
  margin: 0.8em;
  align-items: center;
  justify-content: center;
`;

export default class Batata extends React.Component {
  state = {
    numero: 0
  };

  add = () => {
    const Stoped = setInterval(() => {
      this.setState({ numero: this.state.numero + 1 });
    }, 1000);

    this.stop = () => {
      clearInterval(Stoped);
    };
  };

  restart = () => {
    this.setState({ numero: 0 });
  };

  render() {
    return (
      <>
        <Container>
          <NumberMain>{this.state.numero}</NumberMain>
          <BoxBtns>
            <Btns onClick={this.add}>Inciar Cronômetro</Btns>
            <Btns onClick={this.stop}>Parar</Btns>
            <Btns onClick={this.restart}>Zerar Cronômetro</Btns>
          </BoxBtns>
        </Container>
      </>
    );
  }
}
