import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type CardProps = {
  id: string;
  title: string;
  image: string;
  artist: string;
};

const Card: FC<CardProps> = (props) => {
  const { id, title, image, artist } = props;

  const navigate = useNavigate();

  const handleClick = () => navigate(`/podcast/${id}`);

  return (
    <div
      id="card"
      className="w-full border border-gray-200 rounded-sm shadow-[0px_5px_5px_0px] shadow-gray-200 relative inline-flex flex-col items-center h-auto max-h-[200px] p-1 mb-10 cursor-pointer"
      onClick={handleClick}
    >
      <img className="absoulte top-0 left-0 rounded-full -translate-y-8" src={image} alt={title} width={100} />
      <span className="text-center line-clamp-2 -translate-y-4">{title.toUpperCase()}</span>
      <span className="text-center text-gray-400 text-s line-clamp-2 -translate-y-4">Author: {artist}</span>
    </div>
  );
};

export default Card;
