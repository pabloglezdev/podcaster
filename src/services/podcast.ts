import { type EpisodeDetail, type Podcast, type RawPodcast } from '../types/podcast';

const getParsedPodcasts = (podcasts: RawPodcast[]) =>
  podcasts.map(
    (podcast) =>
      ({
        ...podcast,
        artist: podcast['im:artist'],
        contentType: podcast['im:contentType'],
        image: podcast['im:image'],
        name: podcast['im:name'],
        price: podcast['im:price'],
        releaseDate: podcast['im:releaseDate']
      }) as Podcast
  );

export const getPodcasts = async (limit: number) =>
  await fetch(`https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=1310/json`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Network response was not ok with code ${response.status}}`);
    })
    .then((data) => data.feed.entry as RawPodcast[])
    .then((rawPodcasts) => getParsedPodcasts(rawPodcasts));

export const getPodcastDetail = async (id: string) =>
  await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}&media=podcast &entity=podcastEpisode&limit=20`)}`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Network response was not ok with code ${response.status}}`);
    })
    .then((data) => JSON.parse(data.contents))
    .then((data) => ({ data: data.results as EpisodeDetail[], count: data.resultCount - 1 })); // Seems like first entry is related to general podcast detail
