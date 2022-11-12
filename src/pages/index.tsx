import AppLayout from "../components/layout/AppLayout";
import Channels from "../components/layout/Channels";
import Content from "../components/layout/Content";
import Header from "../components/layout/Header";
import Teams from "../components/layout/Teams";

const HomePage = () => {
  return (
    <div>
      <AppLayout>
        <Teams />
        <Header />
        <Channels />
        <Content />
      </AppLayout>
    </div>
  );
};
export default HomePage;
