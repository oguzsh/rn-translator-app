import React, {useState} from 'react';
import {Alert, SafeAreaView} from 'react-native';

import ActionButton, {ActionButtonTitle} from '../components/ActionButton';
import Container from '../components/Container';
import ContainerCenter from '../components/ContainerCenter';
import Text from '../components/Text';
import Input from '../components/Input';
import ForgotPasswordLogo from '../components/LoginLogo';

import firebase from '../database/firebaseDb';

import theme from '../utils/theme';

function ForgotPasswordView({navigation}) {
  const [email, setEmail] = useState('');

  const passwordReset = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      //console.log('Password reset email sent successfully');
      Alert.alert(
        'Success',
        'We have sent your new password to your e-mail address.',
        [{text: 'OK', onPress: () => navigation.navigate('Login')}],
        {cancelable: false},
      );
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <Container as={SafeAreaView} bg="white" flex={1}>
      <ContainerCenter>
        <ForgotPasswordLogo />

        <Container alignItems="center">
          <Text fontSize={24} fontFamily={theme.typography.bold} mt={30}>
            Recover Password
          </Text>
          <Text
            fontSize={14}
            fontFamily={theme.typography.regular}
            mt={10}
            textAlign="center"
            style={{textTransform: 'uppercase', width: 220}}>
            Don't Worry Just Write Your Email Address
          </Text>
        </Container>

        <Input
          mt={30}
          mb={30}
          width={300}
          color="black"
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(val) => setEmail(val)}
        />

        <ActionButton m={15} onPress={() => passwordReset()}>
          <ActionButtonTitle fontSize={theme.smallSize}>
            Submit
          </ActionButtonTitle>
        </ActionButton>
        <ActionButton m={15} bg="white" onPress={() => navigation.goBack()}>
          <ActionButtonTitle color="blue" fontSize={theme.smallSize}>
            CANCEL
          </ActionButtonTitle>
        </ActionButton>
      </ContainerCenter>
    </Container>
  );
}

export default ForgotPasswordView;
