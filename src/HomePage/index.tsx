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
import { Button, Dimensions, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, useColorScheme, View } from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MyNavigationBar from "../components/MyNavigationBar";
import imageList from "../img/a_image_list";

// 获取屏幕高度和宽度
const { width, height } = Dimensions.get('window');

// 获取随机数
const getRandomInt = (m: number)=> {
  const min = Math.ceil(1);
  const max = Math.floor(m > 0 ? m : 60);
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}

const HomePage = ({ route, navigation }) => {

  let _flatList: any;

  console.log(route.params, navigation);
  // const { itemId, itemName } = route.params;
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  let dataList = [];
  for (let i = 0; i < 60; i++) {
    const hour = getRandomInt(23);
    const min = getRandomInt(59);
    let dict = { 
      key: 'item' + i,
      title: '聊天窗' + i, 
      iconIndex: getRandomInt(59),
      message: '元旦快乐，祝开心快乐' + i,
      time: (hour < 10 ? '0' + hour : hour) + ':' + (min < 10 ? '0' + min : min)
    };
    dataList.push(dict);
  }

  const _renderItemAction = (item: any) => {
    console.log(item.title);
    navigation.push('ChatDetailPage', item);
    console.log('++++++++++++++++++++++++_renderItemAction');
    // console.log(_flatList);
  }

  // 头部搜索
  const _headerView = () => {
    return <View style={styles.headContainer}>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.headSearch}>
          <Text style={styles.headSearchText}>🔍搜索</Text>
        </View>
      </TouchableOpacity>
    </View>;
  }

  // 聊天cell
  const _renderItemCell = ({ item, index }) => {
    return <TouchableHighlight
      activeOpacity={0.8}
      onPress={()=>_renderItemAction(item)}>
      <View style={styles.itemContainer}>
        <Image style={styles.itemIcon} source={imageList[item.iconIndex]}></Image>
        <View style={styles.itemContent}>
          <Text style={styles.itemName}>{item.title}</Text>
          <Text style={styles.itemMessage}>{item.message}</Text>
          <Text style={styles.itemTime}>{item.time}</Text>
        </View>
      </View>
    </TouchableHighlight>
  }

  // 分割线
  const _itemSeparatorComponent = () => {
    return <View style={{ paddingLeft: 82, backgroundColor: '#fff' }} >
      <View
        style={{ width: width - 82, height: 1, backgroundColor: '#ddd' }}
      />
    </View>
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <MyNavigationBar title={'微信'} rightItem={true} />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          ref={(lst) => _flatList = lst}
          data={dataList}
          ListHeaderComponent={_headerView}
          ItemSeparatorComponent={_itemSeparatorComponent}
          renderItem={_renderItemCell}
        />
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  headContainer: {
    height: 50,
    paddingHorizontal: 15,
    paddingVertical: 4,
    backgroundColor: Colors.lighter,
  },
  headSearch: {
    backgroundColor: '#fff',
    width: width - 30,
    height: 32,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headSearchText: {
    color: '#666'
  },
  itemContainer: {
    height: 65,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 16
  },
  itemContent: {
    width: width - 100,
    height: 45
  },
  itemName: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 26
  },
  itemMessage: {
    color: '#666',
    fontSize: 14,
    lineHeight: 16
  },
  itemTime: {
    position: 'absolute',
    right: 0,
    top: 5
  }
});

export default HomePage;