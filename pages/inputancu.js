import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Picker,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons'
const { width: WIDHT } = Dimensions.get('window')
import Fire from '../fire'

export default class InputAncu extends React.Component{
  state = {
    ancu: {
      jumlah_populasi: 0,
      densitas: 0,
      jenis_pakan: 0,
      adg: 0,
      fcr: 0,
      berat_seluruh_udang: 0,
      jumlah_udang: 0,
      luas_ancu: 0,
      banyak_pakan: 0,
    }
  };

  handlePost = () => {
    Fire.shared
    .addAncu({ 
      nama_tambak: this.state.nama_tambak,
      densitas: this.state.densitas,
      jenis_pakan: this.state.jenis_pakan,
      banyak_pakan: this.state.banyak_pakan,
      adg: this.state.adg,
      berat_seluruh_udang: this.state.berat_seluruh_udang,
      jumlah_udang: this.state.jumlah_udang,
    })
    .then(ref => {
      this.setState({ 
      nama_tambak: "",
      densitas: "",
      jenis_pakan: "",
      banyak_pakan: "",
      adg: "",
      berat_seluruh_udang: "",
      jumlah_udang: "",
    });
      this.props.navigation.navigate("InputSuccsess");
    })
    .catch(error => {
      alert(error);
    });
  };

  componentDidMount () {
    const currentAncu = this.props.navigation.getParam('ancu');
    console.log(currentAncu);

    if(currentAncu) {
      this.setState(prevState => ({ancu: prevState.ancu = currentAncu}))
    }
  }

  render() {
    return (
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.popToTop()}>
            <IonIcons name="md-arrow-round-back" size={32} color="#FFF"></IonIcons>
          </TouchableOpacity>
          <Text style={styles.headerText}>ePonds</Text>
        </View>
        {/* content */}
        <View style={styles.container}>
          {/* Daftar Input */}
          <View style={styles.content}>
            {/* Judul Page */}
            <Text style={styles.tittlecontent}>Input Ancu</Text>
              {/*  Form Nama Tambak */}
              <View style={styles.inputContainer}>
                <Text size={28} color='#fe612c'
                  style={styles.inputTitle}>Nama Tambak</Text>
                <TextInput
                  style={styles.input}
                  placeholder={'Nama Tambak'}
                  placeholderTextColor={'rgba(255, 255, 255, 1)'}
                  underlineColorAndroid='transparent'
                  autoCapitalize="none"
                  onChangeText={nama_tambak => this.setState({nama_tambak})}
                  value={this.state.nama_tambak}
                />
                <View style={styles.btnSatuan}>
                  <Text>m2</Text>
                </View>
              </View>
              {/* Form Densitas */}
              <View style={styles.inputContainer}>
                <Text size={28} color='#fe612c'
                  style={styles.inputTitle}>Densitas</Text>
                <TextInput
                  style={styles.input}
                  placeholder={'Densitas'}
                  placeholderTextColor={'rgba(255, 255, 255, 1)'}
                  underlineColorAndroid='transparent'
                  autoCapitalize="none"
                  onChangeText={densitas => this.setState({densitas})}
                  value={this.state.densitas}
                />
                <View style={styles.btnSatuan}>
                  <Text>m2</Text>
                </View>
              </View>
              {/* Form Jenis */}
              <View style={styles.inputContainer}>
                <Text size={28} color='#fe612c'
                  style={styles.inputTitle}>Jenis Pakan</Text>
                {/* List Item yang di ambil */}
                <Picker
                style={styles.input}
                placeholderTextColor={'rgba(255, 255, 255, 1)'}
                underlineColorAndroid='transparent'
                autoCapitalize="none"
                selectedValue={this.state.jenis_pakan}
                onValueChange={(itemValue, itemIndex) => this.setState({jenis_pakan: itemValue})}
                value={this.state.jenis_pakan}
                >
                  <Picker.Item label="Pilih jenis Pakan" value=""/>
                  <Picker.Item label="PKN1" value="pkn_1"/>
                  <Picker.Item label="PKN2" value="pkn_2"/>   
                </Picker> 
                <View style={styles.btnSatuan}>
                  <Text></Text>
                </View>
              </View>
              {/* Form Adg */}
              <View style={styles.inputContainer}>
                <Text size={28} color='#fe612c'
                  style={styles.inputTitle}>ADG</Text>
                <TextInput
                 style={styles.input}
                 placeholder={'ADG'}
                 placeholderTextColor={'rgba(255, 255, 255, 1)'}
                 underlineColorAndroid='transparent'
                 autoCapitalize="none"
                 onChangeText={adg => this.setState({adg})}
                 value={this.state.adg}
                />
                <View style={styles.btnSatuan}>
                  <Text></Text>
                </View>
              </View>

              {/* Form fcr */}
              <View style={styles.inputContainer}>
                <Text size={28} color='#fe612c'
                  style={styles.inputTitle}>FCR</Text>
                <TextInput
                  style={styles.input}
                  placeholder={'FCR'}
                  placeholderTextColor={'rgba(255, 255, 255, 1)'}
                  underlineColorAndroid='transparent'
                  autoCapitalize="none"
                  onChangeText={fcr => this.setState({fcr})}
                  value={this.state.fcr}
                />
                <View style={styles.btnSatuan}>
                <Text></Text>
                </View>
              </View>

              {/* Form berat seluruh udang */}
              <View style={styles.inputContainer}>
                <Text size={28} color='#fe612c'
                  style={styles.inputTitle}>Total Berat Udang</Text>
                <TextInput
                  style={styles.input}
                  placeholder={'Total Berat Udang Ancu'}
                  placeholderTextColor={'rgba(255, 255, 255, 1)'}
                  underlineColorAndroid='transparent'
                  onChangeText={berat_seluruh_udang => this.setState({berat_seluruh_udang})}
                  value={this.state.berat_seluruh_udang}
                />
                  <View style={styles.btnSatuan}>
                  <Text></Text>
                  </View>
              </View>

              {/* Form jumlah udang */}
              <View style={styles.inputContainer}>
                <Text size={28} color='#fe612c'
                  style={styles.inputTitle}>Jumlah Udang</Text>
                <TextInput
                  style={styles.input}
                  placeholder={'Jumlah Udang'}
                  placeholderTextColor={'rgba(255, 255, 255, 1)'}
                  underlineColorAndroid='transparent'
                  onChangeText={jumlah_udang => this.setState({jumlah_udang})}
                  value={this.state.jumlah_udang}
                />
                <View style={styles.btnSatuan}>
                  <Text></Text>
                </View>
              </View>
              {/* Button untuk submit form */}
              <TouchableOpacity style={styles.submitBtn} onPress={this.handlePost}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    width: 355,
    top: 5,
    alignSelf: "center",
    marginTop: 5,
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