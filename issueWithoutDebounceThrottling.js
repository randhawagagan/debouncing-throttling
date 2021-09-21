const searchBox = document.getElementById("search-box");
searchBox.addEventListener("input", (event) => {
  let showApiCallCountDom = document.getElementById("show-api-call-count");
  let apiCallCount = showApiCallCountDom.innerHTML || 0;

  let timer = setTimeout(() => {
    console.log("i am 500 milli timer");
    apiCallCount = parseInt(apiCallCount) + 1;

    showApiCallCountDom.innerHTML = apiCallCount;
  }, 500);

  // apiCallCount = parseInt(apiCallCount) + 1;
});
