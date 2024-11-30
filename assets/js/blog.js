document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed.");

    // Get the posts container element
    const postsContainer = document.getElementById('posts-container');
    if (!postsContainer) {
        console.error("Element with id 'posts-container' not found in the DOM.");
        return;
    }

    // Fetch blog posts from localStorage
    const posts = getBlogPosts();
    console.log("Posts retrieved from localStorage:", posts);

    // Display blog posts in the container
    displayBlogPosts(postsContainer, posts);

    // Add event listener for the "Back" button
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', () => {
            console.log("Back button clicked. Redirecting to index.html...");
            window.location.href = 'index.html';
        });
    } else {
        console.error("Back button element not found in the DOM.");
    }

    // Add event listener for the Light/Dark mode toggle
    const toggleModeButton = document.getElementById('toggle-mode');
    if (toggleModeButton) {
        toggleModeButton.addEventListener('click', () => {
            console.log("Light/Dark mode toggled.");
            toggleDarkMode(); // Function from logic.js
        });
    } else {
        console.error("Light/Dark mode toggle button not found in the DOM.");
    }
});
