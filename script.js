const createRow = () => {
    const main = document.querySelector("main");
    const sectionRow = document.createElement("section");
    sectionRow.classList.add("posts-row");
    main.appendChild(sectionRow);
}

const createPostElement = (postObj) => {
    const postStructure = [
        { "element": "article", "class": "insta-post", "imageContainer": "section.posts-row" },
        { "element": "div", "class": "article-header", "imageContainer": "article.insta-post" },
        { "element": "h2", "class": "username", "imageContainer": "div.article-header" },
    ];

    postStructure.forEach((elObj) => {

        const createElement = document.createElement(elObj.element);

        let imageContainer = null;

        createElement.classList.add(elObj.class);

        switch (elObj.class) {
            case "insta-post":
                num = getRandomInt(1, 11);
                createElement.classList.add(`gradient${num}`);
                createElement.classList.add(`post${postObj.id}`);
                break;
        }

        imageContainer = document.querySelector(elObj.imageContainer);
        imageContainer.appendChild(createElement);

    });
}

createRow();

createPostElement({
    id: 1,
    frame: "gradient001",
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
}, );

createPostElement({
    id: 1,
    frame: "gradient001",
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
}, );

createPostElement({
    id: 1,
    frame: "gradient001",
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
}, );

createRow();

createPostElement({
    id: 1,
    frame: "gradient001",
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
}, );
createPostElement({
    id: 1,
    frame: "gradient001",
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
}, );
createPostElement({
    id: 1,
    frame: "gradient001",
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
}, );

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


/* 
const postsContainer = document.querySelector("");
const postElement = createPostElement(posts[0]);
postsContainer.appendChild(postElement);
 */

/* 
const postImage = document.createElement('img');
postImage.classList.add("post-image");
postImage.setAttribute("src", post.image_url);
imageContainer.appendChild(postImage);
 */