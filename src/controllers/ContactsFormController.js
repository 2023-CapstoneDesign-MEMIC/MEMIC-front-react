//this is sample controller

import React from 'react'
import ContactFormView from '../view/ContactFormView'

class ContactFormController extends React.Component {
    state = {}

    render() {
        return (
            <ContactFormView>
                <name onChange={this.setName} /> // af-sock
                <submit onClick={this.submit} />
            </ContactFormView
        )
        onChange = (e) =>{
            this.setState({
                name: e.target.value
            })
        }
        submit = () => {
            this.props.history.push('/thank-you', {
                name: this.state.name
            })
        }
    }
}

export default ContactFormController