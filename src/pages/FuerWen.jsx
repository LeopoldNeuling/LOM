import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";
import quad from "../assets/furWenSeite/quad.jpg";
import tri from "../assets/furWenSeite/tri.jpg";
import circle from "../assets/furWenSeite/circle.jpg";
import { isMobile } from "../helper/helperFunc";

export default function FuerWen({ myRef }) {
  return (
    <Box
      ref={myRef}
      id="fuerWen"
      className={`${isMobile() ? "mobile-page mobile-content-page" : "page content-page"} text-align-center`}
    >
      <Typography color="secondary.main" variant="h2" gutterBottom>
        Für wen?
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile() ? "column" : "row",
          justifyContent: "space-evenly",
          alignItems: "flex-start",

          "&>*": {
            maxWidth: isMobile() ? "100%" : "25vw",
            margin: "2vh",
          },
        }}
      >
        <Card>
          <CardActionArea>
            <CardMedia component="img" height="250" image={quad} />
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
        <Card>
          <CardActionArea>
            <CardMedia component="img" height="250" image={circle} />
            <CardContent>
              <Typography
                variant="subtitle1"
                color="secondary.main"
                textAlign="left"
              >
                <ul>
                  <li>
                    Im Rahmen der Ergotherapie werden die Behandlungskosten von
                    den gesetzlichen und privaten Krankenkassen übernommen.
                  </li>
                  <li>
                    Voraussetzung ist eine ärztliche oder psychotherapeutische
                    Heilmittelverordnung für die Ergotherapie
                    (psychisch-funktionelles Behandlungsgebiet).
                  </li>
                  <li>
                    Psychiater:innen, Neurolog:innen, Hausärzt:innen sowie
                    Psychotherapeut:innen können dieses Heilmittel verordnen.
                  </li>
                </ul>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <CardMedia component="img" height="250" image={tri} />
            <CardContent>
              <Typography
                variant="subtitle1"
                color="secondary.main"
                textAlign="left"
              >
                Information für Ärztinnen und Ärzte: Erfolgt die
                Heilmittelverordnung als sog. Blankoverordnung, wird diese nicht
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
