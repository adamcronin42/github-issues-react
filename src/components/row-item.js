import React from 'react';
import styled from 'styled-components';

const RowItem = props => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
}

export default RowItem;