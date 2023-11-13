import React, { useState }  from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function App() {

  const [tasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (taskText) => {
    if (!tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask}/>
    </SafeAreaView>
  );
}
