/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { Button, SafeAreaView, StatusBar, Text, useColorScheme, View } from "react-native";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const MyNavigationBar = (props: {title: String}) => {

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: 44
  };
  return (
    <View style={backgroundStyle}><Text style={{ textAlign: 'center', lineHeight: 44, fontSize: 18, fontWeight: '500'}}>{ props.title }</Text></View>
  );
}

export default MyNavigationBar;