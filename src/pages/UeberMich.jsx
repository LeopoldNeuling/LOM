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

// before team_version create two branches: team_version and maria_version then code in team_version and push to main
// *** for settings main branch to other branch which is behind - save other branch!! ***
// git checkout main
// git reset --hard other-branch
// git push --force-with-lease origin main

export default function UeberMich({ myRef }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

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
  const getAudioProgress = () => {
    const audio = audioRef.current;
    const percent = (audio.currentTime / audio.duration) * 100;
    setProgress(percent);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("ended", toStartAudio);
    return () => audio.removeEventListener("ended", toStartAudio);
  }, []);

  return (
    <Box
      ref={myRef}
      id="ueberMich"
      className={
        isMobile() ? "mobile-page mobile-content-page" : "page content-page"
      }
      sx={{
        maxHeight: "1000px",

        display: isMobile() ? "flex" : "grid",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",

        placeItems: "center",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr 5fr",
        gap: "50px",
      }}
    >
      <Typography
        color="secondary.main"
        variant="h2"
        sx={{ gridColumn: "span 2" }}
      >
        Unser Team
      </Typography>

      {/* Maria */}
      <div>
        <Card
          sx={{
            display: "flex",
            gridRow: 2,
            marginTop: isMobile() ? "5vh" : 0,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h5" sx={{ color: "text.secondary" }}>
                Maria Neuling
              </Typography>
            </CardContent>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ marginInline: "2vh" }}
              color="info"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
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

              <audio
                src={introAudio}
                ref={audioRef}
                onTimeUpdate={getAudioProgress}
              />
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 150, height: 200 }}
            image={fotoMama}
          />
        </Card>
      </div>

      {/* Other */}
      <div>
        <Card
          sx={{
            display: "flex",
            gridRow: 2,
            marginTop: isMobile() ? "5vh" : 0,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h5" sx={{ color: "text.secondary" }}>
                Max Musterman
              </Typography>
            </CardContent>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ marginInline: "2vh" }}
              color="info"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
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

              <audio
                src={introAudio}
                ref={audioRef}
                onTimeUpdate={getAudioProgress}
              />
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 150, height: 200 }}
            image={""}
          />
        </Card>
      </div>

      {/* Info Maria */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          placeItems: "start",
          // background: "red",
        }}
      >
        <div>
          <Typography color="secondary.main" variant="h6">
            Lebenslauf
          </Typography>
          <Typography color="secondary.main" variant="body1">
            <ul>
              <li>
                2015-2018: Primärqualifizierender Studiengang Ergotherapie
                (B.Sc.), IB-Hochschule Berlin
              </li>
              <li>
                10/2018 – 06/2021: Ergotherapeutin (B.Sc.) Ambulante
                Arbeitstherapie am Anderen Ort, St. Hedwig Krankenhaus, Berlin
              </li>
              <li>
                08/2021-04/2023: Ergotherapeutin Berufliches Trainingszentrum im
                Rot-Kreuz-Institut gGmbH Berlin
              </li>
              <li>
                Seit 04/2023: Klinische Ergotherapeutin Psychiatrische
                Institutsambulanz (PIA), Stationsäquivalente Behandlung (StäB)
                und TK-E, Theodor-Wenzel-Werk e.V. Berlin
              </li>
              <li>
                09/2023-03/25: Ausbildung Lösungsorientierte Maltherapie LOM®
                (May Carro Cabaiero und Cora Egger)
              </li>
              <li>
                03/2026: Gründung Praxis für Ergotherapie und
                Lösungsorientiertes Malen
              </li>
            </ul>
          </Typography>
        </div>
        <div>
          <Typography color="secondary.main" variant="h6">
            Fortbildungen
          </Typography>
          <Typography color="secondary.main" variant="body1">
            <ul>
              <li>
                Biografisches und kreatives Schreiben in unterschiedlichen
                Lebensphasen und Lebenskrisen
              </li>
              <li>
                Dialektisch Behaviorale Therapie (Einfühung und Vertiefung)
              </li>
              <li>
                Achtsamkeitstraining MBSR (Mindful Based Stress Reduction)
              </li>
              <li>Umgang mit Depressionen</li>
              <li>Umgang mit Angstpatienten</li>
              <li>Open Dialogue (Zusatzqualifikation)</li>
              <li>
                Motivational Interviewing bei Menschen mit substanzbezogenen
                Störungen
              </li>
              <li>
                Kränkbarkeit und Kränkung bei narzisstischen Persönlichkeiten
              </li>
              <li>Scham - die tabuisierte Emotion</li>
              <li>Das neue Bundesteilhabegesetz</li>
              <li>Wege in den Beruf nach einer psychischen Erkrankung</li>
              <li>Basiswissen Psychopharmakologie</li>
              <li>Rechtsgrundlagen zur Teilhabe am Arbeitsleben</li>
              <li>Hamet 3</li>
            </ul>
          </Typography>
        </div>
      </div>

      {/* Info Other */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          placeItems: "start",
          // background: "red",
        }}
      >
        <div>
          <Typography color="secondary.main" variant="h6">
            Lebenslauf
          </Typography>
          <Typography color="secondary.main" variant="body1">
            <ul>
              <li>
                2015-2018: Primärqualifizierender Studiengang Ergotherapie
                (B.Sc.), IB-Hochschule Berlin
              </li>
              <li>
                10/2018 – 06/2021: Ergotherapeutin (B.Sc.) Ambulante
                Arbeitstherapie am Anderen Ort, St. Hedwig Krankenhaus, Berlin
              </li>
              <li>
                08/2021-04/2023: Ergotherapeutin Berufliches Trainingszentrum im
                Rot-Kreuz-Institut gGmbH Berlin
              </li>
              <li>
                Seit 04/2023: Klinische Ergotherapeutin Psychiatrische
                Institutsambulanz (PIA), Stationsäquivalente Behandlung (StäB)
                und TK-E, Theodor-Wenzel-Werk e.V. Berlin
              </li>
              <li>
                09/2023-03/25: Ausbildung Lösungsorientierte Maltherapie LOM®
                (May Carro Cabaiero und Cora Egger)
              </li>
              <li>
                03/2026: Gründung Praxis für Ergotherapie und
                Lösungsorientiertes Malen
              </li>
            </ul>
          </Typography>
        </div>
        <div>
          <Typography color="secondary.main" variant="h6">
            Fortbildungen
          </Typography>
          <Typography color="secondary.main" variant="body1">
            <ul>
              <li>
                Biografisches und kreatives Schreiben in unterschiedlichen
                Lebensphasen und Lebenskrisen
              </li>
              <li>
                Dialektisch Behaviorale Therapie (Einfühung und Vertiefung)
              </li>
              <li>
                Achtsamkeitstraining MBSR (Mindful Based Stress Reduction)
              </li>
              <li>Umgang mit Depressionen</li>
              <li>Umgang mit Angstpatienten</li>
              <li>Open Dialogue (Zusatzqualifikation)</li>
              <li>
                Motivational Interviewing bei Menschen mit substanzbezogenen
                Störungen
              </li>
              <li>
                Kränkbarkeit und Kränkung bei narzisstischen Persönlichkeiten
              </li>
              <li>Scham - die tabuisierte Emotion</li>
              <li>Das neue Bundesteilhabegesetz</li>
              <li>Wege in den Beruf nach einer psychischen Erkrankung</li>
              <li>Basiswissen Psychopharmakologie</li>
              <li>Rechtsgrundlagen zur Teilhabe am Arbeitsleben</li>
              <li>Hamet 3</li>
            </ul>
          </Typography>
        </div>
      </div>
    </Box>
  );
}
