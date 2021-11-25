import React, {useState} from 'react';
import { StyleSheet, Picker, Text, View, Modal, TouchableOpacity } from 'react-native';
import TopBar from "./components/TopBar";
import Start from "./components/Start";

export default function App() {
  const [lang, setLang] = useState("en");
  const [showModal, setShowModal] = useState(false);
  return (

    <View style={styles.container}>
      <TopBar lang = {lang} setLang = {setLang} setShowModal = {setShowModal}  />
      <Start lang = {lang}/>

      <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        setModalVisible(false);
      }}
      >
        <TouchableOpacity style = {{backgroundColor: "#000000aa", flex:1}} onPress={() => setShowModal(false)} >
          <View style = {{backgroundColor: "#fff", margin: 50, padding: 40, borderRadius: 10 }}>
          <Text style={{fontWeight: "bold", fontSize: 18}}>{ lang ==="en" ? "Hang Man Game is played by gussing a word, a letter at a time.\nYou get 6 chances." : "Hang Man er spillt slik at du må gjette et ord ved å gjette bokstaver.\nDu får 6 sjanser." }</Text>
          </View>
        </TouchableOpacity>

      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
});
