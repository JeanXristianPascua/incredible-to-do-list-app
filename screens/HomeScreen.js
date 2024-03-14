import React, { useState } from "react";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import MainLayout from "../layouts/MainLayout";

export default function HomeScreen() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTask = (taskText) => {
    if (taskText && !tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    }
  };

  const onRemoveTask = (index) => {
    setTasks((currentTasks) => currentTasks.filter((_, i) => i !== index));
  };

  const startEditTask = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index]);
  };

  const cancelEditTask = () => {
    setEditingIndex(null);
    setEditingText("");
  };

  const saveEditTask = () => {
    if (editingText && !tasks.includes(editingText)) {
      const newTasks = [...tasks];
      newTasks[editingIndex] = editingText;
      setTasks(newTasks);
    }
    cancelEditTask();
  };

  return (
    <MainLayout>
      <ToDoList
        tasks={tasks}
        onRemoveTask={onRemoveTask}
        onEditTask={startEditTask}
        editingIndex={editingIndex}
        editingText={editingText}
        setEditingText={setEditingText}
        saveEditTask={saveEditTask}
        cancelEditTask={cancelEditTask}
      />
      <ToDoForm addTask={addTask} />
    </MainLayout>
  );
}
