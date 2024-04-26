import { type FC } from 'react';
import Loader from '../loader/Loader';

type HeaderProps = {
  title: string;
  isLoading?: boolean;
};

const Header: FC<HeaderProps> = (props) => {
  const { title, isLoading = true } = props;

  return (
    <header className="h-[50px] flex justify-between items-center mx-6 mt-2">
      <h1 className="text-xl">{title || 'Title'}</h1>
      {isLoading && <Loader />}
    </header>
  );
};

export default Header;
