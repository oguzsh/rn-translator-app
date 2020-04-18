import * as React from 'react';
import {Image} from 'react-native';

import Container from './Container';

import loginLogo from '../assets/loginLogo.png';

function LoginLogo({children, ...props}) {
  return (
    <Container as={Image} source={loginLogo} {...props}>
      {children}
    </Container>
  );
}

export default LoginLogo;
