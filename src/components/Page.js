import React, { useContext } from "react";
import { ThemeContext } from "../helpers/ThemeProvider";
// import * as Styled from "../styles/page";

export const Page = ({ title, children }) => {
  // const { pageBackground, cardBackground } = useContext(ThemeContext);

  // return (
  //   <Styled.PageBackground background={pageBackground}>
  //     <Styled.PageContent>
  //       <Styled.PageTitle>{title}</Styled.PageTitle>
  //       <Styled.PageCard background={cardBackground}>
  //         {children}
  //       </Styled.PageCard>
  //     </Styled.PageContent>
  //   </Styled.PageBackground>
  // );
  return <h1>Hi</h1>;
};
