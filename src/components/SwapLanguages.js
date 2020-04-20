import React from 'react';

import Container from './Container';
import IconButton from './IconButton';
import Icon from 'react-native-vector-icons/Feather';

function SwapLanguages({setPickerA, setPickerB, pickerA, pickerB}) {
  return (
    <Container
      flexDirection="row"
      justifyContent="space-between"
      alignContent="center">
      <Container bg="lightGrey" mt={25} width={180} height={4} />
      <IconButton
        onPress={() => {
          setPickerA(pickerB);
          setPickerB(pickerA);
        }}
        bg="white"
        p={15}
        borderRadius={30}
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
        <Icon name="refresh-ccw" size={24} color="grey" />
      </IconButton>
      <Container bg="lightGrey" mt={25} width={180} height={4} />
    </Container>
  );
}

export default SwapLanguages;
