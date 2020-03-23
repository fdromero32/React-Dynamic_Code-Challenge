import React, { Component } from "react"

class Movie extends Component{
  render(){
    // Accessing the id from the URL
    const { id } = this.props.match.params
    // Using .find() to return the correct object from the data set
    const movie = this.props.movies.find((movie) => movie.id === parseInt(id))
    return(
      <React.Fragment>
        <div>
          <h3>{ movie.name }</h3>
          <p>{ movie.description }</p>
        </div>
      </React.Fragment>
    )
  }
}
export default Movie