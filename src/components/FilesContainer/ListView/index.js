import React from "react";
import { useHistory } from "react-router-dom";
import File from "./File";
import './listView.scss'

const ListView = (props) => {
  const { renderData = [], loadMore, data = [] } = props;
  const history = useHistory();

  return (
    <>
      <div className="">
        <span className="list-row list-row--header">
        <span >Name</span>
        <span >author</span>
        <span >Created</span>
        </span>
        {renderData.map((item, index) => (
          <File
            key={JSON.stringify(item)}
            {...item}
            pathname={history.location.pathname.split("/").filter(Boolean)}
            history={history}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default ListView;
