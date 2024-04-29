import { type FC } from 'react';
import { type Podcast } from '../../types/podcast';
import Card from './Card';

type CardsListProps = {
  cards: Podcast[];
};

const CardsList: FC<CardsListProps> = (props) => {
  const { cards } = props;

  // BUG When there are two grid rows, the row height is not respected.
  return (
    <div id="card-list" className="grid grid-cols-6 grid-rows-auto gap-4 h-[1000px] max-h-[1000px] mt-10">
      {cards.map((podcast) => (
        <div key={podcast.id.attributes['im:id']} className="h-auto w-full">
          <Card
            id={podcast.id.attributes['im:id']}
            title={podcast.name.label}
            image={podcast.image[0]?.label}
            artist={podcast.artist.label}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsList;