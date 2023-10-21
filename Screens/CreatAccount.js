import { StyleSheet, Text, View, StatusBar} from 'react-native'
import React from 'react'

export default function CreatAccount() {
  // StatusBar.setBackgroundColor('red');

  return (
    <View style={styles.container}>
      <Text>CreatAccount</Text>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"blue"
}
})