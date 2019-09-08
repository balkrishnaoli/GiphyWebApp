import React from "react";
import "./GiphyList.css";

class GiphyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
    this.imgHeight = 0;
  }
  componentDidMount() {
    if (
      !(typeof this.imageRef === "undefined" || this.imageRef.current === null)
    ) {
      this.imageRef.current.addEventListener("load", this.setSpans);
    } else {
      console.log("I am Undefined");
    }
  }

  setSpans = img => {
    if (
      !(typeof this.imageRef === "undefined" || this.imageRef.current === null)
    ) {
      const height = this.imageRef.current.clientHeight;
      const spans = Math.ceil(height / 10);
      this.setState({ spans, imgHeight: height });
    } else {
      console.log(this.imageRef);
    }
  };

  render() {
    const url = this.props.url;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/* <div
          className="ui placeholder"
          style={{ height: `${this.state.imgHeight}px` }}
        > */}
        <img ref={this.imageRef} src={url} alt="" />
        {/* </div> */}
      </div>
    );
  }
}

export default GiphyCard;
