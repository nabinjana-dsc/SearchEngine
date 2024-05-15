const searchForm = document.getElementById('searchForm');
const searchQueryInput = document.getElementById('searchQuery');
const searchResultsDiv = document.getElementById('searchResults');

searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchQuery = searchQueryInput.value;
    if (searchQuery.trim() !== '') {
        searchGoogle(searchQuery);
    }
});

function searchGoogle(query) {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(searchUrl, '_blank');
}
