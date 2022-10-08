/**
 *
 * date.js
 * this helper formulate date
 */

const dateOptions = {
  timeZone: "UTC",
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};

const timeOptions = {
  hour: "numeric",
  minute: "numeric",
};

// export const date = today.toLocaleDateString(undefined, dateOptions);
// export const time = today.toLocaleTimeString(undefined, timeOptions);

export const formatDate = (date) => {
  const newDate = new Date(date);

  //   const newDateOptions = {
  //     year: "numeric",
  //     month: "short",
  //     day: "numeric"
  //   };

  return newDate.toLocaleDateString("en-US", dateOptions);
};

export const formatTime = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleTimeString(undefined, timeOptions);
};

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getFormattedDate(date, prefomattedDate = false, hideYear = false) {
  const day = date.getDate();
  const month = MONTH_NAMES[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    // Adding leading zero to minutes
    minutes = `0${minutes}`;
  }

  if (prefomattedDate) {
    // Today at 10:20
    // Yesterday at 10:20
    return `${prefomattedDate} at ${hours}:${minutes}`;
  }

  if (hideYear) {
    // 10. January at 10:20
    return `${day}. ${month} at ${hours}:${minutes}`;
  }

  // 10. January 2017. at 10:20
  return `${day}. ${month} ${year}. at ${hours}:${minutes}`;
}

// --- Main function
export const timeAgo = (dateParam) => {
  if (!dateParam) {
    return null;
  }

  const date = typeof dateParam === "object" ? dateParam : new Date(dateParam);
  const DAY_IN_MS = 86400000; // 24 * 60 * 60 * 1000
  const today = new Date();
  const yesterday = new Date(today - DAY_IN_MS);
  const seconds = Math.round((today - date) / 1000);
  const minutes = Math.round(seconds / 60);
  const isToday = today.toDateString() === date.toDateString();
  const isYesterday = yesterday.toDateString() === date.toDateString();
  const isThisYear = today.getFullYear() === date.getFullYear();

  if (seconds < 5) {
    return "now";
  } else if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (seconds < 90) {
    return "about a minute ago";
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (isToday) {
    return getFormattedDate(date, "Today"); // Today at 10:20
  } else if (isYesterday) {
    return getFormattedDate(date, "Yesterday"); // Yesterday at 10:20
  } else if (isThisYear) {
    return getFormattedDate(date, false, true); // 10. January at 10:20
  }

  return getFormattedDate(date); // 10. January 2017. at 10:20
};

// --- DEMO
// const minuteInMs = 60000;
// const hourInMs = minuteInMs * 60;
// const dayInMs = hourInMs * 24;

// const dates = [
//   new Date(),
//   new Date(new Date().getTime() - minuteInMs),
//   new Date(new Date().getTime() - minuteInMs * 45),
//   new Date(new Date().getTime() - hourInMs),
//   new Date(new Date().getTime() - hourInMs * 24),
//   new Date(new Date().getTime() - dayInMs * 5),
// ];

// dates.forEach((date) => {
//   document.querySelector(".demo").innerHTML += `<div>
//       <span class="locale-string">${date.toLocaleString()}</span>
//       <span class="arrow">→</span>
//       <span class="time-ago">${timeAgo(date)}</span>
//     </div>`;
// });
