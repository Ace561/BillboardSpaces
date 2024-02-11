import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function CreateAccount({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorModalVisible, setErrorModalVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const Signup = async () => {
    try {
      setIsLoading(true);

      // Use fetch to send the signup request
      const response = await fetch(
        "https://bb-spaces.onrender.com/auth/create/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            email: email,
            password2: confirmPassword,
          }),
        }
      );

      // Log the details of the response
      console.log("Response Status:", response.status);
      console.log("Response Headers:", response.headers);
      const responseData = await response.json();
      console.log("Response Data:", responseData);

      if (response.ok) {
        console.log("Signup Successful:", responseData);
        // Handle navigation or state updates on successful signup
        navigation.navigate("Home");
      } else {
        console.error("Signup Error:", responseData);

        // Extract and show error messages in an alert
        const errorMessages = Object.values(responseData.errors).flat();
        alert(`Signup failed. ${errorMessages.join("\n")}`);
      }
    } catch (error) {
      console.error("Error:", error);

      // Handle other errors, e.g., network issues
      const errorMessage =
        error.message ||
        "Signup failed. Please check your network connection.";
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };


  const SignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
      <ScrollView>
        <View style={styles.logoPosition}>
          <Image
            style={styles.logo}
            resizeMode="cover"
            source={require('../assets/logo.png')}
          />
        </View>
        <Text style={styles.createAnAccount1}>Create an Account</Text>
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
          <View style={styles.rectangleView2}>
            <TextInput
              style={styles.email}
              placeholder="Confirm Password"
              value={confirmPassword}
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
          </View>

          <TouchableOpacity onPress={Signup} style={styles.buttonParent}>
            {isLoading ? (
              <ActivityIndicator size="small" />
            ) : (
              <Text style={styles.button}>Sign up</Text>
            )}
          </TouchableOpacity>
          <View style={styles.text}>
            <Text style={styles.alreadyAUser1}>{`Already a user? `}</Text>
            <Pressable onPress={SignIn}>
              <Text style={styles.signIn}>Sign in</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
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
  }
})
