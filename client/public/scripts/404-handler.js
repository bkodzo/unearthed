// Handle 404 redirects for invalid routes
const currentPath = window.location.pathname

// If we're on a path that doesn't exist, redirect to 404
if (currentPath !== '/' && currentPath !== '/index.html' && !currentPath.includes('gift.html') && !currentPath.includes('404.html')) {
  window.location.href = '/404.html'
}
