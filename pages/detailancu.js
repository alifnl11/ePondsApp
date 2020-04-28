import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import tambakpicture from '../images/tambak.jpeg'


const { width: WIDHT } = Dimensions.get('window')
import IonIcons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { deleteAncu } from '../action';


export default class DetailAncu extends React.Component {


  render(){ 
    const ancu = this.props.navigation.getParam('ancu');
    console.log(ancu);
    const onAncuDeleted = this.props.navigation.getParam('ancuDeletedCallback');

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.goBack()}>
            <IonIcons name="md-arrow-round-back" size={32} color="#FFF"></IonIcons>
          </TouchableOpacity>
          <Text style={styles.headerText}>ePonds</Text>
        </View>
        {/* Detail tambak content */}
        <View style={styles.content}>
          {/* Judul Page */}
          {/* Bagain Atas */}
          <Image source={tambakpicture} style={styles.photo} />
            {/* Button fungsi edit */}
            <TouchableOpacity style={styles.logoedit} onPress={() => this.props.navigation.navigate('EditAncu', { ancu: ancu })}>
              <FontAwesome5 style={styles.edit} name="edit" size={27} color="#000"></FontAwesome5>
            </TouchableOpacity>
            {/* Button fungsi hapus */}
            <TouchableOpacity style={styles.logodelete} 
            onPress={() => 
            Alert.alert(
              'Delete?',
              'cannot be undone',
              [
                {text: 'Cancel'},
                {text: 'OK', onPress: () => {deleteAncu(ancu, onAncuDeleted)} }
              ],
              {cancelable: false },
            )
            }>
              <Entypo style={styles.delete} name="trash" size={27} color="#000"></Entypo>
            </TouchableOpacity>
            {/* Bagian Isi Informasi */}
            <View style={styles.boxcontent} marginTop={20}>
              <Text style={styles.namatambak}>{ancu.id_ancu}</Text>
              <Text style={styles.tittlecontent}>Informasi Tambak</Text>
              <Text style={styles.textBox}>Ukuran tambak {ancu.nama_tambak}</Text>
              <Text style={styles.textBox}>Banyak kincir: {ancu.date}</Text>
            </View>
        </View>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 400,
    height: 200,
    backgroundColor: '#fff',
  },
  logoedit: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 150/2,
    borderColor: '#000',
    borderWidth: 0.5,
    backgroundColor: '#fff',
    top: 175,
    left: 275,
  },
  edit: {
    alignSelf: "center",
    top: 10,
    left: 2,
    color: "#8D8D8C"
  },
  logodelete: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 150/2,
    borderColor: '#000',
    borderWidth: 0.5,
    backgroundColor: '#fff',
    top: 175,
    left: 333,
  },
  delete: {
    alignSelf: "center",
    top: 10,
    left: 1,
    color: "#8D8D8C",
  },
  content: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#fff',
  },
  tittlecontent: {
    color: '#000000',
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
  },
  boxcontent: {
    marginLeft:30,
    textAlign: "left",
  },
  namatambak: {
    marginRight: 30,
    color: '#fe612c',
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
  textBox: {
    color: '#000000',
    fontSize: 15,
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