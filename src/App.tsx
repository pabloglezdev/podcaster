import { useEffect } from 'react';
import { getPodcastDetails, getPodcasts } from './services/podcasts';

function App() {
  useEffect(() => {
    const fetchPodcasts = async () => {
      const podcasts = await getPodcasts(100);
      console.log(podcasts);
    };

    const fetchPodcastsDetail = async () => {
      const podcastsDetail = await getPodcastDetails('934552872');
      console.log(podcastsDetail);
    };

    fetchPodcasts();
    fetchPodcastsDetail();
  }, []);

  return (
    <>
      <h4>Podcaster</h4>
    </>
  );
}

export default App;
