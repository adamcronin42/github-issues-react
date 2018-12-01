import React from 'react';
import styled from 'styled-components';

const Loading = props => {
  return (
    <LoadingIcon>Loading...</LoadingIcon>
  );
};

const LoadingIcon = styled.div`
  max-width: 50%;
  font-size: 36px;
  text-align: center;
`;

export default Loading;