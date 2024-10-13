import { useState } from "react";
import { TextInput, View, Button, StyleSheet, Modal, Image } from "react-native";

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
    <Modal visible={props.visible} animationType = "slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          style={styles.TextInput}
          placeholder="Enter a Task"
          onChangeText={inputHandeler}
          value={enteredGoal}
        />

        <View style={styles.ButtonContainer}>
          <View style={styles.button}>
          <Button title="Cancel" onPress={props.onCancel} color='#f31282'/>
          </View>
          <View style={styles.button}>
          <Button title="Add Goal" onPress={addGoalHandeler} color="#5e0acc"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    width: "100%",
    marginRight: 8,
    padding: 16,
  },
  ButtonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
});
