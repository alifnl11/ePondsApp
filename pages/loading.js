import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator
}
from 'react-native';
import firebase from 'firebase'
import Fire from '../fire'

export default class LoadingScreen extends React.Component {
    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth");
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <Text> Loading... </Text>
                <ActivityIndicator size={"large"} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
});