import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

export const TodoItem = ({ item,pressHandler }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => pressHandler(item.id)}>
        <View style={styles.item}>
          <Text>{item.name}</Text>
          <AntDesign name='delete' size={25} color='#f05137' />
        </View>
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
        fontSize: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

