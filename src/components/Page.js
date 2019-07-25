import React, { useContext } from "react";
import { ThemeContext } from "../helpers/theme";
import * as Styled from "../styles/Page";

export const Page = ({ title, children }) => {
  const { pageBackground, cardBackground } = useContext(ThemeContext);

  return (
    <Styled.PageBackground background={pageBackground}>
      <Styled.PageContent>
        <Styled.PageTitle>{title}</Styled.PageTitle>
        <Styled.PageCard background={cardBackground}>
          {children}
        </Styled.PageCard>
      </Styled.PageContent>
    </Styled.PageBackground>
  );
};
