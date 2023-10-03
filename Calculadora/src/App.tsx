
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Button from './components/Button'
import Display from './components/Display'

//////////////////////////////////////////////////////
const initialstat = {
  displayValue : '0',
  cleardisplay:false,
  operation:null,
  values :[0,0],
  current: 0

}

export default class App extends React.Component {
  
  state ={
    ...initialstat
  } 
  addigit = (n:any) => {
    console.debug(this.state.displayValue)
    if (n === '.') {
      if (this.state.displayValue.includes('.')) {
        return; // Já existe um ponto, não faça nada
      }
  
      if (this.state.displayValue === '0') {
        // Se o valor atual for '0', substitua pelo valor '0.'
        this.setState({ displayValue: '0.' });
        return;
      }
    }
    
    const cleardisplay = this.state.displayValue==='0'|| this.state.cleardisplay
    const currentvalue = cleardisplay ? '' : this.state.displayValue
    const displayvalue = currentvalue + n

    this.setState({displayValue: displayvalue,  cleardisplay:false})
    if(n != '.') {
      const newvalue = parseFloat(displayvalue)
      const values = [...this.state.values]
      values[this.state.current] = newvalue
      this.setState({values: values})
    }
  }
  clearmemory = (n:number) =>{
    this.setState({...initialstat})
  }
  setoperations = (operation:any) =>{
    if (this.state.current === 0) {
      this.setState({operation: operation, current: 1, cleardisplay: true })
    }else {
      const equals = operation ==='='
      const values = [...this.state.values]
      try{
        values[0]= eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      }catch{
        values[0] = this.state.values[0]
        }
      values[1] = 0
      this.setState ({
        displayValue: values[0],
        operation: equals ? null : operation,
        current : equals ? 0 : 1,
        // cleardisplay: !equals,
        cleardisplay: true,
        values
      })
    }
    
  } 
  render() {
   
    return (<SafeAreaView style={styles.conteiners}>
      <Display value={this.state.displayValue}/>
      <View style={styles.buttons}> 
        <Button label='ac' triple onClick={this.clearmemory}/>
        <Button label='/' operation onClick={() =>{this.setoperations('/')}}/>
        <Button label='7' onClick={() =>{this.addigit(7)}}/>
        <Button label='8' onClick={() =>{this.addigit(8)}}/>
        <Button label='9' onClick={() =>{this.addigit(9)}}/>
        <Button label='*' operation onClick={() =>{this.setoperations('*')}}/>
        <Button label='4' onClick={() =>{this.addigit(4)}}/>
        <Button label='5' onClick={() =>{this.addigit(5)}}/>
        <Button label='6' onClick={() =>{this.addigit(6)}}/>
        <Button label='-' operation onClick={() =>{this.setoperations('-')}}/>
        <Button label='1' onClick={() =>{this.addigit(1)}}/>
        <Button label='2' onClick={() =>{this.addigit(2)}}/>
        <Button label='3' onClick={() =>{this.addigit(3)}}/>
        <Button label='+' operation onClick={() =>{this.setoperations('+')}}/>
        <Button label='0' double onClick={() =>{this.addigit(0)}}/>
        <Button label='.'  onClick={() =>{this.addigit('.')}}/>
        <Button label='=' operation onClick={() =>{this.setoperations('=')}}/>
        
        

      </View>
    </SafeAreaView>)
    
 
  }
    
}
const styles = StyleSheet.create({
  conteiners:{
      flex:1 
  },
  buttons : {
    flexDirection: 'row', 
    flexWrap: 'wrap'

  }
});

