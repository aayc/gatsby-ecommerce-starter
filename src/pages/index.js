import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Checkout from "../components/checkout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import Video from "../components/video"
config.autoAddCss = false

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="sm:flex pt-8">
        <div className="sm:pr-16">
          <h1>Our product</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate</p>
          <center>
            <Checkout/>
           </center>
        </div>
        {/* <div className="sm:float-left sm:mr-16">
          <div className="rounded-full" style={{ marginBottom: `1rem` }}>
            <center>
              <br />
              <br />
              <a href="https://github.com/aayc" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="mr-6 media-icon" style={{fontSize: "1.2rem"}} icon={faGithub} />
              </a>
              <a href="https://twitter.com/aaronychan" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="mr-6" style={{fontSize: "1.2rem"}} icon={faTwitter} />
               </a>
              <a href="https://linkedin.com/in/aaron-y-chan" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon className="media-icon" style={{fontSize: "1.2rem"}} icon={faLinkedin} />
               </a>
            </center>
          </div>
        </div> */}
        <div>
          <Video width="500" height="281" videoSrcURL="https://www.youtube.com/embed/gmVD6UB_Y-E" videoTitle="Video goes here" />
        </div>
      </div>
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query {
//     markdown: allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//     ) {
//       edges {
//         node {
//           html
//           frontmatter {
//             date(formatString: "YYYY-MM-DD")
//             date_string
//             path
//             title
//             category
//           }
//         }
//       }
//     }
//   }
// `
