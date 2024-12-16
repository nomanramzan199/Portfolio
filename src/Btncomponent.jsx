import { Button } from "@chakra-ui/react";
import { Component } from "react";

class Btncomponent extends Component {
  render() {
    const { text, colorbg } = this.props;
    return <Button bgColor={colorbg}>{text}</Button>;
  }
}

export default Btncomponent;
