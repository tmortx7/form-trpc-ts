import { ITeams } from "../../pages";

const Teams = (props) => {
  const items = props.items;

  const listItems = items.map(({ id, alias }: ITeams) => (
    <li key={id}>
      <button className="btn btn-secondary ml-2 mb-2 w-16  ">{alias}</button>
    </li>
  ));

  return (
    <div className="col-start-1 row-start-1 row-span-4 bg-neutral ">
      <div className="">
        <ul className="">{listItems}</ul>
      </div>
    </div>
  );
};

export default Teams;
