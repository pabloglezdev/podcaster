import { type FC, type PropsWithChildren } from 'react';
import Header from '../header/Header';
import Divider from '../divider/Divider';

type LayoutProps = PropsWithChildren;

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <div id="app" className="relative h-screen flex flex-col items-stretch">
      <Header title="Podcaster" />
      <Divider />
      <main className="mx-4">{children}</main>
    </div>
  );
};

export default Layout;
