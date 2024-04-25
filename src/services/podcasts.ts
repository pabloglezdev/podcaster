export const getPodcasts = async (limit: number) =>
  await fetch(`https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=1310/json`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Network response was not ok with code ${response.status}}`);
    })
    .then((data) => data);

export const getPodcastDetails = async (id: string) =>
  await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}&media=podcast &entity=podcastEpisode&limit=20`)}`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Network response was not ok with code ${response.status}}`);
    })
    .then((data) => JSON.parse(data.contents));
