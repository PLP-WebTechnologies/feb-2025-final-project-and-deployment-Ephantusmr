// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    // Save preference
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = '🌙';
    }
  });
  // On load, set theme from localStorage
  window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      themeToggle.textContent = '☀️';
    } else {
      themeToggle.textContent = '🌙';
    }
  });
}

// Blog category filtering (only on blog.html)
if (document.querySelector('.categories')) {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const posts = document.querySelectorAll('.post-item');
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      posts.forEach(post => {
        if (cat === 'all' || post.getAttribute('data-category') === cat) {
          post.style.display = '';
        } else {
          post.style.display = 'none';
        }
      });
      categoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}