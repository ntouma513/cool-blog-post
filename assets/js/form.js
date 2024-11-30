document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('blog-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const title = document.getElementById('title').value.trim();
        const content = document.getElementById('content').value.trim();
        const errorMessage = document.getElementById('error-message');

        if (!username || !title || !content) {
            if (errorMessage) {
                errorMessage.classList.remove('hidden');
            } else {
                console.error("Error message element not found.");
            }
            return;
        }

        const posts = getBlogPosts();
        posts.push({ username, title, content });
        saveBlogPosts(posts);

        if (errorMessage) {
            errorMessage.classList.add('hidden');
        }

        window.location.href = 'blog.html';
    });
});
