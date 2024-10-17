import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  const [modalIsVisible, setmodalIsVisible] = useState(false);

  function startAddGoalHandeler() {
    setmodalIsVisible(true);
  }

  function endAddGoalHandeler() {
    setmodalIsVisible(false);
  }

  function addGoalHandeler(enteredGoal) {
    setGoals((currentCourseGoals) => [
      ...goals,
      { text: enteredGoal, ID: Math.random().toString() },
    ]);
    endAddGoalHandeler();
  }

  function deleteHandeler(id) {
    setGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.ID !== id);
    });
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button
        title="Add a New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandeler}
      />

      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandeler}
        onCancel={endAddGoalHandeler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                ID={itemData.item.ID}
                text={itemData.item.text}
                onDelete={deleteHandeler}
              />
            );
          }}
          KeyExtractor={(item, index) => {
            return item.ID;
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    
  },

  goalsContainer: {
    flex: 5,
  },
});
