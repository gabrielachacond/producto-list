import React from "react";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
  }
  handleUpVote = evento => {
    evento.preventDefault();
    
    console.log("se sumo un voto");

  };

  
  render() {
    return (
      <div className="item">
        <div className="image">
          <img src={this.props.productImageUrl} alt="product" />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a onClick={this.handleUpVote}>
              <i className="large caret up icon" />
            </a>
            {this.props.votes}
          </div>
          <div className="description">
            <a href={this.props.url}>{this.props.title}</a>
            <p>{this.props.description}</p>
          </div>
          <div className="extra">
            <span>Vende:</span>
            <img
              className="ui avatar image"
              src={this.props.submitterAvatarUrl}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    );
  }
}
