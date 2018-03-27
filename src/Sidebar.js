import React, { Component } from "react"
import PropTypes from "prop-types"
import Sidebar from "react-sidebar"
import SidebarListItem from "components/SidebarListItem/SidebarListItem"

const sidebarStyles = {
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
  },
  sidebar: {
    zIndex: 2,
    position: "absolute",
    top: 0,
    bottom: 0,
    transition: "transform .3s ease-out",
    WebkitTransition: "-webkit-transform .3s ease-out",
    willChange: "transform",
    overflowY: "auto",
    width: "15em",
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: "scroll",
    WebkitOverflowScrolling: "touch",
    transition: "left .3s ease-out, right .3s ease-out",
    padding: "16px",
  },
  overlay: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: "hidden",
    transition: "opacity .3s ease-out, visibility .3s ease-out",
    backgroundColor: "rgba(0,0,0,.3)",
  },
  dragHandle: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    bottom: 0,
  },
}
class AppSidebar extends Component {
  renderSidebarContent() {
    return (
      <React.Fragment>
        <SidebarListItem title="Item 1" />
        <SidebarListItem title="Item 2" />
        <SidebarListItem title="Item 3" />
        <SidebarListItem title="Item 4" />
        <SidebarListItem title="Item 5" />
      </React.Fragment>
    )
  }
  render() {
    return (
      <Sidebar
        sidebar={this.renderSidebarContent()}
        docked={true}
        styles={sidebarStyles}
      >
        {this.props.children}
      </Sidebar>
    )
  }
}

AppSidebar.propTypes = {
  children: PropTypes.any,
}

export default AppSidebar
