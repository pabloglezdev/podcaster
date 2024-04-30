import { type FC } from 'react';
import classNames from 'classnames';
import { type EpisodeDetail } from '../../types/podcast';
import { convertMillisecondsToHours, getDateOnly } from '../../utils/date';

const getRowClassName = (index: number) =>
  classNames({
    'cursor-pointer': true,
    'bg-gray-200': index % 2 === 0
  });

type EpisodesTableProps = {
  podcastDetail: Array<EpisodeDetail>;
  onRowClick: (episode: EpisodeDetail) => void;
};

const EpisodesTable: FC<EpisodesTableProps> = (props) => {
  const { podcastDetail, onRowClick } = props;

  const handleRowClick = (episode: EpisodeDetail) => onRowClick(episode);

  return (
    <table className="h-full w-full border-separate border-spacing-y-3">
      <thead className="text-left">
        <th>Title</th>
        <th>Date</th>
        <th>Duration</th>
      </thead>
      <tbody>
        {podcastDetail.map((episode, index) => (
          <tr key={index} className={getRowClassName(index)} onClick={() => handleRowClick(episode)}>
            <td>{episode.trackName}</td>
            <td>{getDateOnly(episode.releaseDate)}</td>
            <td>{convertMillisecondsToHours(episode.trackTimeMillis)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EpisodesTable;
