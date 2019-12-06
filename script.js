const main = document.querySelector("main");
const createPost = document.querySelector("form.create-post");
const username = document.querySelector("form.create-post input[name='username']");
const comment = document.querySelector("form.create-post input[name='post-comment']");
const image = document.querySelector("form.create-post input[name='image-url']");

const createRow = (rowId) => {
    const sectionRow = document.createElement("section");

    sectionRow.classList.add("posts-row");
    sectionRow.classList.add(`row-${rowId}`);
    main.appendChild(sectionRow);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const createPostElement = (post, rowId) => {

    const postStructure = postStr(post, rowId);

    postStructure.forEach((elObj) => {

        const childEl = document.createElement(elObj.element);
        const parentEl = document.querySelector(elObj.parent);

        if (elObj.classList) {
            elObj.classList.forEach(classItem => childEl.classList.add(classItem));
        }

        if (elObj.attributes) {
            elObj.attributes.forEach(atr => childEl.setAttribute(atr[0], atr[1]));
        }

        if (elObj.innerHTML) {
            childEl.innerHTML = elObj.innerHTML;
        }

        if (elObj.comments) {
            elObj.comments.forEach((comment) => {
                const listItem = document.createElement("LI");
                listItem.innerHTML = `<i>account_circle</i>${comment.message}`;
                childEl.appendChild(listItem);
            });
        }

        parentEl.appendChild(childEl);

    });

}

const renderContent = (postsArray) => {
    const main = document.querySelector("main");

    main.innerHTML = "";
    let rowId = 1;

    for (let i = 0; i < posts.length; i++) {

        const postObj = postsArray[i];

        if (i == 0) {
            createRow(rowId);
            createPostElement(postObj, rowId);
        } else if ((postObj.id) % 3 == 0) {
            createPostElement(postObj, rowId);
            rowId++;
            createRow(rowId);
        } else {
            createPostElement(postObj, rowId);
        }
    }
}

const postStr = (postObj, rowId) => {
    return [
        { "element": "article", "classList": ["insta-post", `post-${postObj.id}`, `gradient${postObj.frame}`], "parent": `section.posts-row.row-${rowId}` },
        { "element": "div", "classList": ["article-header"], "attributes": [], "parent": `article.insta-post.post-${postObj.id}` },
        { "element": "h2", "classList": ["username"], "innerHTML": postObj.username, "parent": `article.insta-post.post-${postObj.id} div.article-header` },
        { "element": "div", "classList": ["article-action-icons"], "parent": `article.insta-post.post-${postObj.id} div.article-header` },
        { "element": "i", "innerHTML": "favorite", "parent": `article.insta-post.post-${postObj.id} div.article-header div.article-action-icons` },
        { "element": "i", "innerHTML": "comment", "parent": `article.insta-post.post-${postObj.id} div.article-header div.article-action-icons` },
        { "element": "i", "innerHTML": "share", "parent": `article.insta-post.post-${postObj.id} div.article-header div.article-action-icons` },
        { "element": "figure", "classList": ["article-photo"], "parent": `article.insta-post.post-${postObj.id}` },
        {
            "element": "img",
            "classList": ["post-photo"],
            "attributes": [
                ["src", postObj.image_url]
            ],
            "parent": `article.insta-post.post-${postObj.id} figure.article-photo`
        },
        { "element": "figcaption", "classList": ["article-photo-caption"], "parent": `article.insta-post.post-${postObj.id}` },
        { "element": "p", "innerHTML": postObj.message, "parent": `article.insta-post.post-${postObj.id} figcaption.article-photo-caption` },
        { "element": "div", "classList": ["article-comments"], "parent": `article.insta-post.post-${postObj.id}` },
        { "element": "ul", "comments": postObj.comments, "parent": `article.insta-post.post-${postObj.id} div.article-comments` },
        { "element": "form", "classList": ["comment-form"], "parent": `article.insta-post.post-${postObj.id}` },
        {
            "element": "input",
            "attributes": [
                ["type", "text"],
                ["name", "comment"],
                ["placeholder", "Add a comment..."]
            ],
            "parent": `article.insta-post.post-${postObj.id} form.comment-form`
        },
        { "element": "button", "innerHTML": "Post", "parent": `article.insta-post.post-${postObj.id} form.comment-form` },
    ];
}

renderContent(posts);



createPost.addEventListener("submit", () => {
    event.preventDefault();
    const elObj = {
        id: posts.length + 1,
        frame: getRandomInt(1, 11),
        username: username.value,
        message: comment.value,
        image_url: image.value,
        like_count: 0,
        comments: []
    }
    posts.push(elObj);
    renderContent(posts);

    createPost.reset();
    main.scrollIntoView({
        behavior: "smooth"
    });
});