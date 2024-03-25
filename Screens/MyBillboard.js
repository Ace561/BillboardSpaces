import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, SafeAreaView, Image, StatusBar, Pressable, TouchableOpacity, TouchableWithoutFeedback, Modal, KeyboardAvoidingView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function MyBillboard({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Pressable onPress={() => {
                    navigation.navigate('Billboardclicked2')
                }}>
                    <View style={{
                        flexDirection: 'row',
                        gap: 16,
                        marginRight: 10,
                        marginTop: 10,
                    }}>
                        <MaterialCommunityIcons style={{ marginLeft: 20, }} name="map-marker" size={20} color="#0080FE" />
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '400',
                            alignSelf: 'center'
                        }}>
                            Aka Road, Uyo, Akwa..
                        </Text>
                        <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row', gap: 16 }}>
                            <Fontisto style={{
                                alignSelf: 'center'
                            }} name="share-a" size={20} color="black" />
                            <Feather style={{
                                alignSelf: 'center'
                            }} name="more-vertical" size={20} color="black" />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 10, }}>
                        <Image resizeMode="cover" source={require('/Billboard Spaces/BillboardSpaces/assets/profilePicture.jpeg')} style={styles.billboardImage} />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        gap: 5,
                        marginRight: 20
                    }}>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '400',
                            alignSelf: 'center',
                            color: '#525252',
                            marginLeft: 20,
                            fontStyle: 'italic'
                        }}>Posted</Text>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '400',
                            alignSelf: 'center',
                            color: '#525252',
                            fontStyle: 'italic'
                        }}>
                            Aka Road, Uyo, Akwa..
                        </Text>

                        <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row', gap: 4 }}>
                            <Ionicons style={{
                                alignSelf: 'center'
                            }} name="eye-outline" size={12} color="#525252" />
                            <Text style={{
                                fontSize: 12,
                                fontWeight: '400',
                                alignSelf: 'center',
                                color: '#525252'
                            }}>104</Text>
                        </View>
                    </View>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 10
    },
    billboardImage: {
        width: '90%',
        height: 274,
        borderRadius: 10
    },
})