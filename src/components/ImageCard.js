import React from "react";

class ImageCard extends React.Component {
  //Below, in this caomponent, the only use of creating the constructor is to create a "Ref" - in order to get the image's DOM information from the external API
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    //Below, "imageRef" is an instance variable, that will contain the value of the Ref
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // Below, we cannot just do 'this.imageRef.current.clientHeight' because the clientHeight property does not load in time. So we use an event Listener.
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  //Below setSpans is a callback function, that is defined arrow, as it takes care of the bind problem in React. This callback function will be able to extract each image's dimentions
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 150);
    this.setState({ spans: spans });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt={this.props.image.description}
          src={this.props.image.urls.regular}
        />
      </div>
    );
  }
}

export default ImageCard;
