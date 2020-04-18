import React from 'react';
import Button from './Button';
import Text from './Text';

function ActionButton({children, ...props}) {
  return (
    <Button
      minWidth="250px"
      height="50px"
      color="black"
      borderRadius="30px"
      bg="blue"
      {...props}>
      {children}
    </Button>
  );
}

export function ActionButtonTitle({children, ...props}) {
  return (
    <Text
      color="white"
      fontWeight="bold"
      style={{textTransform: 'uppercase'}}
      {...props}>
      {children}
    </Text>
  );
}

export default ActionButton;
