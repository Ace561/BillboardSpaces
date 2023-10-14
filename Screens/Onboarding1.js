import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const Onboarding1 = ({ navigation }) => {
  const onNextPress = () => {
    navigation.navigate('Onboarding2');
  };

  return (
    <ImageBackground style={styles.onboarding1Icon} resizeMode="cover" source={require("../assets/onboarding1.png")}>
      <View style={styles.frameParent}>
        <Text style={styles.welcomeToBillboard1}>{`    Welcome to
Billboard Spaces`}</Text>
        <Text style={styles.streamlineYourOutdoor1}>{`     Streamline your outdoor advertising
operations to be more efficient, profitable,
                        and accessible`}</Text>

        <View style={styles.rectangleParent}>
          <Image style={styles.frameChild} source={require("../assets/rectangle1.png")} />
          <Image style={styles.frameItem} source={require("../assets/rectangle2.png")} />
          <Image style={styles.frameItem} source={require("../assets/rectangle3.png")} />
          <Image style={styles.frameItem} source={require("../assets/rectangle4.png")} />
        </View>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={onNextPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  onboarding1Icon: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: "100%"
    },
  frameParent: {
    marginLeft: -160.5,
    top: 458,
    alignItems: "center",
    left: "50%",
    justifyContent: "center",
    position: "absolute",
  },
  welcomeToBillboard1: {
    fontSize: 34,
    fontWeight: "500",
    color: "#fff",
  },
  streamlineYourOutdoor1: {
    fontSize: 16,
    color: "#fff",
    paddingTop: 16
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: "#0080fe",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    height: 40
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
    textAlign: "left"
  },
  rectangleParent: {
    marginTop: 48,
    flexDirection: "row"
  },
  frameChild: {
    width: 27,
    borderRadius: 10,
    backgroundColor: "#0080fe"
  },
  frameItem: {
    backgroundColor: "#fff",
    width: 15,
    marginLeft: 8,
    borderRadius: 10
  },
});

export default Onboarding1;
