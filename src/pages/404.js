import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>This page doesn't exist</h1>
    <p>Awkward.</p>
  </Layout>
)

export default NotFoundPage
