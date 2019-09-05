import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./SearchBar.css";

class SearchBar extends Component {
  state = { term: "" };
  handleSubmit = e => {
    e.preventDefault();
    let term = this.state.term.trim();
    if (term !== "") {
      this.props.history.push(`/search/${term}`);
    }
    this.setState({
      term: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search all the GIFs and Stickers"
            value={this.state.term}
            onChange={e => {
              this.setState({ term: e.target.value });
            }}
          />
          <i aria-hidden="true" className="search link icon" />
        </div>
      </form>
    );
  }
}
export default withRouter(SearchBar);
