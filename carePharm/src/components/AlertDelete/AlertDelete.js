import React from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

function AlertDelete({ onConfirm }) {
  // When the component is mounted, show the delete confirmation dialog
  React.useEffect(() => {
    Swal.fire({
      title: 'Delete Confirmation',
      text: 'Are you sure you want to delete this news item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Call the onConfirm callback function provided by the parent component
        onConfirm();
      }
    });
  }, [onConfirm]);

  return null; // Return null here, as the component is not meant to render content immediately.
}

AlertDelete.propTypes = {
  onConfirm: PropTypes.func.isRequired,
};

export default AlertDelete;
