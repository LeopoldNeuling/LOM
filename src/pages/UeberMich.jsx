import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
  LinearProgress,
} from "@mui/material";
import {
  FormatQuote,
  PlayArrow,
  Pause,
  SkipPrevious,
  VolumeOff,
  VolumeUp,
} from "@mui/icons-material";
import { pageStyle } from "../helper/styles";
import fotoMama from "../assets/fotoMama2.jpg";
import introAudio from "../assets/audios/intro.m4a";
import { useEffect, useRef, useState } from "react";

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
  const toggleMute = () => setMuted((prev) => !prev);
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
  useEffect(() => {
    audioRef.current.muted = muted;
  }, [muted]);

  return (
    <Box
      ref={myRef}
      id="ueberMich"
      sx={{
        ...pageStyle,
        width: "95%",
        display: "grid",
        placeItems: "center",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "1fr 5fr",
        margin: "5vh",
      }}
    >
      <Typography color="secondary.main" variant="h2" sx={{ gridArea: "1/2" }}>
        Über mich
      </Typography>

      <Typography
        variant="subtitle1"
        color="secondary.main"
        sx={{ gridRow: 2 }}
      >
        <h4>Lebenslauf</h4>
        <ul>
          <li>
            2015-2018: Primärqualifizierender Studiengang Ergotherapie (B.Sc.),
            IB-Hochschule Berlin
          </li>
          <li>
            10/2018 – 06/2021: Ergotherapeutin (B.Sc.) Ambulante Arbeitstherapie
            am Anderen Ort,
            <br />
            St. Hedwig Krankenhaus, Berlin
          </li>
          <li>
            08/2021-04/2023: Ergotherapeutin Berufliches Trainingszentrum im
            Rot-Kreuz-Institut gGmbH Berlin
          </li>
          <li>
            Seit 04/2023: Klinische Ergotherapeutin Psychiatrische
            Institutsambulanz (PIA), Stationsäquivalente Behandlung (StäB) und
            TK-E, Theodor-Wenzel-Werk e.V. Berlin
          </li>
          <li>
            09/2023-03/25: Ausbildung Lösungsorientierte Maltherapie LOM® (May
            Carro Cabaiero und Cora Egger)
          </li>
          <li>
            Seit 03/2026: Gründung Praxis für Ergotherapie und
            Lösungsorientiertes
          </li>
        </ul>
      </Typography>

      <Card sx={{ display: "flex", gridRow: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              <sub>
                <FormatQuote sx={{ fontSize: "15px" }} />
              </sub>
              Ich über mich
              <sup>
                <FormatQuote sx={{ rotate: "180deg", fontSize: "15px" }} />
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
        <CardMedia component="img" sx={{ width: 151 }} image={fotoMama} />
      </Card>

      <Typography
        variant="subtitle1"
        color="secondary.main"
        sx={{ gridRow: 2 }}
      >
        <h4>Fortbildungen</h4>
        <ul>
          <li>
            Biografisches und kreatives Schreiben in unterschiedlichen
            Lebensphasen und Lebenskrisen
          </li>
          <li>Dialektisch Behaviorale Therapie (Einfühung und Vertiefung)</li>
          <li>Achtsamkeitstraining MBSR (Mindful Based Stress Reduction)</li>

          <li>Umgang mit Depressionen</li>
          <li>Umgang mit Angstpatienten</li>
          <li>Open Dialogue (Zusatzqualifikation)</li>
          <li>
            Motivational Interviewing bei Menschen mit substanzbezogenen
            Störungen
          </li>
          <li>Kränkbarkeit und Kränkung bei narzistischen Persönlichkeiten</li>
          <li>Scham-die tabuisierte Emotion</li>
          <li>Das neue Bundesteilhabegesetz</li>
          <li>Wege in den Beruf nach einer psychischen Erkrankung</li>
          <li>Basiswissen Psychopharmakologie</li>
          <li>Rechtsgrundlagen zur Teilhabe am Arbeitsleben</li>
          <li>Hamet 3</li>
        </ul>
      </Typography>
    </Box>
  );
}
