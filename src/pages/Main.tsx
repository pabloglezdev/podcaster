import { useEffect, useState, type FC } from 'react';
import { getPodcasts } from '../services/podcast';
import { type Podcast } from '../types/podcast';
import CardList from '../components/card/CardList';

const Main: FC = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      const data = await getPodcasts(100);
      setPodcasts(data);
    };
    fetchPodcasts();
  }, []);

  return <CardList cards={podcasts} />;
};

export default Main;
