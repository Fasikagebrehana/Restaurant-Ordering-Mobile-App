import { Stack } from 'expo-router'
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { ImageSourcePropType } from 'react-native';


type Props = {
  image: ImageSourcePropType;
  name: string;
  price: number | string;
  rating: number | string;
};
export default function Cards ({item}: {item: Props}) {
    return (
      <View style={{
        marginTop: 10,
        flexDirection: "column",
        backgroundColor: "#f8f4f4ff",
        borderRadius: 30,
      }}
        >
        <View style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          overflow: "hidden",
          }}>

          <Image source={item.image}
          style = {{
          width: 400,  
          height: 150,
          }} />

          </View>
          <Text style={{ 
          fontSize: 18, 
          fontWeight: 'bold', 
          marginLeft: 10,
          padding: 10,
          }}>{item.name}
          </Text>
          <View style={{ 
            flexDirection: "row", 
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginBottom: 10,
            }}>
          <Text style={{ 
          fontSize: 18, 
          fontWeight: 'bold', 
          marginLeft: 10,
          paddingLeft: 10,
          }}>${item.price}
          </Text>
          <View style={{
            backgroundColor: "#2ec536ff",
            borderRadius: 20,
            paddingVertical: 5,
            paddingHorizontal: 15,
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            
            }}>
              <FontAwesome name="star" color="#fff" size={14} />
            <Text style={{
              color: "#fff",
              fontWeight: "bold",
            }}>{item.rating}</Text>
          </View>
            
        

          </View>
        <View style={{
          width: "80%",
          alignSelf: "center",
          borderRadius: 30,
          overflow: "hidden",
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#ff2d55",
            paddingVertical: 15,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>Add to Cart</Text>
        </TouchableOpacity> 
        </View>
      </View>
    )
  }
