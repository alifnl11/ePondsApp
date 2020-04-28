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

import bgImage from '../images/bgImage.jpg'
import Logo from '../images/logo.jpg'
import IonIcons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const { width: WIDHT } = Dimensions.get('window')

export default class LoginScreen extends React.Component {
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
    .then(this.props.navigation.navigate("Loading"))
    .catch(error => this.setState({errorMessage: error.message}));
  };
  
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        {/* Logo Aplikasi */}
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} />
          {/* Type user login */}
          <Text style={styles.logoText}>Login</Text>
          <Text style={styles.logoText}>Pemilik Tambak</Text>
        </View>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
        </View>
         {/* Form Email */}
        <View style={styles.inputContainer}>
          <FontAwesome name='user' size={28} color='#fe612c'
            style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Email'}
            placeholderTextColor={'rgba(255, 255, 255, 1)'}
            underlineColorAndroid='transparent'
            autoCapitalize="none"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />
        </View>
         {/* Form Passowrd */}
        <View style={styles.inputContainer}>
          <FontAwesome name='lock' size={28} color='#fe612c'
            style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255, 255, 255, 1)'}
            underlineColorAndroid='transparent'
            onChangeText={password => this.setState({password})}
            value={this.state.password}
          />
          <TouchableOpacity style={styles.btnEye}
            onPress={this.showPass.bind(this)}>
            <IonIcons name={this.state.press == false ? 'md-eye' : 'md-eye-off'} size={28} color='#333' />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={this.handleLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: 27,
  },
  logoContainer: {
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
  }
});