/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useRef} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';

const InputRef = () => {
  const [input, setInput] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const inputRef = useRef<typeof TextInput | null>(null);
  const pressed = () => {
    const current: any = inputRef.current;
    current.clear();
  };
  //ComponentDidMount
  useEffect(() => {
    setPlaceholder('your name please');
    console.log(input);
  }, [input]);

  return (
    <View style={{flex: 1}}>
      <TextInput
        ref={inputRef}
        style={{height: 50, borderColor: 'red', borderWidth: 1}}
        onChangeText={text => setInput(text)}
        placeholder={placeholder}
        value={input}
      />
      <Pressable onPress={pressed}>
        <Text>Clear it!</Text>
      </Pressable>
    </View>
  );
};

export default InputRef;
