/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: Promise.resolve("/[?&]e=1(&|$)/.test(document.location.search)&&(document.querySelector(\".w-password-page.w-form-fail\").style.display=\"block\");"), isAsync: false },
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6526603ca6ecfaa934a69294").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class UnauthorizedView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/UnauthorizedController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = UnauthorizedView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6526603ca6ecfaa934a692eb'
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
    const proxies = UnauthorizedView.Controller !== UnauthorizedView ? transformProxies(this.props.children) : {

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
            <div className="af-class-utility_component">
              <div className="af-class-utility_form-block w-password-page w-form">
                <form action="/.wf_auth" method="post" id="email-form" name="email-form" data-name="Email Form" className="af-class-utility_form w-password-page" data-wf-page-id="6526603ca6ecfaa934a692eb" data-wf-element-id="60d3fa3a5a19c1169cd58c4100000000000c"><img src="https://d3e54v103j8qbb.cloudfront.net/static/utility-lock.ae54711958.svg" alt width={106} className="af-class-utility_image" />
                  <h3>Protected Page</h3>
                  <div className="af-class-padding-xxsmall" /><input type="password" className="af-class-form-input w-password-page w-input" autofocus="true" maxLength={256} name="pass" data-name="field" placeholder="Enter your password" id="pass" />
                  <div className="af-class-padding-xxsmall" /><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="af-class-button w-password-page w-button" />
                  <div className="af-class-form-message-error w-password-page w-form-fail">
                    <div>Incorrect password. Please try again.</div>
                  </div>
                  <div style={{display: 'none'}} className="w-password-page w-embed w-script"><input type="hidden" name="path" defaultValue="<%WF_FORM_VALUE_PATH%>" /><input type="hidden" name="page" defaultValue="<%WF_FORM_VALUE_PAGE%>" /></div>
                  <div style={{display: 'none'}} className="w-password-page w-embed w-script">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default UnauthorizedView

/* eslint-enable */