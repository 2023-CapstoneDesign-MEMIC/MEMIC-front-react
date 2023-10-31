/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6526603ca6ecfaa934a69294").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class StyleGuideView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/StyleGuideController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = StyleGuideView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6526603ca6ecfaa934a69301'
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
    const proxies = StyleGuideView.Controller !== StyleGuideView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/me-mic-demo-site.webflow.css);


            * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -o-font-smoothing: antialiased;
          }
        ` }} />
        <span className="af-view">
          <div>
            <div className="af-class-page-wrapper">
              <div className="af-class-global-styles w-embed">
                <style dangerouslySetInnerHTML={{__html: "\n/* Focus state style for keyboard navigation for the focusable elements */\n.af-view *[tabindex]:focus-visible,\n  .af-view input[type=\"file\"]:focus-visible {\n   outline: 0.125rem solid #4d65ff;\n   outline-offset: 0.125rem;\n}\n/* Get rid of top margin on first element in any rich text element */\n.af-view .w-richtext > :not(div):first-child, .af-view .w-richtext > div:first-child > :first-child {\n  margin-top: 0 !important;\n}\n/* Get rid of bottom margin on last element in any rich text element */\n.af-view .w-richtext>:last-child, .af-view .w-richtext ol li:last-child, .af-view .w-richtext ul li:last-child {\n\tmargin-bottom: 0 !important;\n}\n/* Prevent all click and hover interaction with an element */\n.af-view .af-class-pointer-events-off {\n\tpointer-events: none;\n}\n/* Enables all click and hover interaction with an element */\n.af-view .af-class-pointer-events-on {\n  pointer-events: auto;\n}\n/* Create a class of .div-square which maintains a 1:1 dimension of a div */\n.af-view .af-class-div-square::after {\n\tcontent: \"\";\n\tdisplay: block;\n\tpadding-bottom: 100%;\n}\n/* Make sure containers never lose their center alignment */\n.af-view .af-class-container-medium,.af-view .af-class-container-small, .af-view .af-class-container-large {\n\tmargin-right: auto !important;\n  margin-left: auto !important;\n}\n/* \nMake the following elements inherit typography styles from the parent and not have hardcoded values. \nImportant: You will not be able to style for example \"All Links\" in Designer with this CSS applied.\nUncomment this CSS to use it in the project. Leave this message for future hand-off.\n*/\n/*\na,\n.w-input,\n.w-select,\n.w-tab-link,\n.w-nav-link,\n.w-dropdown-btn,\n.w-dropdown-toggle,\n.w-dropdown-link {\n  color: inherit;\n  text-decoration: inherit;\n  font-size: inherit;\n}\n*/\n/* Apply \"...\" after 3 lines of text */\n.af-view .af-class-text-style-3lines {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 3;\n\t-webkit-box-orient: vertical;\n}\n/* Apply \"...\" after 2 lines of text */\n.af-view .af-class-text-style-2lines {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 2;\n\t-webkit-box-orient: vertical;\n}\n/* Adds inline flex display */\n.af-view .af-class-display-inlineflex {\n  display: inline-flex;\n}\n/* These classes are never overwritten */\n.af-view .af-class-hide {\n  display: none !important;\n}\n@media screen and (max-width: 991px) {\n    .af-view .af-class-hide, .af-view .af-class-hide-tablet {\n        display: none !important;\n    }\n}\n  @media screen and (max-width: 767px) {\n    .af-view .af-class-hide-mobile-landscape{\n      display: none !important;\n    }\n}\n  @media screen and (max-width: 479px) {\n    .af-view .af-class-hide-mobile{\n      display: none !important;\n    }\n}\n.af-view .af-class-margin-0 {\n  margin: 0rem !important;\n}\n.af-view .af-class-padding-0 {\n  padding: 0rem !important;\n}\n.af-view .af-class-spacing-clean {\npadding: 0rem !important;\nmargin: 0rem !important;\n}\n.af-view .af-class-margin-top {\n  margin-right: 0rem !important;\n  margin-bottom: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-top {\n  padding-right: 0rem !important;\n  padding-bottom: 0rem !important;\n  padding-left: 0rem !important;\n}\n.af-view .af-class-margin-right {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-right {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n  padding-left: 0rem !important;\n}\n.af-view .af-class-margin-bottom {\n  margin-top: 0rem !important;\n  margin-right: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-bottom {\n  padding-top: 0rem !important;\n  padding-right: 0rem !important;\n  padding-left: 0rem !important;\n}\n.af-view .af-class-margin-left {\n  margin-top: 0rem !important;\n  margin-right: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n.af-view .af-class-padding-left {\n  padding-top: 0rem !important;\n  padding-right: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n.af-view .af-class-margin-horizontal {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n.af-view .af-class-padding-horizontal {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n.af-view .af-class-margin-vertical {\n  margin-right: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-vertical {\n  padding-right: 0rem !important;\n  padding-left: 0rem !important;\n}\n/* Apply \"...\" at 100% width */\n.af-view .af-class-truncate-width { \n\t\twidth: 100%; \n    white-space: nowrap; \n    overflow: hidden; \n    text-overflow: ellipsis; \n}\n/* Removes native scrollbar */\n.af-view .af-class-no-scrollbar {\n    -ms-overflow-style: none;\n    overflow: -moz-scrollbars-none; \n}\n.af-view .af-class-no-scrollbar::-webkit-scrollbar {\n    display: none;\n}\n" }} />
              </div>
              <div className="af-class-main-wrapper">
                <div className="af-class-padding-global">
                  <div className="af-class-container-large">
                    <div className="af-class-rl-styleguide_elements">
                      <div className="af-class-rl-styleguide_header">
                        <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86205-34a69301" className="af-class-rl-styleguide_heading-wrapper">
                          <div className="af-class-margin-bottom af-class-margin-small"><img src="images/logo.png" loading="lazy" width={71} id="w-node-_336be75c-ab2b-838b-5642-972b6cc86207-34a69301" alt="logo for navbar
        " /></div>
                          <h1 className="af-class-heading-style-h6">Relume Library Style Guide</h1>
                          <div>Version 1.5 • Client-First V2</div>
                        </div>
                        <div className="af-class-rl-styleguide_button-row">
                          <a href="https://www.finsweet.com/client-first/docs/intro" target="_blank" className="af-class-button af-class-is-secondary af-class-is-small af-class-is-icon w-inline-block">
                            <div>Client-First Docs</div>
                            <div className="af-class-icon-embed-xsmall w-embed"><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.5 15.8333V11.25C17.5 11.0199 17.3135 10.8333 17.0833 10.8333H16.25C16.0199 10.8333 15.8333 11.0199 15.8333 11.25V15.8333H4.16667V4.16667H8.75C8.98012 4.16667 9.16667 3.98012 9.16667 3.75V2.91667C9.16667 2.68655 8.98012 2.5 8.75 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333ZM17.0917 2.69167L17.3167 2.91667V2.90833C17.4299 3.02132 17.4955 3.17342 17.5 3.33333V8.75C17.5 8.98012 17.3135 9.16667 17.0833 9.16667H16.25C16.0199 9.16667 15.8333 8.98012 15.8333 8.75V5.35L8.8 12.375C8.72176 12.4539 8.61527 12.4982 8.50417 12.4982C8.39307 12.4982 8.28657 12.4539 8.20833 12.375L7.625 11.7917C7.54612 11.7134 7.50175 11.6069 7.50175 11.4958C7.50175 11.3847 7.54612 11.2782 7.625 11.2L14.6583 4.16667H11.25C11.0199 4.16667 10.8333 3.98012 10.8333 3.75V2.91667C10.8333 2.68655 11.0199 2.5 11.25 2.5H16.6667C16.8278 2.50668 16.98 2.57535 17.0917 2.69167Z" fill="currentColor" />
                              </svg></div>
                          </a>
                          <a href="#" className="af-class-button af-class-is-secondary af-class-is-small af-class-is-icon w-inline-block w-lightbox">
                            <div className="af-class-icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM9.38965 7.69666C9.62853 7.56579 9.91959 7.57472 10.15 7.72L16 11.36C16.2182 11.4997 16.3501 11.7409 16.3501 12C16.3501 12.2591 16.2182 12.5003 16 12.64L10.15 16.28C9.91959 16.4253 9.62853 16.4342 9.38965 16.3033C9.15076 16.1725 9.00161 15.9224 9 15.65V8.35C9.00161 8.07762 9.15076 7.82752 9.38965 7.69666Z" fill="currentColor" />
                              </svg></div>
                            <div>Getting Started</div>
                          </a>
                        </div>
                      </div>
                      <div className="af-class-rl-styleguide_typography">
                        <div className="af-class-rl-styleguide_heading">Typography</div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">HTML&nbsp;Headings Tags<br /><span className="af-class-text-size-small">HTML tags define default Heading styles.</span><br /></div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8621b-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8621c-34a69301" className="af-class-rl-styleguide_label af-class-is-html-tag">All H1 Headings</div>
                            <h1>Heading 1</h1>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86220-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86221-34a69301" className="af-class-rl-styleguide_label af-class-is-html-tag">All H2 Headings</div>
                            <h2>Heading 2</h2>
                            <div className="af-class-global-styles w-embed">
                              <style dangerouslySetInnerHTML={{__html: "\n/* Focus state style for keyboard navigation for the focusable elements */\n.af-view *[tabindex]:focus-visible,\n  .af-view input[type=\"file\"]:focus-visible {\n   outline: 0.125rem solid #4d65ff;\n   outline-offset: 0.125rem;\n}\n/* Get rid of top margin on first element in any rich text element */\n.af-view .w-richtext > :not(div):first-child, .af-view .w-richtext > div:first-child > :first-child {\n  margin-top: 0 !important;\n}\n/* Get rid of bottom margin on last element in any rich text element */\n.af-view .w-richtext>:last-child, .af-view .w-richtext ol li:last-child, .af-view .w-richtext ul li:last-child {\n\tmargin-bottom: 0 !important;\n}\n/* Prevent all click and hover interaction with an element */\n.af-view .af-class-pointer-events-off {\n\tpointer-events: none;\n}\n/* Enables all click and hover interaction with an element */\n.af-view .af-class-pointer-events-on {\n  pointer-events: auto;\n}\n/* Create a class of .div-square which maintains a 1:1 dimension of a div */\n.af-view .af-class-div-square::after {\n\tcontent: \"\";\n\tdisplay: block;\n\tpadding-bottom: 100%;\n}\n/* Make sure containers never lose their center alignment */\n.af-view .af-class-container-medium,.af-view .af-class-container-small, .af-view .af-class-container-large {\n\tmargin-right: auto !important;\n  margin-left: auto !important;\n}\n/* \nMake the following elements inherit typography styles from the parent and not have hardcoded values. \nImportant: You will not be able to style for example \"All Links\" in Designer with this CSS applied.\nUncomment this CSS to use it in the project. Leave this message for future hand-off.\n*/\n/*\na,\n.w-input,\n.w-select,\n.w-tab-link,\n.w-nav-link,\n.w-dropdown-btn,\n.w-dropdown-toggle,\n.w-dropdown-link {\n  color: inherit;\n  text-decoration: inherit;\n  font-size: inherit;\n}\n*/\n/* Apply \"...\" after 3 lines of text */\n.af-view .af-class-text-style-3lines {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 3;\n\t-webkit-box-orient: vertical;\n}\n/* Apply \"...\" after 2 lines of text */\n.af-view .af-class-text-style-2lines {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 2;\n\t-webkit-box-orient: vertical;\n}\n/* Adds inline flex display */\n.af-view .af-class-display-inlineflex {\n  display: inline-flex;\n}\n/* These classes are never overwritten */\n.af-view .af-class-hide {\n  display: none !important;\n}\n@media screen and (max-width: 991px) {\n    .af-view .af-class-hide, .af-view .af-class-hide-tablet {\n        display: none !important;\n    }\n}\n  @media screen and (max-width: 767px) {\n    .af-view .af-class-hide-mobile-landscape{\n      display: none !important;\n    }\n}\n  @media screen and (max-width: 479px) {\n    .af-view .af-class-hide-mobile{\n      display: none !important;\n    }\n}\n.af-view .af-class-margin-0 {\n  margin: 0rem !important;\n}\n.af-view .af-class-padding-0 {\n  padding: 0rem !important;\n}\n.af-view .af-class-spacing-clean {\npadding: 0rem !important;\nmargin: 0rem !important;\n}\n.af-view .af-class-margin-top {\n  margin-right: 0rem !important;\n  margin-bottom: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-top {\n  padding-right: 0rem !important;\n  padding-bottom: 0rem !important;\n  padding-left: 0rem !important;\n}\n.af-view .af-class-margin-right {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-right {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n  padding-left: 0rem !important;\n}\n.af-view .af-class-margin-bottom {\n  margin-top: 0rem !important;\n  margin-right: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-bottom {\n  padding-top: 0rem !important;\n  padding-right: 0rem !important;\n  padding-left: 0rem !important;\n}\n.af-view .af-class-margin-left {\n  margin-top: 0rem !important;\n  margin-right: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n.af-view .af-class-padding-left {\n  padding-top: 0rem !important;\n  padding-right: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n.af-view .af-class-margin-horizontal {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n.af-view .af-class-padding-horizontal {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n.af-view .af-class-margin-vertical {\n  margin-right: 0rem !important;\n  margin-left: 0rem !important;\n}\n.af-view .af-class-padding-vertical {\n  padding-right: 0rem !important;\n  padding-left: 0rem !important;\n}\n/* Apply \"...\" at 100% width */\n.af-view .af-class-truncate-width { \n\t\twidth: 100%; \n    white-space: nowrap; \n    overflow: hidden; \n    text-overflow: ellipsis; \n}\n/* Removes native scrollbar */\n.af-view .af-class-no-scrollbar {\n    -ms-overflow-style: none;\n    overflow: -moz-scrollbars-none; \n}\n.af-view .af-class-no-scrollbar::-webkit-scrollbar {\n    display: none;\n}\n" }} />
                            </div>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86225-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86226-34a69301" className="af-class-rl-styleguide_label af-class-is-html-tag">All H3 Headings</div>
                            <h3>Heading 3</h3>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8622a-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8622b-34a69301" className="af-class-rl-styleguide_label af-class-is-html-tag">All H4 Headings</div>
                            <h4>Heading 4</h4>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8622f-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86230-34a69301" className="af-class-rl-styleguide_label af-class-is-html-tag">All H5 Headings</div>
                            <h5>Heading 5</h5>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86234-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86235-34a69301" className="af-class-rl-styleguide_label af-class-is-html-tag">All H6 Headings</div>
                            <h6>Heading 6</h6>
                          </div>
                        </div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Heading Classes<br /><span className="af-class-text-size-small">Heading classes when typography style doesn't match the default HTML tag.</span></div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8623f-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86240-34a69301" className="af-class-rl-styleguide_label">heading-style-h1</div>
                            <h2 className="af-class-heading-style-h1">Heading-style-h1</h2>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86244-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86245-34a69301" className="af-class-rl-styleguide_label">heading-style-h2</div>
                            <h2 className="af-class-heading-style-h2">Heading-style-h2</h2>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86249-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8624a-34a69301" className="af-class-rl-styleguide_label">heading-style-h3</div>
                            <h2 className="af-class-heading-style-h3">Heading-style-h3</h2>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8624e-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8624f-34a69301" className="af-class-rl-styleguide_label">heading-style-h4</div>
                            <h2 className="af-class-heading-style-h4">Heading-style-h4</h2>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86253-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86254-34a69301" className="af-class-rl-styleguide_label">heading-style-h5</div>
                            <h2 className="af-class-heading-style-h5">Heading-style-h5</h2>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86258-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86259-34a69301" className="af-class-rl-styleguide_label">heading-style-h6</div>
                            <h2 className="af-class-heading-style-h6">Heading-style-h6</h2>
                          </div>
                        </div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Other HTML Tags<br /><span className="af-class-text-size-small">HTML tags define default text styles.</span></div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86263-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86264-34a69301" className="af-class-rl-styleguide_label af-class-is-html-tag">All Paragraphs</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86268-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86269-34a69301" className="af-class-rl-styleguide_label af-class-is-html-tag">All Links</div>
                            <a href="#">All Links</a>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8626d-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8626e-34a69301" className="af-class-rl-styleguide_label af-class-is-html-tag">All Block Quotes</div>
                            <blockquote>Block Quote</blockquote>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86272-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86273-34a69301" className="af-class-rl-styleguide_label af-class-is-html-tag">All Unordered Lists</div>
                            <ul role="list" className="w-list-unstyled">
                              <li>
                                <p>No bullet list</p>
                              </li>
                              <li>
                                <p>No bullet list</p>
                              </li>
                            </ul>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8627c-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8627d-34a69301" className="af-class-rl-styleguide_label af-class-is-html-tag">All Unordered Lists</div>
                            <ul role="list">
                              <li>
                                <p>No bullet list</p>
                              </li>
                              <li>
                                <p>No bullet list</p>
                              </li>
                            </ul>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86286-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86287-34a69301" className="af-class-rl-styleguide_label af-class-is-html-tag">All Ordered Lists</div>
                            <ol role="list">
                              <li>
                                <p>No bullet list</p>
                              </li>
                              <li>
                                <p>No bullet list</p>
                              </li>
                              <li>
                                <p>No bullet list</p>
                              </li>
                            </ol>
                          </div>
                        </div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Text Sizes<br /><span className="af-class-text-size-small">Text sizes classes when typography size doesn't match the default HTML tag.</span></div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86299-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8629a-34a69301" className="af-class-rl-styleguide_label">text-size-large</div>
                            <p className="af-class-text-size-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8629e-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8629f-34a69301" className="af-class-rl-styleguide_label">text-size-medium</div>
                            <p className="af-class-text-size-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862a3-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862a4-34a69301" className="af-class-rl-styleguide_label">text-size-regular</div>
                            <p className="af-class-text-size-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862a8-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862a9-34a69301" className="af-class-rl-styleguide_label">text-size-small</div>
                            <p className="af-class-text-size-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862ad-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862ae-34a69301" className="af-class-rl-styleguide_label">text-size-tiny</div>
                            <p className="af-class-text-size-tiny">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                          </div>
                        </div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Text Weights<br /><span className="af-class-text-size-small">Text weight classes when typography weight doesn't match the default HTML tag.</span></div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862b8-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862b9-34a69301" className="af-class-rl-styleguide_label">text-weight-xbold</div>
                            <div className="af-class-text-weight-xbold">text-weight-xbold (800)</div>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862bd-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862be-34a69301" className="af-class-rl-styleguide_label">text-weight-bold</div>
                            <div className="af-class-text-weight-bold">text-weight-bold (700)</div>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862c2-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862c3-34a69301" className="af-class-rl-styleguide_label">text-weight-semibold</div>
                            <div className="af-class-text-weight-semibold">text-weight-semibold (600)</div>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862c7-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862c8-34a69301" className="af-class-rl-styleguide_label">text-weight-medium</div>
                            <div className="af-class-text-weight-medium">text-weight-medium (500)</div>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862cc-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862cd-34a69301" className="af-class-rl-styleguide_label">text-weight-normal</div>
                            <div className="af-class-text-weight-normal">text-weight-normal (400)</div>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862d1-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862d2-34a69301" className="af-class-rl-styleguide_label">text-weight-light</div>
                            <div className="af-class-text-weight-light">text-weight-light (300)</div>
                          </div>
                        </div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Text Styles<br /><span className="af-class-text-size-small">Text style classes when typography style doesn't match the default HTML tag.</span><br /></div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862dd-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862de-34a69301" className="af-class-rl-styleguide_label">text-style-italic</div>
                            <div className="af-class-text-style-italic">text-style-italic</div>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862e2-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862e3-34a69301" className="af-class-rl-styleguide_label">text-style-strikethrough</div>
                            <div className="af-class-text-style-strikethrough">text-style-strikethrough</div>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862e7-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862e8-34a69301" className="af-class-rl-styleguide_label">text-style-allcaps</div>
                            <div className="af-class-text-style-allcaps">text-style-allcaps</div>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862ec-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862ed-34a69301" className="af-class-rl-styleguide_label">text-style-nowrap</div>
                            <div className="af-class-text-style-nowrap">text-style-nowrap</div>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862f1-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862f2-34a69301" className="af-class-rl-styleguide_label">text-style-quote</div>
                            <div className="af-class-text-style-quote">text-style-quote</div>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862f6-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862f7-34a69301" className="af-class-rl-styleguide_label">text-style-link</div>
                            <div className="af-class-text-style-link">text-style-link</div>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862fb-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc862fc-34a69301" className="af-class-rl-styleguide_label">text-style-2lines</div>
                            <div className="af-class-text-style-2lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</div>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86300-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86301-34a69301" className="af-class-rl-styleguide_label">text-style-3lines</div>
                            <div className="af-class-text-style-3lines">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</div>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86305-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86306-34a69301" className="af-class-rl-styleguide_label">text-style-muted</div>
                            <div className="af-class-text-style-muted">text-style-muted</div>
                          </div>
                        </div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Text Alignment<br /><span className="af-class-text-size-small">Text alignment classes when typography alignment doesn't match the default HTML tag.</span></div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86310-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86311-34a69301" className="af-class-rl-styleguide_label">text-align-left</div>
                            <div className="af-class-text-align-left">text-align-left</div>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86315-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86316-34a69301" className="af-class-rl-styleguide_label">text-align-center</div>
                            <div className="af-class-text-align-center">text-align-center</div>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8631a-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8631b-34a69301" className="af-class-rl-styleguide_label">text-align-right</div>
                            <div className="af-class-text-align-right">text-align-right</div>
                          </div>
                        </div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Rich Text</div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86322-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86323-34a69301" className="af-class-rl-styleguide_label">text-rich-text</div>
                            <div className="af-class-text-rich-text w-richtext">
                              <h1>Heading 1</h1>
                              <h2>Heading 2</h2>
                              <h3>Heading 3</h3>
                              <h4>Heading 4</h4>
                              <h5>Heading 5</h5>
                              <h6>Heading 6</h6>
                              <blockquote>This is a block quote</blockquote>
                              <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                              <p>
                                <a href="https://relume.io">This is a link inside of a rich text</a>
                              </p>
                              <ul role="list">
                                <li>List item</li>
                                <li>List item</li>
                                <li>List item</li>
                              </ul>
                              <ol start role="list">
                                <li>List item</li>
                                <li>List item</li>
                                <li>List item</li>
                              </ol>
                              <figure className="w-richtext-align-normal w-richtext-figure-type-image">
                                <div><img src="images/Placeholder-Image.png" loading="lazy" alt /></div>
                                <figcaption>Caption goes here</figcaption>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-rl-styleguide_colors">
                        <div className="af-class-rl-styleguide_heading">Colors</div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Color Palette</div>
                          <div className="w-layout-grid af-class-styleguide_grid-colours">
                            <div className="af-class-rl-styleguide_color af-class-is-black">
                              <div className="af-class-rl-styleguide_label">is-black</div>
                            </div>
                            <div className="af-class-rl-styleguide_color af-class-is-white">
                              <div className="af-class-rl-styleguide_label">is-white</div>
                            </div>
                            <div className="af-class-rl-styleguide_color af-class-is-gray">
                              <div className="af-class-rl-styleguide_label">is-gray</div>
                            </div>
                          </div>
                          <a href="http://library.relume.io/color-palettes" target="_blank" className="af-class-rl-styleguide_callout-link w-inline-block">
                            <div className="af-class-rl-styleguide_callout-link-wrapper">
                              <div>Add pre-made Color Palettes<br /><span className="af-class-text-size-small">Get access to pre-made Color Palettes and paste them below.</span></div>
                              <div className="af-class-button af-class-is-link af-class-is-icon">
                                <div>View Color Palettes</div>
                                <div className="af-class-icon-embed-xxsmall w-embed"><svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5" />
                                  </svg></div>
                              </div>
                            </div>
                          </a>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86367-34a69301" className="af-class-rl-styleguide_paste-text">Click and paste Color Palette</div>
                        </div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Background Color<br /><span className="af-class-text-size-small">Manage recurring background colors.</span></div>
                          <div className="w-layout-grid af-class-styleguide_grid-colours">
                            <div className="af-class-background-color-black">
                              <div className="af-class-rl-styleguide_label">background-color-black</div>
                              <div className="af-class-rl-styleguide_empty-space" />
                            </div>
                            <div className="af-class-background-color-white">
                              <div className="af-class-rl-styleguide_label">background-color-white</div>
                              <div className="af-class-rl-styleguide_empty-space" />
                            </div>
                            <div className="af-class-background-color-gray">
                              <div className="af-class-rl-styleguide_label">background-color-gray</div>
                              <div className="af-class-rl-styleguide_empty-space" />
                            </div>
                          </div>
                          <a href="http://library.relume.io/color-palettes" target="_blank" className="af-class-rl-styleguide_callout-link w-inline-block">
                            <div className="af-class-rl-styleguide_callout-link-wrapper">
                              <div>Add pre-made Background Colors<br /><span className="af-class-text-size-small">Get access to pre-made Color Palettes and paste them below.</span></div>
                              <div className="af-class-button af-class-is-link af-class-is-icon">
                                <div>View Background Colors</div>
                                <div className="af-class-icon-embed-xxsmall w-embed"><svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5" />
                                  </svg></div>
                              </div>
                            </div>
                          </a>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86386-34a69301" className="af-class-rl-styleguide_paste-text">Click and paste Color Palette</div>
                        </div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Text Color<br /><span className="af-class-text-size-small">Manage recurring text colors.</span></div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86393-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86394-34a69301" className="af-class-rl-styleguide_label">text-color-white</div>
                            <div className="af-class-background-color-black">
                              <div className="af-class-text-color-white">text-color-white</div>
                            </div>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8638e-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8638f-34a69301" className="af-class-rl-styleguide_label">text-color-black</div>
                            <div className="af-class-text-color-black">text-color-black</div>
                          </div>
                          <a href="http://library.relume.io/color-palettes" target="_blank" className="af-class-rl-styleguide_callout-link w-inline-block">
                            <div className="af-class-rl-styleguide_callout-link-wrapper">
                              <div>Add pre-made Text Colors<br /><span className="af-class-text-size-small">Get access to pre-made Text Colors and paste them below.</span></div>
                              <div className="af-class-button af-class-is-link af-class-is-icon">
                                <div>View Text Colors</div>
                                <div className="af-class-icon-embed-xxsmall w-embed"><svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 3L11 8L6 13" stroke="CurrentColor" strokeWidth="1.5" />
                                  </svg></div>
                              </div>
                            </div>
                          </a>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863a4-34a69301" className="af-class-rl-styleguide_paste-text">Click and paste Color Palette</div>
                        </div>
                      </div>
                      <div className="af-class-rl-styleguide_effects">
                        <div className="af-class-rl-styleguide_heading">Effects</div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Box Shadows<br />‍<span className="af-class-text-size-small">Shadows allow you to add depth and realism to designs by positioning elements on a z-axis.</span></div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863b0-34a69301" className="af-class-rl-styleguide_tutorial-callout">
                            <div>Want to learn how to use shadow classes the Client-first way?<span className="af-class-text-size-small" /></div>
                            <a href="#" className="af-class-button af-class-is-secondary af-class-is-small af-class-is-icon w-inline-block w-lightbox">
                              <div className="af-class-icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM9.38965 7.69666C9.62853 7.56579 9.91959 7.57472 10.15 7.72L16 11.36C16.2182 11.4997 16.3501 11.7409 16.3501 12C16.3501 12.2591 16.2182 12.5003 16 12.64L10.15 16.28C9.91959 16.4253 9.62853 16.4342 9.38965 16.3033C9.15076 16.1725 9.00161 15.9224 9 15.65V8.35C9.00161 8.07762 9.15076 7.82752 9.38965 7.69666Z" fill="currentColor" />
                                </svg></div>
                              <div>Watch Tutorial</div>
                            </a>
                          </div>
                          <div className="w-layout-grid af-class-rl-styleguide_shadows-list">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863ba-34a69301" className="af-class-shadow-xxsmall">
                              <div className="af-class-rl-styleguide_label">shadow-xxsmall</div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863bd-34a69301" className="af-class-rl-styleguide_empty-space" />
                            </div>
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863be-34a69301" className="af-class-shadow-xsmall">
                              <div className="af-class-rl-styleguide_label">shadow-xsmall</div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863c1-34a69301" className="af-class-rl-styleguide_empty-space" />
                            </div>
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863c2-34a69301" className="af-class-shadow-small">
                              <div className="af-class-rl-styleguide_label">shadow-small</div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863c5-34a69301" className="af-class-rl-styleguide_empty-space" />
                            </div>
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863c6-34a69301" className="af-class-shadow-medium">
                              <div className="af-class-rl-styleguide_label">shadow-medium</div>
                              <div className="af-class-rl-styleguide_empty-space" />
                            </div>
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863ca-34a69301" className="af-class-shadow-large">
                              <div className="af-class-rl-styleguide_label">shadow-large</div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863cd-34a69301" className="af-class-rl-styleguide_empty-space" />
                            </div>
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863ce-34a69301" className="af-class-shadow-xlarge">
                              <div className="af-class-rl-styleguide_label">shadow-xlarge</div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863d1-34a69301" className="af-class-rl-styleguide_empty-space" />
                            </div>
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863d2-34a69301" className="af-class-shadow-xxlarge">
                              <div className="af-class-rl-styleguide_label">shadow-xxlarge</div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863d5-34a69301" className="af-class-rl-styleguide_empty-space" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-rl-styleguide_ui-elements">
                        <div className="af-class-rl-styleguide_heading">UI Elements</div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Buttons</div>
                          <div className="w-layout-grid af-class-rl-styleguide_button-list">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863dd-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863de-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863df-34a69301" className="af-class-rl-styleguide_label">button</div>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863e1-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button w-button">Button</a>
                              </div>
                            </div>
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863e4-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863e5-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863e6-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-small</div>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863ea-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-small w-button">Button</a>
                              </div>
                            </div>
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863ed-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863ee-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863ef-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-secondary</div>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863f3-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-secondary w-button">Button</a>
                              </div>
                            </div>
                            <div className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863f7-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863f8-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-secondary</div>
                                <div className="af-class-rl-styleguide_label">is-small</div>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc863fe-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-secondary af-class-is-small w-button">Button</a>
                              </div>
                            </div>
                            <div id="w-node-e9f171cc-11b4-0905-714d-593dc5e729cd-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-e9f171cc-11b4-0905-714d-593dc5e729ce-34a69301" className="af-class-class-label-row">
                                <div id="w-node-e9f171cc-11b4-0905-714d-593dc5e729cf-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-tertiary</div>
                              </div>
                              <div id="w-node-e9f171cc-11b4-0905-714d-593dc5e729d3-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-tertiary w-button">Button</a>
                              </div>
                            </div>
                            <div id="w-node-_803d93b2-f316-78e7-4b37-d40ff102217f-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_803d93b2-f316-78e7-4b37-d40ff1022180-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_803d93b2-f316-78e7-4b37-d40ff1022181-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-tertiary</div>
                                <div className="af-class-rl-styleguide_label">is-small</div>
                              </div>
                              <div id="w-node-_803d93b2-f316-78e7-4b37-d40ff1022187-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-tertiary af-class-is-small w-button">Button</a>
                              </div>
                            </div>
                            <div className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86402-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86403-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-link</div>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86407-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-link w-button">Button</a>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8640a-34a69301">To use on a dark background, simple use the add-on class <span className="af-class-rl-styleguide_label">is-alternate</span></div>
                          <div className="w-layout-grid af-class-rl-styleguide_button-list af-class-background-color-black">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8640f-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86410-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86411-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-alternate</div>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86415-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-alternate w-button">Button</a>
                              </div>
                            </div>
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86418-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86419-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8641a-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-alternate</div>
                                <div className="af-class-rl-styleguide_label">is-small</div>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86420-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-alternate af-class-is-small w-button">Button</a>
                              </div>
                            </div>
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86423-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86424-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86425-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-secondary</div>
                                <div className="af-class-rl-styleguide_label">is-alternate</div>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8642b-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-secondary af-class-is-alternate w-button">Button</a>
                              </div>
                            </div>
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8642e-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8642f-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86430-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-secondary</div>
                                <div className="af-class-rl-styleguide_label">is-small</div>
                                <div className="af-class-rl-styleguide_label">is-alternate</div>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86438-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-secondary af-class-is-small af-class-is-alternate w-button">Button</a>
                              </div>
                            </div>
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8643b-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8643c-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8643d-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-link</div>
                                <div className="af-class-rl-styleguide_label">is-alternate</div>
                              </div>
                              <a href="#" className="af-class-button af-class-is-link af-class-is-alternate w-button">Button</a>
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Buttons With Icons</div>
                          <div className="w-layout-grid af-class-rl-styleguide_button-list">
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86449-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8644a-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8644b-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-icon</div>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8644f-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-icon w-inline-block">
                                  <div>Button</div>
                                  <div className="af-class-icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                    </svg></div>
                                </a>
                              </div>
                            </div>
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86454-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86455-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86456-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-small</div>
                                <div className="af-class-rl-styleguide_label">is-icon</div>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8645c-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-small af-class-is-icon w-inline-block">
                                  <div>Button</div>
                                  <div className="af-class-icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                    </svg></div>
                                </a>
                              </div>
                            </div>
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86461-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86462-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86463-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-secondary</div>
                                <div className="af-class-rl-styleguide_label">is-icon</div>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86469-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-secondary af-class-is-icon w-inline-block">
                                  <div>Button</div>
                                  <div className="af-class-icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                    </svg></div>
                                </a>
                              </div>
                            </div>
                            <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8646e-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8646f-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86470-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-secondary</div>
                                <div className="af-class-rl-styleguide_label">is-small</div>
                                <div className="af-class-rl-styleguide_label">is-icon</div>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86478-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-secondary af-class-is-small af-class-is-icon w-inline-block">
                                  <div>Button</div>
                                  <div className="af-class-icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                    </svg></div>
                                </a>
                              </div>
                            </div>
                            <div className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8647e-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8647f-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-link</div>
                                <div className="af-class-rl-styleguide_label">is-icon</div>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86485-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-link af-class-is-icon w-inline-block">
                                  <div>Button</div>
                                  <div className="af-class-icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                    </svg></div>
                                </a>
                              </div>
                            </div>
                            <div id="w-node-bf202792-073b-d0b9-2e3f-1ac68c32701c-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-bf202792-073b-d0b9-2e3f-1ac68c32701d-34a69301" className="af-class-class-label-row">
                                <div id="w-node-bf202792-073b-d0b9-2e3f-1ac68c32701e-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-icon-only</div>
                              </div>
                              <div id="w-node-bf202792-073b-d0b9-2e3f-1ac68c327022-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-icon-only w-inline-block">
                                  <div className="af-class-icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                    </svg></div>
                                </a>
                              </div>
                            </div>
                            <div id="w-node-_7c4d1b7c-78f1-8ac7-381e-93ec539e1608-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_7c4d1b7c-78f1-8ac7-381e-93ec539e1609-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_7c4d1b7c-78f1-8ac7-381e-93ec539e160a-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-small</div>
                                <div className="af-class-rl-styleguide_label">is-icon-only</div>
                              </div>
                              <div id="w-node-_7c4d1b7c-78f1-8ac7-381e-93ec539e1610-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-small af-class-is-icon-only w-inline-block">
                                  <div className="af-class-icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                    </svg></div>
                                </a>
                              </div>
                            </div>
                            <div id="w-node-_45e7d798-6f20-3ddc-ae2f-bdd2974eece1-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_45e7d798-6f20-3ddc-ae2f-bdd2974eece2-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_45e7d798-6f20-3ddc-ae2f-bdd2974eece3-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-secondary</div>
                                <div className="af-class-rl-styleguide_label">is-icon-only</div>
                              </div>
                              <div id="w-node-_45e7d798-6f20-3ddc-ae2f-bdd2974eece9-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-secondary af-class-is-icon-only w-inline-block">
                                  <div className="af-class-icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                    </svg></div>
                                </a>
                              </div>
                            </div>
                            <div id="w-node-efb2dd60-0fd7-ccc6-83fa-c5f7f2777b7e-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-efb2dd60-0fd7-ccc6-83fa-c5f7f2777b7f-34a69301" className="af-class-class-label-row">
                                <div id="w-node-efb2dd60-0fd7-ccc6-83fa-c5f7f2777b80-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-secondary</div>
                                <div className="af-class-rl-styleguide_label">is-small</div>
                                <div className="af-class-rl-styleguide_label">is-icon-only</div>
                              </div>
                              <div id="w-node-efb2dd60-0fd7-ccc6-83fa-c5f7f2777b88-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-secondary af-class-is-small af-class-is-icon-only w-inline-block">
                                  <div className="af-class-icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                    </svg></div>
                                </a>
                              </div>
                            </div>
                            <div id="w-node-_0a1c269a-9c65-cac5-d78d-08680a95253d-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_0a1c269a-9c65-cac5-d78d-08680a95253e-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_0a1c269a-9c65-cac5-d78d-08680a95253f-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-tertiary</div>
                                <div className="af-class-rl-styleguide_label">is-icon-only</div>
                              </div>
                              <div id="w-node-_0a1c269a-9c65-cac5-d78d-08680a952545-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-tertiary af-class-is-icon-only w-inline-block">
                                  <div className="af-class-icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                    </svg></div>
                                </a>
                              </div>
                            </div>
                            <div id="w-node-ee513712-f44c-c02b-b1ea-6045fc69ab7c-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-ee513712-f44c-c02b-b1ea-6045fc69ab7d-34a69301" className="af-class-class-label-row">
                                <div id="w-node-ee513712-f44c-c02b-b1ea-6045fc69ab7e-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-tertiary</div>
                                <div className="af-class-rl-styleguide_label">is-small</div>
                                <div className="af-class-rl-styleguide_label">is-icon-only</div>
                              </div>
                              <div id="w-node-ee513712-f44c-c02b-b1ea-6045fc69ab86-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-tertiary af-class-is-small af-class-is-icon-only w-inline-block">
                                  <div className="af-class-icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                    </svg></div>
                                </a>
                              </div>
                            </div>
                            <div className="w-layout-grid af-class-rl-styleguide_item-row">
                              <div id="w-node-_40872103-aff7-c010-da67-704a8f3f1108-34a69301" className="af-class-class-label-row">
                                <div id="w-node-_40872103-aff7-c010-da67-704a8f3f1109-34a69301" className="af-class-rl-styleguide_label">button</div>
                                <div className="af-class-rl-styleguide_label">is-link</div>
                                <div className="af-class-rl-styleguide_label">is-icon-only</div>
                              </div>
                              <div id="w-node-_40872103-aff7-c010-da67-704a8f3f110f-34a69301" className="af-class-button-group">
                                <a href="#" className="af-class-button af-class-is-link af-class-is-icon-only w-inline-block">
                                  <div className="af-class-icon-embed-xsmall w-embed"><svg width="currentWidth" height="currentHeight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                    </svg></div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Form Elements</div>
                          <div className="af-class-form-block w-form">
                            <form id="email-form" name="email-form" data-name="Email Form" method="get" className="af-class-form" data-wf-page-id="6526603ca6ecfaa934a69301" data-wf-element-id="336be75c-ab2b-838b-5642-972b6cc8648e">
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8648f-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86490-34a69301" className="af-class-class-label-column">
                                  <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86491-34a69301" className="af-class-class-label-row">
                                    <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86492-34a69301" className="af-class-rl-styleguide_label">field-label</div>
                                  </div>
                                  <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86494-34a69301" className="af-class-class-label-row">
                                    <div className="af-class-rl-styleguide_label">form-input</div>
                                  </div>
                                </div>
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc86497-34a69301" className="af-class-form-field-wrapper"><label htmlFor="node-2" className="af-class-field-label">.field-label</label><input type="text" className="af-class-form-input w-input" maxLength={256} name="field" data-name placeholder=".form-input" id="node" /></div>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8649b-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8649c-34a69301" className="af-class-class-label-column">
                                  <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc8649d-34a69301" className="af-class-class-label-row">
                                    <div className="af-class-rl-styleguide_label">form-input</div>
                                    <div className="af-class-rl-styleguide_label">is-text-area</div>
                                  </div>
                                </div>
                                <div className="af-class-form-field-wrapper"><label htmlFor="Field-5" className="af-class-field-label">.field-label</label><textarea name="field-3" maxLength={5000} id="field-3" placeholder=".form-input.textarea" data-name="field" className="af-class-form-input af-class-is-text-area w-input" defaultValue={""} /></div>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc864a6-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc864a7-34a69301" className="af-class-class-label-column">
                                  <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc864a8-34a69301" className="af-class-class-label-row">
                                    <div className="af-class-rl-styleguide_label">form-input</div>
                                    <div className="af-class-rl-styleguide_label">is-select-input</div>
                                  </div>
                                </div>
                                <div className="af-class-form-field-wrapper"><label htmlFor="Field-5" className="af-class-field-label">.field-label</label><select id="field-4" name="field-4" data-name="field" className="af-class-form-input af-class-is-select-input w-select">
                                    <option value>Select one...</option>
                                    <option value="First">First Choice</option>
                                    <option value="Second">Second Choice</option>
                                    <option value="Third">Third Choice</option>
                                  </select></div>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc864b1-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc864b2-34a69301" className="af-class-class-label-column">
                                  <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc864b3-34a69301" className="af-class-class-label-row">
                                    <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc864b4-34a69301" className="af-class-rl-styleguide_label">form-checkbox</div>
                                  </div>
                                </div><label className="w-checkbox af-class-form-checkbox">
                                  <div className="w-checkbox-input w-checkbox-input--inputType-custom af-class-form-checkbox-icon" /><input type="checkbox" id="checkbox-2" name="checkbox-2" data-name="Checkbox 2" style={{opacity: 0, position: 'absolute', zIndex: -1}} /><span className="af-class-form-checkbox-label w-form-label" htmlFor="checkbox-2">Checkbox</span>
                                </label>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc864ba-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc864bb-34a69301" className="af-class-class-label-column">
                                  <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc864bc-34a69301" className="af-class-class-label-row">
                                    <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc864bd-34a69301" className="af-class-rl-styleguide_label">form-radio</div>
                                  </div>
                                </div><label id="w-node-da163454-3d7f-a6d2-8037-3b46b9c50abd-34a69301" className="af-class-form-radio w-radio">
                                  <div className="w-form-formradioinput w-form-formradioinput--inputType-custom af-class-form-radio-icon w-radio-input" /><input type="radio" data-name="Radio 2" id="radio-2" name="radio-2" defaultValue="Radio 2" style={{opacity: 0, position: 'absolute', zIndex: -1}} /><span className="af-class-form-radio-label w-form-label" htmlFor="radio-2">Radio</span>
                                </label>
                              </div>
                              <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc864c3-34a69301" className="w-layout-grid af-class-rl-styleguide_item-row">
                                <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc864c4-34a69301" className="af-class-class-label-column">
                                  <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc864c5-34a69301" className="af-class-class-label-row">
                                    <div id="w-node-_336be75c-ab2b-838b-5642-972b6cc864c6-34a69301" className="af-class-rl-styleguide_label">button</div>
                                  </div>
                                </div><input type="submit" defaultValue="Submit" data-wait="Please wait..." id="w-node-_336be75c-ab2b-838b-5642-972b6cc864c8-34a69301" className="af-class-button w-button" />
                              </div>
                            </form>
                            <div className="w-form-done">
                              <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                              <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Icons (Image)</div>
                          <div className="af-class-rl-styleguide_icons-list">
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-height-xxsmall</p><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg" loading="lazy" alt className="af-class-icon-height-xxsmall" />
                            </div>
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-height-xsmall</p><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg" loading="lazy" alt className="af-class-icon-height-xsmall" />
                            </div>
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-height-small</p><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/6294195f2d0c46815fb2259c_icon.svg" loading="lazy" alt className="af-class-icon-height-small" />
                            </div>
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-height-medium</p><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg" loading="lazy" alt className="af-class-icon-height-medium" />
                            </div>
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-height-large</p><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg" loading="lazy" alt className="af-class-icon-height-large" />
                            </div>
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-height-xlarge</p><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg" loading="lazy" alt className="af-class-icon-height-xlarge" />
                            </div>
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-height-custom1</p><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg" loading="lazy" alt className="af-class-icon-height-custom1" />
                            </div>
                          </div>
                          <div className="af-class-rl-styleguide_icons-list">
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-1x1-xxsmall</p><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg" loading="lazy" alt className="af-class-icon-1x1-xxsmall" />
                            </div>
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-1x1-xsmall</p><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg" loading="lazy" alt className="af-class-icon-1x1-xsmall" />
                            </div>
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-1x1-small</p><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg" loading="lazy" alt className="af-class-icon-1x1-small" />
                            </div>
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-1x1-medium</p><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg" loading="lazy" alt className="af-class-icon-1x1-medium" />
                            </div>
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-1x1-large</p><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg" loading="lazy" alt className="af-class-icon-1x1-large" />
                            </div>
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-1x1-xlarge</p><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg" loading="lazy" alt className="af-class-icon-1x1-xlarge" />
                            </div>
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-1x1-custom1</p><img src="https://uploads-ssl.webflow.com/624380709031623bfe4aee60/624380709031626fc14aee84_icon.svg" loading="lazy" alt className="af-class-icon-1x1-custom1" />
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Icons (HTML Embed)<br /><span className="af-class-text-size-small">HTML embed icons enable you to control icon color on hover.</span><br /></div>
                          <div className="af-class-rl-styleguide_icons-list">
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-embed-xxsmall</p>
                              <div className="af-class-icon-embed-xxsmall w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                </svg></div>
                            </div>
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-embed-xsmall</p>
                              <div className="af-class-icon-embed-xsmall w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                </svg></div>
                            </div>
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-embed-small</p>
                              <div className="af-class-icon-embed-small w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                </svg></div>
                            </div>
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-embed-medium</p>
                              <div className="af-class-icon-embed-medium w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                </svg></div>
                            </div>
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-embed-large</p>
                              <div className="af-class-icon-embed-large w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                </svg></div>
                            </div>
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-embed-xlarge</p>
                              <div className="af-class-icon-embed-xlarge w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                </svg></div>
                            </div>
                            <div className="af-class-rl-styleguide_item">
                              <p className="af-class-rl-styleguide_label">icon-embed-custom1</p>
                              <div className="af-class-icon-embed-custom1 w-embed"><svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z" fill="currentColor" />
                                </svg></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="af-class-rl-styleguide_classes">
                      <div className="af-class-rl-styleguide_structure">
                        <div className="af-class-rl-styleguide_heading">Structure Classes</div>
                        <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369290-34a69301" className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading"><span className="af-class-text-size-small">Defined and flexible core structure we can use on all or most pages.</span></div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369294-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369295-34a69301" className="af-class-rl-styleguide_label">page-wrapper</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369297-34a69301" className="af-class-page-wrapper">
                              <div className="af-class-rl-styleguide_empty-box af-class-pointer-events-off" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369299-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936929a-34a69301" className="af-class-rl-styleguide_label">main-wrapper</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936929c-34a69301" className="af-class-main-wrapper">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936929e-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936929f-34a69301" className="af-class-rl-styleguide_label">container-small</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692a1-34a69301" className="af-class-container-small">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692a3-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692a4-34a69301" className="af-class-rl-styleguide_label">container-medium</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692a6-34a69301" className="af-class-container-medium">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692a8-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692a9-34a69301" className="af-class-rl-styleguide_label">container-large</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692ab-34a69301" className="af-class-container-large">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692ad-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692ae-34a69301" className="af-class-rl-styleguide_label">padding-global</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692b0-34a69301" className="af-class-padding-global">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692b2-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692b3-34a69301" className="af-class-rl-styleguide_label">padding-section-small</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692b5-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692b6-34a69301" className="af-class-padding-section-small">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692b8-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692b9-34a69301" className="af-class-rl-styleguide_label">padding-section-medium</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692bb-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692bc-34a69301" className="af-class-padding-section-medium">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692be-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692bf-34a69301" className="af-class-rl-styleguide_label">padding-section-large</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692c1-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692c2-34a69301" className="af-class-padding-section-large">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692c4-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692c5-34a69301" className="af-class-rl-styleguide_label">button-group</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692c7-34a69301" className="af-class-button-group">
                              <div className="af-class-rl-styleguide_empty-box" />
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-rl-styleguide_max-width">
                        <div className="af-class-rl-styleguide_heading">Max Widths</div>
                        <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692cd-34a69301" className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading"><span className="af-class-text-size-small">Use the max-width CSS property to contain inner content to a maximum width.</span></div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692d1-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692d2-34a69301" className="af-class-rl-styleguide_label">max-width-full</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692d4-34a69301" className="af-class-max-width-full">
                              <div className="af-class-rl-styleguide_empty-box af-class-pointer-events-off" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692d6-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692d7-34a69301" className="af-class-rl-styleguide_label">max-width-full-tablet</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692d9-34a69301" className="af-class-max-width-full-tablet">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692db-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692dc-34a69301" className="af-class-rl-styleguide_label">max-width-full-mobile-landscape</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692de-34a69301" className="af-class-max-width-full-mobile-landscape">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692e0-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692e1-34a69301" className="af-class-rl-styleguide_label">max-width-full-mobile-portrait</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692e3-34a69301" className="af-class-max-width-full-mobile-portrait">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692e5-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692e6-34a69301" className="af-class-rl-styleguide_label">max-width-xxlarge</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692e8-34a69301" className="af-class-max-width-xxlarge">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692ea-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692eb-34a69301" className="af-class-rl-styleguide_label">max-width-xlarge</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692ed-34a69301" className="af-class-max-width-xlarge">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692ef-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692f0-34a69301" className="af-class-rl-styleguide_label">max-width-large</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692f2-34a69301" className="af-class-max-width-large">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692f4-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692f5-34a69301" className="af-class-rl-styleguide_label">max-width-medium</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692f7-34a69301" className="af-class-max-width-medium">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692f9-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692fa-34a69301" className="af-class-rl-styleguide_label">max-width-small</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692fc-34a69301" className="af-class-max-width-small">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692fe-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593692ff-34a69301" className="af-class-rl-styleguide_label">max-width-xsmall</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369301-34a69301" className="af-class-max-width-xsmall">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369303-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369304-34a69301" className="af-class-rl-styleguide_label">max-width-xxsmall</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369306-34a69301" className="af-class-max-width-xxsmall">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-rl-styleguide_paddings">
                        <div className="af-class-rl-styleguide_heading">Paddings</div>
                        <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936930b-34a69301" className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Direction Classes</div>
                          <div className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936930f-34a69301" className="af-class-rl-styleguide_label">padding-bottom</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369311-34a69301" className="af-class-padding-bottom">
                              <div className="af-class-rl-styleguide_empty-box af-class-pointer-events-off" />
                            </div>
                          </div>
                          <div className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369314-34a69301" className="af-class-rl-styleguide_label">padding-top</div>
                            <div className="af-class-padding-top">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369319-34a69301" className="af-class-rl-styleguide_label">padding-vertical</div>
                            <div className="af-class-padding-vertical">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936931e-34a69301" className="af-class-rl-styleguide_label">padding-horizontal</div>
                            <div className="af-class-padding-horizontal">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369323-34a69301" className="af-class-rl-styleguide_label">padding-left</div>
                            <div className="af-class-padding-left">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369328-34a69301" className="af-class-rl-styleguide_label">padding-right</div>
                            <div className="af-class-padding-right">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Size Classes</div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936932f-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369330-34a69301" className="af-class-rl-styleguide_label">padding-0</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369332-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369333-34a69301" className="af-class-padding-0">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369335-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369336-34a69301" className="af-class-rl-styleguide_label">padding-tiny</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369338-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369339-34a69301" className="af-class-padding-tiny">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936933b-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936933c-34a69301" className="af-class-rl-styleguide_label">padding-xxsmall</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936933e-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936933f-34a69301" className="af-class-padding-xxsmall">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369341-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369342-34a69301" className="af-class-rl-styleguide_label">padding-xsmall</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369344-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369345-34a69301" className="af-class-padding-xsmall">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369347-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369348-34a69301" className="af-class-rl-styleguide_label">padding-small</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936934a-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936934b-34a69301" className="af-class-padding-small">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936934d-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936934e-34a69301" className="af-class-rl-styleguide_label">padding-medium</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369350-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369351-34a69301" className="af-class-padding-medium">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369353-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369354-34a69301" className="af-class-rl-styleguide_label">padding-large</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369356-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369357-34a69301" className="af-class-padding-large">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369359-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936935a-34a69301" className="af-class-rl-styleguide_label">padding-xlarge</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936935c-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936935d-34a69301" className="af-class-padding-xlarge">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936935f-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369360-34a69301" className="af-class-rl-styleguide_label">padding-xxlarge</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369362-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369363-34a69301" className="af-class-padding-xxlarge">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369365-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369366-34a69301" className="af-class-rl-styleguide_label">padding-huge</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369368-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369369-34a69301" className="af-class-padding-huge">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936936b-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936936c-34a69301" className="af-class-rl-styleguide_label">padding-xhuge</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936936e-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936936f-34a69301" className="af-class-padding-xhuge">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369371-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369372-34a69301" className="af-class-rl-styleguide_label">padding-xxhuge</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369374-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369375-34a69301" className="af-class-padding-xxhuge">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369377-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369378-34a69301" className="af-class-rl-styleguide_label">padding-custom1</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936937a-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936937b-34a69301" className="af-class-padding-custom1">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936937d-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936937e-34a69301" className="af-class-rl-styleguide_label">padding-custom2</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369380-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369381-34a69301" className="af-class-padding-custom2">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369383-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369384-34a69301" className="af-class-rl-styleguide_label">padding-custom3</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369386-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369387-34a69301" className="af-class-padding-custom3">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-rl-styleguide_margins">
                        <div className="af-class-rl-styleguide_heading">Margins</div>
                        <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936938c-34a69301" className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Direction Classes</div>
                          <div className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369390-34a69301" className="af-class-rl-styleguide_label">margin-bottom</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369392-34a69301" className="af-class-margin-bottom">
                              <div className="af-class-rl-styleguide_empty-box af-class-pointer-events-off" />
                            </div>
                          </div>
                          <div className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369395-34a69301" className="af-class-rl-styleguide_label">margin-top</div>
                            <div className="af-class-margin-top">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936939a-34a69301" className="af-class-rl-styleguide_label">margin-vertical</div>
                            <div className="af-class-margin-vertical">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936939f-34a69301" className="af-class-rl-styleguide_label">margin-horizontal</div>
                            <div className="af-class-margin-horizontal">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693a4-34a69301" className="af-class-rl-styleguide_label">margin-left</div>
                            <div className="af-class-margin-left">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693a9-34a69301" className="af-class-rl-styleguide_label">margin-right</div>
                            <div className="af-class-margin-right">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                        </div>
                        <div className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Size Classes</div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693b0-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693b1-34a69301" className="af-class-rl-styleguide_label">margin-0</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693b3-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693b4-34a69301" className="af-class-margin-0">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693b6-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693b7-34a69301" className="af-class-rl-styleguide_label">margin-tiny</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693b9-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693ba-34a69301" className="af-class-margin-tiny">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693bc-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693bd-34a69301" className="af-class-rl-styleguide_label">margin-xxsmall</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693bf-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693c0-34a69301" className="af-class-margin-xxsmall">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693c2-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693c3-34a69301" className="af-class-rl-styleguide_label">margin-xsmall</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693c5-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693c6-34a69301" className="af-class-margin-xsmall">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693c8-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693c9-34a69301" className="af-class-rl-styleguide_label">margin-small</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693cb-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693cc-34a69301" className="af-class-margin-small">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693ce-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693cf-34a69301" className="af-class-rl-styleguide_label">margin-medium</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693d1-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693d2-34a69301" className="af-class-margin-medium">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693d4-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693d5-34a69301" className="af-class-rl-styleguide_label">margin-large</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693d7-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693d8-34a69301" className="af-class-margin-large">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693da-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693db-34a69301" className="af-class-rl-styleguide_label">margin-xlarge</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693dd-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693de-34a69301" className="af-class-margin-xlarge">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693e0-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693e1-34a69301" className="af-class-rl-styleguide_label">margin-xxlarge</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693e3-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693e4-34a69301" className="af-class-margin-xxlarge">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693e6-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693e7-34a69301" className="af-class-rl-styleguide_label">margin-huge</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693e9-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693ea-34a69301" className="af-class-margin-huge">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693ec-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693ed-34a69301" className="af-class-rl-styleguide_label">margin-xhuge</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693ef-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693f0-34a69301" className="af-class-margin-xhuge">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693f2-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693f3-34a69301" className="af-class-rl-styleguide_label">margin-xxhuge</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693f5-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693f6-34a69301" className="af-class-margin-xxhuge">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693f8-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693f9-34a69301" className="af-class-rl-styleguide_label">margin-custom1</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693fb-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693fc-34a69301" className="af-class-margin-custom1">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693fe-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593693ff-34a69301" className="af-class-rl-styleguide_label">margin-custom2</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369401-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369402-34a69301" className="af-class-margin-custom2">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369404-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369405-34a69301" className="af-class-rl-styleguide_label">margin-custom3</div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369407-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369408-34a69301" className="af-class-margin-custom3">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-rl-styleguide_spacers">
                        <div className="af-class-rl-styleguide_heading">Spacers</div>
                        <div id="w-node-aba73718-5f03-827e-9e0b-61449dc1d37c-34a69301" className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading">Unified spacer system for the project.</div>
                          <div id="w-node-_1a6e4211-c1a3-edfa-99df-59c05fb448f8-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_1a6e4211-c1a3-edfa-99df-59c05fb448f9-34a69301" className="af-class-rl-styleguide_label">spacer-tiny</div>
                            <div id="w-node-_1a6e4211-c1a3-edfa-99df-59c05fb448fb-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_1a6e4211-c1a3-edfa-99df-59c05fb448fc-34a69301" className="af-class-spacer-tiny">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_16994295-7a31-57da-1001-8ec0ea846a1e-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_16994295-7a31-57da-1001-8ec0ea846a1f-34a69301" className="af-class-rl-styleguide_label">spacer-xxsmall</div>
                            <div id="w-node-_16994295-7a31-57da-1001-8ec0ea846a21-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_16994295-7a31-57da-1001-8ec0ea846a22-34a69301" className="af-class-spacer-xxsmall">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_8f691932-76bb-1979-3d19-a80adf0a25f2-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_8f691932-76bb-1979-3d19-a80adf0a25f3-34a69301" className="af-class-rl-styleguide_label">spacer-xsmall</div>
                            <div id="w-node-_8f691932-76bb-1979-3d19-a80adf0a25f5-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_8f691932-76bb-1979-3d19-a80adf0a25f6-34a69301" className="af-class-spacer-xsmall">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-f28919c2-e180-d075-d1c2-81b601b8a964-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-f28919c2-e180-d075-d1c2-81b601b8a965-34a69301" className="af-class-rl-styleguide_label">spacer-small</div>
                            <div id="w-node-f28919c2-e180-d075-d1c2-81b601b8a967-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-f28919c2-e180-d075-d1c2-81b601b8a968-34a69301" className="af-class-spacer-small">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-b2bd7b9e-a5b1-0617-1861-ecb60c9b53b3-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-b2bd7b9e-a5b1-0617-1861-ecb60c9b53b4-34a69301" className="af-class-rl-styleguide_label">spacer-medium</div>
                            <div id="w-node-b2bd7b9e-a5b1-0617-1861-ecb60c9b53b6-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-b2bd7b9e-a5b1-0617-1861-ecb60c9b53b7-34a69301" className="af-class-spacer-medium">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-ee961e8d-845a-edc3-3307-509470022457-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-ee961e8d-845a-edc3-3307-509470022458-34a69301" className="af-class-rl-styleguide_label">spacer-large</div>
                            <div id="w-node-ee961e8d-845a-edc3-3307-50947002245a-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-ee961e8d-845a-edc3-3307-50947002245b-34a69301" className="af-class-spacer-large">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_588dd3e3-4aa6-cc42-1280-2d37cff319e1-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_588dd3e3-4aa6-cc42-1280-2d37cff319e2-34a69301" className="af-class-rl-styleguide_label">spacer-xlarge</div>
                            <div id="w-node-_588dd3e3-4aa6-cc42-1280-2d37cff319e4-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_588dd3e3-4aa6-cc42-1280-2d37cff319e5-34a69301" className="af-class-spacer-xlarge">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_626bd165-37fe-b21e-713f-accb16c57414-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_626bd165-37fe-b21e-713f-accb16c57415-34a69301" className="af-class-rl-styleguide_label">spacer-xxlarge</div>
                            <div id="w-node-_626bd165-37fe-b21e-713f-accb16c57417-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_626bd165-37fe-b21e-713f-accb16c57418-34a69301" className="af-class-spacer-xxlarge">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_8198cc96-510b-d5a9-b63d-22b6607f5f40-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_8198cc96-510b-d5a9-b63d-22b6607f5f41-34a69301" className="af-class-rl-styleguide_label">spacer-huge</div>
                            <div id="w-node-_8198cc96-510b-d5a9-b63d-22b6607f5f43-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_8198cc96-510b-d5a9-b63d-22b6607f5f44-34a69301" className="af-class-spacer-huge">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_2a26aaa0-f27b-d541-a441-687d55aa9ee5-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_2a26aaa0-f27b-d541-a441-687d55aa9ee6-34a69301" className="af-class-rl-styleguide_label">spacer-xhuge</div>
                            <div id="w-node-_2a26aaa0-f27b-d541-a441-687d55aa9ee8-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_2a26aaa0-f27b-d541-a441-687d55aa9ee9-34a69301" className="af-class-spacer-xhuge">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_2abe4c27-4e03-1a95-b21e-aef8fb82fe33-34a69301" className="w-layout-grid af-class-rl-styleguide_item af-class-is-stretch">
                            <div id="w-node-_2abe4c27-4e03-1a95-b21e-aef8fb82fe34-34a69301" className="af-class-rl-styleguide_label">spacer-xxhuge</div>
                            <div id="w-node-_2abe4c27-4e03-1a95-b21e-aef8fb82fe36-34a69301" className="af-class-rl-styleguide_spacing">
                              <div id="w-node-_2abe4c27-4e03-1a95-b21e-aef8fb82fe37-34a69301" className="af-class-spacer-xxhuge">
                                <div className="af-class-rl-styleguide_empty-box" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-rl-styleguide_spacing-all">
                        <div className="af-class-rl-styleguide_spacing-sizes">
                          <div className="af-class-padding-0" />
                          <div className="af-class-padding-tiny" />
                          <div className="af-class-padding-xxsmall" />
                          <div className="af-class-padding-xsmall" />
                          <div className="af-class-padding-small" />
                          <div className="af-class-padding-medium" />
                          <div className="af-class-padding-large" />
                          <div className="af-class-padding-xlarge" />
                          <div className="af-class-padding-xxlarge" />
                          <div className="af-class-padding-huge" />
                          <div className="af-class-padding-xhuge" />
                          <div className="af-class-padding-xxhuge" />
                          <div className="af-class-padding-custom1" />
                          <div className="af-class-padding-custom2" />
                          <div className="af-class-padding-custom3" />
                          <div className="af-class-margin-0" />
                          <div className="af-class-margin-tiny" />
                          <div className="af-class-margin-xxsmall" />
                          <div className="af-class-margin-xsmall" />
                          <div className="af-class-margin-small" />
                          <div className="af-class-margin-medium" />
                          <div className="af-class-margin-large" />
                          <div className="af-class-margin-xlarge" />
                          <div className="af-class-margin-xxlarge" />
                          <div className="af-class-margin-huge" />
                          <div className="af-class-margin-xhuge" />
                          <div className="af-class-margin-xxhuge" />
                          <div className="af-class-margin-custom1" />
                          <div className="af-class-margin-custom2" />
                          <div className="af-class-margin-custom3" />
                        </div>
                        <div className="af-class-rl-styleguide_spacing-directions">
                          <div className="af-class-stylesystem_padding-top">
                            <div className="af-class-padding-top" />
                            <div className="af-class-padding-top af-class-padding-0" />
                            <div className="af-class-padding-top af-class-padding-tiny" />
                            <div className="af-class-padding-top af-class-padding-xxsmall" />
                            <div className="af-class-padding-top af-class-padding-xsmall" />
                            <div className="af-class-padding-top af-class-padding-small" />
                            <div className="af-class-padding-top af-class-padding-medium" />
                            <div className="af-class-padding-top af-class-padding-large" />
                            <div className="af-class-padding-top af-class-padding-xlarge" />
                            <div className="af-class-padding-top af-class-padding-xxlarge" />
                            <div className="af-class-padding-top af-class-padding-huge" />
                            <div className="af-class-padding-top af-class-padding-xhuge" />
                            <div className="af-class-padding-top af-class-padding-xxhuge" />
                            <div className="af-class-padding-top af-class-padding-custom1" />
                            <div className="af-class-padding-top af-class-padding-custom2" />
                            <div className="af-class-padding-top af-class-padding-custom3" />
                          </div>
                          <div className="af-class-stylesystem_padding-bottom">
                            <div className="af-class-padding-bottom" />
                            <div className="af-class-padding-bottom af-class-padding-0" />
                            <div className="af-class-padding-bottom af-class-padding-tiny" />
                            <div className="af-class-padding-bottom af-class-padding-xxsmall" />
                            <div className="af-class-padding-bottom af-class-padding-xsmall" />
                            <div className="af-class-padding-bottom af-class-padding-small" />
                            <div className="af-class-padding-bottom af-class-padding-medium" />
                            <div className="af-class-padding-bottom af-class-padding-large" />
                            <div className="af-class-padding-bottom af-class-padding-xlarge" />
                            <div className="af-class-padding-bottom af-class-padding-xxlarge" />
                            <div className="af-class-padding-bottom af-class-padding-huge" />
                            <div className="af-class-padding-bottom af-class-padding-xhuge" />
                            <div className="af-class-padding-bottom af-class-padding-xxhuge" />
                            <div className="af-class-padding-bottom af-class-padding-custom1" />
                            <div className="af-class-padding-bottom af-class-padding-custom2" />
                            <div className="af-class-padding-bottom af-class-padding-custom3" />
                          </div>
                          <div className="af-class-stylesystem_padding-left">
                            <div className="af-class-padding-left" />
                            <div className="af-class-padding-left af-class-padding-0" />
                            <div className="af-class-padding-left af-class-padding-tiny" />
                            <div className="af-class-padding-left af-class-padding-xxsmall" />
                            <div className="af-class-padding-left af-class-padding-xsmall" />
                            <div className="af-class-padding-left af-class-padding-small" />
                            <div className="af-class-padding-left af-class-padding-medium" />
                            <div className="af-class-padding-left af-class-padding-large" />
                            <div className="af-class-padding-left af-class-padding-xlarge" />
                            <div className="af-class-padding-left af-class-padding-xxlarge" />
                            <div className="af-class-padding-left af-class-padding-huge" />
                            <div className="af-class-padding-left af-class-padding-xhuge" />
                            <div className="af-class-padding-left af-class-padding-xxhuge" />
                            <div className="af-class-padding-left af-class-padding-custom1" />
                            <div className="af-class-padding-left af-class-padding-custom2" />
                            <div className="af-class-padding-left af-class-padding-custom3" />
                          </div>
                          <div className="af-class-stylesystem_padding-right">
                            <div className="af-class-padding-right" />
                            <div className="af-class-padding-right af-class-padding-0" />
                            <div className="af-class-padding-right af-class-padding-tiny" />
                            <div className="af-class-padding-right af-class-padding-xxsmall" />
                            <div className="af-class-padding-right af-class-padding-xsmall" />
                            <div className="af-class-padding-right af-class-padding-small" />
                            <div className="af-class-padding-right af-class-padding-medium" />
                            <div className="af-class-padding-right af-class-padding-large" />
                            <div className="af-class-padding-right af-class-padding-xlarge" />
                            <div className="af-class-padding-right af-class-padding-xxlarge" />
                            <div className="af-class-padding-right af-class-padding-huge" />
                            <div className="af-class-padding-right af-class-padding-xhuge" />
                            <div className="af-class-padding-right af-class-padding-xxhuge" />
                            <div className="af-class-padding-right af-class-padding-custom1" />
                            <div className="af-class-padding-right af-class-padding-custom2" />
                            <div className="af-class-padding-right af-class-padding-custom3" />
                          </div>
                          <div className="af-class-stylesystem_padding-vertical">
                            <div className="af-class-padding-vertical" />
                            <div className="af-class-padding-vertical af-class-padding-0" />
                            <div className="af-class-padding-vertical af-class-padding-tiny" />
                            <div className="af-class-padding-vertical af-class-padding-xxsmall" />
                            <div className="af-class-padding-vertical af-class-padding-xsmall" />
                            <div className="af-class-padding-vertical af-class-padding-small" />
                            <div className="af-class-padding-vertical af-class-padding-medium" />
                            <div className="af-class-padding-vertical af-class-padding-large" />
                            <div className="af-class-padding-vertical af-class-padding-xlarge" />
                            <div className="af-class-padding-vertical af-class-padding-xxlarge" />
                            <div className="af-class-padding-vertical af-class-padding-huge" />
                            <div className="af-class-padding-vertical af-class-padding-xhuge" />
                            <div className="af-class-padding-vertical af-class-padding-xxhuge" />
                            <div className="af-class-padding-vertical af-class-padding-custom1" />
                            <div className="af-class-padding-vertical af-class-padding-custom2" />
                            <div className="af-class-padding-vertical af-class-padding-custom3" />
                          </div>
                          <div className="af-class-stylesystem_padding-horizontal">
                            <div className="af-class-padding-horizontal" />
                            <div className="af-class-padding-horizontal af-class-padding-0" />
                            <div className="af-class-padding-horizontal af-class-padding-tiny" />
                            <div className="af-class-padding-horizontal af-class-padding-xxsmall" />
                            <div className="af-class-padding-horizontal af-class-padding-xsmall" />
                            <div className="af-class-padding-horizontal af-class-padding-small" />
                            <div className="af-class-padding-horizontal af-class-padding-medium" />
                            <div className="af-class-padding-horizontal af-class-padding-large" />
                            <div className="af-class-padding-horizontal af-class-padding-xlarge" />
                            <div className="af-class-padding-horizontal af-class-padding-xxlarge" />
                            <div className="af-class-padding-horizontal af-class-padding-huge" />
                            <div className="af-class-padding-horizontal af-class-padding-xhuge" />
                            <div className="af-class-padding-horizontal af-class-padding-xxhuge" />
                            <div className="af-class-padding-horizontal af-class-padding-custom1" />
                            <div className="af-class-padding-horizontal af-class-padding-custom2" />
                            <div className="af-class-padding-horizontal af-class-padding-custom3" />
                          </div>
                          <div className="af-class-stylesystem_margin-top">
                            <div className="af-class-margin-top" />
                            <div className="af-class-margin-top af-class-margin-0" />
                            <div className="af-class-margin-top af-class-margin-tiny" />
                            <div className="af-class-margin-top af-class-margin-xxsmall" />
                            <div className="af-class-margin-top af-class-margin-xsmall" />
                            <div className="af-class-margin-top af-class-margin-small" />
                            <div className="af-class-margin-top af-class-margin-medium" />
                            <div className="af-class-margin-top af-class-margin-large" />
                            <div className="af-class-margin-top af-class-margin-xlarge" />
                            <div className="af-class-margin-top af-class-margin-xxlarge" />
                            <div className="af-class-margin-top af-class-margin-huge" />
                            <div className="af-class-margin-top af-class-margin-xhuge" />
                            <div className="af-class-margin-top af-class-margin-xxhuge" />
                            <div className="af-class-margin-top af-class-margin-custom1" />
                            <div className="af-class-margin-top af-class-margin-custom2" />
                            <div className="af-class-margin-top af-class-margin-custom3" />
                          </div>
                          <div className="af-class-stylesystem_margin-bottom">
                            <div className="af-class-margin-bottom" />
                            <div className="af-class-margin-bottom af-class-margin-0" />
                            <div className="af-class-margin-bottom af-class-margin-tiny" />
                            <div className="af-class-margin-bottom af-class-margin-xxsmall" />
                            <div className="af-class-margin-bottom af-class-margin-xsmall" />
                            <div className="af-class-margin-bottom af-class-margin-small" />
                            <div className="af-class-margin-bottom af-class-margin-medium" />
                            <div className="af-class-margin-bottom af-class-margin-large" />
                            <div className="af-class-margin-bottom af-class-margin-xlarge" />
                            <div className="af-class-margin-bottom af-class-margin-xxlarge" />
                            <div className="af-class-margin-bottom af-class-margin-huge" />
                            <div className="af-class-margin-bottom af-class-margin-xhuge" />
                            <div className="af-class-margin-bottom af-class-margin-xxhuge" />
                            <div className="af-class-margin-bottom af-class-margin-custom1" />
                            <div className="af-class-margin-bottom af-class-margin-custom2" />
                            <div className="af-class-margin-bottom af-class-margin-custom3" />
                          </div>
                          <div className="af-class-stylesystem_margin-left">
                            <div className="af-class-margin-left" />
                            <div className="af-class-margin-left af-class-margin-0" />
                            <div className="af-class-margin-left af-class-margin-tiny" />
                            <div className="af-class-margin-left af-class-margin-xxsmall" />
                            <div className="af-class-margin-left af-class-margin-xsmall" />
                            <div className="af-class-margin-left af-class-margin-small" />
                            <div className="af-class-margin-left af-class-margin-medium" />
                            <div className="af-class-margin-left af-class-margin-large" />
                            <div className="af-class-margin-left af-class-margin-xlarge" />
                            <div className="af-class-margin-left af-class-margin-xxlarge" />
                            <div className="af-class-margin-left af-class-margin-huge" />
                            <div className="af-class-margin-left af-class-margin-xhuge" />
                            <div className="af-class-margin-left af-class-margin-xxhuge" />
                            <div className="af-class-margin-left af-class-margin-custom1" />
                            <div className="af-class-margin-left af-class-margin-custom2" />
                            <div className="af-class-margin-left af-class-margin-custom3" />
                          </div>
                          <div className="af-class-stylesystem_margin-right">
                            <div className="af-class-margin-right" />
                            <div className="af-class-margin-right af-class-margin-0" />
                            <div className="af-class-margin-right af-class-margin-tiny" />
                            <div className="af-class-margin-right af-class-margin-xxsmall" />
                            <div className="af-class-margin-right af-class-margin-xsmall" />
                            <div className="af-class-margin-right af-class-margin-small" />
                            <div className="af-class-margin-right af-class-margin-medium" />
                            <div className="af-class-margin-right af-class-margin-large" />
                            <div className="af-class-margin-right af-class-margin-xlarge" />
                            <div className="af-class-margin-right af-class-margin-xxlarge" />
                            <div className="af-class-margin-right af-class-margin-huge" />
                            <div className="af-class-margin-right af-class-margin-xhuge" />
                            <div className="af-class-margin-right af-class-margin-xxhuge" />
                            <div className="af-class-margin-right af-class-margin-custom1" />
                            <div className="af-class-margin-right af-class-margin-custom2" />
                            <div className="af-class-margin-right af-class-margin-custom3" />
                          </div>
                          <div className="af-class-stylesystem_margin-vertical">
                            <div className="af-class-margin-vertical" />
                            <div className="af-class-margin-vertical af-class-margin-0" />
                            <div className="af-class-margin-vertical af-class-margin-tiny" />
                            <div className="af-class-margin-vertical af-class-margin-xxsmall" />
                            <div className="af-class-margin-vertical af-class-margin-xsmall" />
                            <div className="af-class-margin-vertical af-class-margin-small" />
                            <div className="af-class-margin-vertical af-class-margin-medium" />
                            <div className="af-class-margin-vertical af-class-margin-large" />
                            <div className="af-class-margin-vertical af-class-margin-xlarge" />
                            <div className="af-class-margin-vertical af-class-margin-xxlarge" />
                            <div className="af-class-margin-vertical af-class-margin-huge" />
                            <div className="af-class-margin-vertical af-class-margin-xhuge" />
                            <div className="af-class-margin-vertical af-class-margin-xxhuge" />
                            <div className="af-class-margin-vertical af-class-margin-custom1" />
                            <div className="af-class-margin-vertical af-class-margin-custom2" />
                            <div className="af-class-margin-vertical af-class-margin-custom3" />
                          </div>
                          <div className="af-class-stylesystem_margin-horizontal">
                            <div className="af-class-margin-horizontal" />
                            <div className="af-class-margin-horizontal af-class-margin-0" />
                            <div className="af-class-margin-horizontal af-class-margin-tiny" />
                            <div className="af-class-margin-horizontal af-class-margin-xxsmall" />
                            <div className="af-class-margin-horizontal af-class-margin-xsmall" />
                            <div className="af-class-margin-horizontal af-class-margin-small" />
                            <div className="af-class-margin-horizontal af-class-margin-medium" />
                            <div className="af-class-margin-horizontal af-class-margin-large" />
                            <div className="af-class-margin-horizontal af-class-margin-xlarge" />
                            <div className="af-class-margin-horizontal af-class-margin-xxlarge" />
                            <div className="af-class-margin-horizontal af-class-margin-huge" />
                            <div className="af-class-margin-horizontal af-class-margin-xhuge" />
                            <div className="af-class-margin-horizontal af-class-margin-xxhuge" />
                            <div className="af-class-margin-horizontal af-class-margin-custom1" />
                            <div className="af-class-margin-horizontal af-class-margin-custom2" />
                            <div className="af-class-margin-horizontal af-class-margin-custom3" />
                          </div>
                        </div>
                      </div>
                      <div className="af-class-rl-styleguide_utility-classes">
                        <div className="af-class-rl-styleguide_heading">Utility Classes</div>
                        <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593694fa-34a69301" className="w-layout-grid af-class-rl-styleguide_list">
                          <div className="af-class-rl-styleguide_subheading"><span className="af-class-text-size-small">Useful utility classes we like to use in most of our projects to build faster.</span></div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593694fe-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a3593694ff-34a69301" className="af-class-rl-styleguide_label">hide</div>
                            <div className="af-class-hide">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369503-34a69301">This element is hidden</div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369505-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369506-34a69301" className="af-class-rl-styleguide_label">hide-tablet</div>
                            <div className="af-class-hide-tablet">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936950a-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936950b-34a69301" className="af-class-rl-styleguide_label">hide-mobile-portrait</div>
                            <div className="af-class-hide-mobile-portrait">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936950f-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369510-34a69301" className="af-class-rl-styleguide_label">hide-mobile-landscape</div>
                            <div className="af-class-hide-mobile-landscape">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369514-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369515-34a69301" className="af-class-rl-styleguide_label">overflow-visible</div>
                            <div className="af-class-overflow-visible">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369519-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936951a-34a69301" className="af-class-rl-styleguide_label">overflow-hidden</div>
                            <div className="af-class-overflow-hidden">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936951e-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936951f-34a69301" className="af-class-rl-styleguide_label">overflow-auto</div>
                            <div className="af-class-overflow-auto">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369523-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369524-34a69301" className="af-class-rl-styleguide_label">overflow-scroll</div>
                            <div className="af-class-overflow-scroll">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369528-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369529-34a69301" className="af-class-rl-styleguide_label">pointer-events-on</div>
                            <div className="af-class-pointer-events-on">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936952d-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936952e-34a69301" className="af-class-rl-styleguide_label">pointer-events-off</div>
                            <div className="af-class-pointer-events-off">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369532-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369533-34a69301" className="af-class-rl-styleguide_label">layer</div>
                            <div className="af-class-layer af-class-hide" />
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369536-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369537-34a69301" className="af-class-rl-styleguide_label">div-square</div>
                            <div className="af-class-div-square" />
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936953a-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936953b-34a69301" className="af-class-rl-styleguide_label">spacing-clean</div>
                            <div className="af-class-spacing-clean">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936953f-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369540-34a69301" className="af-class-rl-styleguide_label">align-center</div>
                            <div className="af-class-align-center">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369544-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369545-34a69301" className="af-class-rl-styleguide_label">z-index-1</div>
                            <div className="af-class-z-index-1">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369549-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936954a-34a69301" className="af-class-rl-styleguide_label">z-index-2</div>
                            <div className="af-class-z-index-2">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936954e-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a35936954f-34a69301" className="af-class-rl-styleguide_label">display-inlineflex</div>
                            <div className="af-class-display-inlineflex">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                          <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369553-34a69301" className="w-layout-grid af-class-rl-styleguide_item">
                            <div id="w-node-_9a3cb5be-cc97-b70e-6a89-31a359369554-34a69301" className="af-class-rl-styleguide_label">margin-top-auto</div>
                            <div className="af-class-margin-top-auto">
                              <div className="af-class-rl-styleguide_empty-box" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default StyleGuideView

/* eslint-enable */