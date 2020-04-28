import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import * as firebase from 'firebase'

import Fire from '../fire'
const { width: WIDHT } = Dimensions.get('window')
import profilepicture from '../images/profilepicture.jpeg'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Profile extends React.Component {
  state = {
    email: "",
    displayName: "",
    ancuList: [],
  };
  static navigationOptions ={
    headerShown: false,
  };

    onAncuReceived = (ancuList) => {
    console.log(ancuList);
    this.setState(prevState => ({
        ancuList: prevState.ancuList = ancuList
    }));
    }


  componentDidMount() {
    const { email, displayName , nama_perusahaan , daerah } = firebase.auth().currentUser;

    this.setState({ email , displayName });
    Fire.shared.getAncu(this.onAncuReceived)
  }
  signOutUser = () => {
    firebase.auth().signOut();
  };
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {/* Header Atas */}
          {/* Content 1 */}
          <View style={styles.boxAtas}>    
            {/* Profile Picture */}
            <Image source={profilepicture} style={styles.circle} />
          </View> 
          {/* Name Profile */}
            <Text style={styles.textName}>Pekerja 1{this.state.displayName}</Text>
          {/* Log Out Button */}
          <View style={styles.rowBtn}>
            <View style={styles.btnLogout}>
            <TouchableOpacity onPress={this.signOutUser}>
            <MaterialCommunityIcons name="logout" style={styles.logoutLogo} size={35}/>
            <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
            </View>
          </View>
          {/* Content 2 */}
          <View style={styles.content2}>
            <Text style={styles.titletext}>My Ancu History</Text>
              <FlatList 
                  data={this.state.ancuList}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item , index}) => {
                    console.log(item);
                    return (
                      <View style={styles.flatlist}>
                      <TouchableOpacity style={styles.inputlist} onPress={() => this.props.navigation.navigate("Detail", {pekerja: item})}>
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
    height: 150,
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
    marginTop: 75,
    marginLeft: 140,
  },
  textName: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 85,
  },
  btnLogout: {
    width: 150,
    height: 90,
    backgroundColor: '#fe612c',
    marginLeft: 5,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  logoutLogo: {
    position: 'absolute',
    top: 10,
    left: 60,
    color: '#fff',
  },
  logoutText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: "bold",
    top: 48,
    left: 40,
  },
  historiText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: "bold",
    top: 48,
    left: 17,
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
  },
  rowBtn: {
    flexDirection: "row",
    justifyContent: "center",
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
    alignSelf: "center",
  },
  inputlist: {
    marginTop: 10,
    width: WIDHT - 75,
    height: 90,
    fontSize: 16,
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