import React, { useState } from "react";
import { Switch } from "@material-ui/core";

export function Toggle({ title }) {
  const [active, setActive] = useState(true);
  let text;
  let color;

  if (active) {
    text = "On fire for the party!";
    color = "red";
  } else {
    text = "Off to sleep.";
    color = "blue";
  }
  return (
    <div>
      <h1>{title}</h1>
      <Switch checked={active} onChange={() => setActive(!active)} />
      <span style={{ color: color }}>{text}</span>
    </div>
  );
}
