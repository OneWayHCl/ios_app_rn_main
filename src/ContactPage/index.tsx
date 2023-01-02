/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SectionList,
  Dimensions,
  StatusBar,
  useColorScheme,
  Appearance,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MyNavigationBar from '../components/MyNavigationBar';

const dimension = Dimensions.get('window')

// 获取屏幕高度和宽度
const { width, height } = Dimensions.get('window');

class ContactPage extends Component {

  componentDidMount() {
    // useColorScheme();
    console.log('componentDidMount-------');
  }

  // 头部搜索
  _headerView() {
    return <View style={styles.headContainer}>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.headSearch}>
          <Text style={styles.headSearchText}>🔍搜索</Text>
        </View>
      </TouchableOpacity>
    </View>;
  }

  _renderSectionHeader(info: { section: { key: any }; }) {

    var txt = info.section.key;
    return (
      <View><Text key={info.section.key} style={{ width: width, height: 52, textAlign: 'left', backgroundColor: '#21c6cd', color: '#fff' }}>{txt}</Text></View>
    )
  }

  _renderItem(info: { item: { title: any; name: string | number; phone: string | number; }; }) {

    return (
      <View>
        <Text key={info.item.title}>{info.item.name}</Text>
        <Text>{info.item.phone}</Text>
      </View>
    )
  }
  _separatorCom() {
    return (
      <View style={{ height: 4, width: 500, backgroundColor: 'orange' }}></View>
    )
  }
  render() {
    const allSections = [];

    for (let i = 0; i < 10; i++) {
      let datas = [];
      for (let j = 0; j < 10; j++) {
        datas.push(
          {
            name: '用户' + i + j,
            phone: '01234567890',
            title: i + '1w',
          }
        );
      }
      let section = {
        key: 'A' + i,
        title: i + '1w',
        name: 'q' + i,
        data: datas,
        renderItem: (item: any) => {
          return <View>
            <Text key={item.item.title}>{item.item.name + 'dd'}</Text>
            <Text>{item.item.phone}</Text>
          </View>
        }
      }

      allSections.push(section);
    }


    // useColorScheme();
    const isDarkMode = Appearance.getColorScheme() === 'dark';
    //   const backgroundStyle = {
    //     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    //     flex: 1
    //   };
    const backgroundStyle = {
      backgroundColor: Colors.lighter,
      flex: 1
    };


    // const isDarkMode = false;
    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <MyNavigationBar title={'通讯录'} />
        <SectionList
          renderSectionHeader={this._renderSectionHeader}
          renderItem={this._renderItem}
          sections={allSections}
          refreshing={false}
          onRefresh={() => { console.log("刷新") }}
          ItemSeparatorComponent={this._separatorCom}
          SectionSeparatorComponent={() => <View style={{ height: 20, backgroundColor: 'blue' }}></View>}
          keyExtractor={(item, index) => ("index" + index + item)}
          onEndReached={(info) => { console.log("到达底部") }}
          onEndReachedThreshold={0}
          stickySectionHeadersEnabled={true}
          ListHeaderComponent={this._headerView}
          ListFooterComponent={() => <View style={{ backgroundColor: 'red', alignItems: 'center' }}><Text>SectionList简易通讯录尾部</Text></View>}
        />
      </SafeAreaView>
    );
  }
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default ContactPage;
// AppRegistry.registerComponent('sectionlist', () => sectionlist);