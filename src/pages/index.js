// Node components
import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { graphql } from 'gatsby'
import { Modal } from 'react-bootstrap'
import Img from 'gatsby-image/withIEPolyfill'
import $ from 'jquery'

// Styles
import landing from '../css/landing.module.css'

// Project components
import Layout from '../components/layout'
import LandingHero from './sections/LandingHero'
import LandingCTA from './sections/LandingCta'
import LandingArticle from './sections/LandingArticle'
import Hotspot from '../components/icons/hotspot'
import Close from '../components/icons/close'
import Left from '../components/icons/left'
import Right from '../components/icons/right'
import StickyAd from '../components/sticky-ad'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const featureData = [
      {
        featTitle: 'Lots of storage, a must for a big family',
        featImg: data.featureI,
        featContent: `<p>Lorem ipsum dolor sit amet nostrud. Sed ut sinden perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p><p>Lorem ipsum dolor sit amet nostrud. Sed ut perspi ciatis unde omnis iste natus error sit voluptatem sine accusantium doloremque laudantium, totam remam.</p>`,
      },
      {
        featTitle: 'Feature 2',
        featImg: data.featureI,
        featContent: `<p>Lorem ipsum dolor sit amet nostrud. Sed ut sinden perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p><p>Lorem ipsum dolor sit amet nostrud. Sed ut perspi ciatis unde omnis iste natus error sit voluptatem sine accusantium doloremque laudantium, totam remam.</p>`,
      },
      {
        featTitle: 'Feature 3',
        featImg: data.featureI,
        featContent: `<p>Lorem ipsum dolor sit amet nostrud. Sed ut perspi ciatis unde omnis iste natus error sit voluptatem sine accusantium doloremque laudantium, totam remam.</p><p>Lorem ipsum dolor sit amet nostrud. Sed ut sinden perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>`,
      },
      {
        featTitle: 'Feature 4',
        featImg: data.featureI,
        featContent: `<p>Lorem ipsum dolor sit amet nostrud. Sed ut perspi ciatis unde omnis iste natus error sit voluptatem sine accusantium doloremque laudantium, totam remam.</p><p>Lorem ipsum dolor sit amet nostrud. Sed ut sinden perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>`,
      },
    ],
    [show, setShow] = useState(false),
    [featureIndex, setFeatureIndex] = useState(null),
    openFeature = (e, dataIndex) => {
      e.currentTarget.classList.add(landing.features_hot_spot_active)
      setFeatureIndex(dataIndex)
      setShow(true)
    },
    removeActiveClass = () => {
      $(`.${landing.features_hot_spot}`).removeClass(
        landing.features_hot_spot_active
      )
    },
    closeFeature = () => {
      removeActiveClass()
      setShow(false)
    },
    previousFeature = () => {
      if (featureIndex === 1) {
        removeActiveClass()
        setFeatureIndex(featureData.length)
        $(`.${landing.features_hot_spot}`)
          .get(featureData.length - 1)
          .classList.add(landing.features_hot_spot_active)
      } else {
        removeActiveClass()
        setFeatureIndex(featureIndex - 1)
        $(`.${landing.features_hot_spot}`)
          .get(featureIndex - 2)
          .classList.add(landing.features_hot_spot_active)
      }
    },
    nextFeature = () => {
      if (featureIndex === featureData.length) {
        removeActiveClass()
        setFeatureIndex(1)
        $(`.${landing.features_hot_spot}`)
          .get(0)
          .classList.add(landing.features_hot_spot_active)
      } else {
        removeActiveClass()
        setFeatureIndex(featureIndex + 1)
        $(`.${landing.features_hot_spot}`)
          .get(featureIndex)
          .classList.add(landing.features_hot_spot_active)
      }
    },
    featureCarLoaded = () => {
      $(`.${landing.features_hot_spot}`).addClass(landing.hot_spot_display)
    },
    featureCarXsLoaded = () => {
      $(`.${landing.features_hot_spot}`).addClass(landing.hot_spot_display)
    }
  return (
    <Layout>
      <SEO title="Home" />
      <LandingHero poster={data.hero.childImageSharp.fluid.src} />
      <LandingCTA />
      <LandingArticle />
      <section className={landing.hero_features_section}>
        <div className="d-flex flex-column flex-xl-row">
          <div className="flex-grow-1 my-auto order-2 order-xl-1">
            <div className={`${landing.features_wrapper} pr-md-5 pr-xl-0`}>
              <Img
                fluid={data.featureCar.childImageSharp.fluid}
                alt="featureCar"
                onLoad={() => featureCarLoaded()}
                className={`d-none d-md-block ${landing.feature_car}`}
              />
              <Img
                fluid={data.featureCarXs.childImageSharp.fluid}
                alt="featureCarXs"
                onLoad={() => featureCarXsLoaded()}
                className="d-md-none"
              />
              <button
                type="button"
                className={`${landing.features_hot_spot} ${landing.features_hot_spot_I}`}
                onClick={e => openFeature(e, 1)}
              >
                <Hotspot />
              </button>
              <button
                type="button"
                className={`${landing.features_hot_spot} ${landing.features_hot_spot_II}`}
                onClick={e => openFeature(e, 2)}
              >
                <Hotspot />
              </button>
              <button
                type="button"
                className={`${landing.features_hot_spot} ${landing.features_hot_spot_III}`}
                onClick={e => openFeature(e, 3)}
              >
                <Hotspot />
              </button>
              <button
                type="button"
                className={`${landing.features_hot_spot} ${landing.features_hot_spot_IV}`}
                onClick={e => openFeature(e, 4)}
              >
                <Hotspot />
              </button>
            </div>
          </div>
          <div className="flex-shrink-1 my-auto order-1 order-xl-2 text-center text-xl-left">
            <div className={landing.features_content_holder}>
              <h5 className={landing.features_content_title}>
                Features we cannot live without
              </h5>
              <div className={landing.features_content_wrapper}>
                <div
                  className={`${landing.features_content} d-none d-xl-block`}
                >
                  <p>
                    Hover over the image to discover the features from the
                    Sienna we cannot live without do eiusmod tempor incididunt.
                  </p>
                </div>
                <div className={`${landing.features_content} d-xl-none`}>
                  <p>
                    Tap the image to discover the features from the Sienna we
                    cannot live without do eiusmod tempor.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => (window.location.href = `//toyota.ca`)}
                  className={`btn btn-primary ${landing.features_button} d-none d-xl-inline-block`}
                >
                  BUILD &amp; PRICE
                </button>
              </div>
            </div>
          </div>
          <div className="flex-grow-1 d-xl-none order-3 text-center pt-5">
            <button
              type="button"
              onClick={() => (window.location.href = `//toyota.ca`)}
              className={`btn btn-primary ${landing.features_button}`}
            >
              BUILD &amp; PRICE
            </button>
          </div>
        </div>
      </section>
      <Modal
        show={show}
        onHide={() => closeFeature()}
        backdrop="static"
        keyboard={false}
        className={`fixed-left ${landing.features_modal}`}
        backdropClassName="d-none"
        contentClassName={landing.features_modal_content}
        dialogClassName={`modal-dialog-aside ${landing.features_dialog}`}
        aria-labelledby="features-modal"
      >
        <Modal.Header className={landing.features_modal_header}>
          <div className={landing.feature_dismiss}>
            <button
              type="button"
              className={landing.roundButton}
              onClick={() => closeFeature()}
            >
              <Close />
            </button>
          </div>
          <div className={landing.features_title_wrapper}>
            <h4 className={landing.features_modal_title}>
              {featureIndex !== null && featureData[featureIndex - 1].featTitle}
            </h4>
          </div>
        </Modal.Header>
        <Modal.Body className={landing.features_modal_body}>
          {featureIndex !== null && (
            <>
              <img
                src={
                  featureData[featureIndex - 1].featImg.childImageSharp.fluid
                    .src
                }
                alt="featImg"
                className={landing.featImg}
              />
              <div>
                {ReactHtmlParser(featureData[featureIndex - 1].featContent)}
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className={landing.features_modal_footer}>
          <button
            className={`${landing.roundButton} mr-2`}
            onClick={previousFeature}
          >
            <Left />
          </button>
          <button
            className={`${landing.roundButton} mx-2`}
            onClick={nextFeature}
          >
            <Right />
          </button>
        </Modal.Footer>
      </Modal>
      <StickyAd />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    hero: file(relativePath: { eq: "captura-de-pantalla.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, maxHeight: 575) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    families: file(relativePath: { eq: "families.png" }) {
      childImageSharp {
        fixed(width: 433, height: 207) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    familiesM: file(relativePath: { eq: "families-m.png" }) {
      childImageSharp {
        fixed(width: 335, height: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    feature_image: file(relativePath: { eq: "sienna-side2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 976, maxHeight: 432) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide1: file(relativePath: { eq: "slide-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 353, maxHeight: 525) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide2: file(relativePath: { eq: "slide-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 353, maxHeight: 525) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide3: file(relativePath: { eq: "slide-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 353, maxHeight: 525) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    featureCar: file(relativePath: { eq: "feature-car.png" }) {
      childImageSharp {
        fluid(maxWidth: 913, maxHeight: 570) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    featureCarXs: file(relativePath: { eq: "feature-car-xs.png" }) {
      childImageSharp {
        fluid(maxWidth: 375, maxHeight: 316) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    featureI: file(relativePath: { eq: "feature-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 385, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
