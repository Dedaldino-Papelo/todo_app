import { useState } from 'react';
import { FlatList, StyleSheet, View, Alert } from 'react-native';
import { AddTodos } from './components/AddTodos';
import { Header } from './components/Header';
import { TodoItem } from './components/TodoItem';


export default function App() {
  const [todos, setTodos] = useState([
    { name: "John Doee", id: 1 },
    { name: "Leanne Graham", id: 2 },
    { name: "Ervin Howell", id: 3 },
    { name: "Clementine Bauch", id: 5 },
    { name: "Patricia Lebsack", id: 6 },
    { name: "Chelsey Dietrich", id: 7 },
    { name: "Mrs. Dennis Schulis", id: 8 }
  ])


  const pressHandler = (id) => {
    setTodos((prevState) => {
      return prevState.filter(person => person.id != id)
    })
  }

  const SubmitHandler = (text) => {
    if(text !== ''){
      setTodos((prevState) => {
        return [
          {name: text.trim(), id:Math.random()},
          ...prevState,
        ]
      })
    } else {
      Alert.alert('Oops','You need to add a todo', [
        {text: 'Back', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
    <View style={styles.container}>
      
      <Header />

      <View style={styles.content}>
        <AddTodos SubmitHandler={SubmitHandler}  />
        <View style={styles.List}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={todos} 
            renderItem={({ item }) => (
              <TodoItem 
              item={item} 
              pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  content: {
    padding: 40
  }
});
