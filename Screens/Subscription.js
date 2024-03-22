import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, SafeAreaView, Image, StatusBar, Pressable, TouchableOpacity, TouchableWithoutFeedback, Modal, KeyboardAvoidingView } from 'react-native'


export default function Subscription({ navigation }) {
    const [showBillboardDetails, setShowBillboardDetails] = useState(false);
    const [showAdDetails, setShowAdDetails] = useState(true);
    const [activeButton, setActiveButton] = useState('ad');
    const [activeText, setActiveText] = useState('ad');

    const toggleAdDetails = () => {
        setShowAdDetails(true);
        setShowBillboardDetails(false); // Hide Billboard details when Ad details are shown
        setActiveButton('ad'); // Set active button state to 'ad' when Ad button is pressed
        setActiveText('ad')
    };

    const toggleBillboardDetails = () => {
        setShowBillboardDetails(true);
        setShowAdDetails(false); // Hide Ad details when Billboard details are shown
        setActiveButton('billboard'); // Set active button state to 'billboard' when Billboard button is pressed
        setActiveText('billboard')
    };




    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {showAdDetails && (
                    <View>
                        <Image style={{ width: '55%', height: 133.38, alignSelf: 'center' }} source={require('/Billboard Spaces/BillboardSpaces/assets/sub.png')} />

                        <View style={{ marginTop: 20, width: '100%', height: 54 }}>
                            <Text style={{ fontWeight: '400', fontSize: 22, alignSelf: 'center' }}>
                                Unlock Premium Features with a Subscription
                            </Text>
                        </View>

                        <Image style={{ width: 333, marginTop: 30, height: 213, alignSelf: 'center' }} source={require('/Billboard Spaces/BillboardSpaces/assets/sub2.png')} />

                    </View>
                )}

                {showBillboardDetails && (
                    <View>
                        <Image style={{ width: '40%', height: 133.38, alignSelf: 'center' }} source={require('/Billboard Spaces/BillboardSpaces/assets/sub3.png')} />

                        <View style={{ marginTop: 20, width: '100%', height: 54 }}>
                            <Text style={{ fontWeight: '400', fontSize: 22, alignSelf: 'center' }}>
                                Unlock Premium Features with a Subscription
                            </Text>
                        </View>

                        <Image style={{ width: 333, marginTop: 30, height: 213, alignSelf: 'center' }} source={require('/Billboard Spaces/BillboardSpaces/assets/sub2.png')} />

                    </View>
                )}


                <View style={{ flexDirection: 'row', marginTop: 50 }}>
                    <TouchableOpacity onPress={toggleAdDetails} style={[styles.buttonParent, activeButton === 'ad' ? styles.activeButton : null]}>
                        <Text style={[styles.button, activeText === 'ad' ? styles.activeText : null]}>Basic Plan</Text>
                        <Text style={[styles.button, activeText === 'billboard' ? styles.activeText : null]}>$100/month</Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleBillboardDetails} style={[styles.buttonParent2, activeButton === 'billboard' ? styles.activeButton : null]}>
                        <Text style={[styles.button, activeText === 'billboard' ? styles.activeText : null]}>Pro Plan</Text>
                        <Text style={[styles.button, activeText === 'billboard' ? styles.activeText : null]}>$500/month</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ marginTop: 50, width: "100%", height: 40, backgroundColor: '#0080FE', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: '#FFFFFF', fontWeight: '500', fontSize: 14, alignSelf: 'center' }}>Subscribe</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: 'center',
    },
    buttonParent: {
        borderRadius: 10,
        width: "40%",
        height: 92,
        padding: 10,
        marginLeft: 16,
        backgroundColor: '#66B3FF33',
        justifyContent: 'space-between'
    },
    buttonParent2: {
        borderRadius: 10,
        width: "40%",
        height: 92,
        padding: 10,
        marginLeft: 16,
        borderStyle: "solid",
        backgroundColor: '#66B3FF33',
        justifyContent: 'space-between'


    },
    button: {
        fontSize: 16,
        fontWeight: "400",
        color: "#1E1E1E",
    },
    activeButton: {
        borderColor: '#0080FE', // Border color when button is active
        borderWidth: 1
    },
    activeText: {
        // color: '#0080FE'
    },
})