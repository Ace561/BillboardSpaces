import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Pressable, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function About1({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedText, setSelectedText] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [fieldModalVisible, setFieldModalVisible] = useState(false);
    const [stateModalVisible, setStateModalVisible] = useState(false);

    const openFieldModal = () => {
        setFieldModalVisible(true);
    };

    const openStateModal = () => {
        setStateModalVisible(true);
    };

    const closeFieldModal = () => {
        setFieldModalVisible(false);
    };

    const closeStateModal = () => {
        setStateModalVisible(false);
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleTextSelection = (text) => {
        setSelectedText(text);
        closeFieldModal();
    };
    const handleStateSelection = (text) => {
        setSelectedState(text);
        closeStateModal();
    };

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.tellUsAbout1}> Tell Us About Yourself</Text>
                <Text style={styles.letsMakeYour1}>Let's Make Your Experience Better</Text>
                <Text style={styles.PickYourField}>Pick your Field</Text>
                <View style={{ top: 5 }}>
                    <TouchableOpacity onPress={openFieldModal}>
                        <View style={styles.rectangleView1}>
                            <Text>{selectedText !== '' ? selectedText : '  Select an option'}</Text>
                            <View style={styles.arrowContainer}>
                                <AntDesign style={styles.arrow} name="down" size={20} color="black" />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Modal visible={fieldModalVisible} animationType="slide">
                        <Pressable style={styles.modalContainer} onPress={closeFieldModal}>
                            <View style={styles.modalContent}>
                                <TouchableOpacity onPress={() => handleTextSelection('  Billboard Owner')}>
                                    <Text style={styles.billboardOwner}>Billboard Owner</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleTextSelection('  Advertising Agent')}>
                                    <Text style={styles.billboardOwner}>Advertising Agent</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleTextSelection('  State Agent')}>
                                    <Text style={styles.billboardOwner}>State Agent</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleTextSelection('  Business Owner')}>
                                    <Text style={styles.billboardOwner}>Business Owner</Text>
                                </TouchableOpacity>
                            </View>
                        </Pressable>
                    </Modal>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.PickYourField}>Fullname</Text>
                    <View style={{ top: 5 }}>
                        <TouchableOpacity>
                            <View style={styles.rectangleView2}>
                                <TextInput
                                    style={styles.fullName}
                                    placeholder="Enter Full name"
                                // value={email}
                                // onChangeText={text => setEmail(text)}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.PickYourField}>Phone Number</Text>
                    <View style={{ top: 5 }}>
                        <TouchableOpacity>
                            <View style={styles.rectangleView2}>
                                <TextInput
                                    style={styles.fullName}
                                    placeholder="Enter Phone number"
                                // value={email}
                                // onChangeText={text => setEmail(text)}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.PickYourField}>State of residence</Text>
                <View style={{ top: 5 }}>
                    <TouchableOpacity onPress={openStateModal}>
                        <View style={styles.rectangleView2}>
                            <Text>{selectedState !== '' ? selectedState : '  Enter state'}</Text>
                            <View style={styles.arrowContainer}>
                                <AntDesign style={styles.arrow} name="down" size={20} color="black" />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Modal visible={stateModalVisible} animationType="slide">
                        <Pressable style={styles.modalContainer} onPress={closeStateModal}>
                            <View style={styles.modalContent}>
                                <TouchableOpacity onPress={() => handleStateSelection('  Abia')}>
                                    <Text style={styles.billboardOwner}>Abia</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleStateSelection('  Adamawa')}>
                                    <Text style={styles.billboardOwner}>Adamawa</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleStateSelection('  Akwaibom')}>
                                    <Text style={styles.billboardOwner}>Akwaibom</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleStateSelection('  Anambra')}>
                                    <Text style={styles.billboardOwner}>Anambra</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleStateSelection('  Bauchi')}>
                                    <Text style={styles.billboardOwner}>Bauchi</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleStateSelection('  Benue')}>
                                    <Text style={styles.billboardOwner}>Benue</Text>
                                </TouchableOpacity>
                            </View>
                        </Pressable>
                    </Modal>
                </View>
                <View style={styles.container3}>
                    <Text style={styles.PickYourField}>Display name (Business name)</Text>
                    <View style={{ top: 5 }}>
                        <TouchableOpacity>
                            <View style={styles.rectangleView2}>
                                <TextInput
                                    style={styles.fullName}
                                    placeholder="Enter display name"
                                // value={email}
                                // onChangeText={text => setEmail(text)}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.rectangleView3}>
                    <Text style={{ color: 'white' }}>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    container2: {
        top: 79,
        left: 16
    },
    tellUsAbout1: {
        fontSize: 28,
        fontWeight: "500",
        color: "#000",
    },
    letsMakeYour1: {
        fontSize: 16,
        marginTop: 8,
        textAlign: "left",
        color: "#000"
    },
    PickYourField: {
        top: 20,
    },
    rectangleView1: {
        borderRadius: 10,
        backgroundColor: "#f5faff",
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: "rgba(204, 204, 204, 0.25)",
        flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderColor: "#0080fe",
        marginTop: '5%',
        borderWidth: 1,
        width: "90%",
        height: 50
    },
    rectangleView2: {
        borderRadius: 10,
        backgroundColor: "#f5faff",
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: "rgba(204, 204, 204, 0.25)",
        flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderColor: "#f5faff",
        marginTop: '5%',
        borderWidth: 1,
        width: "90%",
        height: 50
    },
    rectangleView3: {
        borderRadius: 10,
        backgroundColor: "#0080fe",
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "rgba(204, 204, 204, 0.25)",
        flexDirection: 'row',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderColor: "#0080fe",
        marginTop: '30%',
        borderWidth: 1,
        width: "90%",
        height: 50
    },
    arrowContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    arrow: {
        marginRight: 5
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop:"40%"
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: "#fff",
        padding: 15,
        width: "80%",
        height: "25%",
    },
    billboardOwner: {
        fontSize: 14,
        fontWeight: "500",
        color: "#383838",
        paddingTop: 5
    },
    fullName: {
        marginLeft: 3,
        width: '100%'
    }

})