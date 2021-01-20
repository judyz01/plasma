import React from 'react';
import Button from "@material-ui/core/Button"
if (typeof window !== "undefined") {   const typeformEmbed = require('@typeform/embed'); }


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
          console.log('Typeform successfully submitted!')
        }
      });
    }
  }
  render() {
    return (
      <div style={{width: '100%', height: '700px'}} />
    )
  }
}

export default Form;

