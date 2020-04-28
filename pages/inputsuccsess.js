import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


export default class InputSuccsess extends React.Component {
  static navigationOptions ={
    headerShown: false,
  };

  
render(){
    return (
      <View style={styles.container}>
          {/* Content 1 */}
          {/* Box Putih */}
          <View style={styles.boxSelesai}>
            <FontAwesome5 name='check' style={styles.checkBtn} size={100}/>
            <Text style={styles.textSuccess}>Succsess</Text>
            <Text style={styles.textDetail}>Data Tambak Baru Telah Berhasil Dimasukkan</Text>
             {/* Button selesai */}
            <TouchableOpacity style={styles.inputSelesai} onPress={() => this.props.navigation.popToTop()}>
                <Text style={styles.textSelesai}>Selesai</Text>
            </TouchableOpacity>
          </View>
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    paddingBottom: 10,
    backgroundColor: '#fe612c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputSelesai:{
    position: "absolute",
    backgroundColor: '#fe612c',
    height: 50,
    width: 200,
    bottom: 25,
    left: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff'
  },
  checkBtn: {
    color: '#fe612c',
    top: 60,
    textAlign: "center",
  },
  textSuccess: {
    fontSize: 25,
    textAlign: "center",
    top: 40,
    marginTop: 20,
    fontWeight: "bold",
    color: '#fe612c',
  },
  textDetail:{
    fontSize: 20,
    textAlign: "center",
    top: 40,
    marginLeft: 10,
    fontWeight: "bold",
    color: '#fe612c',
    marginTop: 20,
  },
  boxSelesai:{
    paddingBottom: 10,
    backgroundColor: '#fff',
    height: 400,
    width: 300,
    marginLeft: 10,
    marginRight: 10,
    marginTop:10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff'
  },
  textSelesai:{
    color: '#ffffff',
    fontSize: 25,
    fontWeight: "bold",
    top: 5,
    textAlign: "center",
  },
});
