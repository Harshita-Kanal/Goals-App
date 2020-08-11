import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
// const [enteredGoal, setEnteredGoal] = useState('');
const [courseGoals, setCourseGoals] = useState([]);


const addGoalHandler = goalTitle => {
  //console.log(enteredGoal);
  setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goalTitle}])
}


const removeGoalHandler = goalId => {
  setCourseGoals(
    currentGoals => {
        return currentGoals.filter((goal) => goal.key !== goalId);
    });
}


  return (
    <ScrollView style = {{ padding : 50}}>
     <GoalInput onAddGoal = {addGoalHandler}/>
     <FlatList data = {courseGoals} 
     renderItem = {itemData => <GoalItem id = {itemData.item.key} onDelete = {removeGoalHandler}  title = {itemData.item.value}/>}
       />
    </ScrollView>
  );

}

