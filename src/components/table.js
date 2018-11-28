import React from 'react';
import styled from 'styled-components';

const Table = props => {
  return(
    <StyledTable className={props.className}>
      {props.children}
    </StyledTable>
  );
};

const StyledTable = styled.div`
  width: 980px;
  margin-left: auto;
  margin-right: auto;
`;

export default Table;