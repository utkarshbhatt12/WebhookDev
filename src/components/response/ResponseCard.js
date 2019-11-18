import React from "react";
import JSONView from "./JSONView";
import {
  Paper,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  paper: {
    padding: theme.spacing(3, 2)
  },
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
}));

function ResponseTable({
  headers,
  query,
  body,
  url,
  timestamp,
  showLineNumber,
  codeString
}) {
  const classes = useStyles();
  const fallback =
    `curl -X POST -d 'Hello Webhook' ` +
    `https://webhookdev.com/123e4567-e89b-12d3-a456-426655440000`;
  // <div className={classes.toolbar} />

  if (headers) {
    return (
      <div>
        <div className={classes.toolbar} />
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              URL: {url}
            </Typography>
            <JSONView codeString={headers} />
            <JSONView codeString={body} />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <div className={classes.toolbar} />
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          No requests yet...
        </Typography>
        <Typography component="p">Send your first one as follows:</Typography>
        <JSONView
          showLineNumber={showLineNumber}
          codeString={codeString || fallback}
        />
      </Paper>
    </div>
  );
}

export default ResponseTable;
