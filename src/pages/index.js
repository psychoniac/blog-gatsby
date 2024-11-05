import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>J'ai commencé ce blog avec gatsby js, le 5 novembre 2024.</p>
      <StaticImage
        alt="Photo attention chien méchant"
        src="https://as2.ftcdn.net/v2/jpg/00/29/80/85/1000_F_29808598_w4fhhM0MN4E3Ga4NRokCYFdWjK02YpbL.jpg"
      />
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>Home Page</title>
  </>
)
export default IndexPage
