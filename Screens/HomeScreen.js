import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar, SafeAreaView, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { refreshToken } from './authUtils'; // Import the refreshToken function
import { BASE_URL } from '../apiConfig';
import slide1 from '../assets/slide1.png'
import slide2 from '../assets/slide2.png'
import slide3 from '../assets/slide3.png'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function HomeScreen({ navigation }) {
    

    const ProductComponent = ({ product }) => {
        return (

            <View style={{
                padding: 5,
                // flex: 1,
                // backgroundColor:'red',
                width: 180
            }}>
                <TouchableOpacity onPress={() => navigation.navigate("Billboardclicked", { data: product })} >
                    <Image resizeMode="cover" source={{ uri: product.image }} style={styles.rectangleIcon2} />
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
                // flex: 1,
                // backgroundColor:'red',
                width: 180
            }}>
                <TouchableOpacity onPress={() => navigation.navigate("Billboardclicked", { data: popular })} >
                    <Image resizeMode="cover" source={{ uri: popular.image }} style={styles.rectangleIcon3} />
                    <Text>
                        {popular.location}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
    const EventComponent = ({ events }) => {
        return (

            <View style={{
                padding: 5,
                // flex: 1,
                // backgroundColor:'red',
                width: 180
            }}>
                <TouchableOpacity onPress={() => navigation.navigate("Eventclicked", { data: events })} >
                    <Image resizeMode="cover" source={{ uri: events.image }} style={styles.rectangleIcon3} />
                    <Text>
                        {events.name}
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
    const [events, setEvents] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            const endpointUrl = `${BASE_URL}/billboards/new/`;
            try {
                // Retrieve the access token from AsyncStorage
                const storedAccess = await AsyncStorage.getItem('access');

                const response = await fetch(endpointUrl, {
                    headers: {
                        'Authorization': `Bearer ${storedAccess}` // Use the retrieved token in the request headers
                    }
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        const newAccessToken = await refreshToken();
                        // Use the new access token to make the request
                        const newResponse = await fetch(endpointUrl, {
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
            const endpointUrl = `${BASE_URL}/billboards/new/`;
            try {
                // Retrieve the access token from AsyncStorage
                const storedAccess = await AsyncStorage.getItem('access');

                const response = await fetch(endpointUrl, {
                    headers: {
                        'Authorization': `Bearer ${storedAccess}` // Use the retrieved token in the request headers
                    }
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        const newAccessToken = await refreshToken();
                        // Use the new access token to make the request
                        const newResponse = await fetch(endpointUrl, {
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


    // events
    useEffect(() => {
        const fetchEvents = async () => {
            const endpointUrl = `${BASE_URL}/events/`;
            try {
                // Retrieve the access token from AsyncStorage
                const storedAccess = await AsyncStorage.getItem('access');

                const response = await fetch(endpointUrl, {
                    headers: {
                        'Authorization': `Bearer ${storedAccess}` // Use the retrieved token in the request headers
                    }
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        const newAccessToken = await refreshToken();
                        // Use the new access token to make the request
                        const newResponse = await fetch(endpointUrl, {
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
                    setEvents(data);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error.message);
            }
        };
        fetchEvents();
    }, []);

    if (error) {
        return <Text>{error}</Text>;
    }

    const images = [
        slide1,
        slide2,
        slide3
    ]



    const [imgActive, setimgActive] = useState(0);

    onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if (slide != imgActive) {
                setimgActive(slide);
            }
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ marginBottom: 5 }} horizontal={false} showsVerticalScrollIndicator={false}>
                <View style={styles.rectangle1}>
                    <View>
                        <Image style={{ width: 40, height: 40, borderRadius: 100 }} source={require("../assets/profilePicture.jpeg")} />
                    </View>
                    <Text style={{ fontSize: 22, marginLeft: 5 }}>Welcome</Text>
                    <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Notification')
                        }}>
                            <MaterialIcons name="notifications-none" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>


                <View>
                    <ScrollView
                        onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        horizontal
                        style={styles.wrap}
                    >
                        {
                            images.map((image, index) =>
                                <Image
                                    key={index}
                                    resizeMode='contain'
                                    style={styles.wrap2}
                                    source={image}
                                />
                            )
                        }
                    </ScrollView>
                    <View style={styles.wrapDot}>
                        {
                            images.map((e, index) =>
                                <Text
                                    key={e}
                                    style={imgActive == index ? styles.dotActive : styles.dot}
                                >
                                    ●
                                </Text>
                            )
                        }

                    </View>
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
                    width: '90%',
                    marginTop: 10,
                }} />

                <Text style={styles.newlyAdded}>Upcoming Events</Text>

                <View style={styles.newlyAddedScroll}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        <View style={styles.img2} >
                            {events && events.map((events, index) => (
                                <EventComponent key={index} events={events} />
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
        width: "100%",
        height: 40,
        paddingLeft: 20,
        marginTop: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    ads: {
        width: 343
    },
    wrap: {
        paddingTop: 20,
        borderRadius: 10,
        alignSelf:'center',
        width: WIDTH,
    },
    wrap2: {
        width: WIDTH,
        borderRadius: 10,
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: '#66B3FF',
    },
    dot: {
        margin: 3,
        color: 'white'
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