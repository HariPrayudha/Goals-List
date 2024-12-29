import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function Goalitem(props) {
  return (
    <View style={styles.goalItem}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Goalitem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 10,
    backgroundColor: "#5cb85c",
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  goalText: {
    color: "#fff",
    fontSize: 16,
  },
});