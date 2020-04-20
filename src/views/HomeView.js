import React, {useState, useEffect} from 'react';
import {Alert, SafeAreaView} from 'react-native';
import {debounce} from 'lodash';

import Container from '../components/Container';
import LanguagePicker from '../components/LanguagePicker';
import Input from '../components/Input';
import IconButton from '../components/IconButton';
import Icon from 'react-native-vector-icons/Feather';

import firebase from '../database/firebaseDb';

function HomeView({navigation}) {
  const [translateText, setTranslateText] = useState('');
  const [resultText, setResultText] = useState('');
  const [pickerA, setPickerA] = useState('en');
  const [pickerB, setPickerB] = useState('tr');

  const getTranslatedText = (text, language = 'en') => {
    const API_KEY =
      'trnsl.1.1.20200419T192535Z.b031b5e5f9809aee.d2ebbfcf51e32dce0ef6d3590a800f1bc6bbabdd';

    return fetch(
      `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${API_KEY}&text=${translateText}&lang=${pickerA}-${pickerB}`,
    )
      .then((res) => res.json())
      .then((resJson) => {
        setResultText(resJson.text.toString());
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    setTranslateText(e);
  };

  const whenUserStopTyping = debounce(() => {
    getTranslatedText(translateText, pickerA);
  }, 200);

  useEffect(() => {
    whenUserStopTyping();
  }, [handleChange]);

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
        <LanguagePicker placeholder={pickerA} func={setPickerA} />
        <Input
          ml={15}
          mr={15}
          width={350}
          fontSize={28}
          color="black"
          borderBottomWidth={0}
          height={100}
          placeholder="Tap to enter text"
          onChangeText={(val) => handleChange(val)}
          value={translateText}
        />
      </Container>

      <Container
        flexDirection="row"
        justifyContent="space-between"
        alignContent="center">
        <Container bg="black" mt={10} width={170} height={3} />
        <IconButton py={-20}>
          <Icon name="refresh-ccw" size={28} />
        </IconButton>
        <Container bg="black" mt={10} width={170} height={3} />
      </Container>

      <Container mt={20}>
        <LanguagePicker placeholder={pickerB} func={setPickerB} />
        <Input
          ml={15}
          mr={15}
          width={350}
          fontSize={28}
          color="black"
          borderBottomWidth={0}
          height={100}
          placeholder="..."
          editable={false}
          value={resultText}
        />
      </Container>
    </Container>
  );
}

export default HomeView;
