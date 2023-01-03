import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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


 /*  const pressHandler = (id) => {
    setPeople((prevState) => {
      return prevState.filter(person => person.id != id)
    })
  } */

  return (
    <View style={styles.container}>
      
      <Header />

      <View style={styles.content}>
        <View style={styles.List}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={todos} 
            renderItem={({ item }) => (
              <TodoItem item={item} />
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
