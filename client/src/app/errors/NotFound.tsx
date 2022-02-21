import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container component={Paper}>
      <Typography gutterBottom variant="h3">
        Oops - we could not found what ou are looking for
      </Typography>
      <Divider />
      <Button fullWidth LinkComponent={Link}>
        Go back to shop
      </Button>
    </Container>
  );
}
