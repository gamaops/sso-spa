import React from 'react';

export interface RecaptchaProperties { 
  id: string, 
  sitekey: string, 
  onChange: (recaptcha_response: string) => any 
};

export default class Recaptcha extends React.Component<RecaptchaProperties> {  
	public recaptcha: any;

  constructor(props: any) {
    super(props);
    this.callback = this.callback.bind(this);
    this.loadRecaptcha = this.loadRecaptcha.bind(this);
  }

  componentDidMount() {
    if (document.readyState === 'complete') {
      this.loadRecaptcha();
    } else {
      window.onload = this.loadRecaptcha;
    }
  }

  getValue() {
    return window.grecaptcha.getResponse(this.recaptcha);
  }

  loadRecaptcha() {
		const callback = this.callback;
		const { id, sitekey } = this.props;
    this.recaptcha = window.grecaptcha.render(id, { sitekey, callback });
  }

  callback() {
    this.props.onChange(this.getValue());
  }

  render() {
    return <div id={this.props.id} data-size="invisible"/>;
  }
};