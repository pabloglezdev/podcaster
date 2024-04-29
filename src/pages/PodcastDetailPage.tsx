import { useEffect, useState, type FC } from 'react';
import { useParams } from 'react-router-dom';
import { getPodcastDetails } from '../services/podcast';
import { type EpisodeDetail } from '../types/podcast';

const PodcastDetailPage: FC = () => {
  const { podcastId } = useParams();

  const [podcastDetail, setPodcastDetail] = useState<Array<EpisodeDetail>>([]);

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
    if (!podcastId) {
      console.error('There is no podcastId on the url');
      return;
    }

    const cachedPodcastsDetail = localStorage.getItem(`podcast-detail-${podcastId}`);
    if (cachedPodcastsDetail) {
      setPodcastDetail(JSON.parse(cachedPodcastsDetail));
      return;
    }

    const fetchPodcastDetail = async () => {
      const data = await getPodcastDetails(podcastId);
      if (data) {
        localStorage.setItem('podcast-detail-fetched-at', new Date().toISOString());
        localStorage.setItem(`podcast-detail-${podcastId}`, JSON.stringify(data));
        setPodcastDetail(data);
      }
    };
    fetchPodcastDetail();
  }, [podcastId]);

  return (
    <section id="podcast-detail">
      {podcastDetail && (
        <ul>
          {podcastDetail.map((episode) => (
            <li>{episode.trackName}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PodcastDetailPage;
