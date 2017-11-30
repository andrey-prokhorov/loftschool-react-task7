import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SearchResult.css";

class SearchResult extends Component {
  render() {
    const { id, image, name, summary } = this.props.data;

    return (
      <div className="search-result-container">
        <div className="search-result-header">
          <Link to={"/tv-show/" + id}>{name}</Link>
        </div>
        {image && image.medium && <img src={image.medium} alt={name} />}
        {summary && <div dangerouslySetInnerHTML={{ __html: summary }} />}
      </div>
    );
  }
}

export default SearchResult;
