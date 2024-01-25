import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TouchableWithoutFeedback, Modal, Image, TextInput, Pressable, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';


export default function CreatAccount({ navigation }) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [mordalPassword, setModalPassword] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [mordalPasswordVisible, setMordalPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [ConfirmPassword, setConfirmPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false);


    const handleDone = async () => {
        try {
            const response = await fetch('https://billboard-spaces.onrender.com/auth/password/reset/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: mordalPassword,
                }),
            });
    
            if (response.ok) {
                const result = await response.json();
    
                // Check if the response indicates success
                if (result && result.status === true) {
                    console.log(result.message); // Log the success message if needed
                    // Extract relevant information from the response and navigate to the next screen
                    setModalVisible(false);
                } else {
                    // Handle the error or navigate to an appropriate screen
                    console.error("Password reset request failed:", result.message);
                    alert(`Password reset failed. ${result.message}`);
                }
            } else {
                console.error('Password reset request failed:', response.status);
                throw new Error('Password reset request failed');
            }
        } catch (error) {
            console.error('An error occurred while handling the password reset request:', error.message);
            // Handle the error (e.g., show an error message to the user)
            alert(`Password reset failed. ${error.message}`);
        }
    };
    



    const handleLogin = async () => {
        try {
            setIsLoading(true);

            // Use fetch to send the login request
            const response = await fetch('https://billboard-spaces.onrender.com/auth/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    // Add any additional data you need to send to the server
                }),
            });

            if (response.ok) {
                // If login is successful, navigate to the HomeScreen
                navigation.navigate('Home');
                console.log('Login Successful');
            } else {
                // Handle error, e.g., show an error message to the user
                const errorData = await response.json();
                console.error('Login Error:', errorData);

                // Extract and show error messages in an alert
                const errorMessages = Object.values(errorData.errors).flat();
                alert(`Login failed. ${errorMessages.join('\n')}`);
            }
        } catch (error) {
            // Handle other errors, e.g., network issues
            console.error('Error:', error);

            // Show a generic error message in an alert
            alert('Login failed. Please check your network connection.');
        } finally {
            setIsLoading(false);
        }
    };


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleMordalPasswordVisibility = () => {
        setMordalPasswordVisible(!mordalPasswordVisible);
    };

    const CreatAccount = () => {
        navigation.navigate('CreatAccount');
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <TouchableWithoutFeedback onPress={closeModal}>
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView
                    behavior="padding"
                    enabled
                >
                    <View style={styles.logoPosition}>
                        <Image style={styles.logo} resizeMode="cover" source={require("../assets/logo.png")} />
                    </View>
                    <Text style={styles.createAnAccount1}>Access your Account</Text>
                    <View style={{ alignItems: 'center', marginTop: '5%' }}>
                        <View style={styles.rectangleView}>
                            <Image style={styles.groupIcon1} resizeMode="cover" source={require("../assets/googleIcon.png")} />
                            <Text style={styles.continueWithGoogle1}>    Continue with Google</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: '10%' }}>
                        <Text style={styles.or}>OR</Text>
                        <View style={styles.rectangleView1}>
                            <TextInput
                                style={styles.email}
                                placeholder="Email"
                                value={email}
                                onChangeText={text => setEmail(text)}
                            />
                        </View>
                        <View style={styles.rectangleView2}>
                            <TextInput
                                style={styles.email}
                                placeholder="Password"
                                value={password}
                                onChangeText={text => setPassword(text)}
                                secureTextEntry={!passwordVisible}
                            />
                            <TouchableOpacity
                                style={styles.passwordToggle}
                                onPress={togglePasswordVisibility}
                            >
                                <Feather
                                    name={passwordVisible ? 'eye' : 'eye-off'}
                                    size={20}
                                    color="gray"
                                />
                            </TouchableOpacity>
                        </View>
                        <Pressable onPress={openModal}>
                            <Text style={styles.forgotPassword1}>Forgot password?</Text>
                        </Pressable>
                        <TouchableOpacity onPress={handleLogin} style={styles.buttonParent}>
                            <Text style={styles.button}>Sign in</Text>
                        </TouchableOpacity>
                        <View style={styles.text}>
                            <Text style={styles.alreadyAUser1}>{`Not a User? `}</Text>
                            <Pressable onPress={CreatAccount}>
                                <Text style={styles.signIn}>Sign up</Text>
                            </Pressable>
                        </View>

                        <Modal visible={modalVisible} transparent={true} animationType="fade">
                            <Pressable style={styles.modalContainer} onPress={closeModal}>
                                <TouchableWithoutFeedback onPress={() => console.log('Tapped inside modal')}>
                                    <View style={styles.modalContent}>
                                        <Text style={styles.forgotYourPassword1}>Forgot your password?</Text>
                                        <Text style={styles.noWorriesJust1}>{`No worries! Just follow the steps below to
reset it`}</Text>

                                        <View style={styles.rectangleView2}>
                                            <TextInput
                                                style={styles.email}
                                                placeholder="Email"
                                                value={mordalPassword}
                                                onChangeText={text => setModalPassword(text)}
                                                // secureTextEntry={!mordalPasswordVisible}
                                            />
                                            {/* <TouchableOpacity
                                                style={styles.passwordToggle}
                                                onPress={toggleMordalPasswordVisibility}
                                            >
                                                <Feather
                                                    name={mordalPasswordVisible ? 'eye' : 'eye-off'}
                                                    size={20}
                                                    color="gray"
                                                />
                                            </TouchableOpacity> */}
                                        </View>


                                        {/* <View style={styles.rectangleView2}>
                                <TextInput
                                    style={styles.email}
                                    placeholder="Confirm Password"
                                    value={ConfirmPassword}
                                    onChangeText={text => setConfirmPassword(text)}
                                    secureTextEntry={!confirmPasswordVisible}
                                />
                                <TouchableOpacity
                                    style={styles.passwordToggle}
                                    onPress={toggleConfirmPasswordVisibility}
                                >
                                    <Feather
                                        name={confirmPasswordVisible ? 'eye' : 'eye-off'}
                                        size={20}
                                        color="gray"
                                    />
                                </TouchableOpacity>
                            </View> */}
                                        <Pressable onPress={handleDone} style={styles.buttonParent}>
                                            <Text style={styles.button}>Done</Text>
                                        </Pressable>
                                    </View>
                                </TouchableWithoutFeedback>
                            </Pressable>
                        </Modal>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        padding: 10,
    },
    logoPosition: {
        marginTop: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 24,
    },
    createAnAccount1: {
        fontSize: 28,
        marginTop: '10%',
        fontWeight: "500",
        color: "#1e1e1e",
        textAlign: "center"
    },
    rectangleView: {
        borderRadius: 7,
        backgroundColor: "#fff",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        shadowColor: "rgba(204, 204, 204, 0.25)",
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowRadius: 2,
        elevation: 2,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderColor: "#ccc",
        borderWidth: 0.3,
        width: "60%",
        height: 40
    },
    groupIcon1: {
        height: 24
    },
    continueWithGoogle1: {
        fontSize: 16,
        color: "#383838",
        textAlign: "left"
    },
    or: {
        fontSize: 12,
        color: "#383838",
        textAlign: "left",
    },
    rectangleView1: {
        borderRadius: 10,
        backgroundColor: "#f5faff",
        justifyContent: 'center',
        shadowColor: "rgba(204, 204, 204, 0.25)",
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
        height: 40
    },
    rectangleView2: {
        borderRadius: 10,
        backgroundColor: "#f5faff",
        justifyContent: 'center',
        shadowColor: "rgba(204, 204, 204, 0.25)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        marginTop: '5%',
        elevation: 2,
        shadowOpacity: 1,
        width: "90%",
        height: 40
    },
    email: {
        fontSize: 12,
        color: "#ccc",
        textAlign: "left",
        left: 10
    },
    passwordToggle: {
        position: 'absolute',
        right: 15,
        top: '50%',
        transform: [{ translateY: -12 }],
    },
    button: {
        fontSize: 14,
        // fontWeight: "500",
        color: "#fff",
        // textAlign: "left"
    },
    buttonParent: {
        borderRadius: 10,
        backgroundColor: "#0080fe",
        width: "90%",
        marginTop: '20%',
        height: 48,
        alignItems: "center",
        justifyContent: "center",
    },
    alreadyAUser1: {
        fontSize: 12,
        color: "#383838"
    },
    signIn: {
        fontSize: 14,
        fontWeight: "500",
        color: "#0080fe"
    },
    text: {
        // textAlign: "left",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20
    },
    forgotPassword1: {
        fontSize: 14,
        fontWeight: "500",
        color: "#0080fe",
        marginTop: "7%"
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: "#fff",
        padding: 20,
        width: "100%",
        height: 431,
        alignItems: 'center'
    },
    forgotYourPassword1: {
        fontSize: 28,
        fontWeight: "500",
        color: "#1e1e1e",
        textAlign: "center"
    },
    noWorriesJust1: {
        fontSize: 16,
        color: "#383838",
        textAlign: "center"
    }

})