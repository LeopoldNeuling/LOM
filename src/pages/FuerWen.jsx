import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";
import { pageStyle } from "../helper/styles";
import quad from "../assets/furWenSeite/quad.jpg";
import tri from "../assets/furWenSeite/tri.jpg";
import circle from "../assets/furWenSeite/circle.jpg";

export default function FuerWen({ myRef }) {
  return (
    <Box
      ref={myRef}
      id="fuerWen"
      sx={{
        ...pageStyle,
        width: "95%",
        margin: "5vh",
        textAlign: "center",
      }}
    >
      <Typography color="secondary.main" variant="h2" gutterBottom>
        Für wen?
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" height="250" image={quad} />
            <CardContent>
              <Typography
                variant="subtitle1"
                color="secondary.main"
                textAlign="left"
              >
                Im Rahmen der Ergotherapie werden die Behandlungskosten von den
                gesetzlichen und privaten Krankenkassen übernommen.
                Voraussetzung ist eine ärztliche oder psychotherapeutische
                Heilmittelverordnung für die Ergotherapie
                (psychisch-funktionelles Behandlungsgebiet). Psychiater:innen,
                Neurolog:innen, Hausärzt:innen sowie Psychotherapeut:innen
                können dieses Heilmittel verordnen.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" height="250" image={circle} />
            <CardContent>
              <Typography
                variant="subtitle1"
                color="secondary.main"
                textAlign="left"
              >
                Das Verfahren eignet sich für alle Menschen mit psychischen und
                psychosomatischen Belastungsfaktoren, die sich Veränderung und
                Klärung wünschen.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" height="250" image={tri} />
            <CardContent>
              <Typography
                variant="subtitle1"
                color="secondary.main"
                textAlign="left"
              >
                Information für Ärztinnen und Ärzte: Erfolgt die
                Heilmittelverordnung als sog. Blankoverordnung wird diese nicht
                in die Wirtschaftlichkeitsvorgaben gerechnet. Blankoverordnungen
                sind somit „budgetneutral“.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
}
