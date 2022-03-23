import React from "react";
import { Box } from "native-base";
import HotAlbumList from "../components/HotAlbumList";
// import albumData from "../json/albums.json";

const AlbumScreen = ({ navigation }) => {
  return (
    <Box>
      <HotAlbumList 
        // list={albumData.albumList}
        navigation={navigation}
      />
    </Box>
  );
};

export default AlbumScreen;
