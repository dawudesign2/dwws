import { StyleSheet, SafeAreaView, Text, View, TextInput } from "react-native";
export const Contact = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.slogan}>
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>@Dawudesign</Text>
        </Text>
        <Text style={styles.text}> The art of enhancing your projects</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>Phone: </Text>
          +336 000 000 47
        </Text>
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>Email: </Text>
          contact@dawudesign.fr
        </Text>
        <Text style={styles.text}>
          <Text style={{ fontWeight: "bold" }}>Web site: </Text>
          https://dawudesign.fr
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingBottom: 20,
  },
  slogan: {
    flexDirection: "column",
    margin: 20,
  },
  info: {
    flexDirection: "column",
    margin: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "normal",
  },
});
