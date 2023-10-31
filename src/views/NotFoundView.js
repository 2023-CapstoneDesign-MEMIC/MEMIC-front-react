/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6526603ca6ecfaa934a69294").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class NotFoundView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/NotFoundController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NotFoundView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6526603ca6ecfaa934a692ec'
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
    const proxies = NotFoundView.Controller !== NotFoundView ? transformProxies(this.props.children) : {

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
              <div className="af-class-utility_form-block w-form"><img src="https://d3e54v103j8qbb.cloudfront.net/static/page-not-found.211a85e40c.svg" alt className="af-class-utility_image" />
                <h3>Page Not Found</h3>
                <div className="af-class-padding-xxsmall" />
                <div>The page you are looking for doesn't exist or has been moved</div>
                <div className="af-class-padding-xxsmall" />
                <a href="index.html" className="af-class-button w-button">Go Home</a>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default NotFoundView

/* eslint-enable */