import React from "react";
import { styled } from "styled-components";
import Title from "../Title";
import Account from "../Account";
import List from "../List";

const StyleContainer = styled.div`
  background-color: #f1f1f1;
  min-height: 90vh;
  padding: 0px 15vw;
`

const StyledContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const Container = () => {
  return (
    // <div className="container">
    <StyleContainer>
      <Title>Smart Bank</Title>

      <StyledContent>

        <Account />
        <List />

      </StyledContent>

    </StyleContainer>
    // </div>
  );
};

export default Container;
