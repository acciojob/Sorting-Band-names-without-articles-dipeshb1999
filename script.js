//your code here
let bandNames = ['The Beatles', 'Metallica', 'Red Hot Chili Peppers', 'Nirvana', 'Radiohead'];

// Function to remove articles from the band name
function removeArticles(bandName) {
  // List of articles to be excluded
  const articles = ['a', 'an', 'the'];
  
  // Split the band name into words
  const words = bandName.split(' ');
  
  // Filter out the articles
  const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));
  
  // Join the words back into a string
  const filteredBandName = filteredWords.join(' ');
  
  return filteredBandName;
}

// Sort the band names in lexicographic order, excluding articles
const sortedBandNames = bandNames.sort((a, b) => {
  const bandNameA = removeArticles(a);
  const bandNameB = removeArticles(b);
  return bandNameA.localeCompare(bandNameB);
});

// Create an <ul> element
const ulElement = document.createElement('ul');
ulElement.id = 'band';

// Add each band name as an <li> element to the <ul> element
sortedBandNames.forEach(bandName => {
  const liElement = document.createElement('li');
  liElement.textContent = bandName;
  ulElement.appendChild(liElement);
});

// Append the <ul> element to the document body
document.body.appendChild(ulElement);
