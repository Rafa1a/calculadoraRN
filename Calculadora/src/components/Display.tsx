import React, {useState,useEffect,useReducer} from "react";
import { Text, StyleSheet, SafeAreaView, View, Button } from "react-native";

interface CompProps {

};

const exemplo: React.FC<any> = (props) => {
    return (
        <SafeAreaView style= {styles.display}>
            <Text style= {styles.displayvalue} numberOfLines={1}>{props.value}</Text>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    display:{
        flex: 1,
        padding: 10, 
        justifyContent:"flex-end",
        backgroundColor:'#1f1f1fca',
        alignItems: 'flex-end'

    },
    displayvalue : {
        fontSize: 60, 
        color: '#fff'
    }

});
export default exemplo;