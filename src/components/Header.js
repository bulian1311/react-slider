import React, { Component } from 'react';

import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from './Link';

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49px;
  padding: 0;
`;

export class Header extends Component {
  render() {
    return (
      <Row>
        <Col lg={12}>
          <nav>
            <List>
              <Link href="#" text="Вызов мастера" />
              <Link href="#" text="Прайс на ремонт" />
              <Link href="#" text="Наши преимущества" />
              <Link href="#" text="Схема работы" />
              <Link href="#" text="Отзывы клиентов" />
              <Link href="#" text="Примеры работ" />
              <Link href="#" text="Контакты" />
            </List>
          </nav>
        </Col>
      </Row>
    );
  }
}

export default Header;
