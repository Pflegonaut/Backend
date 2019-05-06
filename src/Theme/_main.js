import styled from "styled-components";
import { hovering } from "./_animations";

const theme = {
  primaryColor: "#82d8cb",
  secondaryColor: "#C9EEF4"
};

export const StyledLogo = styled.img`
  animation-name: ${hovering};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

export default theme;
