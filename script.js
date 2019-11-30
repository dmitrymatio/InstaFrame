/* import { posts } from './posts.mjs/index.mjs'; */

const createRow = (rowId) => {
    const main = document.querySelector("main");
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

function poatStr(postObj, row) {
    [
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

const renderPost = (postObj, rowId) => {

    const postStructure = postStr(postObj, rowId);

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

    let rowId = 1;

    for (let i = 0; i < posts.length; i++) {

        const postObj = postsArray[i];

        if (i == 0) {
            createRow(rowId);
            renderPost(postObj, rowId);
        } else if ((i - 1) % 3 == 0) {
            renderPost(postObj, rowId);
            rowId++;
            createRow(rowId);
        } else {
            renderPost(postObj, rowId);
        }



    }

}

var posts = [{
        id: 1,
        frame: 1,
        username: "soybeanboy",
        message: "It's ruff out here for a puppy.",
        image_url: "Assets/adorable-animal-animal-photography-animal-portrait-594687.jpg",
        like_count: 2,
        comments: [{
                message: "Dogs are my favorite people."
            },
            {
                message: "This friendship is fur real."
            }
        ]
    },
    {
        id: 2,
        frame: 11,
        username: "soybeanboy",
        message: "It's ruff out here for a puppy.",
        image_url: "Assets/brown-and-white-short-coated-puppy-1805164.jpg",
        like_count: 2,
        comments: [{
                message: "Dogs are my favorite people."
            },
            {
                message: "This friendship is fur real."
            }
        ]
    },
    {
        id: 3,
        frame: 10,
        username: "soybeanboy",
        message: "It's ruff out here for a puppy.",
        image_url: "Assets/high-angle-photo-of-a-corgi-looking-upwards-2664417.jpg",
        like_count: 2,
        comments: [{
                message: "Dogs are my favorite people."
            },
            {
                message: "This friendship is fur real."
            }
        ]
    },
    {
        id: 4,
        frame: 7,
        username: "soybeanboy",
        message: "It's ruff out here for a puppy.",
        image_url: "Assets/pomeranian-puppy-1619690.jpg",
        like_count: 2,
        comments: [{
                message: "Dogs are my favorite people."
            },
            {
                message: "This friendship is fur real."
            }
        ]
    },
    {
        id: 5,
        frame: 5,
        username: "soybeanboy",
        message: "It's ruff out here for a puppy.",
        image_url: "Assets/short-coated-white-dog-on-white-textile-846083.jpg",
        like_count: 2,
        comments: [{
                message: "Dogs are my favorite people."
            },
            {
                message: "This friendship is fur real."
            }
        ]
    },
]

renderContent(posts);