import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

const HotAlbumDetail = ({album, navigation}) => {
  console.log(album);
  return (
    <View style={{flexDirection: 'column'}}>
     <View style={styles.cardContainerStyle}>
       <View style={styles.cardSectionStyle}>
         <Pressable 
           onPress={() => {navigation.navigate('Detail', album)}}
         >
         <Image
           style={styles.imageStyle}
           source={{uri: album.image}}
         />
         </Pressable>
          {/* <StarMaker 
          star={album.star} 
          light_star={album.light_star}
          dark_star={album.dark_star}  
          /> */}
       </View>
     </View> 
     <View style={styles.headerContainerStyle}>
       <Text style={styles.headerTitleStyle}>{album.title}</Text>
       <Text style={styles.headerContentStyle}>{album.artist}</Text>
     </View>
   </View>
  )
};

const styles = StyleSheet.create({
  cardContainerStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  headerContainerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 12,
    width: 130,
  },
  headerTitleStyle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  headerContentStyle: {
    fontSize: 11,
    fontWeight: '300',
    color: "#222",
    width: '100%'
  },
  imageStyle: {
    height: 200,
    width: 140,
  }
});

export default HotAlbumDetail;
