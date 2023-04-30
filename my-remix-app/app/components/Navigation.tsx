import { NavLink } from "react-router-dom";
export default function Navigation() {
  //impolemets the navigation bar with remix reserved tags
  return (
    <nav className="bg-transparent ml-4 mt-4 grid grid-cols-2 gap-2 w-64">
      <NavLink className=" text-white text-center bg-green-800 rounded-2xl p-4 hover:bg-green-950" to="/">
        Home
      </NavLink>
      <NavLink className=" text-white text-center bg-green-800 rounded-2xl p-4 hover:bg-green-950" to="/login">
        Login
      </NavLink>
    </nav>
  );
}
