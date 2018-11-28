import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

export default class TableRow extends Component {
  render() {
    return(<Row className={this.props.className}>{this.props.children}</Row>)
  }
}

const Row = styled.div`
  border: 1px solid #e1e4e8;
  padding: 5px;
  font-size: 14px;
  line-height: 1.5;
`