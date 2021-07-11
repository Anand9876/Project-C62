import React,{Component} from 'react';
import {View,TouchableOpacity,Text,StyleSheet,ImageBackground} from 'react-native';
import AppHeader from './screens/HomeScreen';
const image={
  uri: 'https://i.imgur.com/FCDnW9c.png',
}
class App extends Component{
  constructor(){
    super();
    this.state={
      PresentCounter:0,
      AbsentCounter:0,
    }
  }
  PresentAttendance=()=>{
this.setState({PresentCounter:this.state.PresentCounter+1})
  }
  AbsentAttendance=()=>{
    this.setState({AbsentCounter:this.state.AbsentCounter+1})
  }
 
 render(){
   return(
     <View style={styles.canvas}>
     <AppHeader/>
     <ImageBackground source={image} style={styles.image}>
     <Text style={{fontSize:15,marginTop:30,color:'rgb(243,204,1)',marginLeft:10}}>Captain America</Text>
     <TouchableOpacity onPress={this.PresentAttendance}> 
     <Text style={styles.text}>Present</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={this.AbsentAttendance}> 
     <Text style={styles.text1}>Absent</Text>
     </TouchableOpacity>
     <Text style={{fontSize:15,marginTop:30,color:'rgb(243,204,1)',marginLeft:10}}>Captain Marvel</Text>
     <TouchableOpacity>
     <Text style={styles.text} onPress={this.PresentAttendance}>Present</Text>
     </TouchableOpacity>
     <TouchableOpacity>
     <Text style={styles.text1} onPress={this.AbsentAttendance}>Absent</Text>
     </TouchableOpacity>
     <Text style={{fontSize:15,marginTop:30,color:'rgb(243,204,1)',marginLeft:10}}>Tony Stark</Text>
     <TouchableOpacity>
     <Text style={styles.text} onPress={this.PresentAttendance}>Present</Text>
     </TouchableOpacity>
     <TouchableOpacity>
     <Text style={styles.text1} onPress={this.AbsentAttendance}>Absent</Text>
     </TouchableOpacity>
     <Text style={{fontSize:15,marginTop:30,color:'rgb(243,204,1)',marginLeft:10}}>Dr.Banner</Text>
     <TouchableOpacity>
     <Text style={styles.text} onPress={this.PresentAttendance}>Present</Text>
     </TouchableOpacity>
     <TouchableOpacity>
     <Text style={styles.text1} onPress={this.AbsentAttendance}>Absent</Text>
     </TouchableOpacity>
     <Text style={{fontSize:15,marginTop:30,color:'rgb(243,204,1)',marginLeft:10}}>Agent Romanoff</Text>
     <TouchableOpacity>
     <Text style={styles.text} onPress={this.PresentAttendance}>Present</Text>
     </TouchableOpacity>
     <TouchableOpacity>
     <Text style={styles.text1} onPress={this.AbsentAttendance}> Absent</Text>
     </TouchableOpacity>
     <Text style={{fontSize:15,marginTop:30,color:'rgb(243,204,1)',marginLeft:10}}>SpiderMan</Text>
     <TouchableOpacity>
     <Text style={styles.text} onPress={this.PresentAttendance}>Present</Text>
     </TouchableOpacity>
     <TouchableOpacity>
     <Text style={styles.text1} onPress={this.AbsentAttendance}> Absent</Text>
     </TouchableOpacity>
     <Text style={styles.Report}>Report</Text>
     <Text style={styles.report1}>Present</Text>
     <Text style={{marginLeft:80,marginTop:5,fontSize:20}}>{this.state.PresentCounter}</Text>
     <Text style={styles.report2}>Absent</Text>
     <Text style={{marginLeft:235,marginTop:5,fontSize:20}}>{this.state.AbsentCounter}</Text>
     </ImageBackground> 
     </View>
   )
 }
}
const styles=StyleSheet.create({
  text:{
    color:'white',
    backgroundColor:'green',
    width:80,
    height:30,
    borderColor:'black',
    borderWidth:3,
    borderRadius:10,
    paddingLeft:15,
    marginLeft:120,
    marginTop:-20
    
  },
  text1:{
    color:'white',
    backgroundColor:'red',
    width:80,
    height:30,
    borderColor:'black',
    borderWidth:3,
    borderRadius:10,
    paddingLeft:13,
    marginLeft:220,
    marginTop:-29
    
  },
  image:{
    flex:1,
    width:300,
    height:300
  },
  canvas:{
    borderWidth:5,
    borderColor:'black',
    width:362,
    marginLeft:10,
    height:580
  },
  report1:{
    fontSize:15,
    backgroundColor:'black',
    color:'green',
    width:80,
    height:30,
    marginLeft:40,
    paddingLeft:12,
    borderColor:'green',
    borderWidth:5,
    borderRadius:10,
    marginTop:10
  },
  report2:{
    fontSize:15,
    backgroundColor:'black',
    color:'red',
    width:80,
    height:30,
    marginLeft:200,
    paddingLeft:12,
    borderColor:'red',
    borderWidth:5,
    borderRadius:10,
    marginTop:-62
  },
  Report:{
    fontSize:20,
    marginLeft:110,
    marginTop:20,
    backgroundColor:'black',
    color:'rgb(243,204,1)',
    width:100,
    paddingLeft:15,
    borderColor:'rgb(243,204,1)',
    borderWidth:5,
    borderRadius:10
  }
})
export default App;