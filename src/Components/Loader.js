import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 32px;
  margin-top: 20px;
`;

// https://icons8.com/preloaders/en/circular/2/
// export default () => <Container><span role="img" aria-label="Loading">⏰</span></Container>
export default () => <Container><img src={require("../assets/loader.gif")} width={32} height={32}/></Container>
