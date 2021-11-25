import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Letter = (props) => {

  return (
    <View style={styles.container}>
        <View style={styles.centered}>
            {!props.corLetters.includes(props.letter) &&    (
            <Text style={{fontWeight: "bold", fontSize: 20}}>{props.show ? props.letter : "__"}</Text>
            )}
            {props.corLetters.includes(props.letter) &&    (
            <Text style={{fontWeight: "bold", fontSize: 18}}>{props.letter}</Text>
            )}    
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    width: 30,
    height: 30,
    borderRadius : 5,
    padding : 3,
    margin: 5
  },
  centered:{
      alignItems: "center",
      justifyContent: "center"
  }
});


export default Letter;
