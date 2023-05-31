import { useEffect, useState } from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const t = setInterval(() => {
      const date = new Date();
      setTime(
        `${date.getHours().toString().padStart(2, "0")}:${date
          .getMinutes()
          .toString()
          .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`
      );
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return <footer className={classes.container}>{time}</footer>;
};

export default Footer;
