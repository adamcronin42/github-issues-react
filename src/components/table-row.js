import React from 'react';
import styled from 'styled-components';

const TableRow = props =>  {
    return(<Row className={props.className}>{props.children}</Row>)
}

const Row = styled.div`
  border: 1px solid #e1e4e8;
  padding: 5px;
  font-size: 14px;
  line-height: 1.5;
  &:hover {
    background-color: #f6f8fa;
  }
`

export default TableRow;