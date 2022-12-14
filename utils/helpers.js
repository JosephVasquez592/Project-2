// Brings in a couple function from date-fns to work with times
const { formatDistance, compareAsc } = require("date-fns");

module.exports = {
  // Formats the way a date is displayed on the page
  format_date: (date) => {
    // Establishes the current time
    let currentTime = new Date();
    // Formats the time to show how long ago the date passed into the function was
    return formatDistance(date, currentTime, { addSuffix: true });
  },
  // Checks the createdAt and UpdatedAt variable to determine if an outline was updated
  is_updated: (createdAt, updatedAt) => {
    // compareAsc will return -1 if updatedAt is after createdAt
    if (compareAsc(createdAt, updatedAt) === -1) {
      return true;
    }
    // Returns false if the two times are the same
    return false;
  },
};