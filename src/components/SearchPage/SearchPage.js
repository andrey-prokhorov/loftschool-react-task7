import React, { Component } from "react";
import "./SearchPage.css";
import { searchRequest } from "../../actions/search";
import SearchResult from "../SearchResult";
import { connect } from "react-redux";

export class SearchPage extends Component {
  handleSearch = () => {
    this.props.boundSearchRequest(this.searchInput.value);
    this.searchInput.value = "";
  };

  render() {
    const { isFetching, result, error } = this.props.search;

    if (error !== null) {
      console.error("search", error);
      return "Возникла ошибка!";
    }

    return (
      <div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by TV-serie name"
            ref={input => (this.searchInput = input)}
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>
        <div className="search-result">
          {isFetching && "Searching..."}

          {result.length > 0 &&
            result.map(x => (
              <div key={x.id} className="search-result">
                <SearchResult data={x} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = {
  boundSearchRequest: searchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
