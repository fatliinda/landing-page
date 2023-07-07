fetch("https://www.telegrafi.com/")
  .then((response) => response.text())
  .then((data) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    const articleTitles = doc.querySelectorAll(".section-title a");
    if (articleTitles.length > 0) {
      const firstArticle = articleTitles[0];
      console.log(firstArticle.textContent);
    }
  });
