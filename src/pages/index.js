import React from "react"
import Hero from "../components/Hero"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Our Favourite Destinations" />
    <Testimonials />
  </Layout>
)

export default IndexPage
