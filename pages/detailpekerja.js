import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import IonIcons from 'react-native-vector-icons/Ionicons'
import profilepicture from '../images/profilepicture.jpeg'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import firebase from 'firebase'
import { deletePekerja } from '../action';
const { width: WIDHT } = Dimensions.get('window')

export default class Detail extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // bikin state buat ngenampung objek tambak yang dipilih
      selectedPekerja: {},
      ancuList: [],
      // ini gua bikin begini biar clean code
      // juga memang harus nya kaya gini sih
      // callback deleteTambak dari page sebelumnya disimpen disini...
      onPekerjaDelete: undefined,
    };
    // oh sekalian googling bedanya arrow function sama normal function kalo di class based component
    // gimana, terutama scopenya
  }

  // deleteTambak() -> gua biasanya bikin fungsi di classnya sendiri buat crud dsb

  // fungsi getAncuTambak nerima parameter id
  // pelajari lagi fundamental ngoding c sama js
  getAncuPekerja = async id => {
    let tempList = [];

    var snapshot = await firebase
      .firestore()
      .collectionGroup('Ancu')
      .where('nama_pekerja', '==', id)
      .get()
      .then(snapshot => {
        snapshot.forEach((doc) => {
          tempList.push(doc.data())
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
    // Sesuain sama keluaran data si snapshot
    // langsung aja masukin data hasil query ke dalem state
    this.setState({
      ...this.state,
      ancuList: tempList,
    });
  };

  // ini bakalan running ketika komponen pertama kali di render
  // jadi biasanya dimanfaatin buat nge get data dari API
  componentDidMount() {
    // ini item yang didapet dari daftar item di page sebelumnya
    const pekerjaItem = this.props.navigation.getParam('pekerja');
    const onPekerjaDeleted = this.props.navigation.getParam(
      'pekerjaDeletedCallback',
    );

    // biasakan kalo nge setState pake rule immutability (googling) biar ga rusak statenya
    // ini yang titik tiga itu spread operator namanya (pelajari lip)
    this.setState({
      ...this.state,
      selectedPekerja: pekerjaItem,
      onPekerjaDelete: onPekerjaDeleted,
    });

    // Ambil reference id nya dalem objek tambakItem
    this.getAncuPekerja(pekerjaItem.id);
  }
  render(){
    const {selectedPekerja, ancuList, onPekerjaDelete} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {/* Header Atas */}
          <View style={styles.boxAtas}>    
            <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.goBack()}>
              <IonIcons name="md-arrow-round-back" size={32} color="#FFF"></IonIcons>
            </TouchableOpacity>
            {/* Profile Picture */}
            <Image source={profilepicture} style={styles.circle} />
          </View>
          {/* Informasi Pekerja */}
          <View style={styles.nameBox} >
            <View style={styles.column}>
              <Text style={styles.textName}>{selectedPekerja.nama_pekerja}</Text>
              <View style={styles.row}>
                <Text style={styles.subtextemail}>{selectedPekerja.email}</Text>
                <Text style={styles.subtextno_hp}>{selectedPekerja.no_hp}</Text>
              </View>
            </View>
          </View>
          {/* Button untuk fungsi delete */}
          <View style={styles.btnLogout}>
            <TouchableOpacity
                onPress={() => 
                  Alert.alert(
                    'Delete?',
                    'cannot be undone',
                    [
                      {text: 'Cancel'},
                      {text: 'OK', onPress: () => {deletePekerja(selectedPekerja, onPekerjaDelete)} }
                    ],
                    {cancelable: false },
                  )}>
              <Entypo style={styles.logoutLogo} name="trash" size={25} color="#000"></Entypo>
              <Text style={styles.historiText}>Hapus Akun</Text>
            </TouchableOpacity>
          </View>
          {/* Content 2 */}
          <View style={styles.content2}>
            <Text style={styles.flatcontent}>Ancu Histori</Text>
            {/* Array list data ancu */}
            <FlatList 
              data={ancuList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item , index}) => {
                console.log(item);
                return (
                  <View style={styles.flatlist}>
                    <TouchableOpacity style={styles.inputlist} onPress={() => this.props.navigation.navigate("DetailTambak", {tambak: item})}>
                      <MaterialCommunityIcons name="folder-plus" size={35} style={styles.btnFolder}/>
                      <Text style={styles.nama}>{item.nama_tambak}</Text>
                      <Text style={styles.date}>{item.date}</Text>
                    </TouchableOpacity>
                  </View>
                )
              }}
            />
          </View>
        </View>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#f8f8f8',
  },
  boxAtas: {
    height: 105,
    width: null,
    backgroundColor: '#fe612c',
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 150/2,
    borderColor: '#fe612c',
    borderWidth: 5,
    backgroundColor: '#fff',
    marginTop: 25,
    marginLeft: 140,
  },
  nameBox: {
    marginTop: 90,
    marginBottom: 15,
  },
  textName: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtextemail: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  subtextno_hp: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft:20,
  },
  btnLogout: {
    alignSelf: "center",
    width: 200,
    height: 50,
    backgroundColor: '#fe612c',
    marginLeft: 5,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  logoutLogo: {
    position: 'absolute',
    top: 8,
    left: 23,
    color: '#fff',
  },
  historiText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: "bold",
    top: 7,
    left: 57,
  },
  content2: {
    marginTop: 15,
    marginLeft: 10,
    backgroundColor: '#FFFFFF',
    width: 415,
    height: 370,
  },
  titletext:{
    marginTop: 15,
    marginLeft: 30,
    marginBottom: 15,
    color: '#fe612c',
    fontWeight: "bold",
    fontSize: 25,
  },
  textContent: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 30,
    width: 120,
    color: '#000',
    fontWeight: "bold",
    fontSize: 17,
  },
  textContent2: {
    marginRight: 30,
    fontWeight: "bold",
    fontSize: 17,
  },
  column: {
    flexDirection: "column",
  },  
  row: {
    flexDirection: "row",
    alignSelf: "center",
  },
  rowBtn: {
    flexDirection: "row",
    justifyContent: "center",
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
nama: {
  position: "absolute",
  fontSize: 25,
  fontWeight: "bold",
  left: 75,
  top: 15,
},
date: {
  position: "absolute",
  fontSize: 15,
  left: 75,
  top: 45,
},
flatlist: {
  backgroundColor: '#FFFFFF',
  width: null,
  height: 110,
},
inputlist: {
  marginTop: 10,
  width: WIDHT - 75,
  height: 90,
  fontSize: 16,
  paddingLeft: 45,
  marginHorizontal:25,
  backgroundColor: "#ffff",
  borderRadius: 5, 
  borderWidth: 0.5,
  borderColor: '#000000',
},
btnFolder: {
  color: '#fe612c', 
  position: "absolute",
  top:25,
  left: 25,
},
flatcontent: {
  marginTop: 10,
  marginLeft:20,
  textAlign: "left",
  fontSize: 25,
  fontWeight: "bold",
},
});