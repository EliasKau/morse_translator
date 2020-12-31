import React from "react";
import { TextField } from "@material-ui/core";

export default function InputText(props) {
  return (
    <TextField
      onChange={(e) => props.handleOnChange(e.target.value)}
      fullWidth
      multiline
      InputProps={{ style: { fontSize: "32px" } }}
      value={props.inputText}
    />
  );
}
