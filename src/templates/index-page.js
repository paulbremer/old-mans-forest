import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import Form from '../components/Form'

import styles from './styles.module.css'

export const IndexPageTemplate = ({
  image,
  plattegrond,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
        backgroundSize: `contain`,
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'flex-end',
          alignItems: 'left',
          flexDirection: 'column',
          margin: '0 -2rem',
          transform: 'rotate(25deg)'
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow: 'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em'
          }}
        >
          {title}
        </h1>
      </div>
    </div>
    <section style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            padding: '0.25em 1em',
            margin: '2rem 0',
            textTransform: 'uppercase'
          }}
        >
          Wat is het?
        </h2>
      </div>
      <div className={styles.container}>
        <p style={{ fontSize: '1.25rem', textAlign: 'center' }}>
          Groot feest want wij zijn weer jarig. Allemaal de grote 30. Allemaal eindelijk volwassen. En dat betekent de
          grootste reden voor een nog groter feest! 🎉
          <br />
          <br />
          <div
            style={{
              position: 'relative',
              display: 'flex',
              backgroundColor: '#ffe924',
              justifyContent: 'center',
              margin: '50px 0'
            }}
          >
            <img
              src="/img/corona.png"
              alt="oh nee corona"
              style={{ height: '250px', position: 'absolute', left: '-120px' }}
            />
            <div style={{ minHeight: '250px', padding: '20px' }}>
              <h2>CORONA UPDATE</h2>
              <p style={{ padding: '20px 40px', fontSize: '16px' }}>
                Door het corona virus zijn ook wij genoodzaakt dit grote feest te verplaatsen. Er is nog steeds veel
                onduidelijkheid over grote feesten. Daarom heeft de origanisatie besloten om het feest te verplaatsen
                naar volgend jaar. Dus pak je agenda en noteer alvast; <strong>11 juni 2022</strong>, dan gaat het nog
                groter aangepakt worden!
              </p>
            </div>
            <img
              src="/img/corona.png"
              alt="oh nee corona"
              style={{ height: '250px', position: 'absolute', right: '-120px' }}
            />
          </div>
          <br />
          <br />
          Op 11 juni 2022 vieren wij (Stefan, Jorrit, Paul & Tim) dit heugelijk feit. Een groot festival met de grootste DJ's,
          de grootste kampvuren die je ooit hebt gezien, theatervoorstellingen en huttub!
          <br />
          <br />
          Kom je ook? Hieronder kun je alvast je eigen ticket scoren!
        </p>
      </div>
    </section>
    <section style={{ padding: '2rem', backgroundColor: 'rgb(190, 191, 192)' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            padding: '0.25em 1em',
            margin: '0 0 2rem',
            textTransform: 'uppercase'
          }}
        >
          Plattegrond
        </h2>
      </div>
      <img src={'/img/plattegrond.png'} alt="Plattegrond" />
    </section>
    <section style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            padding: '0.25em 1em',
            margin: '2rem 0',
            textTransform: 'uppercase'
          }}
        >
          Timetable
        </h2>
      </div>
      <p
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          textAlign: 'center',
          margin: '3rem 0'
        }}
      >
        Timetable coming soon
      </p>
    </section>
    <section style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            padding: '0.25em 1em',
            textTransform: 'uppercase'
          }}
        >
          Tickets
        </h2>
      </div>
      <Form />
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
