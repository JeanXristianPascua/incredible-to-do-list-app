import React from 'react';
import { StyleSheet, Pressable, View, Text, StatusBar } from 'react-native';

export default function ToDoList({tasks}){
  if (!Array.isArray(tasks)) {
    // Render a fallback UI when tasks is not an array
    return <Text>No tasks available.</Text>;
  }

  return (
    <View>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
      <StatusBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});
