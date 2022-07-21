import React, { useState } from "react";
import { Switch } from "@material-ui/core";
import * as S from "./styles";

type Props = {
  title: string;
};

export const Toggle = ({ title }: Props) => {
  const [active, setActive] = useState(true);

  let text: String;
  let colorOfText: String;

  if (active) {
    text = "On fire for the party!";
    colorOfText = "red";
  } else {
    text = "Off to sleep.";
    colorOfText = "blue";
  }

  return (
    <div>
      <h1>{title}</h1>
      <Switch checked={active} onChange={() => setActive(!active)} />
      <S.Span c={colorOfText}>{text}</S.Span>
    </div>
  );
};
