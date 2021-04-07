import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import '../styles/index.css'
import Layout from "../components/layout"
import SEO from "../components/seo"
import hero from "../images/hero.png" 
import ProductPage from "../components/product"
import FeaturesPage from "../components/features"
import ComparePage from "../components/compare"
import CarouselPage from "../components/carousel"

const IndexPage = () => {
    console.log(hero)
  return(
  <Layout>
    <SEO title="Home" />
    <div className="indexgrid">
      <div className="grida">
    <h1 className="h1ele">Trello helps teams move work forward.</h1>
    <p className="pele">Collaborate, manage projects, and reach new productivity peaks.
     From high rises to the home office, the way your team works is unique accomplish it all with Trello. </p>
    <br />
    <input className="input" placeholder="Enter your email address" />
    <button className="butt">Sign up - it's free!</button>
     </div>
    <div className="gridb">
    <img className="hero" src={hero} alt="hero" />
    </div>
    </div>
    <ProductPage />
    <FeaturesPage />
    <ComparePage />
    <CarouselPage />
  </Layout>
  
)
  }
export default IndexPage
