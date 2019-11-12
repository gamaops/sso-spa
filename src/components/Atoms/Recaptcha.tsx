import React from 'react';

declare var grecaptcha: any;

export default class Recaptcha extends React.Component<{ id: string, sitekey: string, onChange: (recaptcha_response: string) => any }> {  
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
    return grecaptcha.getResponse(this.recaptcha);
  }

  loadRecaptcha() {
		const callback = this.callback;
		const { id, sitekey } = this.props;
    this.recaptcha = grecaptcha.render(id, { sitekey, callback });

		grecaptcha.execute();
  }

  callback() {
    this.props.onChange(this.getValue());
  }

  render() {
    return <div id={this.props.id} data-size="invisible"/>;
  }
};