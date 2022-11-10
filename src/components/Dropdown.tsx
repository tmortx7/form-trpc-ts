let names = ["Field", "Sanitary", "Storm"];
let namesList = names.map(function (name) {
	return (
		<li className="">
			<a href={`/department/edit/`}>{name}</a>
		</li>
	);
});

const Dropdown = () => {
	return (
		<div className="dropdown dropdown-hover">
			<label tabIndex={0} className="btn btn-ghost m-1 text-secondary">
				HOME
			</label>
			<ul
				tabIndex={0}
				className="dropdown-content menu p-2 bg-base-100 rounded-box w-52"
			>
				{namesList}
			</ul>
		</div>
	);
};
export default Dropdown;
