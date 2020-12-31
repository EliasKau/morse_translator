import Container from "./components/container.js";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
        <Container />
    </div>
  );
}

export default App;

const useStyles = makeStyles({
  app: {
    marginTop: "10em"
  }
});