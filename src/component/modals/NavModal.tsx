import { FC } from "react";
import { FaTimes } from "react-icons/fa";
import Navlinks from "../Navlinks";

interface NavModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavModal: FC<NavModalProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center lg:hidden ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white w-4/5 h-4/5 max-w-lg p-5 rounded-md flex relative items-center justify-center">
          <FaTimes
            className="text-[--primary-dark-blue2] text-2xl cursor-pointer absolute right-4 top-4"
            onClick={onClose}
          />
        <Navlinks />
      </div>
    </div>
  );
};

export default NavModal;
