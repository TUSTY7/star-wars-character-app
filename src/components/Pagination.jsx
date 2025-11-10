import React from "react";

const Pagination = ({ next, prev, onPageChange }) => (
  <div className="flex justify-between mt-4">
    <button
      disabled={!prev}
      onClick={() => onPageChange("prev")}
      className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
    >
      Previous
    </button>
    <button
      disabled={!next}
      onClick={() => onPageChange("next")}
      className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
    >
      Next
    </button>
  </div>
);

export default Pagination;
