import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>J'ai commencé ce blog avec gatsby js, le 5 novembre 2024.</p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>Home Page</title>
  </>
)
export default IndexPage
