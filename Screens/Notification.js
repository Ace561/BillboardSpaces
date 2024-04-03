import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, SafeAreaView, Image, StatusBar, Pressable, TouchableOpacity, TouchableWithoutFeedback, Modal, KeyboardAvoidingView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';

export default function Notification() {
    const [modalVisible, setModalVisible] = useState(false);


    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ marginBottom: 5 }} horizontal={false} showsVerticalScrollIndicator={false}>
                <View style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginRight: 20,
                    marginTop: 10,
                    marginLeft: 10
                }}>
                    <Text style={{
                        fontWeight: '500',
                        fontSize: 22,
                        lineHeight: 33.89
                    }}>Notification</Text>
                    <TouchableOpacity onPress={openModal}>
                        <Image style={{}} source={require("../assets/cat.png")} />
                    </TouchableOpacity>
                </View>


                <Modal visible={modalVisible} transparent={true} animationType="fade">
                    <KeyboardAvoidingView
                        style={{ flex: 1 }}
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                        <Pressable style={styles.modalContainer} onPress={closeModal}>
                            <TouchableWithoutFeedback onPress={() => console.log('Tapped inside modal')}>
                                <View style={styles.modalContent}>
                                    <TouchableOpacity style={{ flexDirection: 'row', gap: 16 }}>
                                        <Zocial name="email" size={24} color="black" />
                                        <Text style={{
                                            fontWeight: '400',
                                            fontSize: 16,
                                            alignSelf: 'center'
                                        }}>
                                            Mark all as read
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableWithoutFeedback>
                        </Pressable>
                    </KeyboardAvoidingView>
                </Modal>
                <View style={{
                    backgroundColor: '#E5F2FF',
                    width: '100%',
                    height: 114,
                }}>
                    <View style={{
                        top: 20,
                        left: 30,
                        flexDirection: 'row',
                        gap: 6
                    }}>
                        <AntDesign style={{}} name="checkcircle" size={35} color="#31C624" />
                        <View style={{
                            flexDirection: 'column',
                            width: '70%'
                        }}>
                            <Text style={{
                                fontWeight: '500',
                                fontSize: 16,
                                color: '#383838'
                            }}>Congratulations</Text>
                            <Text>
                                You Have Successfully Purchased a
                                Billboard
                            </Text>
                            <Text style={{
                                color: '#525252',
                                fontWeight: '400',
                                fontSize: 12
                            }}>
                                Just Now
                            </Text>
                        </View>
                    </View>
                </View>


                <View style={{
                    backgroundColor: '#FFF',
                    width: '100%',
                    height: 114,
                }}>
                    <View style={{
                        top: 20,
                        left: 30,
                        flexDirection: 'row',
                        gap: 6
                    }}>
                        <Image source={require("../assets/notify.png")} />
                        <View style={{
                            flexDirection: 'column',
                            width: '70%'
                        }}>
                            <Text style={{
                                fontWeight: '500',
                                fontSize: 16,
                                color: '#383838'
                            }}>Maintainance Booking</Text>
                            <Text>
                                You Have Successfully Purchased a
                                Billboard
                            </Text>
                            <Text style={{
                                color: '#525252',
                                fontWeight: '400',
                                fontSize: 12
                            }}>
                                Just Now
                            </Text>
                        </View>
                    </View>
                </View>


                <View style={{
                    backgroundColor: '#FFF',
                    width: '100%',
                    height: 114,
                }}>
                    <View style={{
                        top: 20,
                        left: 30,
                        flexDirection: 'row',
                        gap: 6
                    }}>
                        <Image source={require("../assets/explore.png")} />
                        <View style={{
                            flexDirection: 'column',
                            width: '70%'
                        }}>
                            <Text style={{
                                fontWeight: '500',
                                fontSize: 16,
                                color: '#383838'
                            }}>Maintainance Booking</Text>
                            <Text>
                                You Have Successfully Purchased a
                                Billboard
                            </Text>
                            <Text style={{
                                color: '#525252',
                                fontWeight: '400',
                                fontSize: 12
                            }}>
                                Just Now
                            </Text>
                        </View>
                    </View>
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
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#fff",
        padding: 20,
        width: "100%",
        height: 100,
        justifyContent: 'center',
        // alignItems: 'center'
    },
})