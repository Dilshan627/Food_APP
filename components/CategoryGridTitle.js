import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import React from "react";

export default function CategoryGridTitle({ title, color, onPressed }) {
  return (
    <View style={styles.gridItem}>
      <Pressable 
        android_ripple={{color:'#ccc'}} 
        style={({pressed}) => 
        [styles.button, 
          pressed ? styles.buttonPressed : null 
        ]}
        onPress={onPressed}
        >
        <View style={[styles.itemContainer, {backgroundColor:color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  gridItem:{
    flex:1,
    margin:16,
    height:150,
    borderRadius:8,
    elevation:4,
    backgroundColor:'white',
    shadowColor:'black',
    shadowOpacity:0.25,
    shadowOffset:{width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  button:{
    flex:1
  },
  buttonPressed:{
    opacity:0.5
  },
  itemContainer:{
    flex:1,
    padding:16,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontWeight:'bold',
    fontSize:18
  }
});