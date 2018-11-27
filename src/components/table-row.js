import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

export default class TableRow extends Component {
  render() {
    return(<Row>{this.props.text}</Row>)
  }
}

const Row = styled.div`
  border-style: solid;
  padding: 5px;
  margin: 5px;
`