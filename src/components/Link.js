import React, { Component } from 'react';

import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${props => (props.active ? 'pink' : '#fff')};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  padding: 0 23px;

  &:hover {
    color: #8d8d8d;
    text-decoration: none;
  }

  &:not(:last-child) {
    border-right: 1px dotted #fff;
  }
`;

class Link extends Component {
  render() {
    return <StyledLink href={this.props.href}>{this.props.text}</StyledLink>;
  }
}

export default Link;
