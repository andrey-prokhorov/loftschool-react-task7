import React, { Component } from "react";
import { connect } from "react-redux";
import { showsRequest } from "../../actions/tvShows";

export class TvShowPage extends Component {
  state = {
    showsId: null
  };

  componentDidMount() {
    const { match: { params }, shows: { entities } } = this.props;
    const showsId = Number(params.id);
    this.setState({ showsId });

    const item = entities.find(item => item.id === showsId);
    if (!item) {
      this.props.showsRequest(showsId);
    }
  }

  render() {
    const { isFetching, entities, error } = this.props.shows;
    const item = entities.find(item => item.id === this.state.showsId);
    const { name, image, summary, _embedded } = item;
    const cast = _embedded.cast;
    console.log(cast);

    if (isFetching) {
      return "Loading...";
    }

    if (error !== null) {
      return "An error occuired" + error;
    }

    if (!item) {
      return "An error occuired: wrong id";
    }

    return (
      <div className="tv-show">
        <div className="tv-show-header">
          <p>{name}</p>
          {image && <img src={image.medium} alt={name} />}
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shows: state.shows
});

const mapDispathToProps = {
  showsRequest: showsRequest
};

export default connect(mapStateToProps, mapDispathToProps)(TvShowPage);
