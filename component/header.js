import React from 'react';
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

export default function Header(){
    return(
        <View style={styles.header}>
        <Text style={styles.headerText}>ePonds</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        height: 60,
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fe612c',
    },
    headerText: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});