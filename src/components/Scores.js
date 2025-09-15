import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ScoreCard from './ScoreCard'

export class Scores extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        This is score component
        <ScoreCard/>

      </div>
    )
  }
}

export default Scores