import React from 'react';
import Container from './Container';
import Input from './Input';
import IconButton from './IconButton';

import Icon from 'react-native-vector-icons/Feather';

const PasswordInput = ({
  password,
  icon,
  passwordToggle,
  setPassword,
  togglePassword,
  placeHolder,
}) => {
  return (
    <Container flexDirection="row" justifyContent="center" alignItems="center">
      <Input
        mt={12}
        mb={12}
        mr={-30}
        width={300}
        color="black"
        placeholder={placeHolder}
        value={password}
        secureTextEntry={passwordToggle}
        onChangeText={(val) => setPassword(val)}
      />
      <IconButton onPress={() => togglePassword()}>
        <Icon name={icon} size={18} color="grey" />
      </IconButton>
    </Container>
  );
};

export default PasswordInput;
