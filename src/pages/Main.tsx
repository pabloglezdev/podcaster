import { useEffect, useState, type FC } from 'react';
import { getPodcasts } from '../services/podcast';
import { type Podcast } from '../types/podcast';

const Main: FC = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      const data = await getPodcasts(100);
      setPodcasts(data);
    };
    fetchPodcasts();
  }, []);

  return (
    <main>
      {podcasts.map((podcast) => (
        <div>{podcast.title.label}</div>
      ))}
    </main>
  );
};

export default Main;
