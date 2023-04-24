/* eslint-disable prettier/prettier */
import React, {useRef} from 'react';
import {StyleSheet, Pressable, FlatList, Text, View} from 'react-native';
interface Data {
  id: string;
  title: string;
}

const FlatListScroll = () => {
  const flatlistRef = useRef<FlatList<Data>>(null);
  const data: Data[] = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
      id: '4',
      title: 'Fourth Item',
    },
    {
      id: '5',
      title: 'Fifth Item',
    },
    {
      id: '6',
      title: 'Sixth Item',
    },
    {
      id: '7',
      title: 'Seventh Item',
    },
    {
      id: '8',
      title: 'Eighth Item',
    },
    {
      id: '9',
      title: 'Ninth Item',
    },
    {
      id: '10',
      title: 'Tenth Item',
    },
  ];

  const onPressFunction = () => {
    flatlistRef.current?.scrollToEnd();
  };
  return (
    <View style={styles.container}>
      <FlatList
        ref={flatlistRef}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text style={styles.title}>{item.title}</Text>}
      />
      <Pressable style={styles.button} onPress={onPressFunction}>
        <Text style={styles.arrow}>End</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 72,
  },
  button: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  arrow: {
    fontSize: 12,
  },
});

export default FlatListScroll;
