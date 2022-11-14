import Link from "next/link";

const department = ({ id, alias }) => (
  <Link key={`department-${id}`} href={`/view-department/${id}`}>
    <li>
      <button className="btn btn-secondary mb-4 w-20">{alias}</button>
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
