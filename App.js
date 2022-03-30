//--------------------Hello wordl 1 (fonctionnel)
//import React from "react";
//import { StyleSheet, Text, View } from "react-native";
//import { Button, Touchable, TouchableOpacity } from "react-native-web";
//
//const App = () => (
//  <View style={styles.container}>
//    <Text style={styles.title}>React Native</Text>
//  </View>
//);
//
//const styles = StyleSheet.create({
//  container: {
//    height: 200,
//    width: 200,
//    backgroundColor: "blue"
//  },
//  title: {
//    marginTop: 70,
//    color: "#20232a",
//    textAlign: "center",
//    fontSize: 30,
//    fontWeight: "bold"
//  }
//});
//
//export default App;

//----------------------------hello wordl 2 (fonctionnel)
import React from "react";
import { View, Text } from "react-native";
import { useState } from "react/cjs/react.production.min";

const App = () => {
  return (
    <View
      style={{
        width: 200,
        height: 200,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent:"center",
      }}
      >
        <Text>Hello, World!</Text>
  </View>
  );
};

export default App;


//--------------------Button (fonctionnel)

//<View>
//<Button title="Button 1" onPress={() => alert("hello 1")} />
//<TouchableOpacity
//  onPress={() => alert("hello 2")}
//  style={{
//    backgroundColor: "blue",
//    paddingHorizontal: 10,
//    paddingVertical: 10,
//    textAlign: "center",
//  }}
//  >
//    <Text style={{color: "#FFF", fontSize: 18}}>Button 2</Text>
//    </TouchableOpacity>
// </View>


//------------------exo 4
//import React, { useState } from "react";
//import { Text, Button, View } from "react-native"
//
//export default () => {
//  const [pressCount, setPressCount] = useState(0);
//
//  return (
//    <View style={{alignItems: "center", marginTop: 20}}>
//      <Text>You've pressed the button: {pressCount} time</Text>
//      <Button
//      title={'Pressed $(pressCount) time(s)'}
//      onPress={() => setPressCount(pressCount + 1)}
//      />
//      </View>
//  );
//};