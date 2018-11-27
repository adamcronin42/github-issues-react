import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

export default class Table extends Component {
  render() {
    return(<Title>{this.props.title}</Title>)
  }
}

const Title = styled.div`
  border-style: solid;
  padding: 5px;
  margin: 5px;
`