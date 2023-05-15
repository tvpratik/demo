/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';

export default AddInputTask = props => {
  const [DataList, AddTasks] = useState();

  const handleAddTask = value => {
    props.addTask(value);
    AddTasks(null);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TextInput
        style={styles.inputField}
        value={DataList}
        onChangeText={text => AddTasks(text)}
        placeholder={'Write a task'}
        placeholderTextColor={'#fff'}
      />
      <TouchableOpacity onPress={() => handleAddTask(DataList)}>
        <IconAnt name="checksquare" size={30} color={'#fff'} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    backgroundColor: '#3E3364',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 20,
  },
  inputField: {
    color: '#fff',
    height: 50,
    flex: 1,
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
