import React, { Component } from "react";

class SearchBox extends Component {
  state = {};
  render() {
    return (
      <section className='search'>
        <form>
          <input
            type='text'
            className='btn-input'
            placeholder='Search characters'
            autoFocus
          />
        </form>
      </section>
    );
  }
}

export default SearchBox;
