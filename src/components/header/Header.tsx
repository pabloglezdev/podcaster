import { type FC } from 'react';
import Loader from '../loader/Loader';
import { useNavigate } from 'react-router-dom';

type HeaderProps = {
  title: string;
  isLoading?: boolean;
};

const Header: FC<HeaderProps> = (props) => {
  const { title, isLoading = true } = props;

  const navigate = useNavigate();

  const handleHeaderClick = () => navigate('/');

  return (
    <header id="header" className="min-h-[50px] flex justify-between items-center mx-4 pointer">
      <div id="title" onClick={handleHeaderClick} className="cursor-pointer">
        <h1 className="text-xl text-[#8dafd3]">{title || 'Title'}</h1>
      </div>
      {isLoading && <Loader />}
    </header>
  );
};

export default Header;
