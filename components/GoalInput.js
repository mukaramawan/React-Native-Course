import { useState } from "react";
import { TextInput, View, Button, StyleSheet } from "react-native";

function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function inputHandeler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandeler() {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter a Task"
        onChangeText={inputHandeler}
        value={enteredGoal}
      />

      <Button title="Tap Me" onPress={addGoalHandeler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "grey",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});
