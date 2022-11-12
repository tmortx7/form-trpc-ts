type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-100 grid-rows-ben h-screen">{children}</div>
  );
};

export default Layout;
