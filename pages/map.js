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
        {/* Content 1 */}
        <View style={styles.content}>
          {/* Content 1 */}
          <TouchableOpacity style={styles.inputAncu} onPress={() => this.props.navigation.navigate("InputTambak")}>
            <FontAwesome5 name='plus' size={25} color='#ffffff' style={styles.btnPlus} />
            <Text style={styles.textAncu}>Input Tambak</Text>
          </TouchableOpacity>
          {/* Content 2 */}
          <TouchableOpacity style={styles.inputAncu} onPress={() => this.props.navigation.navigate("InputPekerja")} >
            <FontAwesome5 name='plus' size={25} color='#ffffff' style={styles.btnPlus} />
            <Text style={styles.textAncu}>Input Pekerja</Text>
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
  },
  content: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#fff',
    padding: 10,
  },
  inputAncu:{
    paddingBottom: 10,
    backgroundColor: '#fe612c',
    height: 50,
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
    top: 10,
    right: 10,
    },
});
