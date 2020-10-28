import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';

import { ToastMessage } from '@/hooks/toast';
import { ToastGroupContainer } from '@/styles/components/ToastGroup';

interface ToastGroupProps {
  messages: ToastMessage[];
}

const ToastGroup: React.FC<ToastGroupProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' },
    },
  );

  return (
    <ToastGroupContainer hasToast={!!messages.length}>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </ToastGroupContainer>
  );
};

export default ToastGroup;