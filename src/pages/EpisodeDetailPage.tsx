import { type FC } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { type PodcastDetailLocationState } from './PodcastDetailPage';
import PodcastSidebar from '../components/sidebar/PodcastSidebar';
import { type EpisodeDetail } from '../types/podcast';
import SidebarWrapper from '../components/sidebar/SidebarWrapper';
import { useNavigate } from 'react-router-dom';

type EpisodeDetailLocationState = PodcastDetailLocationState & {
  episode: EpisodeDetail;
};

const EpisodeDetailPage: FC = () => {
  const { podcastId, episodeId } = useParams();

  const navigate = useNavigate();

  // Check if podcast is not null. If it is, fetch the data again.
  const location = useLocation();
  const { podcast, episode } = location.state as EpisodeDetailLocationState;

  console.log(podcast, episode);

  const handlePodcastClick = () => navigate(`/podcast/${podcastId}`, { state: { podcast } });

  return (
    <div id="episode" className="relative grid grid-flow-col gap-10">
      <SidebarWrapper>
        <PodcastSidebar
          title={podcast.name.label}
          artist={podcast.artist.label}
          cover={podcast.image[0]?.label}
          description={podcast.summary.label}
          onPodcastClick={handlePodcastClick}
        />
      </SidebarWrapper>
      <section id="episode-detail">
        EpisodeDetail {podcastId} {episodeId}
      </section>
    </div>
  );
};

export default EpisodeDetailPage;
