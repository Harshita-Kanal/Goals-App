import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
// const [enteredGoal, setEnteredGoal] = useState('');
const [courseGoals, setCourseGoals] = useState([]);
const [isAddMode, setIsAddMode] = useState(false)


const addGoalHandler = goalTitle => {
  //console.log(enteredGoal);
  setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goalTitle}]);
  setIsAddMode(false);

}


const cancelGoalAdditionHander = () => {
    setIsAddMode(false);
};


const removeGoalHandler = goalId => {
  setCourseGoals(
    currentGoals => {
        return currentGoals.filter((goal) => goal.key !== goalId);
    });
}


  return (
    <ScrollView style = {{ padding : 50}} >
      <Button title = "add new goal" onPress = {() => setIsAddMode(true)}/>
     <GoalInput  visible = {isAddMode}  onAddGoal = {addGoalHandler} onCancel = {cancelGoalAdditionHander}/>
     <FlatList data = {courseGoals} 
     renderItem = {itemData => <GoalItem id = {itemData.item.key} onDelete = {removeGoalHandler}  title = {itemData.item.value}/>}
       />
    </ScrollView>
  );

}

