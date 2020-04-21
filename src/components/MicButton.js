import React, {useEffect} from 'react';

import ContainerCenter from './ContainerCenter';
import IconButton from './IconButton';

import Icon from 'react-native-vector-icons/Feather';

import Voice from '@react-native-community/voice';

function MicButton({lang, func}) {
  useEffect(() => {
    const onSpeechResults = (e) => {
      func(e.value);
    };
    Voice.onSpeechResults = onSpeechResults;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startRecognizing = async () => {
    func([]);
    try {
      await Voice.start(lang);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ContainerCenter ml={100}>
      <IconButton
        m={10}
        onPress={() => startRecognizing()}
        bg="blue"
        width={84}
        height={84}
        borderRadius={50}
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.5,
          shadowRadius: 4,

          elevation: 8,
        }}>
        <Icon name="mic" size={48} color="white" />
      </IconButton>
    </ContainerCenter>
  );
}

export default MicButton;
