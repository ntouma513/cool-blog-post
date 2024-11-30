function getBlogPosts() {
    return JSON.parse(localStorage.getItem('blogPosts')) || [];
}

function saveBlogPosts(posts) {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.className = 'post';

    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p><strong>By:</strong> ${post.username}</p>
    `;

    return postElement;
}

function displayBlogPosts(container, posts) {
    if (!container) return;
    container.innerHTML = '';
    posts.forEach(post => {
        const postElement = createPostElement(post);
        container.appendChild(postElement);
    });
}

