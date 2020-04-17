import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import firebase from '../database/firebaseDb';

function RegisterView({navigation}) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const registerUser = () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to signup!');
    } else {
      setLoading(true);

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          res.user.updateProfile({
            displayName: displayName,
          });
          console.log('User registered successfully!');
          setLoading(false);
          setDisplayName('');
          setEmail('');
          setPassword('');
          navigation.navigate('Login');
        })
        .catch((error) => console.log(error));
    }

    console.log(displayName);
    console.log(email);
    console.log(password);
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator color={'primary'} />
      ) : (
        <View style={styles.container}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Name"
            value={displayName}
            onChangeText={(val) => setDisplayName(val)}
          />
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
            maxLength={15}
            secureTextEntry={true}
          />
          <Button
            color="#3740FE"
            title="Signup"
            onPress={() => registerUser()}
          />
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate('Login')}>
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

export default RegisterView;
