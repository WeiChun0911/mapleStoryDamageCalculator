import React from 'react'
export default class Input extends React.Component {
    static defaultProps = {
      onChange() {},
      onFocus() {},
      onBlur() {}
    };
  
    constructor(props) {
      super();
      this.state = {
        isFocused: false,
        currentValue: props.value
      };
    }
  
    handleChange = (e, ...rest) => {
      this.setState({ currentValue: e.target.value });
      this.props.onChange(e, ...rest);
    };
  
    handleFocus = (...args) => {
      this.setState({ isFocused: true });
      this.props.onFocus(...args);
    };
  
    handleBlur = (...args) => {
      this.setState({ isFocused: false });
      this.props.onBlur(...args);
    };
  
    componentWillReceiveProps(nextProps) {
      if (!this.state.isFocused) {
        this.setState({ currentValue: nextProps.value });
      }
    }
  
    render() {
      return (
        <input
          {...this.props}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={this.state.currentValue}
        />
      );
    }
  }