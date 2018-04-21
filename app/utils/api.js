var axios = require('axios');

module.exports = {
  fetchPopularRepos: function (language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.items;
      });
  },
  fetchQuote: function () {
    var encodedURI = window.encodeURI('http://loremricksum.com/api/?paragraphs=1&quotes=1');

    return axios.get(encodedURI)
      .then(function (response) {
        console.log(response)
        return response.data.data[0];
      });
  }
};