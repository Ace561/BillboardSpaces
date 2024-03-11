import { StyleSheet, Text, View, StatusBar} from 'react-native'
import React from 'react'

export default function More() {
  return (
    <View style={styles.container}>
      <Text>More</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
},

})