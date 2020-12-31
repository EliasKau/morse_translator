import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import { Button } from "@material-ui/core";
import morseCode from "../morseCode.json";
import InputText from "./inputText";

export default function Container() {
  const classes = useStyles();

  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [textToMorse, setTextToMorse] = useState(true);
  var output = [];
  var value;

  function handleOnChange(value) {
    setInputText(value);
    translateInput(value);
  }

  function getKeybyValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  const translateInput = (input) => {
    setOutputText("");
    if (textToMorse) {
      [...input].forEach((element) => {
        if (element === " ") {
          output.push(element + "\u00A0");
        } else {
          value = morseCode[element] + " ";
          output.push(value);
        }
      });
      setOutputText(output);
    } else {
      value = input.split(" ");
      value.forEach((element) => {
        if (element === "") {
          output.push(" ");
        } else {
          output.push(getKeybyValue(morseCode, element));
        }
      });
      setOutputText(output);
    }
  };

  const handleButtonClick = () => {
    setTextToMorse(!textToMorse);
    setInputText("");
    setOutputText("");
  };

  return (
    <div>
      <Grid
        className={classes.container}
        container
        direction="column"
        spacing={5}
        justify="center"
        alignItems="stretch"
      >
        <Grid container className={classes.subContainer} direction="column">
          <Grid container spacing={2} alignItems="center">
            <Grid className={classes.headerText} item>
              {textToMorse === true ? "Text" : "Morse code"}
            </Grid>
            <Grid
              className={
                textToMorse === true ? classes.hidden : classes.hintText
              }
              item
            >
              Single space between letters and two spaces between words
            </Grid>
          </Grid>
          <Grid item>
            <InputText
              inputText={inputText}
              setInputText={setInputText}
              translateInput={translateInput}
              handleOnChange={handleOnChange}
            />
          </Grid>
        </Grid>
        <Grid item align="center">
          <Button
            variant="outlined"
            onClick={() => {
              handleButtonClick();
            }}
          >
            <ImportExportIcon />
          </Button>
        </Grid>
        <Grid container className={classes.subContainer} direction="column">
          <Grid className={classes.headerText}>Translation</Grid>
          <Grid item xs={12}>
            <div className={classes.output}>{outputText}</div>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    background: "bisque",
    maxWidth: "75%",
    borderRadius: "20px",
    margin: "auto",
    padding: "1em 3em 1em 3em",
  },
  subContainer: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "20px",
    padding: "10px",
  },
  output: {
    fontSize: "2em",
    minHeight: "43px",
  },
  headerText: {
    fontSize: "2em",
    marginBottom: "0.5em",
  },
  hintText: {
    fontSize: "1em",
  },
  hidden: { display: "none" },
});
