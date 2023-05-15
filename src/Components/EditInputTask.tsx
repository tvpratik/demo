/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';

export default EditInputTask = (props: any) => {
  const [editList, setEditList] = useState(null);

  const handleAddTask = (value: string = '', index: any) => {
    props.editTask(value, index);
    setEditList(null);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TextInput
        style={styles.inputField}
        defaultValue={props.editList.item}
        value={editList?.item}
        onChangeText={text => setEditList(text)}
        placeholder={'Write a task'}
        placeholderTextColor={'#fff'}
      />
      <TouchableOpacity
        onPress={() => handleAddTask(editList, props.editList.index)}>
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
