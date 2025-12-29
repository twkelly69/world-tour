const cities = [
  {
    name: 'Lisbon, Portugal',
    theme: 'Atlantic gateway',
    highlights: ['Pastel de nata tasting', 'Sunset at Miradouro da Graça', 'Day trip to Sintra'],
  },
  {
    name: 'Marrakesh, Morocco',
    theme: 'Markets & medinas',
    highlights: ['Spices in Jemaa el-Fnaa', 'Atlas Mountains escape', 'Hammam evening'],
  },
  {
    name: 'Cairo, Egypt',
    theme: 'Ancient wonders',
    highlights: ['Pyramids at sunrise', 'Nile felucca ride', 'Egyptian Museum night tour'],
  },
  {
    name: 'Kyoto, Japan',
    theme: 'Tradition & tea',
    highlights: ['Fushimi Inari hike', 'Tea ceremony', 'Arashiyama bamboo grove'],
  },
  {
    name: 'Seoul, South Korea',
    theme: 'Design-forward metropolis',
    highlights: ['Dongdaemun design tour', 'Gwangjang market', 'Namsan sunset walk'],
  },
  {
    name: 'Queenstown, New Zealand',
    theme: 'Adventure capital',
    highlights: ['Milford Sound flight', 'Bungee or jetboat', 'Otago wine tasting'],
  },
];

const faqs = [
  {
    q: 'How is the itinerary paced?',
    a: 'We average three to four nights per city, leaving room for day trips without rushing the highlights.',
  },
  {
    q: 'Are visas and insurance included?',
    a: 'We provide visa guidance and can connect you with partner services. Travel insurance is optional but strongly recommended.',
  },
  {
    q: 'What is the group size?',
    a: 'Groups are capped at 14 travelers so experiences stay personal and flexible.',
  },
  {
    q: 'Can I join for part of the route?',
    a: 'Yes. Choose a continent block or combine two regions—pricing is adjusted accordingly.',
  },
];

function renderCities() {
  const grid = document.getElementById('city-grid');
  grid.innerHTML = cities
    .map(
      (city) => `
        <article class="card">
          <p class="eyebrow">${city.theme}</p>
          <h3>${city.name}</h3>
          <div class="pill-row">
            ${city.highlights.map((item) => `<span class="pill">${item}</span>`).join('')}
          </div>
        </article>
      `,
    )
    .join('');
}

function renderFaq() {
  const list = document.getElementById('faq-list');
  list.innerHTML = faqs
    .map(
      (item) => `
        <details class="faq-item">
          <summary>${item.q}</summary>
          <p>${item.a}</p>
        </details>
      `,
    )
    .join('');
}

renderCities();
renderFaq();
