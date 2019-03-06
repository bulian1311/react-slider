import React, { Component } from 'react';

import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Repair = styled.div`
  color: #464646;
  font-size: 18px;
  font-weight: 300;
  line-height: 22px;
`;

const WorkTime = styled.div`
  color: #2a2a2a;
  font-size: 12px;
  font-weight: 300;
  line-height: 24px;
  span {
    display: block;
    color: #464646;
    font-size: 21px;
    font-weight: 700;
  }
`;

const CallButton = styled.button`
  width: 173px;
  height: 45px;
  background-color: #3fc7db;
  border: none;
  border-radius: 100px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 22.04px;
`;

export class Menu extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={3}>
            <Repair>Ремонт айфонов в сервисном центре и на выезде</Repair>
          </Col>
          <Col md={{ span: 3, offset: 1 }}>
            <WorkTime>
              Пн-пт с 10 до 20, сб,вс с 11 до 18 <span>Ленинская, 301</span>
            </WorkTime>
          </Col>
          <Col md={3}>
            <WorkTime>
              Звонки принимаются 24 часа <span>8 (846) 922 55 44</span>
            </WorkTime>
          </Col>
          <Col md={2}>
            <CallButton>Заказать звонок!</CallButton>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Menu;
