import { Link } from "react-router-dom";
import { classNames } from "../../utils";

export default function NavLink({text, to, reverse}) {
  return (
    <li>
      <Link to={to} className={classNames(
        "block py-2 px-5 rounded-md opacity-80 hover:opacity-100 hover:underline transition-all",
        reverse && "bg-blue-600 text-white hover:no-underline"
      )}>{text}</Link>
    </li>
  )
}
