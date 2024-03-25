import { StyleSheet, Text, View, StatusBar, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Modal, Image, TextInput, Pressable, KeyboardAvoidingView, SafeAreaView, ActivityIndicator, ScrollView, Button } from 'react-native'
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';


export default function MyProfile() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showDetails, setShowDetails] = useState(false);


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

    const backgroundImage = selectedImage ? { uri: selectedImage } : require('/Billboard Spaces/BillboardSpaces/assets/imageupload.png');

    const handleShowDetails = () => {
        setShowDetails(currentState => !currentState);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={styles.container} behavior='height' enabled>
                <ScrollView>
                    <TouchableOpacity style={{
                        flexDirection: 'row', alignSelf: 'center', width: 130,
                        height: 130,
                    }} onPress={openImagePickerAsync}>
                        <Image resizeMode='cover' source={backgroundImage} style={{
                            width: 130,
                            height: 126,
                            borderRadius: 100
                        }}>
                        </Image>
                        <Image resizeMode='contain' style={{ top: '60%', right: '20%' }} source={require("/Billboard Spaces/BillboardSpaces/assets/cam.png")} />
                    </TouchableOpacity>
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 16,
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            fontWeight: '400',
                            fontSize: 16,
                            marginLeft: 16,
                            lineHeight: 19.36
                        }}>
                            Personal Data
                        </Text>
                        <Feather onPress={handleShowDetails} name="edit-3" size={24} color="#0080FE" />
                    </View>

                    <View style={{
                        width: '90%',
                        height: 134,
                        backgroundColor: '#E2F3FD',
                        marginLeft: 16,
                        borderRadius: 10,
                        top: 10,
                        padding: 10,
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                    }}>
                        <View style={{ gap: 10 }}>

                            {showDetails ? (
                                <>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: '90%',
                                    }}>
                                        <Text style={styles.Text}>Name</Text>
                                        <View style={styles.editInput}>
                                            <TextInput
                                                style={styles.email}
                                                placeholder='name'
                                            />
                                        </View>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: '90%',
                                    }}>
                                        <Text style={styles.Text}>Name</Text>
                                        <View style={styles.editInput}>
                                            <TextInput
                                                style={styles.email}
                                                placeholder='name'
                                            />
                                        </View>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: '90%',
                                    }}>
                                        <Text style={styles.Text}>Name</Text>
                                        <View style={styles.editInput}>
                                            <TextInput
                                                style={styles.email}
                                                placeholder='name'
                                            />
                                        </View>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: '90%',
                                    }}>
                                        <Text style={styles.Text}>Name</Text>
                                        <View style={styles.editInput}>
                                            <TextInput
                                                style={styles.email}
                                                placeholder='name'
                                            />
                                        </View>
                                    </View>
                                </>
                            ) : (
                                // show basic details
                                <>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: '90%',
                                    }}>
                                        <Text>Name</Text>
                                        <Text>kijdas</Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: '90%',
                                    }}>
                                        <Text>Email</Text>
                                        <Text>kijdas</Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: '90%',
                                    }}>
                                        <Text>Phone Number</Text>
                                        <Text>kijdas</Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: '90%',
                                    }}>
                                        <Text>State of Residence</Text>
                                        <Text>kijdas</Text>
                                    </View>
                                </>
                            )}

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
        borderBottomWidth: 1,
        borderColor: '#0080FE'
    },
    email: {
        fontSize: 12,
        fontWeight: '500',
        width: 152,
    },
    Text: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14.52
    }

})