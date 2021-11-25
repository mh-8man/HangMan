import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Game from "../components/Game"
import {getWord} from "../assets/words"

const Start = (props) => {
    const [startGame, setStartGame] = useState(false);
    const [word, setword] = useState(false);

    const handleStartPress = () => {
        setword(getWord(props.lang));
        setStartGame(true);
    }

  return (
    <View style={styles.container}>
    { !startGame && (
        <View style={{padding: 20,}}>
            <Text style={{fontWeight: "bold", marginVertical: 40, fontSize: 40}}> Hang Man </Text>    
            <Text style={{fontWeight: "bold", marginVertical: 20, fontSize: 20}}>{ props.lang ==="en" ? "Welcome to HangeMan! \nHang Man Game is played by gussing a word, a letter at a time.\nYou get 6 chances." : "Velcommen til HangeMan! \nHang Man er spillt slik at du må gjette et ord ved å gjette bokstaver.\nDu får 6 sjanser." }</Text>
            <Button
            title= {props.lang ==="en" ? "Start" : "Begynn"}
            onPress= {() => {handleStartPress()}}
            />
        </View>
    )}
    { startGame && (
    <View style={{width :"100%", height: "100%" }}>
    <Game
    lang ={props.lang}
    setStartGame = {setStartGame}
    word = {word}
    />
    </View>
    )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex : 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#eee',

  },
  centered:{
  }
});


export default Start;
