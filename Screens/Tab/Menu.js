import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TouchableWithoutFeedback, Modal, Image, TextInput, Pressable, KeyboardAvoidingView, SafeAreaView, ActivityIndicator, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import { refreshToken } from '../authUtils';



export default function Menu({ navigation }) {
  const ProductComponent = ({ product }) => {
    return (

      <View style={{
        padding: 5,
        flex: 1,
        // backgroundColor:'red',
        width: 180
      }}>
        <Image resizeMode="cover" source={{ uri: product.image }} style={styles.rectangleIcon2} />
        <TouchableOpacity onPress={() => navigation.navigate("Billboardclicked")} >
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
        <TouchableOpacity onPress={() => navigation.navigate("Billboardclicked")} >
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
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 25,
        }}>
          <Text style={{
            fontSize: 28,
            fontWeight: '500',
          }}>
            Marketplace
          </Text>
          <Text style={{
            fontSize: 14,
            color: '#0080FE',
            fontWeight: '500',
            paddingTop:10,
          }}>
            Explore map
          </Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchText}
            placeholder="Search"
          // value={password}
          // onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.passwordToggle}          >
            <AntDesign name="search1" size={24} color="#CCCCCC" />
          </TouchableOpacity>
        </View>
        <Text style={{
          fontSize: 16,
          paddingLeft: 25,
          fontWeight: '500',
          marginTop: 10
        }}>
          Filter By
        </Text>


        <View style={{
          flexDirection: 'row',
          paddingLeft: 25,
          alignItems: 'center',
        }}>
          <Text style={{
            fontSize: 16,
            fontWeight: '500',
            marginTop: 10
          }}>
            Location
          </Text>
          <AntDesign style={styles.arrow} name="down" size={16} color="black" />
          <Text style={{
            fontSize: 16,
            fontWeight: '500',
            marginTop: 10,
            paddingLeft: 20,
          }}>
            Size
          </Text>
          <AntDesign style={styles.arrow} name="down" size={16} color="black" />
        </View>

        <Text style={styles.newlyAdded}>Featured</Text>
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
  searchContainer: {
    borderRadius: 10,
    backgroundColor: "#F5FAFF",
    justifyContent: 'center',
    shadowColor: "rgba(204, 204, 204, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    // marginTop: '5%',
    elevation: 2,
    shadowOpacity: 1,
    width: "90%",
    height: 40,
    marginLeft: 25,
    marginTop:16
  },
  searchText: {
    fontSize: 16,
    textAlign: "left",
    left: 10,
    fontWeight: '400',
  },
  passwordToggle: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  arrow: {
    marginTop: 12,
    paddingLeft: 5
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
  img2: {
    flexDirection: 'row',
    paddingLeft: 25
  },
  popularContainer: {
    paddingLeft: 25
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
  popularRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },

})