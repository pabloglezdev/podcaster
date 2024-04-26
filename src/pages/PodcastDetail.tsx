import { type FC } from 'react';
import { useParams } from 'react-router-dom';

const PodcastDetail: FC = () => {
  const { podcastId } = useParams();

  return <div>PodcastDetail {podcastId}</div>;
};

export default PodcastDetail;
