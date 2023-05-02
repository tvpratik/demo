/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {FlatList, View, Text} from 'react-native';

export default function CoffeeAutonomous() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot');
    const data = await resp.json();
    console.log('data = >', data);
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = (item: any) => {
    return <Text>{item.title}</Text>;
  };

  return (
    <View style={{flex: 1}}>
      {loading && <Text>Loading..</Text>}
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id.toString()}
        />
      )}
    </View>
  );
}
