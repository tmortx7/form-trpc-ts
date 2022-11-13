import AppLayout from "../components/layout/AppLayout";
import Channels from "../components/layout/Channels";
import Content from "../components/layout/Content";
import Header from "../components/layout/Header";
import Teams from "../components/layout/Teams";

export type ITeams = {
  id: number;
  alias: string;
};

const HomePage = () => {
  const items: ITeams[] = [
    {
      id: 1,
      alias: "ls",
    },
    {
      id: 2,
      alias: "sls",
    },
    {
      id: 3,
      alias: "fs",
    },
  ];
  return (
    <div>
      <AppLayout>
        <Teams items={items} />
        <Header />
        <Channels />
        <Content />
      </AppLayout>
    </div>
  );
};
export default HomePage;
