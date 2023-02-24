import { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export const Task = ({ task, deleteTask , taskCompleted }) => {


  const _deleteTask = (id) => {
    deleteTask(id);
  };

  const _taskCompleted = (id) => {
    taskCompleted(id);
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          _taskCompleted(task.id);
        }}
      >
        <Image
          style={styles.img}
          source={
            task.completed
              ? require("../../../assets/checked.png")
              : require("../../../assets/unchecked.png")
          }
        />
      </Pressable>
      <View style={styles.tasks}>
        <Text style={[styles.text, task.completed && styles.checked]}>
          {task.title}
        </Text>
      </View>
      <Pressable
        onPress={() => {
          _deleteTask(task.id);
        }}
      >
        <Image
          style={styles.img}
          source={require("../../../assets/trash.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
  tasks: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 20,
  },
  img: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  checked: {
    textDecorationLine: "line-through",
    textDecorationColor: "#000",
    textDecorationStyle: "solid",
    fontWeight: "normal",
  },
});
