import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/" className="text-xl text-gray-600">
        {siteTitle}
      </Link>
    </h1>
  </header>
)

export default Header
