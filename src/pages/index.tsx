import Sidebar from "../components/container/Sidebar";
import AppLayout from "../components/layout/AppLayout";
import Channels from "../components/layout/Channels";
import Content from "../components/layout/Content";
import Header from "../components/layout/Header";

const HomePage = () => {

  return (
    <div>
      <AppLayout>
      <Sidebar currentDepartmentId={1} />
        <Header />
        <Channels />
        <Content />
      </AppLayout>
    </div>
  );
};
export default HomePage;
