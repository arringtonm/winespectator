// https://top100.winespectator.com/lists/

const wines = [];
const rows = Array.from(document.querySelector('tbody').children);

rows.forEach((row) => {
  const wineHtml = Array.from(row.children);
  const wine = {};

  // hard coded; refactor to read from identifier on page?
  wine.year = '2020';

  wine.list = 'Wine Spectator';
  wine.rank = wineHtml[0].innerText;
  wine.name = wineHtml[1]
    .querySelector('.wineName')
    .innerText.replace(/(\n\+)/gm, '')
    .trim();
  // not being used, but can separate:
  wine.winery = wineHtml[1].querySelector('.wineName .sort-text').innerText;
  wine.vintage = wineHtml[2].innerText;
  wine.rating = wineHtml[3].innerText;
  wine.price = wineHtml[4].innerText;
  // lovely typo on tabel:
  wine.note = wineHtml[1].querySelector('.tabel-note').innerText.trim();

  wines.push(wine);
});
