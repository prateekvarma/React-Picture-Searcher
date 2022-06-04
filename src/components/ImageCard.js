import React from "react";

class ImageCard extends React.Component {
  //Below, in this caomponent, the only use of creating the constructor is to create a "Ref" - in order to get the image's DOM information from the external API
  constructor(props) {
    super(props);
    //Below, "imageRef" is an instance variable, that will contain the value of the Ref
    this.imageRef = React.createRef();
  }

  render() {
    return (
      <div>
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
