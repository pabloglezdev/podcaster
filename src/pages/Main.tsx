import { useEffect, useState, type FC } from 'react';
import { getPodcasts } from '../services/podcast';
import { type Podcast } from '../types/podcast';
import CardList from '../components/card/CardList';

const Main: FC = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    const lastFetchedAt = localStorage.getItem('podcasts-fetched-at');

    if (lastFetchedAt) {
      const fetchedAt = new Date(lastFetchedAt);
      const now = new Date();
      const diff = now.getTime() - fetchedAt.getTime();
      const diffInHours = diff / 1000 / 60 / 60;

      if (diffInHours > 24) {
        localStorage.removeItem('podcasts-fetched-at');
        localStorage.removeItem('podcasts');
      }
    }
  }, []);

  useEffect(() => {
    const fetchPodcasts = async () => {
      const data = await getPodcasts(100);
      if (data) {
        localStorage.setItem('podcasts-fetched-at', new Date().toISOString());
        localStorage.setItem('podcasts', JSON.stringify(data));
        setPodcasts(data);
      }
    };

    const cachedPodcasts = localStorage.getItem('podcasts');
    if (cachedPodcasts) {
      setPodcasts(JSON.parse(cachedPodcasts));
      return;
    }

    fetchPodcasts();
  }, []);

  return <CardList cards={podcasts} />;
};

export default Main;
