import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: #bdc3c7;
`;

const NotFound = () => (
  <Container>
    <Text>Page Not Found!</Text>
  </Container>
);

export default NotFound;
