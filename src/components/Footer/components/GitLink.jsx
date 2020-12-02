import React from "react";

const GitLink = () => {
  return (
    <div className=" shop-footer text-center p-3">
      This project is made and open sourced by
      <a
        href="http://humphytom.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {` Humphrey Obure Tom`}
      </a>
      , click
      <a
        href="https://github.com/humphreyobure/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {` Here `}
      </a>
      to get in touch with the Software Engineer.
    </div>
  );
};

export default GitLink;
