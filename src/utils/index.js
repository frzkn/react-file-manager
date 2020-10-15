export const setToken = (token) => {
  localStorage.setItem("jwt_token", token);
};

export const getToken = () => {
  localStorage.getItem("jwt_token");
};

export const getDataByPath = (data, _, parent_id = null) => {
  if (!data.length) {
    return data;
  }
  return data.filter((item) => {
    if (!parent_id) {
      return !!(item?.parent_folder == parent_id || item?.parent_folder === 1);
    } else return item?.parent_folder == parent_id;
  });
};
