import React, { useRef, useState } from "react";
import TimeAgo from "react-timeago";
import useOnClickOutside from "use-onclickoutside";
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

  const [highlight, setHighlight] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    setHighlight(false);
  });

  const navigate = () => {
    history.push(`${history.location.pathname}${name.slice(0, 8)}?id=${id}/`);
  };

  return folder ? (
    <div className="list-row" onClick={navigate}>
      <span>
        <span className="name">
          <svg
            height={"1.5rem"}
            width={"1.5rem"}
            fill="black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
          </svg>
          {name}
        </span>
      </span>
      <span>{user.username}</span>
      <span>{date}</span>
    </div>
  ) : (
    <a href={file} className="list-row" download>
      <span className="name">
        <svg
          height={"1.5rem"}
          width={"1.5rem"}
          fill="black"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
            clipRule="evenodd"
          />
        </svg>
        {name}
      </span>
      <span>{user.username}</span>

          {/* <TimeAgo date={date}></TimeAgo> by{" "} */}
    </a>
  );
};

//   return folder ? (
//     <div
//       onClick={() => setHighlight(true)}
//       onDoubleClick={navigate}
//       onTouchEnd={navigate}
//       ref={ref}
//       className={`single-file ${highlight ? "single-file--highlight" : ""}`}
//     >
//       <div>
//         <FolderSvg />
//       </div>
//       <div className="single-file--text-container">
//         <p class="single-file--text-container--title">
//           {name.length > 45 ? `${name.slice(0, 45)}...` : name}
//         </p>
//         <p className="single-file--text-container--subtitle">
//           created <TimeAgo date={date}></TimeAgo> by{" "}
//           <span>{user.username}</span>
//         </p>
//       </div>
//     </div>
//   ) : (
//     <a href={file} download ref={ref} className="single-file">
//       <div>
//         <FileSvg />
//       </div>
//       <div className="single-file--text-container">
//         <p className="single-file--text-container--title">
//           {name.length > 45 ? `${name.slice(0, 45)}...` : name}
//         </p>

//         <p className="single-file--text-container--subtitle">
//           created <TimeAgo date={date}></TimeAgo> by{" "}
//           <span>{user.username}</span>
//         </p>
//       </div>
//     </a>
//   );
// };

export default File;
