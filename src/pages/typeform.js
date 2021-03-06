import React from 'react';
import * as typeformEmbed from '@typeform/embed'
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.el = null;
  }
  componentDidMount() {
      if (this.el) {
        typeformEmbed.makeWidget(this.el, "https://0z0g8s2ryt8.typeform.com/to/OhhvXk5p", {
          hideFooter: true,
          hideHeaders: true,
          opacity: 0,
          onSubmit: function() {
            window.location.href = "/uploadResults"
            console.log('Typeform successfully submitted!')
          }
        });
    }
  }
  render() {
    if (typeof window !== 'undefined') {
    return (
      <div ref={(el) => this.el = el} style={{width: '100%', height: '700px'}} />
    )
    }
    return null
  }
  
}

export default Form;


