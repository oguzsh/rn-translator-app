import * as React from 'react';
import {Image} from 'react-native';

import Container from './Container';

import registerLogo from '../assets/registerLogo.png';

function RegisterLogo({children, ...props}) {
  return (
    <Container as={Image} source={registerLogo} {...props}>
      {children}
    </Container>
  );
}

export default RegisterLogo;
