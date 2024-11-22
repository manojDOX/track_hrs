const container = document.getElementById('grid-container');
const clock = document.getElementById('clock');
const timestampList = document.getElementById('timestamp-list');

// Update clock time
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  clock.textContent = `Current Time: ${timeString}`;
}
setInterval(updateClock, 1000); // Update every second
updateClock(); // Initialize immediately

// Create 24 blocks and add to the container
for (let i = 1; i <= 24; i++) {
  const block = document.createElement('div');
  block.classList.add('block');
  block.textContent = i; // Add the block number
  block.addEventListener('click', () => {
    block.classList.toggle('green'); // Toggle green color
    addTimestamp(i); // Record the click timestamp
  });
  container.appendChild(block);
}

// Add timestamp to the list
function addTimestamp(blockNumber) {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const timestampItem = document.createElement('li');
  timestampItem.textContent = `Block ${blockNumber} clicked at ${timeString}`;
  timestampList.appendChild(timestampItem);
}
