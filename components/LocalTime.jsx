"use client";

import { useEffect, useState } from "react";

// The current time where Abhishek is, so visitors know when a reply is likely.
export default function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      setTime(new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/New_York", timeZoneName: "short" }).format(new Date()));
    format();
    const id = setInterval(format, 20000);
    return () => clearInterval(id);
  }, []);

  return <span className="tnum">{time || "Eastern Time"}</span>;
}
