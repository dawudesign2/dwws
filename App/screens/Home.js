import { StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";
import { Task } from "../components/shared/Task";
import { AddTask } from "../components/shared/Add";
import { useDispatch, useSelector } from "react-redux";
import { addTaskReducer } from "../redux/reducers/TaskList";
import { getTasks } from "../redux/selectors/selector";
export const Home = () => {
  const tasks = useSelector(getTasks);

  const dispatch = useDispatch();
  //Add task
  const addTask = (title) => {
    if (title === "") return;
    dispatch(addTaskReducer(title));
  };

  const taskCount = tasks.length;
  const CompletedCount = tasks.filter((task) => task.completed === true);

  return (
    <SafeAreaView>
      <AddTask addTask={addTask} />
      <View style={styles.countTask}>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 20 }}>
          {taskCount > 0 && CompletedCount.length > 0
            ? taskCount - CompletedCount.length
            : taskCount}
          {taskCount > 1 ? " Tasks" : " Task"}
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 20 }}>
          {CompletedCount.length > 0 ? CompletedCount.length : 0} Completed
        </Text>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View>
            <Task task={item} />
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
