import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { isMobile } from "../../helper/helperFunc";

const links = [
  {
    title: "Intuarts",
    url: "https://www.intuarts.com",
    imgSrc:
      "https://static.wixstatic.com/media/a72785_c264a72d48ce4a2c91bffbb56d9033d0~mv2.jpg/v1/fill/w_118,h_120,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Intuarts%20Logo%20Apple.jpg",
  },
  {
    title: "Jan Friedrich Psychotherapie",
    url: "https://jan-friedrich-psychotherapie.de",
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/6705ab9a600c7e2e2d25c40f/5f1c8f3d-c589-436a-880b-fa341b862191/JAN+FR+EDRICH-logo+%282%29.png?format=1500w",
  },
  {
    title: "Fokus Psychotherapie",
    url: "https://www.fokus-psychotherapie.de",
    imgSrc:
      "https://www.fokus-psychotherapie.de/.cm4all/uproc.php/0/.logo%20ausgeschnitten%20warmgrau%20mit%20wei%C3%9F%20hintgerund%20sticker.png/picture-1200?_=19bcd488b14",
  },
  {
    title: "May Carro Cabaleiro",
    url: "https://maycarrocabaleiro.com/de/startseite/",
    imgSrc:
      "https://maycarrocabaleiro.com/wp-content/uploads/2020/04/logo-may-web-GOLD-450.png",
  },
  {
    title: "Julia Gustavus",
    url: "https://juliagustavus.com",
    imgSrc: "https://juliagustavus.com/img/logo-farbe.png",
  },
  {
    title: "LOM International",
    url: "https://lom-international.org/de/home",
    imgSrc:
      "https://lom-international.org/fileadmin/sys/fe/public/img/logo.png",
  },
];

export default function Webtipps() {
  return (
    <Box sx={{ padding: "5vw" }}>
      <Link to="/">Zurück zur Website</Link>
      <Typography variant={isMobile() ? "h2" : "h1"} sx={{ my: 3 }}>
        Webtipps
      </Typography>

      <Grid container spacing={3}>
        {links.map((link, index) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={index}
            sx={isMobile() ? { width: "100%" } : {}}
          >
            <Card>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline" }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={link.imgSrc}
                  alt={link.title}
                  sx={{ objectFit: "contain", p: 2 }}
                />
                <CardContent>
                  <Typography variant="h6" align="center">
                    {link.title}
                  </Typography>
                </CardContent>
              </a>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
