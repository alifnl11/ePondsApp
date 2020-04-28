import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Fire from '../fire'
const { width: WIDHT } = Dimensions.get('window')
import firebase from 'firebase';
import IonIcons from 'react-native-vector-icons/Ionicons'

export default class InputPekerja extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  state = {
    name: "",
    userid:"",
    nama_perusahaan:"",
    alamat:"",
    email: "",
    password: "",
    errorMessage: null
  }
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
  handleSignUp = () => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            });
        })
        .catch(error => this.setState({errorMessage: error.message}));
  };
  handlePost = () => {
    Fire.shared
    .addManajer({ 
      name: this.state.name,
      userid: this.state.userid.trim(),
      nama_perusahaan: this.state.nama_perusahaan,
      alamat: this.state.alamat,
      email: this.state.email.trim(),
      password: this.state.password.trim(),
      date: this.state.date,
    })
    .then(ref => {
      this.setState({ name: "", userid: "", nama_perusahaan: "", alamat: "",email:"", password: "", date: null});
    })
    .catch(error => {
      alert(error);
    });
  };
  render(){
    return (
      <View style={styles.container}>
        {/* Header Aplikasi */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.goBack()}>
            <IonIcons name="md-arrow-round-back" size={32} color="#FFF"></IonIcons>
          </TouchableOpacity>
          <Text style={styles.headerText}>ePonds</Text>
        </View>
        {/* Daftar Input */}
        <View style={styles.content}>
          {/* Judul Page */}
          <Text style={styles.tittlecontent}>Registrasi</Text>
            {/* Nama Tambak */}
            <View style={styles.inputContainer}>
              <Text size={28} color='#fe612c'
                style={styles.inputTitle}>Nama Lengkap</Text>
              <TextInput
                style={styles.input}
                placeholder={'Nama Lengkap'}
                placeholderTextColor={'rgba(255, 255, 255, 1)'}
                underlineColorAndroid='transparent'
                autoCapitalize="none"
                onChangeText={name => this.setState({name})}
                value={this.state.name}
              />
            </View>
            {/* Form ID User */}
            <View style={styles.inputContainer}>
              <Text size={28} color='#fe612c'
                style={styles.inputTitle}>User ID</Text>
              <TextInput
                style={styles.input}
                placeholder={'User ID'}
                placeholderTextColor={'rgba(255, 255, 255, 1)'}
                underlineColorAndroid='transparent'
                autoCapitalize="none"
                onChangeText={userid => this.setState({userid})}
                value={this.state.userid}
              />
            </View>
            {/* Form nama perusahaan */}
            <View style={styles.inputContainer}>
              <Text size={28} color='#fe612c'
                style={styles.inputTitle}>Nama Perushaan</Text>
              <TextInput
                style={styles.input}
                placeholder={'Nama Perusahaan'}
                placeholderTextColor={'rgba(255, 255, 255, 1)'}
                underlineColorAndroid='transparent'
                autoCapitalize="none"
                onChangeText={nama_perusahaan => this.setState({nama_perusahaan})}
                value={this.state.nama_perusahaan}
              />
            </View>
            {/* Form alamat */}
            <View style={styles.inputContainer}>
              <Text size={28} color='#fe612c'
                style={styles.inputTitle}>Lokasi Tambak</Text>
              <TextInput
                style={styles.input}
                placeholder={'Alamat'}
                placeholderTextColor={'rgba(255, 255, 255, 1)'}
                underlineColorAndroid='transparent'
                autoCapitalize="none"
                onChangeText={alamat => this.setState({alamat})}
                value={this.state.alamat}
              />
            </View>
            {/* Form email */}
            <View style={styles.inputContainer}>
              <Text size={28} color='#fe612c'
                style={styles.inputTitle}>Email Address</Text>
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
            {/* Form Password */}
            <View style={styles.inputContainer}>
              <Text size={28} color='#fe612c'
                style={styles.inputTitle}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder={'Password'}
                secureTextEntry={this.state.showPass}
                placeholderTextColor={'rgba(255, 255, 255, 1)'}
                underlineColorAndroid='transparent'
                onChangeText={password => this.setState({password})}
                value={this.state.password}
              />
                {/* Button submit form */}
              <TouchableOpacity style={styles.btnEye}
                onPress={this.showPass.bind(this)}>
                <IonIcons name={this.state.press == false ? 'md-eye' : 'md-eye-off'} size={28} color='#333' />
              </TouchableOpacity>
            </View>
              <TouchableOpacity style={styles.submitBtn} onPress={this.handleSignUp}>
               <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
        </View>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  btnEye: {
    position: 'absolute',
    top: 32,
    right: 37
  },
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