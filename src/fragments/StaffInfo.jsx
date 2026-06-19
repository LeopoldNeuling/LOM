import { Typography } from "@mui/material";

export default function StaffInfo({ children }) {
  const [lebenslauf, fortbildungen] = children;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        placeItems: "start",
      }}
    >
      <div>
        <Typography color="secondary.main" variant="h6">
          Lebenslauf
        </Typography>
        <Typography color="secondary.main" variant="body1" component="div">
          {lebenslauf}
        </Typography>
      </div>
      <div>
        <Typography color="secondary.main" variant="h6">
          Fortbildungen
        </Typography>
        <Typography color="secondary.main" variant="body1" component="div">
          {fortbildungen}
        </Typography>
      </div>
    </div>
  );
}
