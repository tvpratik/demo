/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    // flex: 1,
    // height: '100%',
    alignItems: 'center',
  },
  mainBox: {
    width: '100%',
    height: 265,
  },
  parentBoxOne: {
    height: 220,
    backgroundColor: '#01658C',
  },
  parentBoxTwo: {
    height: 44,
    backgroundColor: '#97B6C2',
  },
  Frame10: {position: 'absolute', bottom: 120, left: 0},
  Frame9: {position: 'absolute', bottom: 0, right: 0},
  shape: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    width: 197,
    height: 239,
  },
  logo: {
    width: 158,
    height: 60,
    resizeMode: 'contain',
    marginVertical: 60,
    alignSelf: 'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderBottomWidth: 1,
    // width: 238,
    marginHorizontal: 35,
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
    width: 238,
    height: 45,
    fontSize: 12,
    textAlign: 'center',
    borderBottomColor: '#FFFFFF',
    flex: 1,
    fontFamily: 'RedHatDisplay-Variable500',
  },
  resetbtn: {
    textDecorationLine: 'underline',
    fontFamily: 'circular-medium',
    fontSize: 13,
    fontWeight: '500',
  },
  btnText: {
    color: '#111111',
  },
  RegBtnText: {
    textDecorationLine: 'underline',
    color: '#97B6C2',
  },
  loginButton: {
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
  loginText: {
    fontFamily: 'RedHatDisplay-VariableFont_wght',
    fontWeight: '700',
    fontSize: 14,
    color: 'white',
  },
  imgIcon: {
    height: 25,
    width: 25,
    marginHorizontal: 10,
  },
  btniconText: {
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
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
