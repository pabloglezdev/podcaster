import { type FC } from 'react';
import { useParams } from 'react-router-dom';

const EpisodeDetail: FC = () => {
  const { podcastId, episodeId } = useParams();

  return (
    <div>
      EpisodeDetail {podcastId} {episodeId}
    </div>
  );
};

export default EpisodeDetail;
