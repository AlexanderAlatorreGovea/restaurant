import React from "react";
import "./sass/Reviews.scss";

class Reviews extends React.Component {
  render() {
    return (
      <div className="Reviews" id="Reviews">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ">
              <img
                className="wow slideInLeft"
                src="https://s-i.huffpost.com/gen/1282658/images/o-FEMALE-CHEF-facebook.jpg"
              />
            </div>
            <div className="col-md-4 wow slideInRight">
              <h5 className="comp-title">Reviews</h5>

              <div>
                <h2>
                  {this.props.RandomQuote[this.props.indexOfComment].company}
                </h2>
                <h4>
                  {this.props.RandomQuote[this.props.indexOfComment].highlight
                    ? this.props.RandomQuote[this.props.indexOfComment]
                        .highlight
                    : ""}
                </h4>
                <p>
                  {this.props.RandomQuote[this.props.indexOfComment].review}
                </p>
                <div className="author">
                  <strong>
                    {this.props.RandomQuote[this.props.indexOfComment].author}{" "}
                  </strong>{" "}
                  <span></span> -{" "}
                  <em>
                    {
                      this.props.RandomQuote[this.props.indexOfComment]
                        .authorInfo
                    }
                  </em>{" "}
                </div>
              </div>

              <div className="arrows">
                <i
                  onClick={this.props.reverseQuote}
                  style={{
                    color: this.props.indexOfComment < 2 ? "#ADADAD" : "black",
                  }}
                  class="arrow left icon"
                ></i>
                <i
                  onClick={this.props.changeQuote}
                  style={{
                    color: this.props.indexOfComment > 0 ? "#ADADAD" : "black",
                  }}
                  class="arrow right icon ready"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;
