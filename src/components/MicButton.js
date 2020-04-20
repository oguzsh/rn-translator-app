import React from 'react';

import ContainerCenter from './ContainerCenter';
import IconButton from './IconButton';
import Icon from 'react-native-vector-icons/Feather';

function MicButton() {
  return (
    <ContainerCenter>
      <IconButton
        onPress={() => {
          console.log('hi');
        }}
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
