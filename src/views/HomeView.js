import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  Alert,
  Button,
  View,
  StyleSheet,
} from 'react-native';

import firebase from '../database/firebaseDb';

function HomeView({navigation}) {
  const [uid, setUID] = useState('');
  const [displayName, setDisplayName] = useState('');

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate('Login');
      })
      .catch((error) => Alert(error));
  };

  useEffect(() => {
    setDisplayName(firebase.auth().currentUser.displayName);
    setUID(firebase.auth().currentUser.uid);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello, {displayName}</Text>
      <Button color="#3740FE" title="Logout" onPress={() => signOut()} />
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
