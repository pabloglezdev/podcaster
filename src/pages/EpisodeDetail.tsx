import { type FC } from 'react';
import { useParams } from 'react-router-dom';

const EpisodeDetail: FC = () => {
  const { podcastId, episodeId } = useParams();

  return (
    <section id="episode-detail">
      EpisodeDetail {podcastId} {episodeId}
    </section>
  );
};

export default EpisodeDetail;
