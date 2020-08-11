import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
const [enteredGoal, setEnteredGoal] = useState('');
const [courseGoals, setCourseGoals] = useState([]);
const goalInputHandler = (enteredText) => {
  setEnteredGoal(enteredText);
}

const addGoalHandler = () => {
  console.log(enteredGoal);
  setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
}


  return (
    <ScrollView style = {{ padding : 50, justifyContent: 'center'}}>
     <View>
      <TextInput style = {{
                           borderColor: 'black',
                           borderRadius: 10,
                           borderWidth: 1,
                           padding: 20,
                           fontFamily: 'Montserrat',
                           marginBottom: 10,
                           fontSize: 30
                            }}
                  placeholder = "Write a goal"
                  onChangeText = {goalInputHandler}
                  value = {enteredGoal}
                  />
      <Button title = "Add Goal" padding = "20px" style = {{ borderRadius: 10 }} onPress = {addGoalHandler}/>
     </View> 
     <ScrollView>
        {courseGoals.map((goal) =>
         <View style={styles.listItem} key={goal}>
           <Text>{goal}</Text>
        </View>)}
     </ScrollView>
    </ScrollView>
  );

}
const styles = StyleSheet.create({
  listItem: {
    fontFamily: 'Montserrat',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: 'pink'
  }
});

