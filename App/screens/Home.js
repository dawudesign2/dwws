import { useState } from "react";
import { StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";
import { Task } from "../components/shared/Task";
import { AddTask } from "../components/shared/Add";
import { v4 as uuid } from "uuid";
export const Home = () => {
  const [tasks, setTasks] = useState([]);
  //Add task
  const addTask = (title) => {
    const newTask = {
      id: uuid,
      title,
      completed: false,
    };
    if (title === "") {
      alert("Please enter a task");
    } else {
      setTasks([...tasks, newTask]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const taskCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  };

  return (
    <SafeAreaView>
      <AddTask addTask={addTask} />
      <View style={styles.countTask}>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 20 }}>
          {tasks.length > 0 &&
          tasks.filter((task) => task.completed === false).length > 0
            ? ` Task (${
                tasks.filter((task) => task.completed === false).length
              })`
            : "No Task"}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 20 }}>
          {tasks.length > 0 &&
          tasks.filter((task) => task.completed === true).length > 0
            ? ` Completed (${
                tasks.filter((task) => task.completed === true).length
              })`
            : "No Completed Task"}
        </Text>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View>
            <Task
              task={item}
              deleteTask={deleteTask}
              taskCompleted={taskCompleted}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  countTask: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
