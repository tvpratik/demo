/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk-next';

export default class FBLogin extends Component {
  loginWithFacebook = () => {
    console.log('on loginWithFacebook :-  >>> ');
    LoginManager.logInWithPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
          AccessToken.getCurrentAccessToken().then(data => {
            console.log(data.accessToken.toString());
            console.log('result-->', result);
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#111111',
            height: 47,
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '700',
            marginHorizontal: 50,
            marginVertical: 50,
            borderRadius: 15,
            borderBottomWidth: 1,
          }}
          onPress={this.loginWithFacebook}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 14,
              color: 'white',
            }}>
            FaceBook Login
          </Text>
        </TouchableOpacity>
        {/* <LoginButton
            onLoginFinished={(error, result) => {
              if (error) {
                console.log('login has error: ' + result.error);
              } else if (result.isCancelled) {
                console.log('login is cancelled.');
              } else {
                AccessToken.getCurrentAccessToken().then(data => {
                  console.log(data.accessToken.toString());
                });
              }
            }}
            onLogoutFinished={() => console.log('logout.')}
          /> */}
      </View>
    );
  }
}
