import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: ${(props) => (props.width ? props.width : '75%')};
  margin: 100px auto;
  background: #faf7fc;
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = (props) => <StyledDiv {...props}>{props.children}</StyledDiv>;

export default Container;
