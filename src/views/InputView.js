/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6526603ca6ecfaa934a69294").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class InputView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/InputController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = InputView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6527ec791dad3c4809c77288'
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
    const proxies = InputView.Controller !== InputView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/me-mic-demo-site.webflow.css);

          @media (min-width:992px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"d9812076-6b1d-1530-a77a-30bd6a45046e\"] {-webkit-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:0;}}@media (max-width:991px) and (min-width:768px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"d9812076-6b1d-1530-a77a-30bd6a45046e\"] {height:0px;}}@media (max-width:767px) and (min-width:480px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"d9812076-6b1d-1530-a77a-30bd6a45046e\"] {height:0px;}}@media (max-width:479px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"d9812076-6b1d-1530-a77a-30bd6a45046e\"] {height:0px;}}


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
                <section className="af-class-section_upload-voice-file-or-input-youtube-url-link-with-timeline_1_cta-form">
                  <div data-animation="default" className="af-class-navbar12_component w-nav" data-easing2="ease" fs-scrolldisable-element="smart-nav" data-easing="ease" data-collapse="medium" data-w-id="d9812076-6b1d-1530-a77a-30bd6a45045a" role="banner" data-duration={400} id="nav_bar">
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
                        <a href="#" className="af-class-navbar12_link w-nav-link">Service</a>
                        <a href="#" className="af-class-navbar12_link w-nav-link">Start Now</a>
                        <div data-hover="true" data-delay={200} data-w-id="d9812076-6b1d-1530-a77a-30bd6a450469" className="af-class-navbar12_menu-dropdown w-dropdown">
                          <div className="af-class-navbar12_dropdown-toggle w-dropdown-toggle">
                            <div>More</div>
                            <div className="af-class-dropdown-chevron w-embed"><svg width=" 100%" height=" 100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor" />
                              </svg></div>
                          </div>
                          <nav data-w-id="d9812076-6b1d-1530-a77a-30bd6a45046e" className="af-class-navbar12_dropdown-list w-dropdown-list">
                            <div className="af-class-navbar12_dropdown-content">
                              <div className="af-class-navbar12_dropdown-link-list">
                                <h4 className="af-class-text-size-small af-class-text-weight-semibold">Explore Our Pages</h4>
                                <a href="input.html" aria-current="page" className="af-class-navbar12_dropdown-link w-inline-block w--current">
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
                                <a href="record.html" className="af-class-navbar12_dropdown-link w-inline-block">
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
                                <a href="feedback.html" className="af-class-navbar12_dropdown-link w-inline-block">
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
                                <a href="faqs.html" className="af-class-navbar12_dropdown-link w-inline-block">
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
                              <div className="af-class-navbar12_dropdown-link-list">
                                <h4 className="af-class-text-size-small af-class-text-weight-semibold">More Pages</h4>
                                <a href="#" className="af-class-navbar12_dropdown-link w-inline-block">
                                  <div className="af-class-navbar12_icon-wrapper">
                                    <div className="af-class-icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                      </svg></div>
                                  </div>
                                  <div className="af-class-navbar12_text-wrapper">
                                    <div className="af-class-text-weight-semibold">Sample page1</div>
                                    <p className="af-class-text-size-small af-class-hide-mobile-landscape">Discover tips and tricks for improving your vocal imitation skills.</p>
                                  </div>
                                </a>
                                <a href="#" className="af-class-navbar12_dropdown-link w-inline-block">
                                  <div className="af-class-navbar12_icon-wrapper">
                                    <div className="af-class-icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                      </svg></div>
                                  </div>
                                  <div className="af-class-navbar12_text-wrapper">
                                    <div className="af-class-text-weight-semibold">Sample page2</div>
                                    <p className="af-class-text-size-small af-class-hide-mobile-landscape">Learn about famous voice imitators and their techniques.</p>
                                  </div>
                                </a>
                                <a href="#" className="af-class-navbar12_dropdown-link w-inline-block">
                                  <div className="af-class-navbar12_icon-wrapper">
                                    <div className="af-class-icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                      </svg></div>
                                  </div>
                                  <div className="af-class-navbar12_text-wrapper">
                                    <div className="af-class-text-weight-semibold">Sample page3</div>
                                    <p className="af-class-text-size-small af-class-hide-mobile-landscape">Get inspired by success stories of vocal imitation enthusiasts.</p>
                                  </div>
                                </a>
                                <div className="af-class-navbar12_text-wrapper">
                                  <div className="af-class-text-weight-semibold">Sample page3</div>
                                  <p className="af-class-text-size-small af-class-hide-mobile-landscape">Get inspired by success stories of vocal imitation enthusiasts.</p>
                                </div>
                              </div>
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
                  <div id="Upload_file_pg" className="af-class-padding-global-2">
                    <div className="af-class-container-small">
                      <div className="af-class-padding-section-large-2">
                        <div className="af-class-text-align-center">
                          <div className="af-class-margin-bottom af-class-margin-small">
                            <h1>Upload Your Voice File</h1>
                          </div>
                          <p className="af-class-text-size-medium">Accepted formats: <br />MP3, WAV, FLAC, AAC</p>
                          <div className="w-form">
                            <form id="email-form-3" name="email-form-3" data-name="Email Form 3" method="get" data-wf-page-id="6527ec791dad3c4809c77288" data-wf-element-id="63dbe20c-098b-7589-0d64-f8c1cb86eaab"><input type="text" className="af-class-text-field-3 w-input" maxLength={256} name="field-2" data-name="Field 2" placeholder="Example Text" role="uploadcare-uploader" id="field-2" required /></form>
                            <div className="w-form-done">
                              <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                              <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                          </div>
                          <div className="af-class-margin-top af-class-margin-medium">
                            <div className="af-class-cta26_form-block w-form">
                              <form id="email-form" name="email-form" data-name="Email Form" method="get" className="af-class-cta26_form" data-wf-page-id="6527ec791dad3c4809c77288" data-wf-element-id="3ca21f2c-8a69-d47d-02b9-29ae37d582bf">
                                <div className="af-class-text-size-tiny">Please upload the voice file you wish to imitate.</div>
                              </form>
                              <div className="af-class-success-message w-form-done">
                                <div className="af-class-success-text">Thank you! Your file has been received!</div>
                              </div>
                              <div className="af-class-error-message w-form-fail">
                                <div className="af-class-error-text">Oops! Something went wrong. Please try again.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <section>
                      <div className="w-form">
                        <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="af-class-form-2" data-wf-page-id="6527ec791dad3c4809c77288" data-wf-element-id="1f61f290-e1a9-79ce-b21a-9dcf6d059e25"><input type="text" className="af-class-text-field w-input" maxLength={256} name="field" data-name="Field" placeholder="Example Text" id="field" required /></form>
                        <div className="w-form-done">
                          <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                          <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                      </div>
                    </section>
                  </div>
                  <section>
                    <section className="af-class-section_cta28-2">
                      <div className="af-class-padding-global-2">
                        <div className="af-class-container-small">
                          <div className="af-class-padding-section-large-3">
                            <div className="af-class-text-align-center">
                              <div className="af-class-margin-bottom af-class-margin-small">
                                <h1 className="af-class-text-color-white-3">No files? It's ok</h1>
                              </div>
                              <p className="af-class-text-size-medium af-class-text-color-white">If you enter YouTube URL and timeline, ME:MIC extract a voice file!</p>
                              <div className="af-class-margin-top af-class-margin-medium">
                                <div className="af-class-cta28_form-block w-form">
                                  <form id="email-form" name="email-form" data-name="Email Form" method="get" className="af-class-cta28_form" data-wf-page-id="6527ec791dad3c4809c77288" data-wf-element-id="1b6d5fe7-42c1-7550-4220-f7700618fa83">
                                    <div className="af-class-signup-form-wrapper"><input type="email" className="af-class-form-input w-input" maxLength={256} name="URL" data-name="URL" placeholder="Enter your Youtube URL" id="URL" required /><input type="submit" defaultValue="Extract" data-wait="Please wait..." className="af-class-button w-button" /></div>
                                    <div className="af-class-text-size-tiny af-class-text-color-white">Please imitate your vocal cords as closely as possible.</div>
                                  </form>
                                  <div className="af-class-success-message w-form-done">
                                    <div className="af-class-success-text">Thank you! Your submission was successful!</div>
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
                      <div className="af-class-cta28_background-image-wrapper">
                        <div className="af-class-image-overlay-layer" /><img src="images/placeholder-image.svg" loading="lazy" alt className="af-class-cta28_background-image" />
                      </div>
                    </section>
                  </section>
                </section>
                <section className="af-class-section_upload-voice-file-or-input-youtube-url-link-with-timeline_4_cta">
                  <section>
                    <div className="af-class-padding-section-large-2">
                      <div className="af-class-margin-bottom af-class-margin-xxlarge">
                        <div className="af-class-text-align-center">
                          <div className="af-class-max-width-large af-class-align-center">
                            <div className="af-class-margin-bottom af-class-margin-small">
                              <h2>Voice Gallery</h2>
                            </div>
                            <p className="af-class-text-size-medium">Browse through the extracted audio files from your source</p>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-html-audio-player-embed w-embed"><audio className="af-class-html-audio-player" controls preload="none">
                          <source src type="audio/mpeg" />
                          Your browser does not support the audio tag.
                        </audio></div>
                      <div className="af-class-html-audio-player-embed w-embed"><audio className="af-class-html-audio-player" controls preload="none">
                          <source src type="audio/mpeg" />
                          Your browser does not support the audio tag.
                        </audio></div>
                      <div className="af-class-html-audio-player-embed w-embed"><audio className="af-class-html-audio-player" controls preload="none">
                          <source src type="audio/mpeg" />
                          Your browser does not support the audio tag.
                        </audio></div>
                    </div>
                  </section>
                  <div className="af-class-padding-global-2">
                    <div className="af-class-container-large">
                      <div className="af-class-padding-section-large-3">
                        <div className="af-class-upload-voice-file-or-input-youtube-url-link-with-timeline_4_cta_component">
                          <div className="af-class-upload-voice-file-or-input-youtube-url-link-with-timeline_4_cta_content">
                            <div className="af-class-max-width-large">
                              <div className="af-class-margin-bottom af-class-margin-xsmall">
                                <h3 className="af-class-heading-7">Now, show your vocal skills</h3>
                              </div>
                              <p className="af-class-text-size-medium">Record Your Vocal Imitation now!</p>
                            </div>
                          </div>
                          <div id="w-node-_2eedbf2d-1f87-6c4a-4e97-0a678355fac6-09c77288" className="af-class-upload-voice-file-or-input-youtube-url-link-with-timeline_4_cta_button-row">
                            <a href="record.html" className="af-class-button w-button">Let's Record!</a>
                            <a href="#" className="af-class-button af-class-is-secondary w-button">Learn More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="af-class-padding-global">
                  <div className="af-class-padding-vertical af-class-padding-xxlarge">
                    <div className="af-class-padding-bottom af-class-padding-xxlarge">
                      <div className="w-layout-grid af-class-footer4_top-wrapper">
                        <a href="#" id="w-node-_852609fb-56cd-993c-dae8-56eabdaef5a0-09c77288" className="af-class-footer4_logo-link w-nav-brand"><img src="images/logo.png" loading="lazy" width={42} alt="logo for navbar
        " className="af-class-navbar12_logo" /></a>
                        <div className="w-layout-grid af-class-footer4_link-list">
                          <a href="#" className="af-class-footer4_link">About Us</a>
                          <a href="#" className="af-class-footer4_link">Contact Us</a>
                          <a href="#" className="af-class-footer4_link">FAQs</a>
                          <a href="#" className="af-class-footer4_link">Resources</a>
                        </div>
                        <div id="w-node-_852609fb-56cd-993c-dae8-56eabdaef5ab-09c77288" className="w-layout-grid af-class-footer4_social-list">
                          <a href="#" className="af-class-footer4_social-link w-inline-block">
                            <div className="af-class-icon-embed-xsmall w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="af-class-iconify af-class-iconify--simple-icons" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
                              </svg></div>
                          </a>
                          <a href="#" className="af-class-footer4_social-link w-inline-block">
                            <div className="af-class-icon-embed-xsmall w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="af-class-iconify af-class-iconify--simple-icons" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                              </svg></div>
                          </a>
                          <div className="af-class-icon-embed-xsmall w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="af-class-iconify af-class-iconify--simple-icons" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3Zm6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553a14.1 14.1 0 0 0 1.283-2.273c.405-.855.608-1.62.608-2.295c0-.405-.113-.727-.338-.967c-.21-.255-.608-.577-1.193-.967c.6-.765 1.35-1.148 2.25-1.148c.48 0 .878.143 1.193.428c.33.285.494.704.494 1.26c0 .93-.39 2.093-1.17 3.488c-.765 1.38-2.241 3.457-4.431 6.232l-2.227.156l-1.711-9.628h-2.25V7.24c.6-.195 1.305-.406 2.115-.63c.81-.24 1.358-.36 1.643-.36Z" />
                            </svg></div>
                        </div>
                      </div>
                    </div>
                    <div className="af-class-line-divider" />
                    <div className="af-class-padding-top af-class-padding-medium">
                      <div className="w-layout-grid af-class-footer4_bottom-wrapper">
                        <div id="w-node-_852609fb-56cd-993c-dae8-56eabdaef5b4-09c77288" className="af-class-footer4_credit-text">© 2023 ME:MIC. All rights reserved.</div>
                        <a href="#" className="af-class-footer4_legal-link">Privacy Policy</a>
                        <a href="#" className="af-class-footer4_legal-link">Terms of Service</a>
                        <a href="#" className="af-class-footer4_legal-link">Cookies Policy</a>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-container-large" />
                </div>
              </main>
              <footer className="af-class-footer4_component" />
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default InputView

/* eslint-enable */