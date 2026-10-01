import { useEffect, useRef, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  FormatQuote,
  PlayArrow,
  Pause,
  SkipPrevious,
  VolumeOff,
  VolumeUp,
  ExpandMore,
} from "@mui/icons-material";
import fotoMama from "../assets/fotoMama2.jpg";
import introAudio from "../assets/audios/intro.m4a";
import { isMobile } from "../helper/helperFunc";

const mobileLebensLaufFortb = isMobile
  ? {
      marginInline: "5vw",
      marginTop: "2vh",
    }
  : {};

const fontSize = "16px";

function Lebenslauf() {
  const entries = [
    {
      date: "2015-2018",
      text: "Primärqualifizierender Studiengang Ergotherapie (B.Sc.), IB-Hochschule Berlin",
    },
    {
      date: "10/2018 – 06/2021",
      text: "Ergotherapeutin (B.Sc.) Ambulante Arbeitstherapie am Anderen Ort, St. Hedwig Krankenhaus, Berlin",
    },
    {
      date: "08/2021-04/2023",
      text: "Ergotherapeutin Berufliches Trainingszentrum im Rot-Kreuz-Institut gGmbH Berlin",
    },
    {
      date: "Seit 04/2023",
      text: "Klinische Ergotherapeutin Psychiatrische Institutsambulanz (PIA), Stationsäquivalente Behandlung (StäB) und TK-E, Theodor-Wenzel-Werk e.V. Berlin",
    },
    {
      date: "09/2023-03/25",
      text: "Ausbildung Lösungsorientierte Maltherapie LOM® (May Carro Cabaiero und Cora Egger)",
    },
    {
      date: "03/2026",
      text: "Gründung Praxis für Ergotherapie und Lösungsorientiertes Malen",
    },
  ];

  function Head() {
    return (
      <Typography color="secondary.main" variant="h5">
        Lebenslauf
      </Typography>
    );
  }

  function Body() {
    return (
      <Box sx={{ mt: 2 }}>
        {entries.map((entry, index) => (
          <Box
            key={`${entry.date}-${index}`}
            sx={{
              display: "grid",
              gridTemplateColumns: "20px 1fr",
              columnGap: 2,
              pb: index === entries.length - 1 ? 0 : 3,
            }}
          >
            {/* Timeline */}
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {index !== entries.length - 1 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    bottom: -24,
                    width: "2px",
                    bgcolor: "secondary.main",
                    opacity: 0.35,
                  }}
                />
              )}

              <Box
                sx={{
                  mt: "4px",
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: "secondary.main",
                  zIndex: 1,
                }}
              />
            </Box>

            {/* Content */}
            <Box>
              <Typography
                sx={{
                  fontSize,
                  fontWeight: 700,
                  color: "secondary.main",
                }}
              >
                {entry.date}
              </Typography>

              <Typography
                sx={{
                  fontSize,
                  mt: 0.5,
                  lineHeight: 1.5,
                }}
              >
                {entry.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <div style={{ ...mobileLebensLaufFortb }}>
      {isMobile() ? (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Head />
          </AccordionSummary>

          <AccordionDetails>
            <Body />
          </AccordionDetails>
        </Accordion>
      ) : (
        <Box>
          <Head />
          <Body />
        </Box>
      )}
    </div>
  );
}

function Fortbildungen() {
  function Head() {
    return (
      <Typography color="secondary.main" variant="h5">
        Fortbildungen
      </Typography>
    );
  }

  function Body() {
    return (
      <div style={{ fontSize, color: "inherit" }}>
        <ul>
          <li>
            Biografisches und kreatives Schreiben in unterschiedlichen
            Lebensphasen und Lebenskrisen
          </li>
          <li>Dialektisch Behaviorale Therapie (Einführung und Vertiefung)</li>
          <li>Achtsamkeitstraining MBSR (Mindful Based Stress Reduction)</li>
          <li>Umgang mit Depressionen</li>
          <li>Umgang mit Angstpatienten</li>
          <li>Open Dialogue (Zusatzqualifikation)</li>
          <li>
            Motivational Interviewing bei Menschen mit substanzbezogenen
            Störungen
          </li>
          <li>Kränkbarkeit und Kränkung bei narzisstischen Persönlichkeiten</li>
          <li>Scham - die tabuisierte Emotion</li>
          <li>Das neue Bundesteilhabegesetz</li>
          <li>Wege in den Beruf nach einer psychischen Erkrankung</li>
          <li>Basiswissen Psychopharmakologie</li>
          <li>Rechtsgrundlagen zur Teilhabe am Arbeitsleben</li>
          <li>Hamet 3</li>
        </ul>
      </div>
    );
  }

  return (
    <div style={{ ...mobileLebensLaufFortb }}>
      {isMobile() ? (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Head />
          </AccordionSummary>

          <AccordionDetails>
            <Body />
          </AccordionDetails>
        </Accordion>
      ) : (
        <Box>
          <Head />
          <Body />
        </Box>
      )}
    </div>
  );
}

export default function UeberMich({ myRef }) {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(false);

  const playAudio = () => {
    audioRef.current.play();
    setPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setPlaying(false);
  };

  const toStartAudio = () => {
    pauseAudio();
    audioRef.current.currentTime = 0;
  };

  const toggleMute = () => {
    setMuted((prev) => !prev);
  };

  const getAudioProgress = () => {
    const audio = audioRef.current;

    const percent =
      audio.duration > 0 ? (audio.currentTime / audio.duration) * 100 : 0;

    setProgress(percent);
  };

  useEffect(() => {
    const audio = audioRef.current;

    audio.addEventListener("ended", toStartAudio);

    return () => {
      audio.removeEventListener("ended", toStartAudio);
    };
  }, []);

  useEffect(() => {
    audioRef.current.muted = muted;
  }, [muted]);

  const AboutCard = () => (
    <Card
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            <sub>
              <FormatQuote sx={{ fontSize: "15px" }} />
            </sub>
            Ich über mich
            <sup>
              <FormatQuote
                sx={{
                  rotate: "180deg",
                  fontSize: "15px",
                }}
              />
            </sup>
          </Typography>

          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            Maria Neuling
          </Typography>
        </CardContent>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            marginInline: "2vh",
          }}
          color="info"
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <IconButton onClick={toStartAudio}>
            <SkipPrevious fontSize="large" />
          </IconButton>

          <IconButton
            color={playing ? "info" : "default"}
            onClick={() => {
              playing ? pauseAudio() : playAudio();
            }}
          >
            {playing ? (
              <Pause fontSize="large" />
            ) : (
              <PlayArrow fontSize="large" />
            )}
          </IconButton>

          <IconButton onClick={toggleMute} color={muted ? "default" : "info"}>
            {muted ? (
              <VolumeOff fontSize="large" />
            ) : (
              <VolumeUp fontSize="large" />
            )}
          </IconButton>

          <audio
            src={introAudio}
            ref={audioRef}
            onTimeUpdate={getAudioProgress}
          />
        </Box>
      </Box>

      <CardMedia
        component="img"
        sx={{
          width: 151,
          objectFit: "cover",
        }}
        image={fotoMama}
      />
    </Card>
  );

  return (
    <Box
      ref={myRef}
      id="ueberMich"
      className={
        isMobile() ? "mobile-page mobile-content-page" : "page content-page"
      }
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography
        color="secondary.main"
        variant="h2"
        sx={{
          mb: 4,
        }}
      >
        Über mich
      </Typography>

      {isMobile() ? (
        <>
          <AboutCard />

          <Lebenslauf />

          <Fortbildungen />
        </>
      ) : (
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            // columnGap: 6,
            rowGap: 6,
            alignItems: "start",
          }}
        >
          {/* top left */}
          <div>
            <AboutCard />
            <Fortbildungen />
          </div>

          {/* top/right */}
          <Lebenslauf />
        </Box>
      )}
    </Box>
  );
}
