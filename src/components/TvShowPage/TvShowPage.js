import React, { Component } from "react";
import { connect } from "react-redux";
import { tvShowRequest } from "../../actions/tvShows";
import "./TvShowPage.css";

export class TvShowPage extends Component {
  componentDidMount() {
    this.props.tvShowRequest(+this.props.match.params.id);
  }

  render() {
    const { tvShow, isFetching, error } = this.props;
    const cast = tvShow._embedded ? tvShow._embedded.cast : null;

    if (isFetching) {
      return "Loading...";
    }

    if (error) {
      return "An error occuired: " + error;
    }

    return (
      <div>
        {tvShow && (
          <div className="tv-show">
            <div className="tv-show-name">
              <h1>{tvShow.name}</h1>
            </div>

            <div className="tv-show-image">
              {tvShow.image && (
                <img src={tvShow.image.medium} alt={tvShow.name} />
              )}
            </div>

            <div className="tv-show-summary">
              <div dangerouslySetInnerHTML={{ __html: tvShow.summary }} />
            </div>

            {cast && (
              <div>
                <h1>Cast</h1>

                <div className="tv-show-cast">
                  {cast &&
                    cast.map(actor => (
                      <div key={actor.person.id} className="actor">
                        <h3>{actor.person.name}</h3>
                        <img
                          src={
                            actor.person.image
                              ? actor.person.image.medium
                              : "http://via.placeholder.com/210x295?text=No+image"
                          }
                          alt={actor.person.name}
                        />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tvShow: state.tvShow.data,
  isFetching: state.tvShow.isFetching
});

const mapDispathToProps = { tvShowRequest };

export default connect(mapStateToProps, mapDispathToProps)(TvShowPage);
