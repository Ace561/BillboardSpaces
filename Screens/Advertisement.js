import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, SafeAreaView, Image, StatusBar, Pressable, TouchableOpacity, TouchableWithoutFeedback, Modal, KeyboardAvoidingView } from 'react-native'


export default function Advertisement() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={{ width: '90%', height: 76, borderWidth: 1, alignSelf: 'center', flexDirection: 'row', borderColor: '#0080FE', borderRadius: 10, justifyContent: 'center' , marginTop:20}}>
                    <Image style={{ alignSelf: 'center' }} source={require('../assets/Advert1.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '90%', height: 76, borderWidth: 1, alignSelf: 'center', flexDirection: 'row', borderColor: '#0080FE', borderRadius: 10, justifyContent: 'center', marginTop:30 }}>
                    <Image style={{ alignSelf: 'center' }} source={require('../assets/advert2.png')} />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
})