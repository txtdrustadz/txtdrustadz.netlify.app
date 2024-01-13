import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const News = () => (
  <Layout>
    <h1>News Page</h1>
    <p>Welcome to news page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="News" />

export default News
