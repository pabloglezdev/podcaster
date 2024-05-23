import { type FC } from 'react';

type CardProps = {
  title: string;
  image: string;
  artist: string;
  onClick: () => void;
};

const Card: FC<CardProps> = (props) => {
  const { title, image, artist, onClick } = props;

  const handleClick = () => onClick();

  return (
    <div
      id="card"
      className="w-full border border-gray-200 rounded-sm shadow-[0px_2px_5px_0px] shadow-gray-400 relative inline-flex flex-col items-center h-auto max-h-[200px] p-2 mb-10 cursor-pointer"
      onClick={handleClick}
    >
      <picture className="absoulte top-0 left-0 -translate-y-8">
        <img className="rounded-full" src={image} alt={title} width={100} />
      </picture>
      <span className="text-center line-clamp-2 -translate-y-4 text-ellipsis overflow-hidden">
        {title.toUpperCase()}
      </span>
      <span className="text-center text-gray-400 text-s line-clamp-2 -translate-y-4">Author: {artist}</span>
    </div>
  );
};

export default Card;
