// TodoList.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((item) => item.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Todo List</Text>
      <TextInput
        placeholder="Enter task"
        value={task}
        onChangeText={(text) => setTask(text)}
        style={{
          marginBottom: 16,
          padding: 8,
          borderColor: "#ccc",
          borderWidth: 1,
        }}
      />
      <Button title="Add Task" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => toggleTask(item.id)}
            onLongPress={() => deleteTask(item.id)}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 8,
              }}
            >
              <Text style={{ fontSize: 18, marginRight: 8 }}>
                {item.completed ? "✅" : "🔲"}
              </Text>
              <Text style={{ fontSize: 18 }}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TodoList;
