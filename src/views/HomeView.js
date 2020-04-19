import React from 'react';
import {Alert, SafeAreaView} from 'react-native';

import Container from '../components/Container';
import LanguagePicker from '../components/LanguagePicker';
import Input from '../components/Input';

import firebase from '../database/firebaseDb';

function HomeView({navigation}) {
  // TODO : Sign Out
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate('Login');
      })
      .catch((error) => Alert(error));
  };

  return (
    <Container as={SafeAreaView} bg="white">
      <Container mt={20}>
        <LanguagePicker placeholder={'en'} />
        <Input
          ml={15}
          mr={15}
          width={350}
          fontSize={28}
          color="black"
          borderBottomWidth={0}
          height={100}
          placeholder="Tap to enter text"
        />
      </Container>

      <Container mt={20}>
        <LanguagePicker placeholder={'tr'} />
        <Input
          ml={15}
          mr={15}
          width={350}
          fontSize={28}
          color="black"
          borderBottomWidth={0}
          height={100}
          placeholder="Tap to enter text"
        />
      </Container>
    </Container>
  );
}

export default HomeView;
