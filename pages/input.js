import React, { Component } from 'react';
import Header from '../component/header';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


export default class Input extends React.Component {
  static navigationOptions ={
    headerShown: false,
  };
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
        <Text style={styles.tittlecontent}>My Dasboard</Text>
        {/* Content 1 */}
          <View style={styles.maincontent}>
            {/* Button Daftar tambak */}
            <TouchableOpacity style={styles.inputAncu} onPress={() => this.props.navigation.navigate("DaftarTambak")} >
              <FontAwesome5 name='water' size={40} color='#ffffff' style={styles.btnPlus} />
              <Text style={styles.textAncu}>Daftar Tambak</Text>
            </TouchableOpacity>
            {/* Button Daftar pekerja */}
            <TouchableOpacity style={styles.inputAncu} onPress={() => this.props.navigation.navigate("DaftarPekerja")} >
              <FontAwesome5 name='users' size={40} color='#ffffff' style={styles.btnPlus} />
              <Text style={styles.textAncu}>Daftar Pekerja</Text>
            </TouchableOpacity>
          </View>

          {/* Button input pekerja */}
          <TouchableOpacity style={styles.tambahAncu} onPress={() => this.props.navigation.navigate("InputTambak")}>
            <FontAwesome5 name='plus' size={25} color='#ffffff' style={styles.btnTambah} />
            <Text style={styles.textTambah}>Input Tambak</Text>
          </TouchableOpacity>

          {/* Button input pekerja */}
          <TouchableOpacity style={styles.tambahAncu} onPress={() => this.props.navigation.navigate("InputPekerja")} >
            <FontAwesome5 name='plus' size={25} color='#ffffff' style={styles.btnTambah} />
            <Text style={styles.textTambah}>Input Pekerja</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tittlecontent: {
    color: '#fe612c',
    paddingTop: 10,
    marginLeft:10,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 15,
  },
  content: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#fff',
    padding: 10,
  },
  maincontent: {
    justifyContent: "center",
    flexDirection: "row",
  },  
  inputAncu:{
    paddingBottom: 10,
    backgroundColor: '#fe612c',
    height: 150,
    width: 150,
    marginLeft: 10,
    marginRight: 10,
    marginTop:10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  textAncu:{
    color: '#ffffff',
    fontSize: 25,
    fontWeight: "bold",
    top: 5,
    left: 15,
    textAlign: "left",
  },
  btnPlus: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    },
    tambahAncu:{
      paddingBottom: 10,
      backgroundColor: '#fe612c',
      height: 50,
      marginLeft: 25,
      marginRight: 25,
      marginTop:15,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#fff'
    },
    textTambah:{
      color: '#ffffff',
      fontSize: 25,
      fontWeight: "bold",
      top: 5,
      left: 15,
      textAlign: "left",
    },
    btnTambah: {
      position: 'absolute',
      top: 10,
      right: 10,
      },
});
