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

    // try {
    //   Controller = require('../controllers/FaqsController')
    //   Controller = Controller.default || Controller
    //
    //   return Controller
    // }
    // catch (e) {
    //   if (e.code == 'MODULE_NOT_FOUND') {
    //     Controller = FaqsView
    //
    //     return Controller
    //   }
    //
    //   throw e
    // }
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
                    <div data-hover="true" data-delay={200} data-w-id="18a77209-24cc-8d26-8fa2-7e9adce00fa8" className="af-class-navbar12_menu-dropdown w-dropdown">
                      <div className="af-class-navbar12_dropdown-toggle w-dropdown-toggle">
                        <div>더보기</div>
                        <div className="af-class-dropdown-chevron w-embed"><svg width=" 100%" height=" 100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z" fill="currentColor" />
                          </svg></div>
                      </div>
                      <nav data-w-id="18a77209-24cc-8d26-8fa2-7e9adce00fad" className="af-class-navbar12_dropdown-list w-dropdown-list">
                        <div className="af-class-navbar12_dropdown-link-list">
                            <h4 className="af-class-text-size-small af-class-text-weight-semibold">페이지 둘러보기</h4>
                            <a href="fileupload" className="af-class-navbar12_dropdown-link w-inline-block">
                              <div className="af-class-navbar12_icon-wrapper">
                                <div className="af-class-icon-embed-xsmall w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="af-class-iconify af-class-iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01L12.01 11L8 15.01z" />
                                  </svg></div>
                              </div>
                              <div className="af-class-navbar12_text-wrapper">
                                <div className="af-class-text-weight-semibold">입력 페이지</div>
                                <p className="af-class-text-size-small af-class-hide-mobile-landscape">파일 입력 혹은 URL로 음성을 추출하세요.</p>
                              </div>
                            </a>
                            <a href="record" className="af-class-navbar12_dropdown-link w-inline-block">
                              <div className="af-class-navbar12_icon-wrapper">
                                <div className="af-class-icon-embed-xsmall w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="af-class-iconify af-class-iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15a.998.998 0 0 0-.98-.85c-.61 0-1.09.54-1 1.14c.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08a6.993 6.993 0 0 0 5.91-5.78c.1-.6-.39-1.14-1-1.14z" />
                                  </svg></div>
                              </div>
                              <div className="af-class-navbar12_text-wrapper">
                                <div className="af-class-text-weight-semibold">녹음 페이지</div>
                                <p className="af-class-text-size-small af-class-hide-mobile-landscape">여러분의 성대모사 실력을 뽐내세요.</p>
                              </div>
                            </a>
                            <a href="feedback" className="af-class-navbar12_dropdown-link w-inline-block">
                              <div className="af-class-navbar12_icon-wrapper">
                                <div className="af-class-icon-embed-xsmall w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="af-class-iconify af-class-iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3z" />
                                  </svg></div>
                              </div>
                              <div className="af-class-navbar12_text-wrapper">
                                <div className="af-class-text-weight-semibold">피드백 페이지</div>
                                <p className="af-class-text-size-small af-class-hide-mobile-landscape">유사도에 따른 피드백을 제공합니다.</p>
                              </div>
                            </a>
                            <a href="faqs" className="af-class-navbar12_dropdown-link w-inline-block">
                              <div className="af-class-navbar12_icon-wrapper">
                                <div className="af-class-icon-embed-xsmall w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="af-class-iconify af-class-iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z" />
                                  </svg></div>
                              </div>
                              <div className="af-class-navbar12_text-wrapper">
                                <div className="af-class-text-weight-semibold">자주 묻는 질문</div>
                                <p className="af-class-text-size-small af-class-hide-mobile-landscape">무엇이든 찾아보세요.</p>
                              </div>
                            </a>
                          </div>
                      </nav>
                      </div>
                    </nav>
                  </div>
                </div>
              </section>
              <main className="af-class-main-wrapper">
                {/*<header className="af-class-section_about-faqs_header">*/}
                {/*  <div className="af-class-padding-global-2">*/}
                {/*    <div className="af-class-container-large">*/}
                {/*      <div className="af-class-padding-section-large-3">*/}
                {/*        <div className="af-class-max-width-large">*/}
                {/*          <div className="af-class-margin-bottom af-class-margin-small">*/}
                {/*            <h1 className="af-class-text-color-white-3">Frequently Asked Questions</h1>*/}
                {/*          </div>*/}
                {/*          <p className="af-class-text-size-medium af-class-text-color-white">Find answers to common questions about ME:MIC and its features.</p>*/}
                {/*        </div>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*  <div className="af-class-about-faqs_header_background-image-wrapper">*/}
                {/*    <div className="af-class-image-overlay-layer" /><img src="images/placeholder-image.svg" loading="eager" alt className="af-class-about-faqs_header_background-image" />*/}
                {/*  </div>*/}
                {/*</header>*/}
                <section className="af-class-section_about-faqs_faq">
                  <div className="af-class-padding-global-2">
                    <div className="af-class-container-large">
                      <div className="af-class-padding-section-large-3">
                        <div className="af-class-margin-bottom af-class-margin-xxlarge">
                          <div className="af-class-text-align-center">
                            <div className="af-class-max-width-large af-class-align-center">
                              <div className="af-class-margin-bottom af-class-margin-small">
                                <h2>자주 묻는 질문</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-grid af-class-about-faqs_faq_component">
                          <div className="w-layout-grid af-class-about-faqs_faq_list">
                            <div className="af-class-about-faqs_faq_accordion">
                              <div data-w-id="b34ad7eb-0208-7600-855c-8d59e7ff2011" className="af-class-about-faqs_faq_question">
                                <div className="af-class-text-size-medium af-class-text-weight-bold">어떤 파일을 업로드해야 하나요?</div>
                                <div className="af-class-about-faqs_faq_icon-wrapper">
                                  <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                                    </svg></div>
                                </div>
                              </div>
                              <div style={{width: '100%', height: 0}} className="af-class-about-faqs_faq_answer">
                                <div className="af-class-margin-bottom af-class-margin-small">
                                  <p>[.mp3,.wav,.flac,.aac]와 같은 음성 파일을 업로드해주세요.</p>
                                </div>
                              </div>
                            </div>
                            <div className="af-class-about-faqs_faq_accordion">
                              <div data-w-id="b34ad7eb-0208-7600-855c-8d59e7ff2011" className="af-class-about-faqs_faq_question">
                                <div className="af-class-text-size-medium af-class-text-weight-bold">URL에서 음성을 추출할 때 제한이 있나요?</div>
                                <div className="af-class-about-faqs_faq_icon-wrapper">
                                  <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                                    </svg></div>
                                </div>
                              </div>
                              <div style={{width: '100%', height: 0}} className="af-class-about-faqs_faq_answer">
                                <div className="af-class-margin-bottom af-class-margin-small">
                                  <p>네, 성인용 콘텐츠로 분류된 유튜브 영상의 경우 음성 추출이 제한됩니다. <br />연령 제한이 없는 영상에 대해서는 Spleeter의 입력 폼에 정보를 정확하게 입력했는지 확인해 주세요.</p>
                                </div>
                              </div>
                            </div>
                            <div className="af-class-about-faqs_faq_accordion">
                              <div data-w-id="b34ad7eb-0208-7600-855c-8d59e7ff2011" className="af-class-about-faqs_faq_question">
                                <div className="af-class-text-size-medium af-class-text-weight-bold">음성을 추출하는데 얼마나 걸리나요?</div>
                                <div className="af-class-about-faqs_faq_icon-wrapper">
                                  <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                                    </svg></div>
                                </div>
                              </div>
                              <div style={{width: '100%', height: 0}} className="af-class-about-faqs_faq_answer">
                                <div className="af-class-margin-bottom af-class-margin-small">
                                  <p>비디오 길이에 따라 추출 과정은 보통 몇 초에서 1분 정도 걸립니다.</p>
                                </div>
                              </div>
                            </div>
                            <div className="af-class-about-faqs_faq_accordion">
                              <div data-w-id="b34ad7eb-0208-7600-855c-8d59e7ff2011" className="af-class-about-faqs_faq_question">
                                <div className="af-class-text-size-medium af-class-text-weight-bold">성대모사를 녹음할 때 주의할 사항이 있나요?</div>
                                <div className="af-class-about-faqs_faq_icon-wrapper">
                                  <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                                    </svg></div>
                                </div>
                              </div>
                              <div style={{width: '100%', height: 0}} className="af-class-about-faqs_faq_answer">
                                <div className="af-class-margin-bottom af-class-margin-small">
                                  <p>주변 소음이나 잡음이 적을수록 ME:MIC이 더욱 정교하게 평가합니다. 최대한 조용한 환경에서 녹음해보세요. </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-layout-grid af-class-about-faqs_faq_list">
                            <div className="af-class-about-faqs_faq_accordion">
                              <div data-w-id="b34ad7eb-0208-7600-855c-8d59e7ff2025" className="af-class-about-faqs_faq_question">
                                <div className="af-class-text-size-medium af-class-text-weight-bold">유사도 평가는 어떻게 동작하나요?</div>
                                <div className="af-class-about-faqs_faq_icon-wrapper">
                                  <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                                    </svg></div>
                                </div>
                              </div>
                              <div style={{width: '100%', height: 0}} className="af-class-about-faqs_faq_answer">
                                <div className="af-class-margin-bottom af-class-margin-small">
                                  <p>ME:MIC은 mfcc를 기반으로 자체적인 유사도 점수를 계산합니다. 상세 보기 탭에서 주파수 그래프를 확인할 수 있습니다.</p>
                                </div>
                              </div>
                            </div>
                            <div className="af-class-about-faqs_faq_accordion">
                              <div data-w-id="b34ad7eb-0208-7600-855c-8d59e7ff2030" className="af-class-about-faqs_faq_question">
                                <div className="af-class-text-size-medium af-class-text-weight-bold">분석 결과는 얼마나 정확한가요?</div>
                                <div className="af-class-about-faqs_faq_icon-wrapper">
                                  <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                                    </svg></div>
                                </div>
                              </div>
                              <div style={{width: '100%', height: 0}} className="af-class-about-faqs_faq_answer">
                                <div className="af-class-margin-bottom af-class-margin-small">
                                  <p>유사도 분석의 정확도는 사용된 데이터와 분석 방법에 따라 다릅니다. 일반적으로, 품질이 좋은 데이터가 많이 포함될수록 더욱 정확한 결과를 얻을 수 있습니다. 그러나 완벽한 정확도를 보장하기는 어렵고, 여러 변수를 고려한 일정 수준의 오차 범위를 고려해야 합니다.</p>
                                </div>
                              </div>
                            </div>
                            <div className="af-class-about-faqs_faq_accordion">
                              <div data-w-id="b34ad7eb-0208-7600-855c-8d59e7ff203a" className="af-class-about-faqs_faq_question">
                                <div className="af-class-text-size-medium af-class-text-weight-bold">어떤 피드백을 받을 수 있나요?</div>
                                <div className="af-class-about-faqs_faq_icon-wrapper">
                                  <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                                    </svg></div>
                                </div>
                              </div>
                              <div style={{width: '100%', height: 0}} className="af-class-about-faqs_faq_answer">
                                <div className="af-class-margin-bottom af-class-margin-small">
                                  <p>유사도 분석을 통해, 사용자의 녹음과 음성 파일이 얼마나 유사한지에 대한 피드백을 받을 수 있습니다. 이 피드백은 사용자가 자신의 성대모사 능력에서 부족한 부분을 파악하고 개선할 수 있는 기회를 제공합니다. </p>
                                </div>
                              </div>
                            </div>
                            <div className="af-class-about-faqs_faq_accordion">
                              <div data-w-id="b34ad7eb-0208-7600-855c-8d59e7ff2058" className="af-class-about-faqs_faq_question">
                                <div className="af-class-text-size-medium af-class-text-weight-bold">기타</div>
                                <div className="af-class-about-faqs_faq_icon-wrapper">
                                  <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor" />
                                    </svg></div>
                                </div>
                              </div>
                              <div style={{width: '100%', height: 0}} className="af-class-about-faqs_faq_answer">
                                <div className="af-class-margin-bottom af-class-margin-small">
                                  <p>기타 문의사항이나 지원이 필요하면, [sample@email.com]으로 연락해주세요.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="af-class-margin-top af-class-margin-xxlarge">
                          <div className="af-class-text-align-center">
                            <div className="af-class-max-width-medium af-class-align-center">
                              <div className="af-class-margin-bottom af-class-margin-xsmall">
                                <h4>여전히 문제가 발생한다면</h4>
                              </div>
                              <p className="af-class-text-size-medium">무엇이든 물어보세요.</p>
                              <div className="af-class-margin-top af-class-margin-medium">
                                <a href="#" className="af-class-button af-class-is-secondary w-button">연락하기</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="af-class-section_about-faqs_contact">

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