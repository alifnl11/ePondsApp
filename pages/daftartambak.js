import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';

const { width: WIDHT } = Dimensions.get('window')
import IonIcons from 'react-native-vector-icons/Ionicons'
import Fire from '../fire'
import { FlatList} from 'react-native-gesture-handler';
import profilepicture from '../images/tambak.jpeg'

export default class DaftarTambak extends React.Component {
  state = {
    tambakList: [],
    selectedIndex: 0
  };
  onTambakReceived = (tambakList) => {
    console.log(tambakList);
    this.setState(prevState => ({
      tambakList: prevState.tambakList = tambakList
    }));
  }

  onTambakDeleted = () => {
    console.log(this.state.selectedIndex);

    var  newTambakList = [...this.state.tambakList];
    newTambakList.splice(this.state.selectedIndex, 1);

    this.setState(prevState => ({
      tambakList: prevState.tambakList = newTambakList
    }));

    this.props.navigation.popToTop();
  }
 
  componentDidMount() {
    Fire.shared.getTambak(this.onTambakReceived);
  }

  render(){ 
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.popToTop()}>
            <IonIcons name="md-arrow-round-back" size={32} color="#FFF"></IonIcons>
          </TouchableOpacity>
          <Text style={styles.headerText}>ePonds</Text>
        </View>
        {/* Content Daftar Tambak */}
        <View style={styles.content}>
          {/* Judul Page */}
          <Text style={styles.tittlecontent}>Daftar Tambak</Text>
          {/* Array List daftar tambak */}
          <FlatList
          data={this.state.tambakList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            console.log(item);  
            return (
              // isi Kotak setiap data
              <View style={styles.maincontent}>
                <TouchableOpacity style={styles.input} onPress={() => {
                  this.setState(prevState => ({selectedIndex: prevState.selectedIndex = index}))
                  this.props.navigation.navigate("DetailTambak", {tambak: item, tambakDeletedCallback: this.onTambakDeleted })
                }}>
                <Image source={profilepicture} style={styles.photo} />
                <Text style={styles.nama}>{item.nama_tambak}</Text>
                <Text style={styles.luas}>Ukuran :{item.luas} m2</Text>
                </TouchableOpacity>
              </View>
            )
          }}
          />
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
    paddingBottom: 30,
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
  nama: {
    position: "absolute",
    fontSize: 25,
    fontWeight: "bold",
    left: 100,
    top: 15,
  },
  luas: {
    position: "absolute",
    fontSize: 15,
    left: 100,
    top: 45,
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
    marginTop: 10,
    width: WIDHT - 75,
    height: 90,
    fontSize: 16,
    paddingLeft: 45,
    marginHorizontal:25,
    backgroundColor: "#ffff",
    borderRadius: 5, 
    borderWidth: 0.1,
    borderColor: '#000000',
  },
  maincontent: {
    backgroundColor: '#F5F5F5',
    width: null,
    height: 110,
  },
  photo: {
    width: 75,
    height: 75,
    position: "absolute",
    top:5,
    left: 5,
    borderRadius: 150/2,
    borderColor: '#fff',
    borderWidth: 2,
    backgroundColor: '#fff',
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
  textInput : {
    width: '90%',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
    borderColor: '#F5F5F5',
    borderWidth: 2,
    fontSize: 25,
  },
  touchablehighlight: {
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    alignSelf: "stretch",
    alignItems: "center",
    height: 40,
  },
  modalView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});