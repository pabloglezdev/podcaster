import { type FC, type PropsWithChildren } from 'react';
import Header from '../header/Header';
import Divider from '../divider/Divider';

type LayoutProps = PropsWithChildren;

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <Header title="Podcaster" />
      <Divider />
      {children}
    </div>
  );
};

export default Layout;
