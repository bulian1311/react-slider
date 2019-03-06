import React, { Component } from 'react';

import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Repair = styled.div`
  color: #ffffff;
  font-size: 40px;
  font-weight: 700;
  line-height: 30px;
  span {
    display: inline-block;
    font-size: 24px;
    line-height: 30px;
  }
`;

const Text = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  margin-top: 45px;
`;

const Button = styled.button`
  height: 64px;
  background-color: #ffa14b;
  border: none;
  border-radius: 100px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  line-height: 24px;
  padding: 0 40px;
  margin-top: 35px;
`;

export class Main extends Component {
  render() {
    return (
      <Row>
        <Col md={6}>
          <Repair>
            Качественный ремонт
            <span>iphone за 35 минут и гарантия 1 год</span>
          </Repair>
          <Text>
            Оставьте заявку на бесплатную диагностику без очереди, и получите
            защитное стекло, стоимостью 1000 рублей, с установкой в подарок!
          </Text>
          <Button>Отправить заявку!</Button>
        </Col>
        <Col md={6} />
      </Row>
    );
  }
}

export default Main;
