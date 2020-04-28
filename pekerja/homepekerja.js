
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Image,
  Dimensions,
} from 'react-native';
import Fire from '../fire'
import { FlatList } from 'react-native-gesture-handler';
import ancopicture from '../images/anco.jpg'

const { width: WIDHT } = Dimensions.get('window')
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Header from '../component/header'

export default class HomePekerja extends React.Component {
  static navigationOptions ={
    headerShown: false,
  };

  state = {
    ancuList: [],
    }

    onAncuReceived = (ancuList) => {
    console.log(ancuList);
    this.setState(prevState => ({
        ancuList: prevState.ancuList = ancuList
    }));
    }

    onAncuDeleted = () => {
      console.log(this.state.selectedIndex);
  
      var  newAncuList = [...this.state.ancuList];
      newAncuList.splice(this.state.selectedIndex, 1);
  
      this.setState(prevState => ({
        ancuList: prevState.ancuList = newAncuList
      }));
  
      this.props.navigation.popToTop();
    }

    componentDidMount() {
        Fire.shared.getAncu(this.onAncuReceived)
    }


  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <View style={styles.container}>
        <Header />
          <View style={styles.content}>
            {/* Content 1 */}
            <TouchableOpacity style={styles.inputAncu} onPress={() => this.props.navigation.navigate("InputAncu")}>
              <FontAwesome5 name='plus' size={25} color='#ffffff' style={styles.btnPlus} />
              <Text style={styles.textAncu}>Input Ancu</Text>
            </TouchableOpacity>
            <Text style={styles.flatcontent}>Data Ancu Hari Ini</Text>
          <FlatList 
          data={this.state.ancuList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item , index}) => {
            console.log(item);
            return (
              <View style={styles.flatlist}>
              <TouchableOpacity style={styles.inputlist} onPress={() => {
                this.setState(prevState => ({selectedIndex: prevState.selectedIndex = index}))
                this.props.navigation.navigate("DetailAncu", {ancu: item, ancuDeletedCallback: this.onAncuDeleted})
            }}>
                  <Image source={ancopicture} style={styles.circle} />
                  <Text style={styles.nama}>{item.nama_tambak}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                </TouchableOpacity>
            </View>
            )
          }}
        />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#fff',
    padding: 10,
  },
  tittlecontent: {
    backgroundColor: '#fff',
    paddingTop: 10,
    marginLeft:10,
    textAlign: "left",
    fontSize: 25,
    fontWeight: "bold",
  },
  flatcontent: {
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 10,
    marginLeft:10,
    textAlign: "left",
    fontSize: 25,
    fontWeight: "bold",
  },
  maincontent: {
    backgroundColor: '#F5F5F5',
    height: 170,
    width: null,
    padding: 5,
  },
  textcontent: {
    paddingTop: 7,
    paddingBottom: 10,
    paddingRight: 10,
    textAlign: "right",
    fontSize: 18,
    color: '#fe612c',
    fontWeight: "bold",
  },
  box: {
    height:110,
    width: 110,
    padding: 10,
    backgroundColor: '#fe612c',
  },
  textBox: {
    fontSize: 19,
    fontWeight: "bold",
    color: '#fff',
  },
  numberBox: {
    marginTop: 20,
    fontSize:20,
    fontWeight: "bold",
    color: '#fff',
    textAlign: "right",
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: 'space-around',
  },
  inputAncu:{
    paddingBottom: 10,
    backgroundColor: '#fe612c',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    marginTop:20,
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
  flatlist: {
    backgroundColor: '#F5F5F5',
    width: null,
    height: 110,
  },
  photo: {
    width: 75,
    height: 75,
    position: "absolute",
    top:5,
    left: 5,
    borderRadius: 150/2,
    borderColor: '#fff',
    borderWidth: 2,
    backgroundColor: '#fff',
  },
  inputlist: {
    marginTop: 10,
    width: WIDHT - 75,
    height: 90,
    fontSize: 16,
    paddingLeft: 45,
    marginHorizontal:25,
    backgroundColor: "#ffff",
    borderRadius: 5, 
    borderWidth: 0.1,
    borderColor: '#000000',
  },
  circle: {
    width: 75,
    height: 75,
    position: "absolute",
    top:5,
    left: 5,
    borderRadius: 150/2,
    borderColor: '#fff',
    borderWidth: 2,
    backgroundColor: '#fff',
  },
  nama: {
    position: "absolute",
    fontSize: 25,
    fontWeight: "bold",
    left: 100,
    top: 15,
  },
  date: {
    position: "absolute",
    fontSize: 15,
    left: 100,
    top: 45,
  },
});