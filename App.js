import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {{width: 142, height: 142,borderWidth: 10, borderRadius: 100, marginTop:90 }}>
      </View>
      <View style={{height:58,width:192,marginTop:30}}>
        <Text style={{fontSize:25,lineHeight:27,textAlign:'center'}}>GROW 
         YOUR BUSINESS</Text>
      </View>
      <View style={{height:36,width:302,marginTop:100}}>
        <Text style={{fontSize:15,lineHeight:17.58,textAlign:'center'}}>We will help you to grow your business using online server</Text>
      </View>
      <View style={{marginTop: 60, height:48,width:'100%',flexDirection:'row',justifyContent:'space-around'}}>
            <View style={{backgroundColor:'yellow',height:'100%',width:119,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
              <Text style={{textAlign:'center',fontWeight:700,fontSize:20,lineHeight:23.44}}>LOGIN</Text>
            </View>
            <View style={{backgroundColor:'yellow',height:'100%',width:119,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
              <Text style={{textAlign:'center',fontWeight:700,fontSize:20,lineHeight:23.44}}>SIGN UP</Text>
            </View>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'background: linear-gradient(180deg, rgba(0, 204, 249, 0.359978) 0%, #00CCF9 100%)',
    alignItems: 'center',
    justifyContent: 'center',
  }
});