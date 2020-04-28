import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as firebase from 'firebase'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import bgImage from '../images/bgImage.jpg'
import Logo from '../images/logo.jpg'
import IonIcons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const { width: WIDHT } = Dimensions.get('window')

export default class ChooseSign extends React.Component {
  static navigationOptions ={
    headerShown: false,
  };
  state = {
    email: "",
    password: "",
    errorMessage: null
  };
  constructor() {
        super()
        this.state = {  
          showPass: true,
          press: false
        }
      }
    
  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true })
    } else {
      this.setState({ showPass: true, press: false })
    }
  }

  handleLogin = () => {
    const {email, password} = this.state

    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => this.setState({errorMessage: error.message}));
  };
  
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.logoText}>Eponds</Text>
        </View>

        {/* Isi dari content aplikasi */}
        <View style={styles.maincontent}>
          {/* Content 1 */}
            <TouchableOpacity style={styles.inputAncu} onPress={() => this.props.navigation.navigate("Login")} >
                <FontAwesome5 name='user-tie' size={40} color='#ffffff' style={styles.btnPlus} />
                <Text style={styles.textAncu}>Login Manajer</Text>
            </TouchableOpacity>
          {/* Content 2 */}
            <TouchableOpacity style={styles.inputAncu} onPress={() => this.props.navigation.navigate("LoginPekerja")} >
                <FontAwesome5 name='users' size={40} color='#ffffff' style={styles.btnPlus} />
                <Text style={styles.textAncu}>Login Pekerja</Text>
            </TouchableOpacity>
        </View>
        
        {/* Button untuk register */}
        <TouchableOpacity style={styles.tambahAncu} onPress={() => this.props.navigation.navigate("Registrasi")}>
          <FontAwesome5 name='plus' size={25} color='#ffffff' style={styles.btnTambah} />
          <Text style={styles.textTambah}>Register</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    maincontent: {
        justifyContent: "center",
        flexDirection: "row",
      }, 
      content: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: '#fff',
        padding: 10,
      },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
  },  
  error: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },  
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: 27,
  },
  logoContainer: {
    marginTop: 150,
    alignItems: 'center',
    marginBottom: 50,
  },
  logoText: {
    color: '#fe612c',
    fontSize: 30,
    fontWeight: '500',
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 10,
  },
  input: {
    width: WIDHT - 75,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 37
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 37
  },
  btnLogin: {
    width: WIDHT - 75,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#fe612c',
    justifyContent: 'center',
    marginTop: 20
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
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
        marginLeft: 55,
        marginRight: 55,
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