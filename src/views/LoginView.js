import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

import firebase from '../database/firebaseDb';

function LoginView({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const userLogin = () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to sign in!');
    } else {
      setLoading(true);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log(res);
          console.log('User logged-in successfully!');
          setLoading(false);
          setEmail('');
          setPassword('');

          navigation.navigate('Home');
        })
        .catch((error) => Alert(error));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color={'primary'} />
      ) : (
        <View style={styles.container}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            value={email}
            onChangeText={(val) => setEmail(val)}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            value={password}
            onChangeText={(val) => setPassword(val)}
          />
          <Button color="#3740FE" title="Login" onPress={() => userLogin()} />
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate('Register')}>
            Already Registered? Click here to login
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#fff',
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: 'center',
    borderColor: '#ccc',
    borderBottomWidth: 1,
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default LoginView;
