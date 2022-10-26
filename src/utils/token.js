export const token = () => {
    if (JSON.parse(localStorage.getItem("ChynarProfile"))) {
      var data = JSON.parse(localStorage.getItem("ChynarProfile"));
      return data.token;
    }
  };
  