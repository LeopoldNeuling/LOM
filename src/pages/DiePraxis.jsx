import { Box, Card, CardContent, Typography } from "@mui/material";
import meer from "../assets/meer.png";
import { isMobile } from "../helper/helperFunc";

export default function DiePraxis({ myRef }) {
  const cardOpacity = 0.75;

  return (
    <Box
      ref={myRef}
      id="praxis"
      className={`${isMobile() ? "mobile-page" : "page wrapper-page"} bg-image`}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "space-between",
        gap: "15vh",

        textAlign: "center",
        backgroundImage: `linear-gradient(rgba(255,255,255,0.25), rgba(255,255,255,0.25)), url(${meer})`,
        paddingTop: isMobile() ? "5vh" : 0,
      }}
    >
      <Typography
        variant={isMobile() ? "h4" : "h3"}
        color="primary.contrastText"
      >
        {isMobile() ? (
          <b>
            Willkommen in der Praxis für
            <br />
            Ergotherapie und Lösungsorientiertes Malen®
          </b>
        ) : (
          <b>
            Willkommen in der
            <br />
            Praxis für Ergotherapie
            <br />
            und Lösungsorientiertes Malen®
          </b>
        )}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile() ? "column" : "row",
          justifyContent: "space-evenly",
          alignItems: "flex-start",
          gap: "2vh",
          "&>*": {
            maxWidth: isMobile() ? "100%" : "300px",
          },
        }}
      >
        <Card
          sx={{
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
            backgroundColor: `rgba(208,138,33,${cardOpacity})`,
          }}
        >
          <CardContent>
            <Typography variant="subtitle1" color="primary.main">
              <b>
                Ein Schwerpunkt liegt auf nonverbalen Therapieverfahren wie dem
                Lösungsorientierten Malen (LOM®).
              </b>
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
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
