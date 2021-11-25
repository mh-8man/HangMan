import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Figure = (props) => {

  return (
    <View style={styles.centered}>
        <View style= {{height: "150%"}}>
            {props.wrongLetters.length == 0 &&    (
            <Image 
            source={require("../assets/0.png")}
            />
            )}
            {props.wrongLetters.length == 1 &&    (
            <Image 
            source={require("../assets/1.png")}
            />
            )}
            {props.wrongLetters.length == 2 &&    (
            <Image 
            source={require("../assets/2.png")}
            />
            )}
            {props.wrongLetters.length == 3 &&    (
            <Image 
            source={require("../assets/3.png")}
            />
            )}
            {props.wrongLetters.length == 4 &&    (
            <Image 
            source={require("../assets/4.png")}
            />
            )}
            {props.wrongLetters.length == 5 &&    (
            <Image 
            source={require("../assets/5.png")}
            />
            )}
            {props.wrongLetters.length == 6 &&    (
            <Image 
            source={require("../assets/6.png")}
            />
            )}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centered:{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
  }
});


export default Figure;
