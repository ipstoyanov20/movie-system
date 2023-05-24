import { NavLink } from "react-router-dom";
export default function Navigation() {
  //impolemets the navigation bar with remix reserved tags
  return (
    <nav className="bg-transparent grid mt-2 ml-2 grid-cols-2 gap-2 w-64">
      <NavLink className=" text-[#faedcd] text-center bg-[#283618] rounded-md p-4 hover:bg-[#132a13]" to="/">
        Home
      </NavLink>
      <NavLink className=" text-[#faedcd] text-center bg-[#283618] rounded-md p-4 hover:bg-[#132a13]" to="/login">
        Login
      </NavLink>
    </nav>
  );
}
