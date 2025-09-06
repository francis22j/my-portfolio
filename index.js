// Gallery array
const galleryImages = [
  { src: "portrait/firstportrait.jpg", alt: "Portrait 1" },
  { src: "portrait/secondportrait.jpg", alt: "Portrait 2" },
  { src: "portrait/thirdportrait.jpg", alt: "Portrait 3" },
  { src: "portrait/fourthportrait.jpg", alt: "Portrait 4" },
  { src: "portrait/fifthportrait.jpg", alt: "Portrait 5" },
  { src: "portrait/sixthportrait.jpg", alt: "Portrait 6" }
];

// Render gallery
const artGrid = document.getElementById('art-grid');
artGrid.innerHTML = galleryImages.map(img =>
  `<img src="${img.src}" alt="${img.alt}">`
).join('');

// Pricing array
const pricingData = [
  { size: "A5", prices: ["₱400", "-", "-", "-"] },
  { size: "A4", prices: ["₱800", "₱1,200", "₱1,600", "-"] },
  { size: "A3", prices: ["-", "₱2,400", "₱3,200", "₱4,000"] }
];

// Render pricing table
const pricingTable = document.getElementById('pricing-table');
pricingTable.innerHTML = `
  <table>
    <tr>
      <th>Size</th>
      <th>1 Head</th>
      <th>2 Heads</th>
      <th>3 Heads</th>
      <th>4 Heads</th>
    </tr>
    ${pricingData.map(row => `
      <tr>
        <th>${row.size}</th>
        ${row.prices.map(price => `<td>${price}</td>`).join('')}
      </tr>
    `).join('')}
  </table>
`;
