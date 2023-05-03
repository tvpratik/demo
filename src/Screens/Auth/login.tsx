/* eslint-disable prettier/prettier */
import React, {useState, createRef} from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {TesLogo} from '../../../assets';
import {Styles} from './styles';
export const girlsImg = require('../../../assets/girls.png');
export const Frame9 = require('../../../assets/Frame9.png');
export const Frame10 = require('../../../assets/Frame10.png');
// import firebase from '../../../database/firebase';
import auth from '@react-native-firebase/auth';

// export const tesLogo = require('../../../assets/tesLogo.svg');
function Login(): JSX.Element {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
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
    auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(user => {
        console.log(user);
        alert('success');
        // If server response message same as Data Matched
      })
      .catch((error: any) => {
        console.log(error);
        if (error.code === 'auth/invalid-email') setErrortext(error.message);
        else if (error.code === 'auth/user-not-found')
          setErrortext('No User Found');
        else {
          setErrortext('Please check your email id or password');
        }
      });
  };

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView contentContainerStyle={Styles.center}>
        <Image style={Styles.Frame9} source={Frame9} />

        <Image style={Styles.Frame10} source={Frame10} />

        <View style={Styles.mainBox}>
          <View style={Styles.parentBoxOne} />
          <View style={Styles.parentBoxTwo} />
          <Image style={Styles.shape} source={girlsImg} />
        </View>
        <TesLogo style={Styles.logo} />

        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.inputs}
            onChangeText={UserEmail => setUserEmail(UserEmail)}
            autoCapitalize="none"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            placeholderTextColor="#949494"
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
          />
        </View>
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.inputs}
            onChangeText={UserPassword => setUserPassword(UserPassword)}
            ref={passwordInputRef}
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
            placeholderTextColor="#949494"
            placeholder="Password"
            keyboardType="visible-password"
            underlineColorAndroid="transparent"
          />
        </View>
        {errortext != '' ? (
          <Text style={Styles.errorTextStyle}> {errortext} </Text>
        ) : null}
        <TouchableOpacity
          style={Styles.loginButton}
          activeOpacity={0.5}
          onPress={handleSubmitPress}>
          <Text style={Styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[Styles.btnText, Styles.resetbtn]}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.btniconText}>
          <Text style={Styles.btnText}>Don’t have an account? </Text>
          <Text style={Styles.RegBtnText}>Register Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
function alert(arg0: string) {
  alert(arg0);
}
