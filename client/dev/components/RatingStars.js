import React from 'react'
import { Rating, Button } from 'semantic-ui-react'

// const Rating = ({rating}) => {
//   return(
//     <div>
//       <Rating icon='star' defaultRating={1} maxRating={5} onRate={this.handleRate}/>
//     </div>
//   )
// }

class RatingStars extends React.Component {
  state = {}
  handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })

  render() {
    return (
      <div>
        <Rating
          icon='star'
          // disabled
          // defaultRating={4}
          maxRating={5}
          size='large'
          onRate={this.handleRate}
          rating={this.props.currentRating}/>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    )
  }
}

// Rating.propTypes = {
//   rating: React.PropTypes.number.isRequired,
// }

export default RatingStars;
