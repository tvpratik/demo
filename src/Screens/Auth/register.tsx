/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Register(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text> Singup Page </Text>
      <TextInput style={styles.inputStyle} placeholder="Name" />
      <TextInput style={styles.inputStyle} placeholder="Email" />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        maxLength={15}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.singupButton} activeOpacity={0.5}>
        <Text style={styles.singupText}>Login</Text>
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
});
export default Register;
