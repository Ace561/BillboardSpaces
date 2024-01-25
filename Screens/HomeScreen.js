import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                <View style={styles.rectangle1}>
                    <TouchableOpacity>
                        <Image style={{ width: 40, height: 40, borderRadius: 100 }} source={require("../assets/profilePicture.jpeg")} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 22, marginLeft: 5 }}>Welcome,</Text>
                    <TouchableOpacity style={{ marginLeft: '50%' }}>
                        <MaterialIcons name="notifications-none" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.adsContainer}>
                    <Image style={styles.ads} source={require("../assets/ad1.png")} />
                </View>
                <Text style={styles.newlyAdded}>Newly Added</Text>
                <View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.newlyAddedScroll}>
                        <View style={styles.img}>
                            <Image resizeMode="cover" source={require("../assets/Rectangle13.png")} style={styles.rectangleIcon} />
                            <TouchableOpacity onPress={() => navigation.navigate("Billboardclicked")} >
                                <Text>
                                    Aba road, Enugu Estate Road
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.img}>
                            <Image resizeMode="cover" source={require("../assets/Rectangle13.png")} style={styles.rectangleIcon} />
                            <TouchableOpacity>
                                <Text>
                                    Aba road, Enugu Estate Road
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.img}>
                            <Image resizeMode="cover" source={require("../assets/Rectangle13.png")} style={styles.rectangleIcon} />
                            <TouchableOpacity>
                                <Text>
                                    Aba road, Enugu Estate Road
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.discover}>

                </View>
                <View style={styles.discover}>

</View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    rectangle1: {
        width: 342,
        height: 40,
        // backgroundColor: "blue",
        alignSelf: 'center',
        marginTop: '5%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    ads: {
        width: 343
    },
    adsContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    newlyAdded: {
        fontSize: 22,
        fontWeight: "500",
        color: "#1e1e1e",
        marginLeft: 25,
        marginTop: 20
    },
    newlyAddedScroll: {
        // flexDirection: "row",
        width: "100%",
        // backgroundColor: 'red',
        height: 175,
        marginLeft: 20,

    },
    rectangleIcon: {
        borderRadius: 10,
        // flex: 1,
        width: "100%",
        // height: 146,
    },
    img: {
        padding: 5
    },
    discover: {
        width: 344,
        height: 335,
        marginLeft: 25,
        backgroundColor: 'blue'
    }
})