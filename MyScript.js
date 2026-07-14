async function fetchNews() {

  const apiKey = 'YOUR_API_KEY'; // Paste your API key here. Do NOT commit your real key to GitHub.
  const url = `YOUR_NEWS_API_ENDPOINT_HERE&apiKey=${apiKey}`; // Replace with your news API's endpoint/query URL

  try {
    const response = await fetch(url);
    const data = await response.json();
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = '';

    if(data.articles && data.articles.length) {
      data.articles.forEach(article => {
        const item = document.createElement('article');
        item.className = 'news-item';
        item.innerHTML = `
          <h2>${article.title}</h2>
          <p><strong>Date:</strong> ${new Date(article.publishedAt).toLocaleString()}</p>
          <p>${article.description || ''}</p>
          <a href="${article.url}" target="_blank">Read more</a>
        `;
        newsList.appendChild(item);
      });

    } else {
      newsList.innerHTML = '<p>No news found.</p> <br><br> <p> <b>This won\'t load unless you have a valid API key.</b></p> <br><p> <b>And you have to either host the website or use the Live Server extension on VS Code to view the NEWS in real time.</b></p>';

    }
  } catch (e) {
    document.getElementById('news-list').innerHTML = '<p>Could not fetch news at this time.</p>';
  }
}
window.onload = fetchNews;

setInterval(fetchNews, 30000);



function updateClock() {
  
          const now = new Date();
          const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
          document.getElementById('clock').textContent = now.toLocaleString('en-US', options);

        }
        setInterval(updateClock, 1000);
        updateClock();