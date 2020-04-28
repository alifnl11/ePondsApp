import React , { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
const { width: WIDHT } = Dimensions.get('window')
import IonIcons from 'react-native-vector-icons/Ionicons'
import firebase from '../config'


export default class EditTambak extends React.Component {
  state = {
    nama_tambak : "",
    banyak_kincir:"",
    ketinggian:"",
    luas:"",
    ph_air:"",
    tabur_benih:"",
    id: 0,
  };

  constructor(props){
    super(props);

    var tambak = props.navigation.getParam('tambak');
    this.state = {
      nama_tambak : tambak.nama_tambak,
      banyak_kincir: tambak.banyak_kincir,
      ketinggian: tambak.ketinggian,
      luas: tambak.luas,
      ph_air: tambak.ph_air,
      tabur_benih: tambak.tabur_benih,
      id : tambak.id,
    }
  }

  save_press(){
    firebase.firestore()
    .collection('Tambak')
    .doc(this.state.id).update(
      {
        nama_tambak : this.state.nama_tambak,
        banyak_kincir: this.state.banyak_kincir,
        ketinggian: this.state.ketinggian,
        luas: this.state.luas,
        ph_air: this.state.ph_air,
        tabur_benih: this.state.tabur_benih,
        updatedAt : firebase.firestore.FieldValue.serverTimestamp()
      }
    );
    this.props.navigation.navigate("InputSuccsess");
  }


  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.popToTop()}>
            <IonIcons name="md-arrow-round-back" size={32} color="#FFF"></IonIcons>
          </TouchableOpacity>
          <Text style={styles.headerText}>ePonds</Text>
        </View>
        {/* Daftar Input */}
        <View style={styles.content}>
          {/* Judul Page */}
          <Text style={styles.tittlecontent}>Edit Tambak</Text>
            {/* Nama Tambak */}
            {/* Form nama tambak */}
            <View style={styles.inputContainer}>
              <Text size={28} color='#fe612c'
                style={styles.inputTitle}>Nama Tambak</Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                onChangeText={nama_tambak => this.setState({ nama_tambak })}
                value={this.state.nama_tambak}
               />
              <View style={styles.btnSatuan}>
              </View>
            </View>
            {/* form luas tambak */}
            <View style={styles.inputContainer}>
              <Text size={28} color='#fe612c'
                style={styles.inputTitle}>Luas Tambak</Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                keyboardType="numeric"
                onChangeText={luas => this.setState({ luas })}
                value={this.state.luas}
              />
              <View style={styles.btnSatuan}>
                <Text>m2</Text>
              </View>
            </View>
            {/* form tabur benih awal */}
            <View style={styles.inputContainer}>
              <Text size={28} color='#fe612c'
                style={styles.inputTitle}>Tabur Benih Awal</Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                keyboardType="numeric"
                onChangeText={tabur_benih => this.setState({ tabur_benih })}
                value={this.state.tabur_benih}
              />
              <View style={styles.btnSatuan}>
                <Text>ekor</Text>
              </View>
            </View>
            {/* form ketingggian air */}
            <View style={styles.inputContainer}>
              <Text size={28} color='#fe612c'
                style={styles.inputTitle}>Ketinggian Air</Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                keyboardType="numeric"
                onChangeText={ketinggian => this.setState({ ketinggian })}
                value={this.state.ketinggian}
              />
              <View style={styles.btnSatuan}>
                <Text>cm</Text>
              </View>
            </View>
            {/* form pH Air */}
            <View style={styles.inputContainer}>
              <Text size={28} color='#fe612c'
                style={styles.inputTitle}>pH Air</Text>
              <TextInput
                style={styles.input}
                underlineColorAndroid='transparent'
                keyboardType="numeric"
                onChangeText={ph_air => this.setState({ ph_air })}
                value={this.state.ph_air}
              />
              <View style={styles.btnSatuan}>
              </View>
            </View>
            {/* form banyak kincir */}
            <View style={styles.inputContainer}>
              <Text size={28} color='#fe612c'
                style={styles.inputTitle}>Banyak Kincir </Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                underlineColorAndroid='transparent'
                onChangeText={banyak_kincir => this.setState({ banyak_kincir })}
                value={this.state.banyak_kincir}
              />
              <View style={styles.btnSatuan}>
              </View>
            </View>
          {/* button buat submit form */}
          <TouchableOpacity style={styles.submitBtn} onPress={() => this.save_press()}>
              <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    alignSelf: "center",
  },
  content: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#fff',
    padding: 10,
  },
  tittlecontent: {
    color: '#fe612c',
    paddingTop: 10,
    marginLeft:10,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  header : {
    height: 60,
    width: '100%',
    backgroundColor: '#fe612c',
  },
  
  headerText: {
    position: "absolute",
      color: 'white',
      fontSize: 25,
      alignSelf: "center",
      justifyContent: "center",
      fontWeight: 'bold',
      bottom: 15,
  },
  backBtn : {
      position: "absolute",
      top: 15,
      left: 20,
      color: '#fff',
      height: 32,
      width: 32,
      borderRadius:16,
  },
  btnSatuan: {
    position: 'absolute',
    top: 35,
    right: 35,
    fontWeight: "bold",
    color: '#000000',
    fontSize: 100,
  },
  input: {
    width: WIDHT - 75,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    marginHorizontal:25,
    marginTop: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000000',
  },
  inputTitle: {
    position: 'absolute',
    marginLeft: 30,
    color: '#fe612c',
    fontWeight: "bold",
    fontSize: 18,
  },
  inputContainer: {
    marginTop: 10,
  },
  submitBtn:{
    backgroundColor: '#fe612c',
    height: 50,
    width: 325,
    top: 5,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText:{
    color: '#ffffff',
    fontSize: 25,
    fontWeight: "bold",
    top: 5,
    textAlign: "center",
  },
});