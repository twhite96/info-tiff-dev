import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "desk.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 5104, maxHeight: 2758) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  // if (!data?.childImageSharp?.fluid) {
  //   return <div>Picture not found</div>
  // }

  return <Img fluid={data.file.childImageSharp.fluid} style={{ boxShadow: `0 0.5rem 2rem rgba(0,0,0,0.40)` }} />
}

export default Image
