import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { RootState } from "../store/store";
import { toggleTheme } from "../store/Slices/themeSlice";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { logout } from "../store/Slices/authSlice";

function Header() {
  const isDark = useSelector((state: RootState) => state?.theme?.isDark);
  const dispatch = useDispatch();

  return (
    <div
      className={`flex flex-row  gap-4  items-center justify-between p-4  ${
        isDark ? "bg-gray-800 " : "bg-gray-300 "
      } text-xl`}>
      <div className="flex flex-row gap-4 items-center">
        <Link className="p-1" to={"/auth"}>
          Login
        </Link>
        <Link to={"/home"}>home</Link>
        <p className="cursor-pointer" onClick={()=>dispatch(logout())}>Logout</p>
      </div>

      <button
        className="cursor-pointer hover:bg-gray-400/50 flex items-center p-1 rounded"
        onClick={() => dispatch(toggleTheme())}>
        {isDark ? <MdLightMode/> : <MdDarkMode />}
        {isDark ? "light" : "dark"}
      </button>
    </div>
  );
}

export default Header;
