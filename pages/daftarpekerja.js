import React from 'react';
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
import Fire from '../fire'
import { FlatList } from 'react-native-gesture-handler';
import profilepicture from '../images/user.png'

export default class DaftarPekerja extends React.Component {
  state = {
    pekerjaList: [],
    selectedIndex: 0
  }

  onPekerjaReceived = (pekerjaList) => {
    console.log(pekerjaList);
    this.setState(prevState => ({
      pekerjaList: prevState.pekerjaList = pekerjaList
    }));
  }

  onPekerjaDeleted = () => {
    console.log(this.state.selectedIndex);

    var  newPekerjaList = [...this.state.pekerjaList];
    newPekerjaList.splice(this.state.selectedIndex, 1);

    this.setState(prevState => ({
      pekerjaList: prevState.pekerjaList = newPekerjaList
    }));

    this.props.navigation.popToTop();
  }

  componentDidMount() {
    Fire.shared.getPekerja(this.onPekerjaReceived)
  }

  render(){ 
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        {/* Header Aplikasi */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.popToTop()}>
            <IonIcons name="md-arrow-round-back" size={32} color="#FFF"></IonIcons>
          </TouchableOpacity>
          <Text style={styles.headerText}>ePonds</Text>
        </View>
        {/* Content Daftar Pekerja */}
        <View style={styles.content}>
          {/* Judul Page */}
          <Text style={styles.tittlecontent}>Daftar Pekerja</Text>
          {/* Array list data pekerja */}
          <FlatList 
            data={this.state.pekerjaList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              console.log(item);
              return (
                <View style={styles.maincontent}>
                  <TouchableOpacity style={styles.input} onPress={() => {
                    this.setState(prevState => ({selectedIndex: prevState.selectedIndex = index}))
                    this.props.navigation.navigate("DetailPekerja", {pekerja: item, pekerjaDeletedCallback: this.onPekerjaDeleted})
                    }}>
                  <Image source={profilepicture} style={styles.circle} />
                  <Text style={styles.nama}>{item.nama_pekerja}</Text>
                  <Text style={styles.email}>{item.email}</Text>
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
  maincontent: {
    backgroundColor: '#F5F5F5',
    width: null,
    height: 110,
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
  circle: {
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
  nama: {
    position: "absolute",
    fontSize: 25,
    fontWeight: "bold",
    left: 100,
    top: 15,
  },
  email: {
    position: "absolute",
    fontSize: 15,
    left: 100,
    top: 45,
  },
  inputTitle: {
    position: 'absolute',
    marginLeft: 30,
    color: '#fe612c',
    fontWeight: "bold",
    fontSize: 18,
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