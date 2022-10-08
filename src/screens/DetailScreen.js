import React, { useEffect, useState } from 'react';
import { Text, Image, Center, Flex, Box } from 'native-base';
import axios from 'axios';

import { API_KEY, BASE_URL } from "../constants/api";

const DetailScreen = ({route})=> {
  const { id, category } = route.params;

  const [showDetail, setShowDetail] = useState()

  const loadInformation = ()=> {
    axios.get(
      `${BASE_URL}/${category}/${id}?api_key=${API_KEY}&language=en-US`
    ).then((result)=>{
      setShowDetail(result.data);
    }).catch(error=>console.log(error));
  }

  useEffect(loadInformation, [])

  return (
    <Center>
      {showDetail && (
        <>
          <Text fontWeight="bold" fontSize={22} mb={20} mt={20}>
            {showDetail.title ? showDetail.title : showDetail.name}
          </Text>
          {showDetail.poster_path ? (
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/original${showDetail.poster_path}`,
              }}
              height={270}
              width={270}
              alt={showDetail.title ? showDetail.title : showDetail.name}
              mb={8}
            />
          ) : (
            <Flex
              height={300}
              width={300}
              mb={10}
              justify="center"
              align="center"
              bg="#a8a8a8"
            >
              <Text color="white">Image not available</Text>
            </Flex>
          )}
          <Box width="80%" mb={10}>
            <Text>{showDetail.overview}</Text>
          </Box>
          <Box width="80%">
            <Text fontSize={12}>
              Popularity: {showDetail.popularity} | Release Date:{" "}
              {showDetail.releaseDate}
            </Text>
          </Box>
        </>
      )}
    </Center>
  );
}

export default DetailScreen;

{

}