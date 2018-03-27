import React from "react"
import PropTypes from "prop-types"
import "theme/ripple.css"

const styles = {
  root: {
    fontFamily:
      '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: 300,
  },
  header: {
    padding: "16px",
    fontSize: "1em",
    borderBottom: "2px solid #E0E0E0",
  },
}

const handleClick = () => console.log("Click assessed")

const SidebarListItem = props => {
  return (
    <div style={styles.root}>
      <div onClick={handleClick} style={styles.header} className="ripple">
        {props.title}
      </div>
      {props.children}
    </div>
  )
}

SidebarListItem.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.object,
}

export default SidebarListItem
