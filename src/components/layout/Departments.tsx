import Link from "next/link";
import { IEditDepartment } from "../../schema/department.schema";

const department = ({ id, alias }: IEditDepartment) => (
  <Link key={`department-${id}`} href={`/department/view-department/${id}`}>
    <li>
      <button className="btn btn-secondary ml-2 mb-4 w-20">{alias}</button>
    </li>
  </Link>
);

const Departments = ({ departments }) => {
  return (
    <div className="col-start-1 row-start-1 row-span-4 bg-neutral ">
      <div className="">
        <ul className="">{departments.map(department)}</ul>
      </div>
    </div>
  );
};

export default Departments;
