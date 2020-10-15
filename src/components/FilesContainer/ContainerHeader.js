import React from "react";
import "./containerHeader.scss";

const ContainerHeader = (props) => {
  const { gridView, setGridView } = props;
  return (
    <div className="container-header">
      <h2 className="container-header--title">FILES AND FOLDERS</h2>

      <div className="container-header--toggle-layout">
        <span className={`span ${gridView ? "span--active" : ""}`}
          onClick={() => setGridView((s) => !s)}
        >
          <svg
            height={"1.2rem"}
            width={"1.2rem"}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          <p className="title"> Grid View</p>
        </span>
        <span
          className={`span ${!gridView ? "span--active" : ""}`}
          onClick={() => setGridView((s) => !s)}
        >
          <svg
            height={"1.2rem"}
            width={"1.2rem"}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
          <p className="title">List View</p>
        </span>
      </div>
    </div>
  );
};

export default ContainerHeader;
