import React from "react";
import { Link } from "gatsby"


export default ({title, to}) => (
  <div className="DesktopHeaderLink">
    <Link
      to={to}
    >
      <h2 style={{ margin: 0 }}>{title}</h2>
    </Link>
  </div>
)
