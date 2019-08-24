import React from "react";
import {Link} from "gatsby"

const BigLinkOut = ({to, title}) => {
  return <a className="yellowLink" href={to}><h3>{title}</h3></a>
}
const BigLinkLocal = ({to, title}) => {
  return <Link className="yellowLink" to={to}><h3>{title}</h3></Link>
}

export {
  BigLinkOut,
  BigLinkLocal
}
