import PseudoLink from "@/components/ui/layouts/PseudoLink";

const NavBarOffCanvas = () => {
  return (
    <div className="header-element">
      <PseudoLink
        className="header-link switcher-icon"
        data-bs-toggle="offcanvas"
        data-bs-target="#switcher-canvas"
      >
        <i className="bx bx-cog header-link-icon" />
      </PseudoLink>
    </div>
  );
};

export default NavBarOffCanvas;
