import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Si vous souhaitez me contacter remplissez le formulaire suivant.</p>
      <StaticImage alt="photo chaussette bébé" src="../images/chaussette.jpg" />
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>About me</title>
    <meta name="description" content="Your description" />
  </>
)

export default AboutPage
