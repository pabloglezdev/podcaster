import { type FC } from 'react';
import loaderIcon from '../../assets/loader.svg';

const Loader: FC = () => <img id="loader" src={loaderIcon} alt="loader" height={30} width={30} />;

export default Loader;
