import React from "react";

function Header() {
  return (
    <header className="h-10 w-full fixed flex justify-between items-center px-10">
      <div>
        <h4 className="text-white">NGS</h4>
      </div>
      <div className="text-white">Menu</div>
    </header>
  );
}

export default Header;
