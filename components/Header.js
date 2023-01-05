import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Header = () => {
  return (
    <View style={styles.header}>
        <Text style={styles.text}>My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f05137',
        padding: 18
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

