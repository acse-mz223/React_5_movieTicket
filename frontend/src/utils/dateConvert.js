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

// input: "12:30", 120
// reuturn: "14:30"
export function calcEndTime(startTime, durationMins) {
  // Split start time
  const [hours, minutes] = startTime.split(':').map(Number);
  
  // Convert to total minutes
  let totalMinutes = hours * 60 + minutes + Number(durationMins);
  
  // Handle wrap around if over 24 hours
  totalMinutes %= 24 * 60;

  // Convert back to hours and minutes
  const endHours = Math.floor(totalMinutes / 60).toString().padStart(2, '0');
  const endMinutes = (totalMinutes % 60).toString().padStart(2, '0');

  return `${endHours}:${endMinutes}`;
}

// input "125"
// return "2h5min"
export function minsToHoursAndMins(totalMins) {
  const hours = Math.floor(totalMins / 60);
  const mins = totalMins % 60;
  return `${hours}h${mins}min`;
}

