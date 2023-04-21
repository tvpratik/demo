/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
export const logo = require('./../../../assets/logo.png');
export const googleIcon = require('./../../../assets/Google.png');
export const facebookIcon = require('./../../../assets/facebook.png');
export const shapeOne = require('./../../../assets/shapeOne.png');
export const shapeTwo = require('./../../../assets/shapeTwo.png');

function Demo(): JSX.Element {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.center}>
          <Image style={styles.shapeTwo} source={shapeTwo} />

          <Image style={styles.shapeOne} source={shapeOne} />

          <Image source={logo} style={styles.logo} />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Adresse Courriel"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Mot de passe"
              keyboardType="visible-password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
            />
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.btnText}>j'ai oublie mom mot de please</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}>
            <Text style={styles.loginText}>Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btniconText}>
            <Image source={googleIcon} style={styles.imgIcon} />
            <Text style={styles.btnText}>Se connecter avec Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btniconText}>
            <Image source={facebookIcon} style={styles.imgIcon} />
            <Text style={styles.btnText}>Se connecter avec Facebook</Text>
          </TouchableOpacity>
          <Text style={[styles.btnText]}> creer un compte </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    height: '100%',
  },
  shapeOne: {
    position: 'absolute',
    right: '25%',
  },
  shapeTwo: {
    position: 'absolute',
    bottom: 0,
    // zIndex: 1,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: 'contain',
    marginTop: 60,
    alignSelf: 'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderBottomWidth: 1,
    width: '90%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputs: {
    height: 45,
    textAlign: 'center',
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  btnText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'blue',
    width: 360,
    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
    marginBottom: 60,
  },
  loginText: {
    color: 'white',
  },
  imgIcon: {
    height: 25,
    width: 25,
    marginHorizontal: 10,
  },
  btniconText: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    height: 45,
    width: '90%',
    borderRadius: 10,
    marginBottom: 15,
  },
});

export default Demo;
