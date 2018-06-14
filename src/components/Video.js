import React from 'react'
import video from '../../static/video/blackdee-intro.mp4'

const Video = () => (
  <section className="section" id="video">
    <div className="container is-fullhd">
      <div className="columns">
        <div className="column is-12 is-paddingless">
          <div className="content">
            <div
              className="full-width-image-container margin-top-0"
            >
              <div className="video-background-color"></div>
              <div className="video-background">
                <video preload="auto" autoPlay loop
                  src={video}
                >
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Video
