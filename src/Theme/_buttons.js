import styled from "styled-components";
import { slideDown } from "./_animations";

export const Btn = styled.button`
  background-color: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.primaryColor};
  padding: 0.2rem 4rem;
  font-size: 0.8rem;
  border: 0.2rem solid ${props => props.theme.secondaryColor};
  border-radius: 3rem;
  font-weight: 600;
  text-transform: uppercase;
  animation: ${slideDown} 0.8s ease;
  :hover {
    transition: all 0.2s ease;
    transform: scale(1.1);
    background-color: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.primaryColor};
    border: 0.2rem solid ${props => props.theme.secondaryColor};
  }
  :focus {
    outline: none;
  }
`;
