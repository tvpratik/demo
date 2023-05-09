/* eslint-disable prettier/prettier */
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import auth from '@react-native-firebase/auth';

function Register(): JSX.Element {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');

  function handleSubmitPress(): void {
    setErrortext('');
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    console.log('user email ', userEmail);
    console.log('user password ', userPassword);
    console.log('user userName ', userName);
    auth()
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then(result => {
        if (result) {
          console.log('result', result);
          auth()
            .currentUser.updateProfile({
              displayName: userName,
            })
            .then(() => {
              alert('success');
              console.log('update profile');
            })
            .catch(error => {
              alert(error);
              console.error(error);
            });
        }
      })
      .catch((error: any) => {
        console.log('error ===>>', error);
        setErrortext(error.message);
      });
  }

  return (
    <View style={styles.container}>
      <Text> Register Your account </Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Name"
        onChangeText={UserName => setUserName(UserName)}
        autoCapitalize="none"
        keyboardType="default"
        underlineColorAndroid="transparent"
        placeholderTextColor="#949494"
        returnKeyType="next"
        blurOnSubmit={false}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        onChangeText={UserEmail => setUserEmail(UserEmail)}
        autoCapitalize="none"
        keyboardType="email-address"
        underlineColorAndroid="transparent"
        placeholderTextColor="#949494"
        returnKeyType="next"
        blurOnSubmit={false}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        onChangeText={UserPassword => setUserPassword(UserPassword)}
        onSubmitEditing={Keyboard.dismiss}
        blurOnSubmit={false}
        secureTextEntry={true}
        returnKeyType="next"
        placeholderTextColor="#949494"
        keyboardType="visible-password"
        underlineColorAndroid="transparent"
        maxLength={15}
      />
      {errortext != '' ? (
        <Text style={styles.errorTextStyle}> {errortext} </Text>
      ) : null}

      <TouchableOpacity
        style={styles.singupButton}
        activeOpacity={0.5}
        onPress={handleSubmitPress}>
        <Text style={styles.singupText}>sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Already Registered? </Text>
        <Text style={styles.RegBtnText}>Click here to login</Text>
      </TouchableOpacity>
    </View>
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
  singupButton: {
    backgroundColor: '#111111',
    width: 340,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '700',
    marginTop: 30,
    marginBottom: 50,
    borderRadius: 15,
    borderBottomWidth: 1,
  },
  singupText: {
    fontFamily: 'RedHatDisplay-VariableFont_wght',
    fontWeight: '700',
    fontSize: 14,
    color: 'white',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    height: 45,
    width: '90%',
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'circular-medium',
  },
  btnText: {
    color: '#111111',
  },
  RegBtnText: {
    textDecorationLine: 'underline',
    color: '#97B6C2',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
export default Register;

