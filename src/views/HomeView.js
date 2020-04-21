import React, {useState, useEffect} from 'react';
import {Alert, SafeAreaView} from 'react-native';
import {debounce} from 'lodash';

import Container from '../components/Container';
import LanguagePicker from '../components/LanguagePicker';
import Input from '../components/Input';
import SwapLanguages from '../components/SwapLanguages';
import MicButton from '../components/MicButton';
import IconButton from '../components/IconButton';

import Icon from 'react-native-vector-icons/Feather';

import firebase from '../database/firebaseDb';

function HomeView({navigation}) {
  const [translateText, setTranslateText] = useState('');
  const [resultText, setResultText] = useState('');
  const [words, setWords] = useState([]);
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
    words ? words.map((word) => setTranslateText(word)) : null;
  }, [handleChange]);

  useEffect(() => {
    setWords([]);
  }, [translateText]);

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
    <Container as={SafeAreaView} bg="white" flex={1}>
      <Container mt={20}>
        <LanguagePicker
          placeholder={pickerA}
          text={translateText}
          func={setPickerA}
        />
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

      <SwapLanguages
        setPickerA={setPickerA}
        setPickerB={setPickerB}
        pickerA={pickerA}
        pickerB={pickerB}
      />

      <Container mt={20}>
        <LanguagePicker
          placeholder={pickerB}
          text={resultText}
          func={setPickerB}
        />
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

      <Container py={150} flexDirection="row">
        <MicButton lang={pickerA} func={setWords} />
        <IconButton m={20} onPress={() => signOut()}>
          <Icon name="log-out" color="black" size={24} />
        </IconButton>
      </Container>
    </Container>
  );
}

export default HomeView;
