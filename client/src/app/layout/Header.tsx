import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    //below 4 means => 4*8 = 32 px
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <Switch
          value="false"
          checked={darkMode}
          onChange={handleThemeChange}
          inputProps={{ "aria-label": "Switch A" }}
        />
      </Toolbar>
    </AppBar>
  );
}
