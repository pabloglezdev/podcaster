import { type FC } from 'react';
import { useParams } from 'react-router-dom';

const PodcastDetail: FC = () => {
  const { podcastId } = useParams();

  return <section id="podcast-detail">PodcastDetail {podcastId}</section>;
};

export default PodcastDetail;
