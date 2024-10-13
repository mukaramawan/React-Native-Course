import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandeler(enteredGoal) {
    setGoals((currentCourseGoals) => [
      ...goals,
      { text: enteredGoal, ID: Math.random().toString() },
    ]);
  }

  function deleteHandeler(id) {
    setGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.ID !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandeler} />

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
