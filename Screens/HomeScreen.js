import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar, SafeAreaView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { refreshToken } from './authUtils'; // Import the refreshToken function

export default function HomeScreen({ navigation }) {

    const ProductComponent = ({ product }) => {
        return (

            <View style={{
                padding: 5,
                flex: 1,
                // backgroundColor:'red',
                width: 180
            }}>
                <Image resizeMode="cover" source={{ uri: product.image }} style={styles.rectangleIcon2} />
                <TouchableOpacity onPress={() => navigation.navigate("Billboardclicked", { data: product })} >
                    <Text>
                        {product.location}
                    </Text>
                </TouchableOpacity>

            </View>
        );
    };
    const PopularComponent = ({ popular }) => {
        return (

            <View style={{
                padding: 5,
                flex: 1,
                // backgroundColor:'red',
                width: 180
            }}>
                <Image resizeMode="cover" source={{ uri: popular.image }} style={styles.rectangleIcon3} />
                <TouchableOpacity onPress={() => navigation.navigate("Billboardclicked", { data: popular })} >
                    <Text>
                        {popular.location}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    const splitIntoRows = (data) => {
        const rows = [];
        for (let i = 0; i < data.length; i += 2) {
            rows.push(data.slice(i, i + 2));
        }
        return rows;
    };


    const [popular, setPopular] = useState([]);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Retrieve the access token from AsyncStorage
                const storedAccess = await AsyncStorage.getItem('access');

                const response = await fetch('https://bb-spaces.onrender.com/billboards/new/', {
                    headers: {
                        'Authorization': `Bearer ${storedAccess}` // Use the retrieved token in the request headers
                    }
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        const newAccessToken = await refreshToken();
                        // Use the new access token to make the request
                        const newResponse = await fetch('https://bb-spaces.onrender.com/billboards/new/', {
                            headers: {
                                'Authorization': `Bearer ${newAccessToken}`
                            }
                        });

                        if (!newResponse.ok) {
                            throw new Error('Failed to fetch products after token refresh');
                        }

                        const newData = await newResponse.json();
                        setProducts(newData);
                    } else {
                        // If the response status is not 401, handle other errors
                        throw new Error('Failed to fetch products');
                    }
                } else {
                    // If the response is ok, set the products
                    const data = await response.json();
                    setProducts(data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error.message);
            }
        };
        fetchProducts();
    }, []); // Remove 'access' from the dependencies array since it's not needed here

    if (error) {
        return <Text>{error}</Text>;
    }



    useEffect(() => {
        const fetchPopular = async () => {
            try {
                // Retrieve the access token from AsyncStorage
                const storedAccess = await AsyncStorage.getItem('access');

                const response = await fetch('https://bb-spaces.onrender.com/billboards/new/', {
                    headers: {
                        'Authorization': `Bearer ${storedAccess}` // Use the retrieved token in the request headers
                    }
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        const newAccessToken = await refreshToken();
                        // Use the new access token to make the request
                        const newResponse = await fetch('https://bb-spaces.onrender.com/billboards/all/', {
                            headers: {
                                'Authorization': `Bearer ${newAccessToken}`
                            }
                        });

                        if (!newResponse.ok) {
                            throw new Error('Failed to fetch products after token refresh');
                        }

                        const newData = await newResponse.json();
                        setPopular(newData);
                    } else {
                        // If the response status is not 401, handle other errors
                        throw new Error('Failed to fetch popular');
                    }
                } else {
                    // If the response is ok, set the popular
                    const data = await response.json();
                    setPopular(data);
                }
            } catch (error) {
                console.error('Error fetching popular:', error);
                setError(error.message);
            }
        };
        fetchPopular();
    }, []); // Remove 'access' from the dependencies array since it's not needed here

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ marginBottom: 5 }} horizontal={false} showsVerticalScrollIndicator={false}>
                <View style={styles.rectangle1}>
                    <TouchableOpacity>
                        <Image style={{ width: 40, height: 40, borderRadius: 100 }} source={require("../assets/profilePicture.jpeg")} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 22, marginLeft: 5 }}>Welcome,</Text>
                    <TouchableOpacity style={{ marginLeft: '50%' }}>
                        <MaterialIcons name="notifications-none" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.adsContainer}>
                    <Image style={styles.ads} source={require("../assets/ad1.png")} />
                </View>
                <Text style={styles.newlyAdded}>Newly Added</Text>
                <View style={styles.newlyAddedScroll}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <View style={styles.img2} >
                            {products && products.map((product, index) => (
                                <ProductComponent key={index} product={product} />
                            ))}
                        </View>
                    </ScrollView>
                </View>
                <Text style={styles.newlyAdded}>Discover</Text>

                <Image resizeMode='contain' source={require('../assets/Discover.png')} style={{
                    marginLeft: 25,
                    width:'90%',
                    marginTop: 10,
                }} />

                <Text style={styles.newlyAdded}>Upcoming Events</Text>

                <View style={styles.newlyAddedScroll}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <View style={styles.img2} >
                            {products && products.map((product, index) => (
                                <ProductComponent key={index} product={product} />
                            ))}
                        </View>
                    </ScrollView>
                </View>
                <Text style={styles.newlyAdded}>Popular</Text>
                <View style={styles.popularContainer}>
                    {splitIntoRows(popular).map((row, rowIndex) => (
                        <View key={rowIndex} style={styles.popularRow}>
                            {row.map((item, itemIndex) => (
                                <PopularComponent key={itemIndex} popular={item} />
                            ))}
                        </View>
                    ))}
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
    rectangle1: {
        width: 342,
        height: 40,
        // backgroundColor: "blue",
        alignSelf: 'center',
        marginTop: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    ads: {
        width: 343
    },
    adsContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    newlyAdded: {
        fontSize: 22,
        fontWeight: "500",
        color: "#1e1e1e",
        paddingLeft: 25,
        marginTop: 20
    },
    newlyAddedScroll: {
        alignItems: 'center',
    },
    rectangleIcon2: {
        borderRadius: 10,
        height: 150,
        width: 159.5
    },
    rectangleIcon3: {
        borderRadius: 10,
        height: 150,
        width: 159.5
    },
    img: {
        padding: 5,
    },
    img2: {
        // padding: 5,
        flexDirection: 'row',
        // backgroundColor: 'red',
        paddingLeft: 25

        // flex: 1,

    },
    popularContainer: {
        // padding: 5,
        // flexDirection: 'row',
        // backgroundColor: 'red',
        paddingLeft: 25

        // flex: 1,
    },
    popularRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    discover: {
        width: 344,
        height: "100%",
        // marginLeft: 25,
        backgroundColor: 'blue'
    }
})