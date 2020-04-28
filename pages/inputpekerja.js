import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const { width: WIDHT } = Dimensions.get('window')
import Fire from '../fire'
import IonIcons from 'react-native-vector-icons/Ionicons'

export default class InputPekerja extends React.Component {
  state = {
    pekerja: {
      nama_pekerja: "",
      userid:"",
      email: "",
      password: "",
      no_hp: "",
      errorMessage: null
    }
  };

  handlePost = () => {
    Fire.shared
    .addPekerja({ 
      nama_pekerja: this.state.nama_pekerja.trim(), 
      userid: this.state.userid.trim(),
      email: this.state.email.trim(),
      password: this.state.password.trim(),
      no_hp: this.state.no_hp.trim(),
      date: this.state.date,
    })
    .then(ref => {
      this.setState({ nama_pekerja: "", userid: "", email:"", password: "", no_hp:"", date: null});
      this.props.navigation.navigate("InputSuccsess");
    })
    .catch(error => {
      alert(error);
    });
  };

  componentDidMount () {
    const currentPekerja = this.props.navigation.getParam('pekerja');
    console.log(currentPekerja);

    if(currentPekerja) {
      this.setState(prevState => ({tambak: prevState.pekerja = currentPekerja}))
    }
  }
  

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.popToTop()}>
            <IonIcons name="md-arrow-round-back" size={32} color="#FFF"></IonIcons>
          </TouchableOpacity>
          <Text style={styles.headerText}>ePonds</Text>
        </View>
        {/* Daftar Input */}
        <View style={styles.content}>
          {/* Judul Page */}
          <Text style={styles.tittlecontent}>Input Pekerja</Text>

            {/* Form Nama Tambak */}
            <View style={styles.inputContainer}>
              <Text size={28} color='#fe612c'
                style={styles.inputTitle}>Nama Lengkap</Text>
              <TextInput
                style={styles.input}
                placeholder={'Nama Lengkap'}
                placeholderTextColor={'rgba(255, 255, 255, 1)'}
                underlineColorAndroid='transparent'
                autoCapitalize="none"
                onChangeText={nama_pekerja => this.setState({nama_pekerja})}
                value={this.state.nama_pekerja}
              />
            </View>
             {/* Form Nama Panggilan */}
            <View style={styles.inputContainer}>
              <Text size={28} color='#fe612c'
                style={styles.inputTitle}>User ID / Nama Panggilan</Text>
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
             {/* Form No HP */}
            <View style={styles.inputContainer}>
              <Text size={28} color='#fe612c'
                style={styles.inputTitle}>No Handphone</Text>
              <TextInput
                style={styles.input}
                placeholder={'No Handphone'}
                placeholderTextColor={'rgba(255, 255, 255, 1)'}
                underlineColorAndroid='transparent'
                autoCapitalize="none"
                onChangeText={no_hp => this.setState({no_hp})}
                value={this.state.no_hp}
              />
            </View>
             {/* Form Email */}
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
            </View>

             {/* Button untuk submit form */}
            <TouchableOpacity style={styles.submitBtn} onPress={this.handlePost}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
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