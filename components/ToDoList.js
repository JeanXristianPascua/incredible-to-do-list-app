import React from "react";
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  StatusBar,
  TextInput,
} from "react-native";

export default function ToDoList({
  tasks,
  onRemoveTask,
  onEditTask,
  editingIndex,
  editingText,
  setEditingText,
  saveEditTask,
  cancelEditTask,
}) {
  return (
    <View>
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskContainer}>
          {editingIndex === index ? (
            <TextInput
              value={editingText}
              onChangeText={setEditingText}
              autoFocus={true}
              style={styles.input}
            />
          ) : (
            <Text style={styles.taskText}>{task}</Text>
          )}
          <View style={styles.buttonsContainer}>
            {editingIndex === index ? (
              <>
                <Pressable
                  onPress={saveEditTask}
                  style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : {},
                  ]}
                >
                  <Text>Save</Text>
                </Pressable>
                <Pressable
                  onPress={cancelEditTask}
                  style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : {},
                  ]}
                >
                  <Text>Cancel</Text>
                </Pressable>
              </>
            ) : (
              <>
                <Pressable
                  onPress={() => onEditTask(index)}
                  style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : {},
                  ]}
                >
                  <Text>Edit</Text>
                </Pressable>
                <Pressable
                  onPress={() => onRemoveTask(index)}
                  style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : {},
                  ]}
                >
                  <Text>Remove</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      ))}
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    marginLeft: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 4,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  taskText: {
    fontSize: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
});
