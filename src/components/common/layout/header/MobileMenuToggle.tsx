import { IconClose, IconHamburger } from "../../Icons";

const MobileMenuToggle = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <button
      onClick={toggleMenu}
      className={`right-0 top-10 z-40 flex items-center gap-2 py-1 text-lg font-black uppercase tracking-widest md:hidden xl:absolute ${
        isOpen ? "text-zinc-700" : "text-primary-brightRed"
      }`}
    >
      <i>{isOpen ? <IconClose /> : <IconHamburger />}</i>
    </button>
  );
};

export default MobileMenuToggle;
