/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6526603ca6ecfaa934a69294").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class FaqsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/FaqsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = FaqsView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '652805368613658724d27f9e'
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
    const proxies = FaqsView.Controller !== FaqsView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/me-mic-demo-site.webflow.css);

          @media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"f70efc45-9248-96cf-a696-7d3719cae7dc\"] {-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}}@media (max-width:991px) and (min-width:768px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"f70efc45-9248-96cf-a696-7d3719cae7dc\"] {height:0px;}}@media (max-width:767px) and (min-width:480px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"f70efc45-9248-96cf-a696-7d3719cae7dc\"] {height:0px;}}@media (max-width:479px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"f70efc45-9248-96cf-a696-7d3719cae7dc\"] {height:0px;}}


            * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -o-font-smoothing: antialiased;
          }
        ` }} />
        <span className="af-view">
          <div>
            <div className="af-class-page-wrapper">
              <section>
                <div data-animation="default" className="af-class-navbar12_component w-nav" data-easing2="ease" fs-scrolldisable-element="smart-nav" data-easing="ease" data-collapse="medium" data-w-id="f70efc45-9248-96cf-a696-7d3719cae7c8" role="banner" data-duration={400} id="nav_bar">
                  <div className="af-class-navbar12_container">
                    <a href="index.html" className="af-class-navbar12_logo-link w-nav-brand"><img src="images/logo.png" loading="lazy" width={42} alt="logo for navbar
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
                    <a href="#Improve" className="af-class-navbar12_link w-nav-link">Service</a>
                    <a href="#Start_now" className="af-class-navbar12_link w-nav-link">Start Now</a>
                    <div data-hover="true" data-delay={200} data-w-id="18a77209-24cc-8d26-8fa2-7e9adce00fa8" className="af-class-navbar12_menu-dropdown w-dropdown">
                      <div className="af-class-navbar12_dropdown-toggle w-dropdown-toggle">
                        <div>More</div>
                        <div className="af-class-dropdown-chevron w-embed"><svg width=" 100%" height=" 100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor" />
                          </svg></div>
                      </div>
                      <nav data-w-id="18a77209-24cc-8d26-8fa2-7e9adce00fad" className="af-class-navbar12_dropdown-list w-dropdown-list">
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
                            <a href="record" className="af-class-navbar12_dropdown-link w-inline-block">
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
              </section>
              <main className="af-class-main-wrapper">
                <header className="af-class-section_about-faqs_header">
                  <div className="af-class-padding-global-2">
                    <div className="af-class-container-large">
                      <div className="af-class-padding-section-large-3">
                        <div className="af-class-max-width-large">
                          <div className="af-class-margin-bottom af-class-margin-small">
                            <h1 className="af-class-text-color-white-3">Frequently Asked Questions</h1>
                          </div>
                          <p className="af-class-text-size-medium af-class-text-color-white">Find answers to common questions about ME:MIC and its features.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-about-faqs_header_background-image-wrapper">
                    <div className="af-class-image-overlay-layer" /><img src="images/placeholder-image.svg" loading="eager" alt className="af-class-about-faqs_header_background-image" />
                  </div>
                </header>
                <section className="af-class-section_about-faqs_faq">
                  <div className="af-class-padding-global-2">
                    <div className="af-class-container-large">
                      <div className="af-class-padding-section-large-3">
                        <div className="af-class-margin-bottom af-class-margin-xxlarge">
                          <div className="af-class-text-align-center">
                            <div className="af-class-max-width-large af-class-align-center">
                              <div className="af-class-margin-bottom af-class-margin-small">
                                <h2>FAQs</h2>
                              </div>
                              <p className="af-class-text-size-medium">Answer common questions about uploading voice files and extracting audio from YouTube videos</p>
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-grid af-class-about-faqs_faq_component">
                          <div className="w-layout-grid af-class-about-faqs_faq_list">
                            <div className="af-class-about-faqs_faq_accordion">
                              <div data-w-id="b34ad7eb-0208-7600-855c-8d59e7ff1ffd" className="af-class-about-faqs_faq_question">
                                <div className="af-class-text-size-medium af-class-text-weight-bold">How to upload files?</div>
                                <div className="af-class-about-faqs_faq_icon-wrapper">
                                  <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                                    </svg></div>
                                </div>
                              </div>
                              <div style={{width: '100%', height: 0}} className="af-class-about-faqs_faq_answer">
                                <div className="af-class-margin-bottom af-class-margin-small">
                                  <p>To upload a file, go to the upload page and click on the 'Choose File' button. Select the file from your device and click 'Upload' to start the process.</p>
                                </div>
                              </div>
                            </div>
                            <div className="af-class-about-faqs_faq_accordion">
                              <div data-w-id="b34ad7eb-0208-7600-855c-8d59e7ff2007" className="af-class-about-faqs_faq_question">
                                <div className="af-class-text-size-medium af-class-text-weight-bold">How to extract audio from YouTube videos?</div>
                                <div className="af-class-about-faqs_faq_icon-wrapper">
                                  <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                                    </svg></div>
                                </div>
                              </div>
                              <div style={{width: '100%', height: 0}} className="af-class-about-faqs_faq_answer">
                                <div className="af-class-margin-bottom af-class-margin-small">
                                  <p>To extract audio from a YouTube video, go to the extraction page and enter the YouTube URL link and timeline. Click 'Extract Audio' to start the extraction process.</p>
                                </div>
                              </div>
                            </div>
                            <div className="af-class-about-faqs_faq_accordion">
                              <div data-w-id="b34ad7eb-0208-7600-855c-8d59e7ff2011" className="af-class-about-faqs_faq_question">
                                <div className="af-class-text-size-medium af-class-text-weight-bold">How long does the extraction process take?</div>
                                <div className="af-class-about-faqs_faq_icon-wrapper">
                                  <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                                    </svg></div>
                                </div>
                              </div>
                              <div style={{width: '100%', height: 0}} className="af-class-about-faqs_faq_answer">
                                <div className="af-class-margin-bottom af-class-margin-small">
                                  <p>The extraction process usually takes a few seconds to a minute, depending on the length of the video.</p>
                                </div>
                              </div>
                            </div>
                            <div className="af-class-about-faqs_faq_accordion">
                              <div data-w-id="b34ad7eb-0208-7600-855c-8d59e7ff201b" className="af-class-about-faqs_faq_question">
                                <div className="af-class-text-size-medium af-class-text-weight-bold">Can I record my own vocal imitation?</div>
                                <div className="af-class-about-faqs_faq_icon-wrapper">
                                  <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                                    </svg></div>
                                </div>
                              </div>
                              <div style={{width: '100%', height: 0}} className="af-class-about-faqs_faq_answer">
                                <div className="af-class-margin-bottom af-class-margin-small">
                                  <p>Yes, you can record your own vocal imitation on the recording page. Just click on the 'Record' button and start singing or speaking.</p>
                                </div>
                              </div>
                            </div>
                            <div className="af-class-about-faqs_faq_accordion">
                              <div data-w-id="b34ad7eb-0208-7600-855c-8d59e7ff2025" className="af-class-about-faqs_faq_question">
                                <div className="af-class-text-size-medium af-class-text-weight-bold">How does the similarity analysis work?</div>
                                <div className="af-class-about-faqs_faq_icon-wrapper">
                                  <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                                    </svg></div>
                                </div>
                              </div>
                              <div style={{width: '100%', height: 0}} className="af-class-about-faqs_faq_answer">
                                <div className="af-class-margin-bottom af-class-margin-small">
                                  <p>The similarity analysis compares the recorded voice with the voice file or extracted voice. It analyzes factors such as pitch, tone, and rhythm to determine the similarity.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-layout-grid af-class-about-faqs_faq_list">
                            <div className="af-class-about-faqs_faq_accordion">
                              <div data-w-id="b34ad7eb-0208-7600-855c-8d59e7ff2030" className="af-class-about-faqs_faq_question">
                                <div className="af-class-text-size-medium af-class-text-weight-bold">How accurate is the similarity analysis?</div>
                                <div className="af-class-about-faqs_faq_icon-wrapper">
                                  <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                                    </svg></div>
                                </div>
                              </div>
                              <div style={{width: '100%', height: 0}} className="af-class-about-faqs_faq_answer">
                                <div className="af-class-margin-bottom af-class-margin-small">
                                  <p>The accuracy of the similarity analysis depends on various factors, including the quality of the recording and the complexity of the voice file. It provides a general indication of similarity.</p>
                                </div>
                              </div>
                            </div>
                            <div className="af-class-about-faqs_faq_accordion">
                              <div data-w-id="b34ad7eb-0208-7600-855c-8d59e7ff203a" className="af-class-about-faqs_faq_question">
                                <div className="af-class-text-size-medium af-class-text-weight-bold">What feedback will I receive?</div>
                                <div className="af-class-about-faqs_faq_icon-wrapper">
                                  <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                                    </svg></div>
                                </div>
                              </div>
                              <div style={{width: '100%', height: 0}} className="af-class-about-faqs_faq_answer">
                                <div className="af-class-margin-bottom af-class-margin-small">
                                  <p>Based on the similarity analysis, you will receive feedback on how closely your vocal imitation matches the voice file or extracted voice. This feedback can help you improve your vocal skills.</p>
                                </div>
                              </div>
                            </div>
                            <div className="af-class-about-faqs_faq_accordion">
                              <div data-w-id="b34ad7eb-0208-7600-855c-8d59e7ff2044" className="af-class-about-faqs_faq_question">
                                <div className="af-class-text-size-medium af-class-text-weight-bold">What if I still have questions?</div>
                                <div className="af-class-about-faqs_faq_icon-wrapper">
                                  <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                                    </svg></div>
                                </div>
                              </div>
                              <div style={{width: '100%', height: 0}} className="af-class-about-faqs_faq_answer">
                                <div className="af-class-margin-bottom af-class-margin-small">
                                  <p>If you still have questions, feel free to reach out to us. We're here to help!</p>
                                </div>
                              </div>
                            </div>
                            <div className="af-class-about-faqs_faq_accordion">
                              <div data-w-id="b34ad7eb-0208-7600-855c-8d59e7ff204e" className="af-class-about-faqs_faq_question">
                                <div className="af-class-text-size-medium af-class-text-weight-bold">Still have questions?</div>
                                <div className="af-class-about-faqs_faq_icon-wrapper">
                                  <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                                    </svg></div>
                                </div>
                              </div>
                              <div style={{width: '100%', height: 0}} className="af-class-about-faqs_faq_answer">
                                <div className="af-class-margin-bottom af-class-margin-small">
                                  <p>If you have any more questions or need further assistance, please don't hesitate to contact us.</p>
                                </div>
                              </div>
                            </div>
                            <div className="af-class-about-faqs_faq_accordion">
                              <div data-w-id="b34ad7eb-0208-7600-855c-8d59e7ff2058" className="af-class-about-faqs_faq_question">
                                <div className="af-class-text-size-medium af-class-text-weight-bold">Contact</div>
                                <div className="af-class-about-faqs_faq_icon-wrapper">
                                  <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                                    </svg></div>
                                </div>
                              </div>
                              <div style={{width: '100%', height: 0}} className="af-class-about-faqs_faq_answer">
                                <div className="af-class-margin-bottom af-class-margin-small">
                                  <p>For any inquiries or support, you can contact our team at [email protected]</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-margin-top af-class-margin-xxlarge">
                          <div className="af-class-text-align-center">
                            <div className="af-class-max-width-medium af-class-align-center">
                              <div className="af-class-margin-bottom af-class-margin-xsmall">
                                <h4>Still have questions?</h4>
                              </div>
                              <p className="af-class-text-size-medium">Feel free to reach out to us</p>
                              <div className="af-class-margin-top af-class-margin-medium">
                                <a href="#" className="af-class-button af-class-is-secondary w-button">Contact</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="af-class-section_about-faqs_contact">
                  <div className="af-class-padding-global-2">
                    <div className="af-class-container-large">
                      <div className="af-class-padding-section-large-3">
                        <div className="af-class-margin-bottom af-class-margin-xxlarge">
                          <div className="af-class-text-align-center">
                            <div className="af-class-max-width-large af-class-align-center">
                              <div className="af-class-margin-bottom af-class-margin-xsmall">
                                <div className="af-class-text-weight-semibold">Support</div>
                              </div>
                              <div className="af-class-margin-bottom af-class-margin-small">
                                <h2>Get in Touch</h2>
                              </div>
                              <p className="af-class-text-size-medium">If you have any questions or need assistance, please reach out to us.</p>
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-grid af-class-about-faqs_contact_component">
                          <div className="af-class-about-faqs_contact_item">
                            <div className="af-class-margin-bottom af-class-margin-small">
                              <div className="af-class-about-faqs_contact_icon-wrapper">
                                <div className="af-class-icon-embed-medium-5 w-embed"><svg width=" 100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.734L4 6.512V6H20ZM4 18V9.044L11.386 14.789C11.5611 14.9265 11.7773 15.0013 12 15.0013C12.2227 15.0013 12.4389 14.9265 12.614 14.789L20 9.044L20.002 18H4Z" fill="currentColor" />
                                  </svg></div>
                              </div>
                            </div>
                            <div className="af-class-margin-bottom af-class-margin-xsmall">
                              <h3 className="af-class-heading-style-h4">Email</h3>
                            </div>
                            <div className="af-class-margin-bottom af-class-margin-small">
                              <p>Send us an email and we'll get back to you as soon as possible.</p>
                            </div>
                            <a href="#" className="af-class-text-style-link">support@memic.com</a>
                          </div>
                          <div className="af-class-about-faqs_contact_item">
                            <div className="af-class-margin-bottom af-class-margin-small">
                              <div className="af-class-about-faqs_contact_icon-wrapper">
                                <div className="af-class-icon-embed-medium-5 w-embed"><svg width=" 100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.707 12.293C17.6142 12.2 17.504 12.1263 17.3827 12.076C17.2614 12.0257 17.1313 11.9998 17 11.9998C16.8687 11.9998 16.7386 12.0257 16.6173 12.076C16.496 12.1263 16.3858 12.2 16.293 12.293L14.699 13.887C13.96 13.667 12.581 13.167 11.707 12.293C10.833 11.419 10.333 10.04 10.113 9.30096L11.707 7.70696C11.7999 7.61417 11.8737 7.50397 11.924 7.38265C11.9743 7.26134 12.0002 7.13129 12.0002 6.99996C12.0002 6.86862 11.9743 6.73858 11.924 6.61726C11.8737 6.49595 11.7999 6.38575 11.707 6.29296L7.707 2.29296C7.61421 2.20001 7.50401 2.12627 7.38269 2.07596C7.26138 2.02565 7.13133 1.99976 7 1.99976C6.86866 1.99976 6.73862 2.02565 6.6173 2.07596C6.49599 2.12627 6.38579 2.20001 6.293 2.29296L3.581 5.00496C3.201 5.38496 2.987 5.90696 2.995 6.43996C3.018 7.86396 3.395 12.81 7.293 16.708C11.191 20.606 16.137 20.982 17.562 21.006H17.59C18.118 21.006 18.617 20.798 18.995 20.42L21.707 17.708C21.7999 17.6152 21.8737 17.505 21.924 17.3837C21.9743 17.2623 22.0002 17.1323 22.0002 17.001C22.0002 16.8696 21.9743 16.7396 21.924 16.6183C21.8737 16.4969 21.7999 16.3867 21.707 16.294L17.707 12.293ZM17.58 19.005C16.332 18.984 12.062 18.649 8.707 15.293C5.341 11.927 5.015 7.64196 4.995 6.41896L7 4.41396L9.586 6.99996L8.293 8.29296C8.17546 8.41041 8.08904 8.55529 8.04155 8.71453C7.99406 8.87376 7.987 9.04231 8.021 9.20496C8.045 9.31996 8.632 12.047 10.292 13.707C11.952 15.367 14.679 15.954 14.794 15.978C14.9565 16.0129 15.1253 16.0064 15.2846 15.9591C15.444 15.9117 15.5889 15.825 15.706 15.707L17 14.414L19.586 17L17.58 19.005V19.005Z" fill="currentColor" />
                                  </svg></div>
                              </div>
                            </div>
                            <div className="af-class-margin-bottom af-class-margin-xsmall">
                              <h3 className="af-class-heading-style-h4">Phone</h3>
                            </div>
                            <div className="af-class-margin-bottom af-class-margin-small">
                              <p>Give us a call during our office hours for immediate assistance.</p>
                            </div>
                            <a href="#" className="af-class-text-style-link">+1 (555) 123-4567</a>
                          </div>
                          <div className="af-class-about-faqs_contact_item">
                            <div className="af-class-margin-bottom af-class-margin-small">
                              <div className="af-class-about-faqs_contact_icon-wrapper">
                                <div className="af-class-icon-embed-medium-5 w-embed"><svg width=" 100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 14C14.206 14 16 12.206 16 10C16 7.794 14.206 6 12 6C9.794 6 8 7.794 8 10C8 12.206 9.794 14 12 14ZM12 8C13.103 8 14 8.897 14 10C14 11.103 13.103 12 12 12C10.897 12 10 11.103 10 10C10 8.897 10.897 8 12 8Z" fill="currentColor" />
                                    <path d="M11.42 21.814C11.5892 21.9349 11.792 21.9998 12 21.9998C12.208 21.9998 12.4107 21.9349 12.58 21.814C12.884 21.599 20.029 16.44 20 10C20 5.589 16.411 2 12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.116 21.599 11.42 21.814ZM12 4C15.309 4 18 6.691 18 10.005C18.021 14.443 13.612 18.428 12 19.735C10.389 18.427 5.979 14.441 6 10C6 6.691 8.691 4 12 4Z" fill="currentColor" />
                                  </svg></div>
                              </div>
                            </div>
                            <div className="af-class-margin-bottom af-class-margin-xsmall">
                              <h3 className="af-class-heading-style-h4">Office</h3>
                            </div>
                            <div className="af-class-margin-bottom af-class-margin-small">
                              <p>Visit our office during business hours for in-person support.</p>
                            </div>
                            <a href="#" className="af-class-text-style-link">123 Main St, Sydney NSW 2000, Australia</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <footer className="af-class-footer4_component">
                    <div className="af-class-padding-global">
                      <div className="af-class-container-large">
                        <div className="af-class-padding-vertical af-class-padding-xxlarge">
                            <div className="w-layout-grid af-class-footer4_top-wrapper">
                              <a href="#" id="w-node-_18a77209-24cc-8d26-8fa2-7e9adce0106a-34a692c8" className="af-class-footer4_logo-link w-nav-brand"><img src="images/logo.png" loading="lazy" width={42} alt="logo for navbar
            " className="af-class-navbar12_logo" /></a>
                              <div className="w-layout-grid af-class-footer4_link-list">
                                  <div id="w-node-_18a77209-24cc-8d26-8fa2-7e9adce01085-34a692c8" className="af-class-footer4_credit-text">© 2023 MEMIC. All rights reserved.</div>
                              </div>
                              <div id="w-node-_5413a46b-6025-d22b-adfc-5c72693f1a7e-34a692c8" className="w-layout-grid af-class-footer4_social-list">
                                <a href="https://www.notion.so/8c7c66798028437a9f25ee3e0519b77d" target="_blank" className="af-class-footer4_social-link w-inline-block">
                                  <div className="af-class-icon-embed-xsmall w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="af-class-iconify af-class-iconify--simple-icons" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                      <path fill="currentColor" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
                                    </svg></div>
                                </a>
                                <a href="https://github.com/2023-CapstoneDesign-MEMIC" target="_blank" className="af-class-footer4_social-link w-inline-block">
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
                </section>
              </main>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default FaqsView

/* eslint-enable */