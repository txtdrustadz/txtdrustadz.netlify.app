import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="m-auto max-w-lg bg-slate-400 font-sans">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="bg-yellow-900">
        <nav className="bg-yellow-100">
          <ul className="py-1 flex">
            <li>
              <Link to="/" className="px-0.5 font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/news" className="px-0.5 font-bold">
                News
              </Link>
            </li>
            <li>
              <Link to="/about" className="px-0.5 font-bold">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </div>
      <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
    </div>
  )
}

export default Layout
