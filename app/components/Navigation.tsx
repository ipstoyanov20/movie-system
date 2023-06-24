import { NavLink } from "react-router-dom";
export default function Navigation() {
  //impolemets the navigation bar with remix reserved tags
  return (
    <nav className="bg-transparent grid mt-2 ml-2 grid-cols-2 gap-2 w-64">
      <NavLink className=" hover:text-[#EEEEEE] text-black transition-all text-center bg-[#FFD369] rounded-md p-4 hover:bg-[#222831]" to="/">
        Home
      </NavLink>
      <NavLink className=" hover:text-[#EEEEEE] text-black transition-all text-center bg-[#FFD369] rounded-md p-4 hover:bg-[#222831]" to="/login">
        Login
      </NavLink>
    </nav>
  );
}
