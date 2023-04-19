/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {TesLogo} from '../../../assets';
import 'react-native-gesture-handler';
import {Styles} from './styles';
export const girlsImg = require('../../../assets/girls.png');
export const Frame9 = require('../../../assets/Frame9.png');
export const Frame10 = require('../../../assets/Frame10.png');
// export const tesLogo = require('../../../assets/tesLogo.svg');
function Login(): JSX.Element {
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
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            placeholderTextColor="#949494"
          />
        </View>
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.inputs}
            placeholderTextColor="#949494"
            placeholder="Password"
            keyboardType="visible-password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity style={Styles.loginButton}>
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
