import { FC } from 'react';
import Divider from '../divider/Divider';

type EpisodeSidebarProps = {
  title: string;
  artist: string;
  cover: string;
  description: string;
};

const EpisodeSidebar: FC<EpisodeSidebarProps> = (props) => {
  const { title, artist, cover, description } = props;

  return (
    <div id="sidebar-content" className="flex flex-col gap-4 pt-2">
      <picture className="flex flex-1 justify-center ">
        <img className="rounded-md" src={cover} alt={title} width={200} />
      </picture>
      <Divider />
      <div className="pl-4">
        <h2 className="font-bold">{title}</h2>
        <p>
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

export default EpisodeSidebar;
