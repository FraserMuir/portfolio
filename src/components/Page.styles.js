import styled from "styled-components";

export const PageBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.background};
`;

export const PageContent = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

export const PageTitle = styled.h1`
  font-size: 1.5em;
`;

export const PageCard = styled.div`
  background-color: ${props => props.background};
  border-radius: 3px;
`;
