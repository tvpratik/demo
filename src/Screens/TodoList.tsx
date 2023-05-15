/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Keyboard, ScrollView, StyleSheet, Text, View} from 'react-native';
import AddInputTask from '../Components/AddInputTask';
import ListTask from '../Components/ListTask';
import EditInputTask from '../Components/EditInputTask';

export default function TodoList() {
  const [DataList, AddTasks] = useState([]);
  const [editList, setEditList] = useState([]);
  const [edited, EditedCheck] = useState(false);

  const addTask = (items: any) => {
    console.log('ADD task === ', items);
    if (items == null) return;
    AddTasks([...DataList, items]);
    Keyboard.dismiss();
    EditedCheck(false);
  };

  const deleteTask = (removeIndex: any) => {
    AddTasks(DataList.filter((value, index) => index != removeIndex));
    EditedCheck(false);
  };
  const editTask = (items: any, index: any) => {
    console.log('edittask ==>> ', items, index);
    EditedCheck(true);
    setEditList({item: items, index: index});
    if (edited == true) {
      DataList[index] = items;
      console.log('items ', DataList);
      EditedCheck(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView style={styles.scrollView}>
        {DataList.map((task, index) => {
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
