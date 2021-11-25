import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Picker} from '@react-native-picker/picker';

/**
 * top bar menue have info butoon to show info and language picker
 * 
 * @param {the sent props} props 
 * @returns 
 */
const TopBar = (props) => {

    const onInfo = () =>{

    }
  
    return (
        <View style={styles.container}>
      
        <Text style={{fontWeight: "bold"}} >{props.lang == "en" ? " langage : " : " språk : "}</Text>    
        <View style={{ backgroundColor: "#FFF"}}>
            <Picker
                selectedValue={props.lang}
                style={{ height: 30, width: 120, paddingLeft: 30 }}
                onValueChange={(itemValue, itemIndex) => props.setLang(itemValue)}
            >
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Norsk" value="no" />
            </Picker>
        </View>
        
        <Button 
        title = "info"
        onPress = { () => {props.setShowModal(true)} }
        style = {{width: 30, padding: 5}}
        />
        
        </View>
    );

}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row',
    backgroundColor: '#FFE8E5',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    marginTop: 10,
  }
});

export default TopBar;

