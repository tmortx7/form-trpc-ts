import COC from "../public/coc-logo.svg";
import Dropdown from "./Dropdown";
let names = ['sanitary','storm','field']
const Header = () => {
	return (
		<div>
			<nav className="sticky top-0 z-10 bg-base-100">
				<div className="max-w-5xl mx-auto px-4">
					<div className="flex items-center justify-between h-16">
						<COC className="h-10" />

						<div className="flex space-x-4 text-secondary">
							<Dropdown/>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
export default Header;
