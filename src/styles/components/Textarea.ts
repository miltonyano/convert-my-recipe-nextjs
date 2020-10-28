import styled, { css } from 'styled-components';
import { shade } from 'polished';

import ToolTip from '@/components/Tooltip';

interface ContainerProps {
  isErrored: boolean;
}

export const TextareaComponentContainer = styled.div<ContainerProps>`
  border-radius: 10px;
  border: 1px solid #232129;
  padding: 8px 4px 8px 16px;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  textarea {
    border: 0;
    background: transparent;
    width: 100%;
    resize: none;
    height: 50vh;
    transition: background-color 0.2s;
    cursor: auto;

    ::placeholder {
      color: #666360;
      text-align: center;
      line-height: 50vh;
    }

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: #c1c1c1;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${shade(0.2, '#c1c1c1')};
      cursor: pointer;
    }
  }
`;

export const TextareaError = styled(ToolTip)`
  height: 20px;

  svg {
    position: absolute;
  }

  span {
    background-color: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
