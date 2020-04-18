import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function HomeView({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>FORGOT PASSWORD PAGE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
  },
});

export default HomeView;
