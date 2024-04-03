import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, SafeAreaView, Image, StatusBar, Pressable, TouchableOpacity, TouchableWithoutFeedback, Modal, KeyboardAvoidingView, Linking } from 'react-native'

export default function Help({ navigation }) {


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ marginBottom: 5 }} horizontal={false} showsVerticalScrollIndicator={false}>
                <View style={{ gap: 32 }}>
                    <Pressable onPress={() => {
                        navigation.navigate('Contact Us')
                    }} style={{ flexDirection: 'row', marginTop: 10, marginLeft: 16, gap: 24 }}>
                        <Image resizeMode='contain' style={{ width: "6.5%", height: 24 }} source={require('../assets/Phone.png')} />
                        <Text style={{ fontSize: 16, fontWeight: '500', alignSelf: 'center' }}>Contact Us</Text>
                    </Pressable>
                    <Pressable style={{ flexDirection: 'row', marginLeft: 16, gap: 24 }}>
                        <Image resizeMode='contain' style={{ width: "6.5%", height: 24 }} source={require('../assets/About.png')} />
                        <Text style={{ fontSize: 16, fontWeight: '500', alignSelf: 'center' }}>Terms and Privacy Policy</Text>
                    </Pressable>
                    <Pressable style={{ flexDirection: 'row', marginLeft: 16, gap: 24 }}>
                        <Image resizeMode='contain' style={{ width: "6.5%", height: 24 }} source={require('../assets/About.png')} />
                        <Text style={{ fontSize: 16, fontWeight: '500', alignSelf: 'center' }}>About</Text>
                    </Pressable>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})