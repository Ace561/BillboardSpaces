import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity, ImageBackground } from 'react-native';

const Onboarding2 = ({ navigation }) => {
    const onNextPress = () => {
        navigation.navigate('Onboarding3');
    };

    return (
        <ImageBackground style={styles.onboarding1Icon} resizeMode="cover" source={require("../assets/onboarding2.png")}>
            <Pressable style={styles.vector} onPress={() => navigation.goBack()}>
                <Ionicons style={styles.icon} name="ios-arrow-back" size={35} color="black" />
            </Pressable>
            <View style={styles.frameParent}>
                <Text style={styles.exploreBillboardsNear1}>{`Explore Billboards
Near You`}</Text>
                <Text style={styles.streamlineYourOutdoor1}>{`Streamline your outdoor advertising
     operations to be more efficient,
          profitable, and accessible`}</Text>


                <View style={styles.rectangleParent}>
                    <Image style={styles.frameItem} source={require("../assets/rectangle2.png")} />
                    <Image style={styles.frameChild} source={require("../assets/rectangle1.png")} />
                    <Image style={styles.frameInner} source={require("../assets/rectangle3.png")} />
                    <Image style={styles.frameInner} source={require("../assets/rectangle4.png")} />
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
    vector: {
        left: "3.73%",
        top: "8.5%",
        right: "88.27%",
        bottom: "88.05%",
        width: "8%",
        height: "3.45%",
        position: "absolute"
    },
    icon: {
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
        overflow: "hidden",
        color: "#fff",
        width: "100%"
    },
    frameParent: {
        marginLeft: -145.5,
        top: 458,
        alignItems: "center",
        left: "50%",
        position: "absolute",
        justifyContent: "center",
    },
    exploreBillboardsNear1: {
        fontSize: 34,
        fontWeight: "500",
        color: "#fff",
        textAlign: "center"
    },
    streamlineYourOutdoor1: {
        fontSize: 16,
        color: "#fff",
        marginTop: 16
    },
    rectangleParent: {
        marginTop: 48,
        flexDirection: "row"
    },
    frameChild: {
        width: 27,
        borderRadius: 10,
        marginLeft: 8,
        backgroundColor: "#0080fe"
    },
    frameItem: {
        width: 15,
        borderRadius: 10,
        backgroundColor: "#fff"
    },
    frameInner: {
        width: 15,
        borderRadius: 10,
        backgroundColor: "#fff",
        marginLeft: 8
    },
});

export default Onboarding2;
