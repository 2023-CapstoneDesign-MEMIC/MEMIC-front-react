/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import AudioRecorder from './AudioRecorder'
const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6526603ca6ecfaa934a69294").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class RecordView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/RecordController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = RecordView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6527f97472edb9377a2f5b7d'
    htmlEl.dataset['wfSite'] = '6526603ca6ecfaa934a69294'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = RecordView.Controller !== RecordView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/me-mic-demo-site.webflow.css);

          @media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"cdb04180-031c-bd6d-bf2c-3d7777436601\"] {-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}}@media (max-width:991px) and (min-width:768px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"cdb04180-031c-bd6d-bf2c-3d7777436601\"] {height:0px;}}@media (max-width:767px) and (min-width:480px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"cdb04180-031c-bd6d-bf2c-3d7777436601\"] {height:0px;}}@media (max-width:479px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"cdb04180-031c-bd6d-bf2c-3d7777436601\"] {height:0px;}}


            * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -o-font-smoothing: antialiased;
          }
        ` }} />
        <span className="af-view">
          <div>
            <div className="af-class-page-wrapper">
              <main className="af-class-main-wrapper">
                <div data-animation="default" className="af-class-navbar12_component w-nav" data-easing2="ease" fs-scrolldisable-element="smart-nav" data-easing="ease" data-collapse="medium" data-w-id="cdb04180-031c-bd6d-bf2c-3d77774365ed" role="banner" data-duration={400} id="nav_bar">
                  <div className="af-class-navbar12_container">
                    <a href="/" className="af-class-navbar12_logo-link w-nav-brand"><img src="images/logo.png" loading="lazy" width={42} alt="logo for navbar
        " className="af-class-navbar12_logo" /></a>
                    <div className="af-class-navbar12_menu-button w-nav-button">
                      <address className="af-class-menu-icon1">
                        <div className="af-class-menu-icon1_line-top" />
                        <div className="af-class-menu-icon1_line-middle">
                          <div className="af-class-menu-icon_line-middle-inner" />
                        </div>
                        <div className="af-class-menu-icon1_line-bottom" />
                      </address>
                    </div>
                    <nav role="navigation" className="af-class-navbar12_menu af-class-is-page-height-tablet w-nav-menu">
                      <a href="#" className="af-class-navbar12_link w-nav-link">Service</a>
                      <a href="#" className="af-class-navbar12_link w-nav-link">Start Now</a>
                      <div data-hover="true" data-delay={200} data-w-id="cdb04180-031c-bd6d-bf2c-3d77774365fc" className="af-class-navbar12_menu-dropdown w-dropdown">
                        <div className="af-class-navbar12_dropdown-toggle w-dropdown-toggle">
                          <div>More</div>
                          <div className="af-class-dropdown-chevron w-embed"><svg width=" 100%" height=" 100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor" />
                            </svg></div>
                        </div>
                        <nav data-w-id="cdb04180-031c-bd6d-bf2c-3d7777436601" className="af-class-navbar12_dropdown-list w-dropdown-list">
                          <div className="af-class-navbar12_dropdown-link-list">
                              <h4 className="af-class-text-size-small af-class-text-weight-semibold">Explore Our Pages</h4>
                              <a href="fileupload" className="af-class-navbar12_dropdown-link w-inline-block">
                                <div className="af-class-navbar12_icon-wrapper">
                                  <div className="af-class-icon-embed-xsmall w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="af-class-iconify af-class-iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                      <path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01L12.01 11L8 15.01z" />
                                    </svg></div>
                                </div>
                                <div className="af-class-navbar12_text-wrapper">
                                  <div className="af-class-text-weight-semibold">Input page</div>
                                  <p className="af-class-text-size-small af-class-hide-mobile-landscape">Learn more about our vocal imitation guide.</p>
                                </div>
                              </a>
                              <a href="record" aria-current="page" className="af-class-navbar12_dropdown-link w-inline-block w--current">
                                <div className="af-class-navbar12_icon-wrapper">
                                  <div className="af-class-icon-embed-xsmall w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="af-class-iconify af-class-iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                      <path fill="currentColor" d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15a.998.998 0 0 0-.98-.85c-.61 0-1.09.54-1 1.14c.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08a6.993 6.993 0 0 0 5.91-5.78c.1-.6-.39-1.14-1-1.14z" />
                                    </svg></div>
                                </div>
                                <div className="af-class-navbar12_text-wrapper">
                                  <div className="af-class-text-weight-semibold">Recording page</div>
                                  <p className="af-class-text-size-small af-class-hide-mobile-landscape">Record your own voice for vocal imitation.</p>
                                </div>
                              </a>
                              <a href="feedback" className="af-class-navbar12_dropdown-link w-inline-block">
                                <div className="af-class-navbar12_icon-wrapper">
                                  <div className="af-class-icon-embed-xsmall w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="af-class-iconify af-class-iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                      <path fill="currentColor" d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3z" />
                                    </svg></div>
                                </div>
                                <div className="af-class-navbar12_text-wrapper">
                                  <div className="af-class-text-weight-semibold">Report page</div>
                                  <p className="af-class-text-size-small af-class-hide-mobile-landscape">Analyze the similarity between your voice and the target voice.</p>
                                </div>
                              </a>
                              <a href="faqs" className="af-class-navbar12_dropdown-link w-inline-block">
                                <div className="af-class-navbar12_icon-wrapper">
                                  <div className="af-class-icon-embed-xsmall w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="af-class-iconify af-class-iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                      <path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z" />
                                    </svg></div>
                                </div>
                                <div className="af-class-navbar12_text-wrapper">
                                  <div className="af-class-text-weight-semibold">FAQs</div>
                                  <p className="af-class-text-size-small af-class-hide-mobile-landscape">Receive feedback based on the similarity of your vocal imitation.</p>
                                </div>
                              </a>
                            </div>
                        </nav>
                      </div>
                      <div className="af-class-navbar12_menu-buttons">
                        <a href="#" className="af-class-button af-class-is-secondary af-class-is-small w-button">Sign Up</a>
                        <a href="#" className="af-class-button af-class-is-small w-button">Log In</a>
                      </div>
                    </nav>
                  </div>
                </div>
                <section className="af-class-section_record-your-voice_cta-form">
                  <div className="af-class-padding-global-2">
                    <div className="af-class-container-small">
                      <div className="af-class-padding-section-large-3">
                        <div className="af-class-text-align-center">
                          <div className="af-class-margin-bottom af-class-margin-small">
                            <h1 className="af-class-heading-2">Record Your Voice</h1>
                          </div>
                          <p className="af-class-text-size-medium"><span className="af-class-text-span">Show your vocal imitation skills </span></p>
                          <div className="af-class-margin-top af-class-margin-medium">
                            <div className="af-class-record-your-voice_cta-form_form-block w-form">
                              <div>
                                <AudioRecorder />
                              </div>
                              <div className="af-class-success-message w-form-done">
                                <div className="af-class-success-text">Thank you! Submission received.</div>
                              </div>
                              <div className="af-class-error-message w-form-fail">
                                <div className="af-class-error-text">Oops! Something went wrong. Please try again.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="af-class-section_record-your-voice_cta">
                  <header className="af-class-section_header62">
                    <section />
                    <div className="af-class-padding-global-2">
                      <div className="af-class-container-small">
                        <div className="af-class-padding-section-large-3">
                          <div className="af-class-text-align-center">
                            <div className="af-class-margin-bottom af-class-margin-small">
                              <h1>Now it's all ready!</h1>
                            </div>
                            <p className="af-class-text-size-medium">Uncover the Similarities of Your Voice Imitation</p>
                            <div className="af-class-margin-top af-class-margin-medium">
                              <div className="af-class-button-group af-class-is-center">
                                <a href="feedback" className="af-class-button w-button">Here's your report</a>
                                <a href="fileupload" className="af-class-button af-class-is-secondary w-button">Go back to Upload page</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                </section>
              </main>
              <footer className="af-class-footer4_component">
                <div className="af-class-padding-global">
                  <div className="af-class-container-large">
                    <div className="af-class-padding-vertical af-class-padding-xxlarge">
                        <div className="w-layout-grid af-class-footer4_top-wrapper">
                          <a href="#" id="w-node-_18a77209-24cc-8d26-8fa2-7e9adce0106a-34a692c8" className="af-class-footer4_logo-link w-nav-brand"><img src="images/logo.png" loading="lazy" width={42} alt="logo for navbar
        " className="af-class-navbar12_logo" /></a>
                          <div className="w-layout-grid af-class-footer4_link-list">
                              <div id="w-node-_18a77209-24cc-8d26-8fa2-7e9adce01085-34a692c8" className="af-class-footer4_credit-text">© 2023 ME:MIC. All rights reserved.</div>
                          </div>
                          <div id="w-node-_5413a46b-6025-d22b-adfc-5c72693f1a7e-34a692c8" className="w-layout-grid af-class-footer4_social-list">
                            <a href="https://www.notion.so/8c7c66798028437a9f25ee3e0519b77d" className="af-class-footer4_social-link w-inline-block">
                              <div className="af-class-icon-embed-xsmall w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="af-class-iconify af-class-iconify--simple-icons" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                  <path fill="currentColor" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
                                </svg></div>
                            </a>
                            <a href="https://github.com/2023-CapstoneDesign-MEMIC" className="af-class-footer4_social-link w-inline-block">
                              <div className="af-class-icon-embed-xsmall w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="af-class-iconify af-class-iconify--simple-icons" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                  <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg></div>
                            </a>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default RecordView

/* eslint-enable */