import React from "react";

const Alert = ({ status, children }) => {
  return (
    <div
      class={`alert alert-${status} alert-dismissible fade show mt-2 mb-2`}
      role="alert"
    >
      {children}
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
