import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

export default function AddBillboard() {
  return (
    <SafeAreaView  style={styles.container}>
      <Text>AddBillboard</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
},
})