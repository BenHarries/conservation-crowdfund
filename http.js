const fetch_user_test = () => {
  return fetch("http://localhost:3001/users").then(response => {
    return response.data;
  });
};

exports.fetchData = fetch_user_test;
