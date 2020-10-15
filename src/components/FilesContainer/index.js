import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { setUser } from "../../redux/actions";
import { api, fileFolder, me } from "../../services/api";
import { getDataByPath } from "../../utils";
import Footer from "../Footer";
import ContainerHeader from "./ContainerHeader";
import GridView from "./GridView";
import ListView from "./ListView";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const FilesContainer = () => {
  const [data, setData] = useState({
    results: [],
  });
  const [showAddFileModal, setShowAddFileModal] = useState(false);
  const [gridView, setGridView] = useState(true);
  const { update } = useSelector((s) => s.auth);
  const history = useHistory();
  const dispatch = useDispatch();
  const query = useQuery();
  const fetchMe = useCallback(async () => {
    try {
      const { user } = await me();
      dispatch(setUser(user));
    } catch (e) {
      console.log(e);
      history.push("/login");
    }
  }, [history, dispatch]);

  const loadMore = useCallback(async () => {
    try {
      const { data: response } = await api(data.next);
      const results = data.results.concat(response.results);
      setData({ ...response, results });
    } catch (e) {
      console.log(e);
    }
  }, []);

  const fetchFileFolder = useCallback(async () => {
    try {
      const { data: response } = await fileFolder();
      console.log(response);
      setData(response);
    } catch (e) {
      console.log(e);
    }
  }, [update]);

  useEffect(() => {
    fetchMe();
    fetchFileFolder();
  }, [fetchMe, fetchFileFolder]);

  let renderData = getDataByPath(
    data?.results,
    history.location.pathname,
    query.get("id") && query.get("id").replace("/", "")
  );
  return (
    <div
      style={{
        paddingBottom: "50px",
        overflowY: "scroll",
        marginTop: "80px",
      }}
    >
      <ContainerHeader setGridView={setGridView} gridView={gridView} />
      {gridView && <GridView data={data} renderData={renderData} loadMore={loadMore} />}
      {!gridView && <ListView data={data} renderData={renderData} loadMore={loadMore} />}
      <Footer
        showAddFileModal={showAddFileModal}
        setShowAddFileModal={setShowAddFileModal}
      />
    </div>
  );
};
export default FilesContainer;
