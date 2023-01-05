import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const TodoItem = ({ item,pressHandler }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => pressHandler(item.id)}>
        <Text style={styles.item}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderColor: '#e3dddc',
        borderWidth: 1,
        marginTop: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        fontSize: 16
    }
})

