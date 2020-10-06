import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function HighlightBtn(props) {
  return (
    <span className="highlight-btn badge badge-danger" {...props} role="button" tabIndex="1">
      !
    </span>
  );
}

export default HighlightBtn;
