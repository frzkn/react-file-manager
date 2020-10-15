import React from "react";
import { useHistory } from "react-router-dom";
import File from "./File";
import './gridView.scss'

const GridView = (props) => {
  const { renderData = [], loadMore, data = [] } = props;
  const history = useHistory();

  return (
    <div
    className="grid-view"
    >
      {renderData.map((item) => (
        <File
          key={JSON.stringify(item)}
          {...item}
          pathname={history.location.pathname.split("/").filter(Boolean)}
          history={history}
        />
      ))}
      {/* {data.next &&
        Array.isArray(data.results) &&
        data.results.length && (
          <button
            onClick={loadMore}
            className="grid-load-more"
          >
            LOAD MORE
          </button>
        )} */}
    </div>
  );
};
export default GridView;
