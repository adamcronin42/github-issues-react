import React from 'react';
import styled from 'styled-components';

const SecondaryRowItem = props => {
  return(
    <StyledRow className={props.className}>
      {props.children}
    </StyledRow>
  );
}

const StyledRow = styled.div`
  font-size: 12px;
  color: #586069;
  line-height: 1.25;
`;

export default SecondaryRowItem;