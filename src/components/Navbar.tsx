import COC from "../public/coc-logo.svg";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <COC className="h-10 ml-4" />
      </div>
    </div>
  );
};

export default Navbar;
