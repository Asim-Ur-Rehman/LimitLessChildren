import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, TouchableNativeFeedback, View, Platform } from "react-native";
// import Util from "../../util";

export default class ButtonView extends React.PureComponent {
  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.number
    ]),
    children: PropTypes.node.isRequired,
    rippleOnAndroid: PropTypes.bool
  };

  static defaultProps = {
    style: {},
    rippleOnAndroid: false,
    isRound:1
  };

//SelectableBackgroundBorderless(rippleRadius: ?5);

  render() {
    const { style, children, rippleOnAndroid,isRound, ...rest } = this.props;

    if (Platform.OS=="android") {
      return (
        <TouchableNativeFeedback   background={TouchableNativeFeedback.Ripple("#fff", false,isRound?0:90)}  {...rest}>
          <View style={style}>{this.props.children}</View>
        </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableOpacity style={style} activeOpacity={0.7} {...rest}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
