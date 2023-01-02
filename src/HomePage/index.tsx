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
import { Button, FlatList, Platform, SafeAreaView, SectionList, StatusBar, Text, TouchableHighlight, useColorScheme, View } from "react-native";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MyNavigationBar from "../components/MyNavigationBar";

const HomePage = ({ route, navigation }) => {

  console.log(route.params, navigation);
  // const { itemId, itemName } = route.params;
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  let dataList = [];
  for (let i = 0; i < 100; i++) {
    let dict = { title: 'Title Text' + i, key: 'item' + i };
    dataList.push(dict);
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <MyNavigationBar title={'首页'} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          style={{ width: '100%' }}
          data={dataList}
          ItemSeparatorComponent={({ highlighted }) => (
            <View
              style={{ height: 2, backgroundColor: 'red'}}
            />
          )}
          renderItem={({ item, index, separators }) => (
            <TouchableHighlight
              onPress={() => console.log('123')}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}>
              <View style={{ backgroundColor: 'white' }}>
                <Text>{item.title}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    </SafeAreaView>

  );
}

export default HomePage;