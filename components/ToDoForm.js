import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Text,
  StatusBar,
} from "react-native";

export default function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = React.useState("");

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : {},
        ]}
        onPress={() => {
          addTask(taskText);
          setTaskText("");
        }}
      >
        <Text>Add</Text>
      </Pressable>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
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
});
