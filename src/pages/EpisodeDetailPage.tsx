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

  console.log(episode);

  const handlePodcastClick = () => navigate(`/podcast/${podcastId}`, { state: { podcast } });

  const descriptionPlaceholder = 'No description available';

  return (
    <div id="episode-page" className="relative grid grid-flow-col gap-10">
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
        {episode ? (
          <div className="flex flex-col gap-4 p-4 shadow-[0px_2px_5px_0px] shadow-gray-400 rounded-sm">
            <h3 className="text-xl font-bold">{episode.trackName}</h3>
            <p>{episode.description || descriptionPlaceholder}</p>
            <audio controls>
              <source src={episode.episodeUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </section>
    </div>
  );
};

export default EpisodeDetailPage;
