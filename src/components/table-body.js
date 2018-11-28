import React from 'react';
import styled from 'styled-components';
import TableRow from './table-row';

const TableBody = props => {
  return (
    <div>
      {props.data.map(node => <StyledTableRow text={`#${node.number} ${node.title}`} />)}
    </div>
  );
};

const StyledTableRow = styled(TableRow)`
  border-style: hidden solid solid solid;
`;

export default TableBody;
