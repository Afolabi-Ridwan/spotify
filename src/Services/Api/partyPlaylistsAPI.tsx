// src/spotify.ts
import axios from 'axios';

const clientId = 'd37f9d0ea23f45cea993b243e6a5ca0c';
const clientSecret = 'd9194e603b6744629c96cca383d8c68f';


export const getToken = async (): Promise<string> => {
  const response = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
    grant_type: 'client_credentials',
  }), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
    },
  });

  return response.data.access_token;
};

export const getPlaylists = async (accessToken: string) : Promise<any> => {
  const response = await axios.get(`https://api.spotify.com/v1/browse/categories/party/playlists`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
    params: {
      limit: 15,
    },
  });

  return response.data.playlists.items;
};
