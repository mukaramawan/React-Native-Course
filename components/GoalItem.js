import { Text, View, Pressable, StyleSheet } from 'react-native'

function GoalItem (props) {
    return (
    <Pressable onPress={props.onDelete.bind(this, props.ID)}>
      <View style={styles.goalItem}>
      <Text style={styles.gaolText}>{props.text}</Text>
    </View>
    </Pressable>
    );
}

export default GoalItem

const styles = StyleSheet.create({
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