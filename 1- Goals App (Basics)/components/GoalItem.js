import { Text, View, Pressable, StyleSheet } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDelete.bind(this, props.ID)}
        //alternative to Android Ripple for ios
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.gaolText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: '0.5%',
  },
  gaolText: {
    padding: 8,
    color: "white",
  },
});
