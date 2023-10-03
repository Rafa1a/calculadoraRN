import React, {useState,useEffect,useReducer} from "react";
import { 
    Text, StyleSheet, SafeAreaView, View, Button, Dimensions, TouchableHighlight

 } from "react-native";

interface CompProps {

};

const exemplo: React.FC<any> = (props) => {
    const stylesbuttons: Array<{}> = [styles.button];

    if (props.double) stylesbuttons.push(styles.buttondouble)
    if (props.triple) stylesbuttons.push(styles.buttontriple)
    if(props.operation) stylesbuttons.push(styles.operationbutton)
    return (
        
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesbuttons}>{props.label}</Text>
        </TouchableHighlight>
        
    );
};

const styles = StyleSheet.create({
    button:{
        fontSize:40,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding:20,
        backgroundColor: '#f0f0f0',
        textAlign:"center",
        borderWidth: 1,
        borderColor: '#88888847'
    },
    operationbutton : {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    buttondouble :  {
        width: (Dimensions.get('window').width/4) * 2
    },
    buttontriple :  {
        width: (Dimensions.get('window').width/4) * 3
    }

});
export default exemplo;