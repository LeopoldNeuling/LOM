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
import AudioCard from "../fragments/AudioCard";
import StaffInfo from "../fragments/StaffInfo";

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
  return (
    <Box
      ref={myRef}
      id="ueberMich"
      className={
        isMobile() ? "mobile-page mobile-content-page" : "page content-page"
      }
      sx={{
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
      <AudioCard name="Maria Neuling" voiceline={introAudio} photo={fotoMama} />

      {/* Other */}
      <AudioCard name="Maria Neuling" voiceline={introAudio} photo={""} />

      {/* Info Maria */}

      <StaffInfo>
        <ul>
          <li>
            2015-2018: Primärqualifizierender Studiengang Ergotherapie (B.Sc.),
            IB-Hochschule Berlin
          </li>
          <li>
            10/2018 – 06/2021: Ergotherapeutin (B.Sc.) Ambulante Arbeitstherapie
            am Anderen Ort, St. Hedwig Krankenhaus, Berlin
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
            03/2026: Gründung Praxis für Ergotherapie und Lösungsorientiertes
            Malen
          </li>
        </ul>
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
          <li>Kränkbarkeit und Kränkung bei narzisstischen Persönlichkeiten</li>
          <li>Scham - die tabuisierte Emotion</li>
          <li>Das neue Bundesteilhabegesetz</li>
          <li>Wege in den Beruf nach einer psychischen Erkrankung</li>
          <li>Basiswissen Psychopharmakologie</li>
          <li>Rechtsgrundlagen zur Teilhabe am Arbeitsleben</li>
          <li>Hamet 3</li>
        </ul>
      </StaffInfo>

      {/* Info Other */}
      <StaffInfo>
        <ul>
          <li>
            2015-2018: Primärqualifizierender Studiengang Ergotherapie (B.Sc.),
            IB-Hochschule Berlin
          </li>
          <li>
            10/2018 – 06/2021: Ergotherapeutin (B.Sc.) Ambulante Arbeitstherapie
            am Anderen Ort, St. Hedwig Krankenhaus, Berlin
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
            03/2026: Gründung Praxis für Ergotherapie und Lösungsorientiertes
            Malen
          </li>
        </ul>
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
          <li>Kränkbarkeit und Kränkung bei narzisstischen Persönlichkeiten</li>
          <li>Scham - die tabuisierte Emotion</li>
          <li>Das neue Bundesteilhabegesetz</li>
          <li>Wege in den Beruf nach einer psychischen Erkrankung</li>
          <li>Basiswissen Psychopharmakologie</li>
          <li>Rechtsgrundlagen zur Teilhabe am Arbeitsleben</li>
          <li>Hamet 3</li>
        </ul>
      </StaffInfo>
    </Box>
  );
}
