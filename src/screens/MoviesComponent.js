import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { API_KEY, BASE_URL } from '../constants/api'
import axios from "axios";
import MovieCard from '../components/MovieCard';

const MoviesComponent = ({navigation}) => {

    const [value, setValue] = useState("movie");
    const [sort, setSort] = useState("upcoming");
    const [data, setData] = useState([]);

    function getData() {
        axios.get(`${BASE_URL}/${value}/${sort}?api_key=${API_KEY}&language=en-US&page=1`).then(function (response) {
            setData(response.data.results);
        })
    };

    const renderItem = (moviewData) => {
        console.log(moviewData, "movie");
        return (
            <View>
                <MovieCard category={"movie"} movie={moviewData} navigation={navigation} />
            </View>
        )
    }

    React.useEffect(function () {
        getData();
    }, [])

    return (
        <View>
        <FlatList
            horizontal={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
        />
        </View>
    )
}

export default MoviesComponent