import React from 'react'

const Video = () => (
  <section className="section" id="video">
    <div className="left-side is-hidden-mobile"></div>
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
                  src="https://www.frogdesign.com/wp-content/uploads/2016/11/Front_Page_FINALCUT_1000bit.mp4"
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
