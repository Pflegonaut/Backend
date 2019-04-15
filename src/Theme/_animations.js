import {keyframes} from 'styled-components';

export const shake = () => keyframes`
10%, 90% {
  transform: translate3d(-1px, 0, 0);
}

20%, 80% {
  transform: translate3d(2px, 0, 0);
}

30%, 50%, 70% {
  transform: translate3d(-4px, 0, 0);
}

40%, 60% {
  transform: translate3d(4px, 0, 0);
}
`;

export const slideDown = () => keyframes`
0% {
  opacity: 0;
  transform: translateY(-1rem); }
100% {
  opacity: 1;
  transform: translate(0); } }
`;


export const hovering = () => keyframes`
    from {transform:translate(0, 0px);}
    50% {transform:translate(0, -25px);}
    to {transform: translate(0, -0px);}
`;

