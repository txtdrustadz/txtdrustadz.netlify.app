import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <StaticImage
        src="../images/txtdrustadz.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="profile"
        className="mb-2"
      />
    <h1>Hi from the Index page</h1>
    <Link to="/page-2">Go to second page</Link>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage