import { useRef, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  IconButton,
  CardMedia,
} from "@mui/material";
import { SkipPrevious, Pause, PlayArrow } from "@mui/icons-material";
import { isMobile } from "../helper/helperFunc";

export default function AudioCard({ name, voiceline, photo, row, col }) {
  // audio
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
    <Card
      sx={{
        gridRow: row,
        gridColumn: col,
        display: "flex",
        maxWidth: "100%",
        marginTop: isMobile() ? "5vh" : 0,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="h5" sx={{ color: "text.secondary" }}>
            {name}
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
            src={voiceline}
            ref={audioRef}
            onTimeUpdate={getAudioProgress}
          />
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 200, maxWidth: "50%" }}
        image={photo}
      />
    </Card>
  );
}
