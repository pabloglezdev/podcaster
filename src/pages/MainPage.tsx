import { useEffect, useState, type FC } from 'react';
import { getPodcasts } from '../services/podcast';
import { type Podcast } from '../types/podcast';
import CardList from '../components/card/CardList';
import Search from '../components/search/Search';

const MainPage: FC = () => {
  const [initialPodcasts, setInitialPodcasts] = useState<Podcast[]>([]);
  const [filteredPodcasts, setFilteredPodcasts] = useState<Podcast[]>([]);

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
    const cachedPodcasts = localStorage.getItem('podcasts');
    if (cachedPodcasts) {
      setInitialPodcasts(JSON.parse(cachedPodcasts));
      setFilteredPodcasts(JSON.parse(cachedPodcasts));
      return;
    }

    const fetchPodcasts = async () => {
      const data = await getPodcasts(100);
      if (data) {
        localStorage.setItem('podcasts-fetched-at', new Date().toISOString());
        localStorage.setItem('podcasts', JSON.stringify(data));
        setInitialPodcasts(data);
        setFilteredPodcasts(data);
      }
    };
    fetchPodcasts();
  }, []);

  const handleSearch = (query: string) => {
    const filteredPodcasts = initialPodcasts.filter(
      (podcast: Podcast) =>
        podcast.name.label.toLowerCase().includes(query.toLowerCase()) ||
        podcast.artist.label.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPodcasts(filteredPodcasts);
  };

  return (
    <section id="podcasts">
      <Search count={filteredPodcasts.length} onSearch={handleSearch} />
      <CardList cards={filteredPodcasts} />
    </section>
  );
};

export default MainPage;
