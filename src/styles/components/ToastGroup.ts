import styled, { css } from 'styled-components';

interface ContainerProps {
  hasToast: boolean;
}

export const ToastGroupContainer = styled.div<ContainerProps>`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
  z-index: -1;
  transition: z-index 4s;

  ${props =>
    props.hasToast &&
    css`
      transition: unset;
      z-index: 0;
    `}

`;
