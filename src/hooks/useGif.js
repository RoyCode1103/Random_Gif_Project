import React, { useEffect, useState,useCallback } from 'react';
import axios from 'axios';
const API_Key = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
  const Randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_Key}&tag=&rating=g`;
  const Tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_Key}&tag=${tag}`;
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(tag ? Tagurl : Randomurl);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.error('Error fetching gif:', error);
    }
    setLoading(false);
  }, [tag]);


  useEffect(() => {
    fetchData();
  }, [fetchData])

  return { gif, loading, fetchData };

}

export default useGif;