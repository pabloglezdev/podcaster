import { type PropsWithChildren, type FC } from 'react';

type SidebarWrapperProps = PropsWithChildren;

const SidebarWrapper: FC<SidebarWrapperProps> = () => {
  const { children } = props;

  return <aside className="max-w-[300px]">{children}</aside>;
};

export default SidebarWrapper;
