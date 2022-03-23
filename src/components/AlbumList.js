import React from "react";
import { Text, FlatList, SectionList, StyleSheet } from "react-native";
import HotAlbumDetail from "./HotAlbumDetail";
import sections from "../json/album_section.json"

const AlbumList = ({ navigation }) => {
  // const renderSectionHeader = ({section}) => {
  //   <>
  //     <Text style={styles.sectionHeader}>
  //       {section.title}
  //     </Text>
  //     {section.horizontal ? (

  //     ) : null}
  //   </>
  // }
  // const renderItem = ({ item, section }) => {
  //   if (section.horizontal){
  //     return null;
  //   }
  //   // return <AlbumDetail album={item} navigation={navigation} />
  // };

  return (
    <>
      <Text style={styles.sectionHeader}>
        {sections[0].title}
      </Text>
      <FlatList
        horizontal={true}
        data={sections[0].data}
        renderItem={({item}) => <HotAlbumDetail album={item} navigation={navigation} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        keyExtractor={item => item.title}
      />
      <Text style={styles.sectionHeader}>
        {sections[1].title}
      </Text>
      <FlatList
        horizontal={true}
        data={sections[1].data}
        renderItem={({item}) => <HotAlbumDetail album={item} navigation={navigation} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        keyExtractor={item => item.title}
      />
    </>
    // <SectionList
    //   sections={sections}
    //   contentContainerStyle={{ paddingHorizontal: 10 }}
    //   stickySectionHeadersEnabled={false}
    //   showsHorizontalScrollIndicator={false}
    //   renderSectionHeader={renderSectionHeader}
    //   renderItem={renderItem}
    //   keyExtractor={item => item.title}
    // />    
  );  
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingTop: 8,
    paddingBottom: 5,
    paddingLeft: 10,
  }
})

export default AlbumList;

