// input: "2025-08-13"
// return: "Wednesday"
export function getWeekday(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-UK', { weekday: 'long' }); 
}

// input: "2025-08-13"
// return: "13 AUG"
export function formatDateShort(dateString) {
  const date = new Date(dateString);
  const day = date.getDate(); // 1 - 31
  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase(); // Jan, Feb → JAN, FEB
  return `${day} ${month}`;
}

