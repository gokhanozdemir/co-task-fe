import React from 'react'
import { Button, Card, Image, Grid } from 'semantic-ui-react'
import Description from './Description';
import RatingStars from './RatingStars';
import VideoPlayer from './VideoPlayer';

const VideoListBox = (props) => {
  return(
    <Grid.Column>
      <Card>
        {/* Name of the video */}
        <Card.Content header={props.data.name} />

        {/* Video Player */}
        <Card.Content extra className="vidCard">
          <VideoPlayer url={props.data.url}/>
        </Card.Content>

        {/* Shortened description video */}
        <Description description={props.data.description} />

        <Card.Content extra>
          <span className="left floated like">
            <RatingStars currentRating={2}/>
          </span>
          <span className="right floated star">
            <Button content='Play' basic color='olive' icon='play' labelPosition='right' />
          </span>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}

VideoListBox.propTypes = {
  data: React.PropTypes.object.isRequired,
}

export default VideoListBox;
