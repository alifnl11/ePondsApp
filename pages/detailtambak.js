import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import tambakpicture from '../images/tambak.jpeg';
import firebase from 'firebase';
import Fire from '../fire';
const {width: WIDHT} = Dimensions.get('window');
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {deleteTambak} from '../action';

export default class DetailTambak extends React.Component {
  // Biasain nulis constructor di class based component
  // buat ngedefine scope dari props
  // pelajari lagi soal class based componentnya react js
  constructor(props) {
    super();
    this.state = {
      // bikin state buat ngenampung objek tambak yang dipilih
      selectedTambak: {},
      ancuList: [],
      // ini gua bikin begini biar clean code
      // juga memang harus nya kaya gini sih
      // callback deleteTambak dari page sebelumnya disimpen disini...
      onTambakDelete: undefined,
    };
    // oh sekalian googling bedanya arrow function sama normal function kalo di class based component
    // gimana, terutama scopenya
  }

  // deleteTambak() -> gua biasanya bikin fungsi di classnya sendiri buat crud dsb

  // fungsi getAncuTambak nerima parameter id
  // pelajari lagi fundamental ngoding c sama js
  getAncuTambak = async id => {
    let tempList = [];

    var snapshot = await firebase
      .firestore()
      .collectionGroup('Ancu')
      .where('nama_tambak', '==', id)
      .get()
      .then(snapshot => {
        snapshot.forEach((doc) => {
          tempList.push(doc.data())
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
    // Sesuain sama keluaran data si snapshot
    // langsung aja masukin data hasil query ke dalem state
    this.setState({
      ...this.state,
      ancuList: tempList,
    });
  };

  show_pH(){
    return (
      <View style={styles.insightlist}>
        <Text style={styles.textBox}>pH pada tambak dibawah 8, harus segera tingkatkan</Text>
      </View>
    );
  }

  show_salinitas(){
    return (
      <View style={styles.insightlist}>
        <Text style={styles.textBox}>salinitas tambak diluar kondisi optimal yaitu antara 15-25 ppt</Text>
      </View>
    );
  }

  show_suhu(){
    return (
      <View style={styles.insightlist}>
        <Text style={styles.textBox}>suhu pada tambak diluar kondisi optimal yaitu antara 26 C - 30 C</Text>
      </View>
    );
  }

  show_DO(){
    return (
      <View>
        <Text style={styles.alert}>suhu tambak diluar suhu optimal yaitu antara 26c - 30C</Text>
      </View>
    );
  }

  show_amonia(){
    return (
      <View>
        <Text style={styles.alert}>suhu tambak diluar suhu optimal yaitu antara 26c - 30C</Text>
      </View>
    );
  }

  show_nitrit(){
    return (
      <View>
        <Text style={styles.alert}>suhu tambak diluar suhu optimal yaitu antara 26c - 30C</Text>
      </View>
    );
  }

  show_adg(){
    return (
      <View>
        <Text style={styles.alert}>suhu tambak diluar suhu optimal yaitu antara 26c - 30C</Text>
      </View>
    );
  }

  show_fcr(){
    return (
      <View>
        <Text style={styles.alert}>suhu tambak diluar suhu optimal yaitu antara 26c - 30C</Text>
      </View>
    );
  }


  componentDidMount() {
    const tambakItem = this.props.navigation.getParam('tambak');
    const onTambakDeleted = this.props.navigation.getParam(
      'tambakDeletedCallback',
    );

    this.setState({
      ...this.state,
      selectedTambak: tambakItem,
      onTambakDelete: onTambakDeleted,
    });

    // Ambil reference id nya dalem objek tambakItem
    this.getAncuTambak(tambakItem.id);
  }

  render() {
    const {selectedTambak, ancuList, onTambakDelete} = this.state;
    let insight_pH, insight_salinitas, insight_suhu;
    if ( 6.5 < selectedTambak.ph_air < 8) {
      insight_pH = <this.show_pH />;
    };
    if ( 15 < selectedTambak.salinitas < 25) {
      insight_salinitas = <this.show_salinitas />;
    };
    if ( 26 < selectedTambak.suhu < 30) {
      insight_suhu = <this.show_suhu />;
    };
    console.log(selectedTambak.salinitas)
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => this.props.navigation.goBack()}>
              <IonIcons
                name="md-arrow-round-back"
                size={32}
                color="#FFF"></IonIcons>
            </TouchableOpacity>
            <Text style={styles.headerText}>ePonds</Text>
          </View>
          <ScrollView>
          {/* Daftar Input */}
            <View style={styles.content}>
          {/* Judul Page */}
              <Image source={tambakpicture} style={styles.photo} />
              <TouchableOpacity
              style={styles.logoedit}
              onPress={() =>
                this.props.navigation.navigate('EditTambak', {
                  tambak: selectedTambak,
                })
              }>
              <FontAwesome5
                style={styles.edit}
                name="edit"
                size={27}
                color="#000"></FontAwesome5>

            </TouchableOpacity>
              <TouchableOpacity
              style={styles.logodelete}
              onPress={() =>
                Alert.alert(
                  'Delete?',
                  'cannot be undone',
                  [
                    {text: 'Cancel'},
                    {
                      text: 'OK',
                      onPress: () => {
                        deleteTambak(selectedTambak, onTambakDelete);
                      },
                    },
                  ],
                  {cancelable: false},
                )
              }>
              {/* Logo delete */}
              <Entypo
                style={styles.delete}
                name="trash"
                size={27}
                color="#000"></Entypo>
            </TouchableOpacity>

            <View style={styles.boxcontent} marginTop={20}>
              <Text style={styles.namatambak}>
                  {selectedTambak.nama_tambak}
              </Text>
              <Text style={styles.tittlecontent}>Insight</Text>
                {insight_pH}
                {insight_salinitas}
                {insight_suhu}
              <Text style={styles.tittlecontent}>Informasi Tambak</Text>
              <Text style={styles.textBox}>
                Ukuran tambak {selectedTambak.luas}
              </Text>
              <Text style={styles.textBox}>
                Banyak kincir: {selectedTambak.banyak_kincir}
              </Text>
              <Text style={styles.textBox}>
                Ketinggian Air: {selectedTambak.ketinggian} cm
              </Text>
              <Text style={styles.textBox}>pH Air: {selectedTambak.ph_air}</Text>
              <Text style={styles.textBox}>
                Tabur Benih Awal: {selectedTambak.tabur_benih}
              </Text>
            </View>
            {/* Array list data ancu */}
            <Text style={styles.datainput}>Data Input Ancu</Text>
            <FlatList
              data={ancuList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                console.log(item);
                return (
                  <View style={styles.flatlist}>
                    <TouchableOpacity
                      style={styles.inputlist}
                      onPress={() =>
                        this.props.navigation.navigate('DetailAncu', {ancu: item})
                      }>
                      <MaterialCommunityIcons
                        name="folder-plus"
                        size={35}
                        style={styles.btnFolder}
                      />
                      <Text style={styles.nama}>{item.nama_tambak}</Text>
                      <Text style={styles.date}>{item.date}</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
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
  photo: {
    width: 435,
    height: 200,
    backgroundColor: '#fff',
  },
  logoedit: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
    borderColor: '#000',
    borderWidth: 0.5,
    backgroundColor: '#fff',
    top: 175,
    left: 300,
  },
  edit: {
    alignSelf: 'center',
    top: 10,
    left: 2,
    color: '#8D8D8C',
  },
  logodelete: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 150 / 2,
    borderColor: '#000',
    borderWidth: 0.5,
    backgroundColor: '#fff',
    top: 175,
    left: 358,
  },
  delete: {
    alignSelf: 'center',
    top: 10,
    left: 1,
    color: '#8D8D8C',
  },
  content: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#fff',
  },
  tittlecontent: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  datainput: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 30,
  },
  boxcontent: {
    marginLeft: 30,
    textAlign: 'left',
  },
  namatambak: {
    marginRight: 30,
    color: '#fe612c',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  textBox: {
    color: '#000000',
    fontSize: 15,
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#fe612c',
  },
  headerText: {
    position: 'absolute',
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    bottom: 15,
  },
  backBtn: {
    position: 'absolute',
    top: 15,
    left: 20,
    color: '#fff',
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  btnSatuan: {
    position: 'absolute',
    top: 35,
    right: 35,
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 100,
  },
  input: {
    width: WIDHT - 75,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    marginHorizontal: 25,
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
    fontWeight: 'bold',
    fontSize: 18,
  },
  inputContainer: {
    marginTop: 10,
  },
  submitBtn: {
    backgroundColor: '#fe612c',
    height: 50,
    width: 325,
    top: 5,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  submitText: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    top: 5,
    textAlign: 'center',
  },
  nama: {
    position: 'absolute',
    fontSize: 25,
    fontWeight: 'bold',
    left: 75,
    top: 15,
  },
  date: {
    position: 'absolute',
    fontSize: 15,
    left: 75,
    top: 45,
  },
  flatlist: {
    backgroundColor: '#FFFFFF',
    width: null,
    height: 110,
    alignSelf: 'center',
  },
  inputlist: {
    marginTop: 10,
    width: WIDHT - 75,
    height: 90,
    fontSize: 16,
    marginHorizontal: 25,
    backgroundColor: '#ffff',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#000000',
  },
  btnFolder: {
    color: '#fe612c',
    position: 'absolute',
    top: 25,
    left: 25,
  },
  flatcontent: {
    marginTop: 10,
    marginLeft: 20,
    textAlign: 'left',
    fontSize: 25,
    fontWeight: 'bold',
  },
  alert:{
    color: '#000000',
    fontSize: 15,
  },
  insightlist: {
    marginTop: 10,
    width: 375,
    height: 60,
    fontSize: 19,
    padding: 10,
    backgroundColor: '#ffff',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#000000',
    fontWeight: "bold",
  },
});
