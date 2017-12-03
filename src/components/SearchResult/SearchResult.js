import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SearchResult.css";

class SearchResult extends Component {
  render() {
    const { id, image, name, summary } = this.props.data;

    return (
      <div>
        <div className="search-result-header">
          <Link to={"/tv-show/" + id}>{name}</Link>
        </div>

        <img
          src={
            image && image.medium
              ? image && image.medium
              : "http://via.placeholder.com/210x295?text=No+image"
          }
          alt={name}
        />

        <p className="search-result-summary">
          {summary ? (
            <div dangerouslySetInnerHTML={{ __html: summary }} />
          ) : (
            <span>No summary</span>
          )}
        </p>
      </div>
    );
  }
}

export default SearchResult;
