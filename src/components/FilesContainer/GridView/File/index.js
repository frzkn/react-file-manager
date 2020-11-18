import React, { useRef, useState } from "react";
import TimeAgo from "react-timeago";
import FileSvg from "../../../../assets/svg/file";
import FolderSvg from "../../../../assets/svg/folder";
import "./file.scss";

const File = (props) => {
  const {
    id = 0,
    user = {},
    name = "",
    folder = true,
    created_date: date = "",
    file = "",
    history = {},
  } = props;



  const navigate = () => {
    history.push(`${history.location.pathname}${name.slice(0, 8)}?id=${id}/`);
  };

  return folder ? (
    <div
      onClick={navigate}
      onTouchEnd={navigate}
      className={`single-file`}
    >
      <div>
        <FolderSvg />
      </div>
      <div className="single-file--text-container">
        <p class="single-file--text-container--title">
          {name.length > 15 ? `${name.slice(0, 15)}...` : name}
        </p>
        <p className="single-file--text-container--subtitle">
          created <TimeAgo date={date}></TimeAgo> by{" "}
          <span>{user.username}</span>
        </p>
      </div>
    </div>
  ) : (
    <a
      href={file}
      download
      className="single-file"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div>
        <FileSvg />
      </div>
      <div className="single-file--text-container">
        <p className="single-file--text-container--title">
          {name.length > 15 ? `${name.slice(0, 15)}...` : name}
        </p>

        <p className="single-file--text-container--subtitle">
          created <TimeAgo date={date}></TimeAgo> by{" "}
          <span>{user.username}</span>
        </p>
      </div>
    </a>
  );
};

export default File;
