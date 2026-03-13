import React from "react";

const DateTime = () => {
  const now = new Date();

  const formatted = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
    .format(now)
    .replace(/,/g, "");

  return <div>{formatted}</div>;
};

export default DateTime;