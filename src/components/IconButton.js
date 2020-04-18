import React from 'react';
import Button from './Button';

function IconButton({children, ...props}) {
  return (
    <Button p={10} {...props}>
      {children}
    </Button>
  );
}

export default IconButton;
