import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, Platform, TextInput, Alert, Keyboard } from 'react-native';
import Letter from "../components/Letter"
import Figure from "../components/Figure"


const Game = (props) => {
    const [inputLetter, setInputLetter] = useState();
    const [wrongLetters, setWrongLetters] = useState([]);
    const [corLetters, setCorLetters] = useState([]);


    const handleInputLetter = () => {
        Keyboard.dismiss();
        if(props.word.includes(inputLetter)){
            setCorLetters([...corLetters, inputLetter]);
            setInputLetter(null);
        }else if(!wrongLetters.includes(inputLetter)){
            setWrongLetters([...wrongLetters, inputLetter]);
            setInputLetter(null);
        }
        setInputLetter(null);
        handleEndGame();
    }

    const handleEndGame = () => {
        if(wrongLetters.length == 5){
            Alert.alert(props.lang ==="en" ? "You lost!" : "Du tapte!", props.lang ==="en" ? "Game over good luck next time." : "Game over. Lykke til nest gang.", [
                {text: "ok", onPress: () => {props.setStartGame(false)}}
            ] )
        }else if(corLetters.length == props.word.length){
            Alert.alert(props.lang ==="en" ? "You Won!" : "Du vant!", props.lang ==="en" ? "You won. press ok to go to the home page." : "DU vant. Trykk ok for å bli sendt til hjemme siden.", [
                {text: "ok", onPress: () => {props.setStartGame(false)}}
            ] )
        }
    }


  return (
    <View style={styles.container}>
        <View>
        <Text style={{fontWeight: "bold"}}>{props.lang ==="en" ? "Wrong Letters: " : "Feil bokstaver: "}</Text>
        </View>
        <View style={styles.topH}>

            {
                wrongLetters.map( (item, index) => {
                    return <Letter key = {index}  corLetters = {corLetters} show={true} letter={item} />
                })
            }
        
        </View>
        <View style={styles.hangCube}>
            <Figure wrongLetters = {wrongLetters} />
        </View>
        <Text style={{fontWeight: "bold"}}>{props.lang ==="en" ? "Your word: " : "Ditt ord: "}</Text>
        <View style={styles.bottomH}>
            {
                props.word.split("").map((item, index) => {
                    return <Letter  key={index} corLetters = {corLetters} show={false} letter = {item} />
                })
            
            }
                {/* <Letter  show = {false} letter = "a" />
                <Letter  show = {false} letter = "a" /> */}
        </View>
        <View style = {{flexDirection: "row"}}>
        
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style = {styles.writeLetter}
        >
        <Button
        title= {props.lang ==="en" ? "Back" : "Tilbake"}
        onPress= {() => { props.setStartGame(false)}}
        />
        <TextInput
        style = {styles.input}
        maxLength = {1}
        placeholder = {props.lang ==="en" ? "Write a letter " : "Skriv et bokstav "}
        onChangeText = {text => setInputLetter(text.toLowerCase())}
        value = {inputLetter}
        />
        <Button
        title= {props.lang ==="en" ? "Submit" : "Sende inn"}
        onPress= {() => handleInputLetter()}
        />
        </KeyboardAvoidingView>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',

  },
  hangCube: {
      padding: 15,
      width: "80%",
      height: "40%",
      borderRadius: 15,
  },
  letter: {
      margin: 10,
  },
  topH: {
      padding : 40,
    width : "100%",
    flexDirection: 'row',
    flexWrap : "wrap",
  },
  bottomH: {
    padding : 35,
    width : "100%",
    flexDirection: 'row',
    flexWrap : "wrap",
  },
  writeLetter: {
      width: "100%",
      bottom: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
  },
  input: {
    width: 200, 
    paddingVertical: 5, 
    paddingHorizontal: 5, 
    backgroundColor: "#f3faff",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius: 20,
  }

});

export default Game;
