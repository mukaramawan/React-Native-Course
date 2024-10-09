import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);
  function inputHandeler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandeler() {
    setGoals((currentCourseGoals) => [...goals, {text: enteredGoal, ID: Math.random().toString()}]);
    console.log(goals);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter a Task"
          onChangeText={inputHandeler}
        />

        <Button title="Tap Me" onPress={addGoalHandeler} />
      </View>

      <View style={styles.goalsContainer}>
        {/* IOS & Android Styling Diffrences */}
        {/* {goals.map( (goal) => <Text key={goal} style = {styles.goalItem}>{goal}</Text> )}*/}

        {/* <ScrollView>
        {goals.map((goal) => (
          <View key={goal} style={styles.goalItem}>
            <Text style = {styles.gaolText}>{goal}</Text>
          </View>
        ))}
        </ScrollView> */}

        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.gaolText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          KeyExtractor={(item,index)=>{return item.ID}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  gaolText: {
    color: "white",
  },
});
