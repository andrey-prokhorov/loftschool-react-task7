import React, { Component } from "react";
import "./SearchPage.css";
import { searchRequest } from "../../actions/search";
import SearchResult from "../SearchResult";
import { connect } from "react-redux";

export class SearchPage extends Component {
  state = {
    searchInput: "",
    isFirstSearch: true
  };

  handleChange = event => {
    this.setState({ searchInput: event.target.value });
  };

  handleKeyDown = event => {
    const isEnterKey = event.keyCode === 13;
    if (!isEnterKey) return;

    this.handleSearch();
  };

  handleSearch = () => {
    this.setState({ isFirstSearch: false });
    this.props.searchRequest(this.state.searchInput);
  };

  render() {
    const { isFetching, result, error } = this.props.search;

    if (error) {
      return "Error: " + error;
    }

    if (isFetching) {
      return "Loading...";
    }

    return (
      <div>
        <div className="search-input">
          <input
            type="text"
            placeholder="Search television programs by name..."
            value={this.state.searchInput}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>

        <div
          className="search-results"
          style={{
            visibility: this.state.isFirstSearch ? "hidden" : "visible"
          }}
        >
          <h1>Search results</h1>

          <div className="search-result-container">
            {result.length > 0 ? (
              result.map(x => (
                <div key={x.id} className="search-result">
                  <SearchResult data={x} />
                </div>
              ))
            ) : (
              <p>No results</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = { searchRequest };

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
