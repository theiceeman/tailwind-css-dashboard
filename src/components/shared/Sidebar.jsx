import { FcBullish } from "react-icons/fc";
import Navbar from './Navbar'
const Sidebar = () => {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
      <div className="flex items-center gap-2 px-1 pt-5 pb-5">
        <FcBullish fontSize={24} />
        <span className="text-neutral-100 text-lg">Openshop</span>
      </div>
      {/* <div className="flex-1">top part</div> */}
      <Navbar />
      {/* <div className="flex-1">bottom part</div> */}
    </div>
  );
};

export default Sidebar;
