/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Keyboard, ScrollView, StyleSheet, Text, View} from 'react-native';
import AddInputTask from '../Components/AddInputTask';
import ListTask from '../Components/ListTask';
import EditInputTask from '../Components/EditInputTask';

export default function TodoList() {
  const [dataList, setAddTasks] = useState([]);
  const [editList, setEditList] = useState([]);
  const [edited, setEditedCheck] = useState(false);

  const addTask = (items: any) => {
    console.log('ADD task === ', items);
    if (items == null) return;
    setAddTasks([...dataList, items]);
    Keyboard.dismiss();
    setEditedCheck(false);
  };

  const deleteTask = (removeIndex: any) => {
    setAddTasks(dataList.filter((value, index) => index != removeIndex));
    setEditedCheck(false);
  };
  const editTask = (items: any, index: any) => {
    console.log('edittask ==>> ', items, index);
    setEditedCheck(true);
    setEditList({item: items, index: index});
    if (edited == true) {
      dataList[index] = items;
      console.log('items ', dataList);
      setEditedCheck(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView style={styles.scrollView}>
        {dataList.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <ListTask
                index={index + 1}
                task={task}
                deleteTask={() => deleteTask(index)}
                editTask={() => editTask(task, index)}
              />
            </View>
          );
        })}
      </ScrollView>
      {edited ? (
        <EditInputTask editTask={editTask} editList={editList} />
      ) : (
        <AddInputTask addTask={addTask} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
});
