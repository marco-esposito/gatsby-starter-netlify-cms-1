import React from 'react'

const Video = () => (
  <section className="section" id="video">
    <div className="container is-fullhd">
      <div className="columns">
        <div className="column is-12">
          <div className="content">
            <div
              className="full-width-image-container margin-top-0"
            >
              <video
                preload="auto"
                autoplay=""
                loop="true"
                >
                  <source src="https://www.frogdesign.com/wp-content/uploads/2016/11/Front_Page_FINALCUT_1000bit.mp4" type="video/mp4" />
                </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Video
