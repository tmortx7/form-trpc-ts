import { findIndex } from "lodash";
import { trpc } from "../../utils/trpc";
import Departments from "../layout/Departments";

const Sidebar = ({ currentDepartmentId }) => {
  const { data, isLoading, error } = trpc.department.list.useQuery();
  if (isLoading) {
    return <p> Loading...</p>;
  }
  if (error) {
    return <p>Error...</p>;
  }
  const departmentIdx = currentDepartmentId
    ? findIndex(data, ["id", parseInt(currentDepartmentId, 10)])
    : 0;
  const department = data[departmentIdx];
  return [
    <Departments
      key="department-sidebar"
      departments={data.map((t) => ({
        id: t.id,
        alias: t.alias,
      }))}
    />,
  ];
};

export default Sidebar;
