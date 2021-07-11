import React,{Component} from 'react';
import { View,Text,StyleSheet } from 'react-native';


class AppHeader extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Student Attendance</Text>
                </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
      },
      title:{
        fontSize:40,
        fontWeight:'550',
        backgroundColor:'black',
        color:'white',
        paddingLeft:600,
        height:100,
        width:1500,
        paddingTop:25
      },
})
export default AppHeader;