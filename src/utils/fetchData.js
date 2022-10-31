export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ebff4994ddmsh434725608874d1bp1b5924jsn074e8a47734d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ebff4994ddmsh434725608874d1bp1b5924jsn074e8a47734d',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}