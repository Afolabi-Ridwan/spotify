import axios from 'axios';

const clientId = 'd37f9d0ea23f45cea993b243e6a5ca0c';
const clientSecret  = 'd9194e603b6744629c96cca383d8c68f';

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

export const getAlbums = async (accessToken: string, artistId: string): Promise<any> => {
  const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/albums`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
    params: {
      include_groups: 'album',
      limit: 10,
    },
  });

  return response.data.items;
};

export const searchArtist = async (accessToken: string, artistName: string): Promise<any> => {
  const response = await axios.get('https://api.spotify.com/v1/search', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
    params: {
      q: artistName,
      type: 'artist',
      limit: 1,
    },
  });

  return response.data.artists.items[0];
};
