/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
class ClassComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Class Component</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#806B33',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
  },
});
export default ClassComponent;
