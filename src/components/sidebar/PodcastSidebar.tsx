import { type FC } from 'react';
import Divider from '../divider/Divider';
import classNames from 'classnames';

const getPictureStyles = (isClickable: boolean) =>
  classNames({
    'flex justify-center': true,
    'cursor-pointer': isClickable
  });

const getTitleStyles = (isClickable: boolean) =>
  classNames({
    'font-bold': true,
    'cursor-pointer': isClickable
  });

const getArtistStyles = (isClickable: boolean) =>
  classNames({
    'cursor-pointer': isClickable
  });

type PodcastSidebarProps = {
  title: string;
  artist: string;
  cover: string;
  description: string;
  onPodcastClick?: () => void;
};

const PodcastSidebar: FC<PodcastSidebarProps> = (props) => {
  const { title, artist, cover, description, onPodcastClick } = props;

  const handlePodcastClick = () => onPodcastClick?.();

  const hasPodcastClick = Boolean(onPodcastClick);

  return (
    <div
      id="sidebar-content"
      className="flex flex-col gap-4 shadow-[0px_2px_5px_0px] shadow-gray-400 py-4 px-2 rounded-sm"
    >
      <picture className={getPictureStyles(hasPodcastClick)} onClick={handlePodcastClick}>
        <img className="rounded-md aspect-square h-[200px]" src={cover} alt={title} />
      </picture>
      <Divider />
      <div className="pl-4">
        <h2 className={getTitleStyles(hasPodcastClick)} onClick={handlePodcastClick}>
          {title}
        </h2>
        <p className={getArtistStyles(hasPodcastClick)} onClick={handlePodcastClick}>
          <i> by </i>
          {artist}
        </p>
      </div>
      <Divider />
      <p className="pl-1">
        <b>Description:</b>
        <br />
        <i>{description}</i>
      </p>
    </div>
  );
};

export default PodcastSidebar;
