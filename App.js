// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SplashScreen = () => {

  return (
    <View style={styles.splashScreen}>
      <Image style={styles.groupIcon1} resizeMode="cover" source="Group.png" />
      <Image style={styles.eosIconsbubbleLoading1} resizeMode="cover" source="eos-icons:bubble-loading.png" />
      <View style={[styles.statusbarIphone13, styles.iconPosition]}>
        <Image style={[styles.notchIcon, styles.iconPosition]} resizeMode="cover" source="Notch.png" />
        <View style={[styles.leftSide, styles.leftSideLayout]}>
          <View style={[styles.statusbarTime, styles.leftSideLayout]}>
            <Text style={styles.text1}>9:41</Text>
          </View>
        </View>
        <Image style={[styles.rightSideIcon, styles.iconPosition]} resizeMode="cover" source="Right Side.png" />
      </View>
      <View style={[styles.vectorParent, styles.iconPosition]}>
        <Image style={styles.instanceChild} resizeMode="cover" source="Vector 2.png" />
        <Text style={styles.billboardSpaces}>{`Billboard
          					Spaces`}</Text>
      </View>
    </View>);
};

const styles = StyleSheet.create({
  iconPosition: {
    left: "50%",
    position: "absolute"
  },
  leftSideLayout: {
    height: 21,
    width: 54,
    left: "50%",
    position: "absolute"
  },
  groupIcon1: {
    height: "5.34%",
    width: "11.56%",
    top: "84.46%",
    right: "44.22%",
    bottom: "10.2%",
    left: "44.22%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden"
  },
  eosIconsbubbleLoading1: {
    top: 48,
    width: 24,
    height: 24,
    left: 0,
    position: "absolute",
    overflow: "hidden"
  },
  notchIcon: {
    marginLeft: -82,
    width: 164,
    height: 32,
    top: 0
  },
  text1: {
    top: 1,
    fontSize: 17,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
    color: "#010101",
    height: 20,
    textAlign: "center",
    width: 54,
    left: 0,
    position: "absolute"
  },
  statusbarTime: {
    marginLeft: -27,
    borderRadius: 24,
    top: 0
  },
  leftSide: {
    marginLeft: -168,
    top: 14
  },
  rightSideIcon: {
    marginLeft: 91,
    top: 8,
    width: 77,
    height: 24
  },
  statusbarIphone13: {
    marginLeft: -195.5,
    width: 390,
    height: 47,
    top: 0,
    overflow: "hidden"
  },
  instanceChild: {
    width: 96,
    height: 125
  },
  billboardSpaces: {
    fontSize: 36,
    fontFamily: "KronaOne-Regular",
    color: "#1e1e1e",
    marginTop: 48,
    textAlign: "center"
  },
  vectorParent: {
    marginTop: -131,
    marginLeft: -103.5,
    top: "50%",
    alignItems: "center",
    justifyContent: "center"
  },
  splashScreen: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden"
  }
});

export default SplashScreen;
