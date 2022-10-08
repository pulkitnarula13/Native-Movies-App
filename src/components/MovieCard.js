import React from 'react';
import { Box, Text, Image, Button, Flex } from 'native-base';

const MovieCard = (props) => {

    return (

        <Flex direction='row' mb={2}>
            <Image
                source={{
                    uri: `https://image.tmdb.org/t/p/original${props.movie.item.poster_path}`,
                }}
                alt={props.movie.item.title}
                width='30%'
                height='auto'
                mr={3}
            />
            <Box width='60%'>
                <Text fontWeight='600'>{props.movie.item.title ? props.movie.item.title : props.movie.item.name}</Text>
                <Text>Popularity: {props.movie.item.popularity}</Text>
                <Text>Release Data: {props.movie.item.releaseDate}</Text>
                <Button

                    onPress={() => {
                        props.navigation.navigate('DetailScreen', {
                            title: props.movie.item.title,
                            category: props.category,
                            id: props.movie.item.id
                        });
                    }}
                >
                    <Text color='white'>More Details</Text>
                </Button>
            </Box>
        </Flex>
    );
};

export default MovieCard;