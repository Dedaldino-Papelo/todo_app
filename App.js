import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {
  const [people, setPeople] = useState([
    { name: "John Doee", id: 1 },
    { name: "Leanne Graham", id: 2 },
    { name: "Ervin Howell", id: 3 },
    { name: "Clementine Bauch", id: 5 },
    { name: "Patricia Lebsack", id: 6 },
    { name: "Chelsey Dietrich", id: 7 },
    { name: "Mrs. Dennis Schulis", id: 8 }
  ])


  const pressHandler = (id) => {
    setPeople((prevState) => {
      return prevState.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>
      
      
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id }
        data={people}
        renderItem = {({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    backgroundColor: '#848594',
    padding: 30,
    color: '#fff',
    marginTop: 40,
    fontSize: 24,
    marginHorizontal: 10,

  }
});
