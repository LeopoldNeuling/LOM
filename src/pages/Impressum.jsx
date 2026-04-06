import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ padding: "10vh" }}>
      <Link to="/">Zurück zur Website</Link>
      <br />
      <b>Impressum</b>
      <br />
      <br />
      Angaben gemäß § 5 DDG
      <br />
      Praxis für Ergotherapie und Lösungsorientiertes Malen
      <br />
      Maria Neuling
      <br />
      Berlepschstr. 2<br />
      14165 Berlin
      <br />
      <br />
      <b>Vertreten durch:</b>
      <br />
      Maria Neuling
      <br />
      <br />
      <b>Kontakt:</b>
      <br />
      Telefon: 0157-57 236 000
      <br />
      E-Mail: info@ergo-lom.de
      <br />
      <br />
      <b>Umsatzsteuer-ID:</b>
      <br />
      DE460694451
      <br />
      <br />
      <b>Aufsichtsbehörde:</b>
      <br />
      Landesamt für Gesundheit und Soziales (LAGeSo) Turmstraße 21 10559 Berlin
      <br />
      <br />
      <b>Verbraucherstreitbeilegung / Universalschlichtungsstelle:</b>
      <br />
      Wir nehmen nicht an Streitbeilegungsverfahren vor einer
      Verbraucherschlichtungsstelle teil und sind dazu auch nicht verpflichtet.
      <br />
    </div>
  );
}
