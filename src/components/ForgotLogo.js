import * as React from 'react';
import {Image} from 'react-native';

import Container from './Container';

import forgotPasswordLogo from '../assets/forgotPasswordLogo.png';

function ForgotPasswordLogo({children, ...props}) {
  return (
    <Container as={Image} source={forgotPasswordLogo} {...props}>
      {children}
    </Container>
  );
}

export default ForgotPasswordLogo;
