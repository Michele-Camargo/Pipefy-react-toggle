import React, { useState } from "react";
import { Switch } from "@material-ui/core";

export function Toggle({ title }) {
  const [active, setActive] = useState(true);
  let text;

  if (active) {
    text = "On fire for the party!";
  } else {
    text = "Off to sleep.";
  }
  return (
    <div>
      <h1>{title}</h1>
      <Switch checked={active} onChange={() => setActive(!active)} />
      <span>{text}</span>
    </div>
  );
}
