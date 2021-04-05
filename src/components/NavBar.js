import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const alllinks = links.map((link) => 
    <a key="{link}" href="#{link}">{link}</a>
  )

  return <nav>
   {alllinks}
    </nav>;
}

export default NavBar;
