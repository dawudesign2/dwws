
import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add Task"
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
      <View style={styles.buttonColor}>
        <Button
          title="Add"
          color="#fff"
          onPress={() => {
            addTask(title);
            setTitle("");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    padding: 10,
  },
  buttonColor: {
    backgroundColor: "#333",
    borderRadius: 5,
  },
});
