const articleData = {
    "Formula 1": [
      {
        title: "Formula 1: Brazil GP",
        url: "articles/brazil_gp.html",
      },
    ],
    "Student Council Election": [
        {
            title: "Start of Narada SH SC Election",
            url: "articles/sh_sc_open.html"
        },
        {
            title: "SH SC Election Candidates Announcement",
            url: "articles/candidate_announcements.html"
        }
    ],
    "General": [
        {
          title: "Skeleton Corpse First Blog: The Start To A Journey",
          url: "articles/first_blog.html",
        },
    ]
};


if (htmlFileName == "blogs.html") {
    const articleList = document.getElementById("article-list");

    function display_articles() {
        Object.keys(articleData).forEach((group) => {
            // Create a heading for each group
            const groupHeader = document.createElement("h2");
            groupHeader.textContent = group;
            articleList.appendChild(groupHeader);

            // Reverse the order of articles within the group
            const reversedArticles = articleData[group].slice().reverse();

            // Create an unordered list for the articles within the group
            const groupList = document.createElement("ul");
            articleList.appendChild(groupList);

            reversedArticles.forEach((article) => {
                const listItem = document.createElement("li");
                const link = document.createElement("a");
                link.href = article.url;
                link.textContent = article.title;
                listItem.appendChild(link);
                groupList.appendChild(listItem);
            });
        });
    }

    display_articles()
}

else if (htmlFileName == "index.html") {
    function updateLinks() {
        const figureElements = document.querySelectorAll(".small_panels figure");

        for (let i = 0; i < figureElements.length; i++) {
            const anchor = figureElements[i].querySelector("a");
            if (anchor) {
                const category = Object.keys(articleData)[i];
                const articlesInCategory = articleData[category];
                const lastArticle = articlesInCategory[articlesInCategory.length - 1];
                anchor.href = lastArticle.url;
            }
        }
    }

    updateLinks()
}