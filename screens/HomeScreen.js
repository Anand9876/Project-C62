import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class AppHeader extends Component{
  render(){
    return(
      <View>
      <Text style={styles.title}>S.H.I.E.L.D Attendance</Text>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  title:{
    color:'white',
    backgroundColor:'black',
    fontSize:25,
    paddingLeft:60,
    width:350,
    height:80,
    paddingTop:20
  }
})