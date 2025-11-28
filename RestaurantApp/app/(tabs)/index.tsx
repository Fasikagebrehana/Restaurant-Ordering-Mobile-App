// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';
// import "react-native-reanimated/lib/typescript/Animated";
// import { HelloWave } from '@/components/hello-wave';
// import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { Link } from 'expo-router';
// import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, ScrollView, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
// import { StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [selected, setSelected] = useState("Starter");


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator= {false}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Icon name="menu" size={20} color={"black"} />
        <ThemedText style = {styles.logo}>Foodzy</ThemedText>
        <Icon name="shopping-cart" size={20} color={"black"} />
        </View>
        <TextInput placeholder="Search for food"
          style={{
            marginTop: 20,
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 20,
            borderRadius: 20,
            backgroundColor: "#ffffffff",
          }}
        />
        <View style={{ marginTop: 30, flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity onPress={ () => setSelected("Starter")} 
          style={{
             paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 20,
              backgroundColor: selected === "Starter" ? "#f7537fff" : "#ffe9ef",
             }}>
            <Text style={{ textAlign: "center", marginBottom: 5 }}>Starter</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={ () => setSelected("Main Course")}
          style={{
              paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                backgroundColor: selected === "Main Course" ? "#f7537fff" : "#ffe9ef",
              }}>
            <Text style={{ textAlign: "center", marginBottom: 5 }}>Main Course</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={ () => setSelected("Dessert")}
          style={{
              paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                backgroundColor: selected === "Dessert" ? "#f7537fff" : "#ffe9ef",
              }}>
            <Text style={{ textAlign: "center", marginBottom: 5 }}>Dessert</Text>
          </TouchableOpacity>
          
          {/* <TouchableOpacity onPress={ () => setSelected("Drinks")}
          style={{
              paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                backgroundColor: selected === "Drinks" ? "#ff2d55" : "#f0f0f0",
              }}>
            <Text style={{ textAlign: "center", marginBottom: 5 }}>Drinks</Text>
          </TouchableOpacity> */}
          
        </View>
        
      </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#fff", 
    padding: 20
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff2d55",
    marginBottom: 15,
  },
  
});
