import { useEffect, useState, type FC } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { type Podcast, type EpisodeDetail } from '../types/podcast';
import { getPodcastDetail } from '../services/podcast';
import EpisodeTable from '../components/table/EpisodeTable';
import PodcastSidebar from '../components/sidebar/PodcastSidebar';
import SidebarWrapper from '../components/sidebar/SidebarWrapper';

export type PodcastDetailLocationState = {
  podcast: Podcast;
};

const PodcastDetailPage: FC = () => {
  const { podcastId } = useParams();

  // Check if podcast is not null. If it is, fetch the data again.
  const location = useLocation();
  const { podcast } = location.state as PodcastDetailLocationState;

  const navigate = useNavigate();

  const [podcastDetail, setPodcastDetail] = useState<Array<EpisodeDetail>>([]);
  const [episodesCount, setEpisodeCount] = useState<number>();

  useEffect(() => {
    const lastFetchedAt = localStorage.getItem('podcasts-fetched-at');

    if (lastFetchedAt) {
      const fetchedAt = new Date(lastFetchedAt);
      const now = new Date();
      const diff = now.getTime() - fetchedAt.getTime();
      const diffInHours = diff / 1000 / 60 / 60;

      if (diffInHours > 24) {
        localStorage.removeItem(`podcast-detail-${podcastId}-fetched-at`);
        localStorage.removeItem(`podcast-detail-${podcastId}`);
      }
    }
  }, [podcastId]);

  useEffect(() => {
    if (!podcastId) {
      console.error('There is no podcastId on the url');
      return;
    }

    const cachedPodcastsDetail = localStorage.getItem(`podcast-detail-${podcastId}`);
    if (cachedPodcastsDetail) {
      const { data, count } = JSON.parse(cachedPodcastsDetail);
      setPodcastDetail(data);
      setEpisodeCount(count);
      return;
    }

    const fetchPodcastDetail = async () => {
      const { data, count } = await getPodcastDetail(podcastId);
      if (data) {
        localStorage.setItem(`podcast-detail-${podcastId}-fetched-at`, new Date().toISOString());
        localStorage.setItem(`podcast-detail-${podcastId}`, JSON.stringify({ data, count }));
        setPodcastDetail(data);
        setEpisodeCount(count);
      }
    };
    fetchPodcastDetail();
  }, [podcastId]);

  const handleRowClick = (episode: EpisodeDetail) =>
    navigate(`/podcast/${podcastId}/episode/${episode.trackId}`, { state: { podcast, episode } });

  return (
    <div id="podcast-page" className="relative grid grid-flow-col gap-10">
      <SidebarWrapper>
        <PodcastSidebar
          title={podcast.name.label}
          artist={podcast.artist.label}
          cover={podcast.image[1].label}
          description={podcast.summary.label}
        />
      </SidebarWrapper>
      <section id="episodes-list" className="flex flex-col flex-1 gap-4">
        {episodesCount ? (
          <h3 className="text-xl shadow-[0px_2px_5px_0px] shadow-gray-400 p-2 rounded-sm">Episodes: {episodesCount}</h3>
        ) : (
          <h3>Loading...</h3>
        )}
        {podcastDetail.length ? (
          <div id="table-container" className="p-2 shadow-[0px_2px_5px_0px] shadow-gray-400 rounded-sm">
            <EpisodeTable podcastDetail={podcastDetail} onRowClick={handleRowClick} />
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </section>
    </div>
  );
};

export default PodcastDetailPage;
