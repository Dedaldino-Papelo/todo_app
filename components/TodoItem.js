import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const TodoItem = ({ item }) => {
  return (
    <View>
        <Text style={styles.item}>{item.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderColor: '#111',
        borderWidth: 1,
        marginTop: 16,
        borderStyle: 'solid',
        borderRadius: 5,
        fontSize: 16
    }
})

