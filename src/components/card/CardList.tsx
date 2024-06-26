import { type FC } from 'react';
import { type Podcast } from '../../types/podcast';
import Card from './Card';

type CardsListProps = {
  cards: Podcast[];
  onClick: (podcast: Podcast) => void;
};

const CardsList: FC<CardsListProps> = (props) => {
  const { cards, onClick } = props;

  const handleClick = (podcast: Podcast) => onClick(podcast);

  return (
    <div id="card-list" className="grid grid-cols-6 grid-rows-auto gap-4 mt-10">
      {cards.map((podcast) => (
        <div key={podcast.id.attributes['im:id']} className="h-auto w-full">
          <Card
            title={podcast.name.label}
            image={podcast.image[0]?.label}
            artist={podcast.artist.label}
            onClick={() => handleClick(podcast)}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsList;
