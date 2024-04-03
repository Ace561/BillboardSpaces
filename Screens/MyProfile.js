import { StyleSheet, Text, View, StatusBar, Keyboard, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Modal, Image, TextInput, Pressable, KeyboardAvoidingView, SafeAreaView, ActivityIndicator, ScrollView, Button } from 'react-native'
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function MyProfile({ navigation }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [editMode, setEditMode] = useState(false); // State to manage edit mode
    const [editMode2, setEditMode2] = useState(false); // State to manage edit mode
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('');
    const [state, setState] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [field, setField] = useState('');



    const openImagePickerAsync = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert('Permission to access camera roll is required!');
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log('Picker Result:', pickerResult); // Log picker result for debugging
        if (!pickerResult.cancelled && pickerResult.assets.length > 0) {
            const selectedUri = pickerResult.assets[0].uri;
            console.log('Selected Image URI:', selectedUri); // Log selected image URI for debugging
            setSelectedImage(selectedUri);
        }
    };

    console.log('Selected image:', selectedImage); // Log selected image state for debugging

    const backgroundImage = selectedImage ? { uri: selectedImage } : require('../assets/imageupload.png');

    const handleEditMode = () => {
        setEditMode(currentMode => !currentMode);
    };
    const handleEditMode2 = () => {
        setEditMode2(currentMode => !currentMode);
    };

    // State variables to track focus
    const [nameFocused, setNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false); // Track if email input is focused
    const [phoneNumberFocused, setPhoneNumberFocused] = useState(false);
    const [stateFocused, setstateFocused] = useState(false);
    const [displayNameFocused, setDisplayNameFocused] = useState(false);
    const [fieldFocused, setFieldFocused] = useState(false);




    // Functions to handle input field focus
    const handleNameFocus = () => {
        setNameFocused(true);
        setPhoneNumberFocused(false);
        setstateFocused(false);
        setEmailFocused(false);
    };

    const handlePhoneNumberFocus = () => {
        setNameFocused(false);
        setPhoneNumberFocused(true);
        setstateFocused(false);
        setEmailFocused(false);
    };

    const handleStateFocus = () => {
        setNameFocused(false);
        setPhoneNumberFocused(false);
        setstateFocused(true);
        setEmailFocused(false);
    };
    const handleEmailFocus = () => {
        setEmailFocused(true);
        setNameFocused(false);
        setPhoneNumberFocused(false);
        setstateFocused(false);
    };
    const handleDisplayNameFocus = () => {
        setEmailFocused(false);
        setNameFocused(false);
        setPhoneNumberFocused(false);
        setstateFocused(false);
        setDisplayNameFocused(true);
    };
    const handleFieldFocus = () => {
        setEmailFocused(false);
        setNameFocused(false);
        setPhoneNumberFocused(false);
        setstateFocused(false);
        setFieldFocused(true);
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                enabled>
                <ScrollView>
                    <View style={{ flexDirection: 'row', gap: 16, marginTop: 10 }}>
                        <Ionicons onPress={()=>{
                            navigation.goBack()
                        }} name="arrow-back-outline" size={35} color="black" />
                        <Text style={{
                            fontWeight: '500',
                            fontSize: 22,
                            lineHeight: 26.63,
                            alignSelf: 'center'
                        }}>
                            My Profile
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', alignSelf: 'center', width: 130,
                        height: 130,
                    }}>
                        <Image resizeMode='cover' source={backgroundImage} style={{
                            width: 130,
                            height: 126,
                            borderRadius: 100
                        }}>
                        </Image>
                        <TouchableOpacity style={{ top: '60%', right: '20%' }} onPress={openImagePickerAsync}>
                        <Image resizeMode='contain'  source={require("../assets/cam.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 16,
                        justifyContent: 'space-between',
                        marginTop:40
                    }}>
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 16,
                            marginLeft: 16,
                            lineHeight: 19.36
                        }}>
                            Personal Data
                        </Text>
                        <Feather name="edit-3" size={24} color="#0080FE" />
                    </View>

                    <View style={{
                        width: '90%',
                        backgroundColor: '#E2F3FD',
                        marginLeft: 16,
                        borderRadius: 10,
                        marginTop: 10,
                        padding: 10,
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    }}>
                        <View style={{ gap: 20 }}>

                            <View style={styles.inputView}>
                                <Text style={styles.email}>Name</Text>
                                <View style={[styles.editInput, nameFocused && styles.focusedInput]}>
                                    <TextInput
                                        style={styles.Text}
                                        value={name}
                                        onChangeText={(text) => setName(text)}
                                        placeholder="kijdas"
                                        onFocus={handleNameFocus}
                                        onBlur={() => setNameFocused(false)}
                                    />
                                </View>
                            </View>
                            <View style={styles.inputView}>
                                <Text style={styles.email}>Email</Text>
                                <View style={[styles.editInput, emailFocused && styles.focusedInput]}>
                                    <TextInput
                                        style={styles.Text}
                                        value={email}
                                        onChangeText={(text) => setEmail(text)}
                                        placeholder="kijdas"
                                        onFocus={handleEmailFocus}
                                        onBlur={() => setEmailFocused(false)}
                                    />
                                </View>
                            </View>
                            <View style={styles.inputView}>
                                <Text style={styles.email}>Phone Number</Text>
                                <View style={[styles.editInput, phoneNumberFocused && styles.focusedInput]}>
                                    <TextInput
                                        style={styles.Text}
                                        value={phoneNumber}
                                        onChangeText={(text) => setPhoneNumber(text)}
                                        placeholder="kijdas"
                                        onFocus={handlePhoneNumberFocus}
                                        onBlur={() => setPhoneNumberFocused(false)}
                                    />
                                </View>
                            </View>
                            <View style={styles.inputView}>
                                <Text style={styles.email}>State of Residence</Text>
                                <View style={[styles.editInput, stateFocused && styles.focusedInput]}>
                                    <TextInput
                                        style={styles.Text}
                                        value={state}
                                        onChangeText={(text) => setState(text)}
                                        placeholder="kijdas"
                                        onFocus={handleStateFocus}
                                        onBlur={() => setstateFocused(false)}
                                    />
                                </View>
                            </View>
                            <View style={styles.inputView}>
                                <Text style={styles.email}>Display/ Business name</Text>
                                <View style={[styles.editInput, displayNameFocused && styles.focusedInput]}>
                                    <TextInput
                                        style={styles.Text}
                                        value={displayName}
                                        onChangeText={text => setDisplayName(text)}
                                        placeholder="kijdas"
                                        onFocus={handleDisplayNameFocus}
                                        onBlur={() => setDisplayNameFocused(false)}
                                    />
                                </View>
                            </View>
                            <View style={styles.inputView}>
                                <Text style={styles.email}>Field</Text>
                                <View style={[styles.editInput, fieldFocused && styles.focusedInput]}>
                                    <TextInput
                                        style={styles.Text}
                                        value={field}
                                        onChangeText={(text) => setField(text)}
                                        placeholder="kijdas"
                                        onFocus={handleFieldFocus}
                                        onBlur={() => setFieldFocused(false)}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    editInput: {
        width: 152,

    },
    email: {
        fontSize: 12,
        fontWeight: '500',
        width: 152,
    },
    Text: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14.52,
        alignSelf: 'flex-end'
    },
    focusedInput: {
        borderColor: '#0080FE',
        borderBottomWidth: 1,
    },
    inputView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },

})