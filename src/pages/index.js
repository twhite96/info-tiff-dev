import React from "react"
// import { Link } from "gatsby"
import styled from 'styled-components';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const StyledImgContainer = styled.div`
  max-width: 4000px;
  margin-bottom: 1.45rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Tiffany | Portfolio" />
    <StyledImgContainer>
      <Image />
    </StyledImgContainer>
  </Layout>
)

export default IndexPage
