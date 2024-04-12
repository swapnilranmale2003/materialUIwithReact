import React from "react";
import { Stack, Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
function MuiButton() {
  return (
    <Stack spacing={4} direction="column">
      <Stack spacing={2} direction="row">
        <Button
          variant="text"
          href="https://www.youtube.com/watch?v=fgTLgz1xSn8&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=4"
        >
          Text
        </Button>
        <Button variant="contained">Text</Button>
        <Button variant="outlined">Text</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
      <Stack display={"block"} direction="row" spacing={2}>
        <Button variant="contained" color="primary" size="small">
          Small
        </Button>
        <Button variant="contained" color="primary" size="mediun">
          Medium
        </Button>
        <Button variant="contained" color="primary" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          size="small"
          color="primary"
          startIcon={<SendIcon />}
          disableRipple
          onClick={()=>alert("Clicked")}
        >
          Send
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          endIcon={<SendIcon />}
          disableElevation
        >
          Send{" "}
        </Button>
        <IconButton aria-label="send" color="success">
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}

export default MuiButton;
