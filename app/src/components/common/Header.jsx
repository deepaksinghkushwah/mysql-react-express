import UserInfo from "../common/UserInfo";
import { useUserStore } from "../../store/useStore";
const Header = () => {
  const user = useUserStore((state) => state.user);
  return (
    <div className="flex md:flex-row justify-between items-center gap-3 shadow-lg sm:flex-col xs:flex-col  bg-yellow-100 p-5">
      <h1 className="text-3xl font-bold text-orange-700">My Application</h1>

      {user ? <UserInfo user={user} /> : ""}

      <div className="md:text-right mr-5 md:w-1/4 sm:text-left sm:w-full">
        TEST
      </div>
    </div>
  );
};

export default Header;
