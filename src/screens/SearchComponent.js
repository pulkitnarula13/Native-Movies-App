import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { Button, FlatList } from 'native-base';
import MovieCard from '../components/MovieCard';
import { API_KEY, BASE_URL } from '../constants/api';
import axios from 'axios';

const SearchComponent = ({ navigation }) => {

  const [text, onChangeText] = React.useState("Useless Text");
  const data = [
    { label: 'movie', value: 'movie' },
    { label: 'tv', value: 'tv' },
    { label: 'multi', value: 'multi' },
  ];
  const [value, setValue] = useState(null);
  const [moviesData, setMoviesData] = useState([]);


  function searchMovies() {
    axios
      .get(
        `${BASE_URL}/search/${value}?api_key=${API_KEY}&language=en-US&page=1&query=${text}`
      )
      .then((result) => {
        setMoviesData(result.data.results);
      })
  };



  const renderItem = (moviewData) => {
    return (
      <View>
        <MovieCard movie={moviewData} navigation={navigation} />
      </View>
    )
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      <Dropdown
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }} />
        <Button onPress={searchMovies}>Search</Button>
      <FlatList
        horizontal={false}
        data={moviesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


export default SearchComponent