import { Box, Card, CardContent, Typography } from "@mui/material";
import meer from "../assets/meer.png";

export default function DiePraxis({ myRef }) {
  const cardOpacity = 0.75;

  return (
    <Box
      ref={myRef}
      id="praxis"
      className="page wrapper-page column-flex text-align-center bg-image"
      sx={{
        justifyContent: "center",
        alignItems: "space-between",
        gap: "15vh",

        backgroundImage: `linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.25)), url(${meer})`,
        marginTop: "10vh",
      }}
    >
      <Typography variant="h3" color="primary.contrastText">
        <b>
          Willkommen in der
          <br /> Praxis für Ergotherapie
          <br />
          und Lösungsorientiertes Malen®
        </b>
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
        }}
      >
        <Card
          sx={{
            maxWidth: 300,
            backgroundColor: `rgba(53,86,111,${cardOpacity})`,
          }}
        >
          <CardContent>
            <Typography variant="subtitle1" color="primary.main">
              <b>
                Das Angebot der Praxis für Ergotherapie und LOM® richtet sich
                speziell an Menschen mit psychischen und psychosomatischen
                Belastungsfaktoren.
              </b>
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: 300,
            backgroundColor: `rgba(208,138,33,${cardOpacity})`,
          }}
        >
          <CardContent>
            <Typography variant="subtitle1" color="primary.main">
              <b>
                Ein besonderer Schwerpunkt liegt auf nonverbalen
                Therapieverfahren wie dem Lösungsorientierten Malen (LOM®).
              </b>
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            maxWidth: 300,
            backgroundColor: `rgba(201,176,191,${cardOpacity + 0.1})`,
          }}
        >
          <CardContent>
            <Typography variant="subtitle1" color="primary.main">
              <b>
                Die Praxis befindet sich in Berlin Zehlendorf. Hier biete ich
                psychisch-funktionelle Behandlungen für gesetzlich und privat
                krankenversicherte Personen an.
              </b>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
