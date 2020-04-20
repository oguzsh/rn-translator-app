import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';

import Container from '../components/Container';
import IconButton from '../components/IconButton';
import Text from '../components/Text';
import Icon from 'react-native-vector-icons/Feather';

import {CustomPicker} from 'react-native-custom-picker';

import Tts from 'react-native-tts';

import theme from '../utils/theme';

function LanguagePicker({placeholder, text, func}) {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    return fetch(
      'https://translate.yandex.net/api/v1.5/tr.json/getLangs?ui=en&key=trnsl.1.1.20200419T192535Z.b031b5e5f9809aee.d2ebbfcf51e32dce0ef6d3590a800f1bc6bbabdd',
    )
      .then((res) => res.json())
      .then((resJson) => {
        setLoading(false);
        setLanguages(resJson.langs);
      });
  };

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
  };

  const sayText = () => {
    Tts.speak(text);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderHeader = () => {
    return (
      <Container m={10}>
        <Text fontSize={18} color="blue">
          All languages
        </Text>
      </Container>
    );
  };

  const renderField = (settings) => {
    const {selectedItem, defaultText, getLabel} = settings;
    return (
      <Container style={styles.container}>
        <Container>
          {!selectedItem && (
            <Container>
              <Text color="blue">
                {defaultText} <Icon name="corner-right-down" />{' '}
              </Text>
            </Container>
          )}
          {selectedItem && (
            <Container style={styles.innerContainer}>
              <Text color="blue">
                {getLabel(selectedItem)} <Icon name="corner-right-down" />
              </Text>
            </Container>
          )}
        </Container>
      </Container>
    );
  };

  const renderOption = (settings) => {
    const {item, getLabel} = settings;
    return (
      <Container m={10}>
        <Container style={styles.innerContainer}>
          <Container style={[styles.box, {backgroundColor: item.color}]} />
          <Text fontSize={16}>{getLabel(item)}</Text>
        </Container>
      </Container>
    );
  };

  return (
    <Container
      ml={20}
      mr={20}
      flexDirection="row"
      justifyContent="space-between">
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <CustomPicker
          placeholder={languages[placeholder]}
          options={Object.values(languages)}
          fieldTemplate={renderField}
          optionTemplate={renderOption}
          headerTemplate={renderHeader}
          onValueChange={(value) => {
            func(getKeyByValue(languages, value));
          }}
        />
      )}
      <IconButton
        p={2}
        borderWidth={2}
        borderRadius={30}
        borderColor="lightBlue"
        onPress={() => sayText()}>
        <Icon name="volume-2" color={theme.colors.blue} size={24} />
      </IconButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#EAEDFF',
    borderRadius: 8,
  },
});

export default LanguagePicker;
