import React, {Fragment} from "react";

export default (props) => {
  const {title, description, href, show} = props
  return(
    <div
      className="big-button-description"
      style={{
          height: `${ show ? 'auto' : 0}`,
          opacity: `${ show ? 1 : 0}`}
      }
    >

      {description.split('\\n').map((item, key) => (
          <Fragment key={key}>
            {item}<br/>
          </Fragment>
        )
      )}

      <a href={ href }
         className="big-anchor"
         style={{visibility: `${ show ? 'visible' : 'hidden'}`} }
      >
        <div className="clickout-button">
          {'Go to ' + title + ' >'}
        </div>
      </a>

    </div>
  )
}
