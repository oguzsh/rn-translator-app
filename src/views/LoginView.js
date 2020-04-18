import React, {useState} from 'react';
import {Alert, ActivityIndicator, SafeAreaView} from 'react-native';

import ActionButton, {ActionButtonTitle} from '../components/ActionButton';
import Container from '../components/Container';
import ContainerCenter from '../components/ContainerCenter';
import Text from '../components/Text';
import Input from '../components/Input';
import PasswordInput from '../components/PasswordInput';
import LoginLogo from '../components/LoginLogo';

import firebase from '../database/firebaseDb';

import theme from '../utils/theme';

function LoginView({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [passwordToggle, setPasswordToggle] = useState(true);
  const [icon, setIcon] = useState('eye');

  const togglePassword = () => {
    if (passwordToggle === false) {
      setPasswordToggle(true);
      setIcon('eye');
    } else {
      setPasswordToggle(false);
      setIcon('eye-off');
    }
  };

  const userLogin = () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to sign in!');
    } else {
      setLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          //console.log(res);
          // console.log('User logged-in successfully!');
          setLoading(false);
          setEmail('');
          setPassword('');

          navigation.navigate('Home');
        })
        .catch((error) => Alert(error));
    }
  };

  return (
    <Container as={SafeAreaView} bg="white" flex={1}>
      {isLoading ? (
        <ContainerCenter>
          <ActivityIndicator color="blue" />
        </ContainerCenter>
      ) : (
        <ContainerCenter>
          <LoginLogo />

          <Container alignItems="center">
            <Text fontSize={24} fontFamily={theme.typography.bold} mt={30}>
              Welcome
            </Text>
            <Text
              fontSize={14}
              fontFamily={theme.typography.regular}
              mt={10}
              style={{textTransform: 'uppercase'}}>
              Please Login Use The App
            </Text>
          </Container>

          <Input
            m={14}
            width={300}
            color="black"
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(val) => setEmail(val)}
          />

          <PasswordInput
            placeHolder={'Password'}
            password={password}
            icon={icon}
            passwordToggle={passwordToggle}
            setPassword={setPassword}
            togglePassword={togglePassword}
          />

          <Container mt={10} mb={20}>
            <Text
              fontSize={theme.smallSize}
              color="blue"
              ml={150}
              onPress={() => navigation.navigate('ForgotPassword')}>
              Forgot Password ?
            </Text>
          </Container>

          <ActionButton m={15} onPress={() => userLogin()}>
            <ActionButtonTitle fontSize={theme.smallSize}>
              Sign In
            </ActionButtonTitle>
          </ActionButton>

          <Text
            fontSize={theme.smallSize}
            color="blue"
            mt={15}
            onPress={() => navigation.navigate('Register')}>
            <Text color="grey">New user ?</Text> Sign Up
          </Text>
        </ContainerCenter>
      )}
    </Container>
  );
}

export default LoginView;
