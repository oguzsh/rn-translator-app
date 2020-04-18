import React, {useState} from 'react';
import {Alert, SafeAreaView, ActivityIndicator} from 'react-native';

import ActionButton, {ActionButtonTitle} from '../components/ActionButton';
import Container from '../components/Container';
import ContainerCenter from '../components/ContainerCenter';
import Text from '../components/Text';
import Input from '../components/Input';
import PasswordInput from '../components/PasswordInput';
import RegisterLogo from '../components/LoginLogo';

import firebase from '../database/firebaseDb';

import theme from '../utils/theme';

function RegisterView({navigation}) {
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [passwordToggle, setPasswordToggle] = useState(true);
  const [icon, setIcon] = useState('eye');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const registerUser = () => {
    if (email === '' && password === '') {
      Alert.alert('Please fill in the blanks for sign up');
    } else if (password !== confirmPassword) {
      Alert.alert('Your password does not same with confirm password');
    } else {
      setLoading(true);

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          res.user.updateProfile({
            displayName: displayName,
          });
          //console.log('User registered successfully!');
          setLoading(false);
          setDisplayName('');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          navigation.navigate('Home');
        })
        .catch((error) => Alert.alert(error));
    }
  };

  const togglePassword = () => {
    if (passwordToggle === false) {
      setPasswordToggle(true);
      setIcon('eye');
    } else {
      setPasswordToggle(false);
      setIcon('eye-off');
    }
  };

  return (
    <Container as={SafeAreaView} bg="white" flex={1}>
      {isLoading ? (
        <ContainerCenter>
          <ActivityIndicator color="blue" size="large" />
        </ContainerCenter>
      ) : (
        <ContainerCenter>
          <RegisterLogo />

          <Container>
            <Text fontSize={24} fontFamily={theme.typography.bold} mt={30}>
              Create Account
            </Text>
          </Container>

          <Input
            m={12}
            width={300}
            color="black"
            placeholder="Name"
            value={displayName}
            onChangeText={(val) => setDisplayName(val)}
          />

          <Input
            m={12}
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

          <PasswordInput
            placeHolder={'Confirm Password'}
            password={confirmPassword}
            icon={icon}
            passwordToggle={passwordToggle}
            setPassword={setConfirmPassword}
            togglePassword={togglePassword}
          />

          <ActionButton m={15} onPress={() => registerUser()}>
            <ActionButtonTitle fontSize={theme.smallSize}>
              Sign Up
            </ActionButtonTitle>
          </ActionButton>

          <Text
            fontSize={theme.smallSize}
            color="blue"
            mt={15}
            onPress={() => navigation.navigate('Login')}>
            <Text color="grey">Already have an account ?</Text> Sign In
          </Text>
        </ContainerCenter>
      )}
    </Container>
  );
}

export default RegisterView;
