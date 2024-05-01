import { type FC } from 'react';
import { type EpisodeDetail } from '../../types/podcast';
import { convertMillisecondsToHours, getDateOnly } from '../../utils/date';

type EpisodeTableProps = {
  podcastDetail: Array<EpisodeDetail>;
  onRowClick: (episode: EpisodeDetail) => void;
};

const EpisodesTable: FC<EpisodeTableProps> = (props) => {
  const { podcastDetail, onRowClick } = props;

  const handleRowClick = (episode: EpisodeDetail) => onRowClick(episode);

  return (
    <table className="h-full w-full">
      <thead className="text-left h-10">
        <th>Title</th>
        <th>Date</th>
        <th>Duration</th>
      </thead>
      <tbody>
        {podcastDetail.map((episode, index) => (
          <tr key={index} className="odd:bg-gray-50 h-10 border-t-2">
            <td className="text-cyan-700" onClick={() => handleRowClick(episode)}>
              {episode.trackName}
            </td>
            <td>{getDateOnly(episode.releaseDate)}</td>
            <td>{convertMillisecondsToHours(episode.trackTimeMillis)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EpisodesTable;
