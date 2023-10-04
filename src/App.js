import * as React from "react";

import Grid from "@mui/material/Grid";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

import "react-tabs/style/react-tabs.css";

import Logo from "./assets/Naamloos.jpeg";
export default function APP() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <div className="left-bar"></div>
      </Grid>
      <Grid item xs={8}>
        <Grid container justifyContent={"space-between"}>
          <Grid item xs={3} className="left-img">
            <img src={Logo} alt="left-logo" />
          </Grid>
          <Grid item xs={6} className="title">
            <h1>14k | HaarlemRP</h1>
          </Grid>
          <Grid item xs={3} className="right-img">
            <img src={Logo} alt="right-logo" />
          </Grid>
        </Grid>
        <Tabs className="tabs">
          <TabList>
            <Tab>Rule</Tab>
            <Tab>Apply</Tab>
            <Tab>Info</Tab>
          </TabList>
          <TabPanel>
            <div className="text">
              <Paper variant="elevation" elevation={3} className="paper">
                discord regels zijn alsvolgt,
                <br />
                Al volg je de regels niet kan het verlopen tot een Mute,Kick of
                een ban!
                <br />
                Niet schelden.
                <br />
                Heb respect naar elkaar.
                <br />
                Geen 18+ content.
                <br />
                Niet spammen.
                <br />
                Geen bedreigingen.
                <br />
                Gebruik de kanalen waarvoor ze bedoeld zijn.
                <br />
                Geen racistische opmerkingen naar elkaar maken.
                <br />
                Niet onnodig iemand taggen.
                <br />
                Geen reclame maken voor bijvoorbeeld je yt kanaal of je eigen
                server ook niet in iemands dm!
                <br />
                Luister naar wat je wordt gevraagd door onze hogerop.
                <br />
                Leak geen persoonlijke informatie van andere mensen zonder
                toestemming.
              </Paper>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="btn-grp">
              <Paper variant="elevation" elevation={3} className="paper">
                <TextField id="Name" label="Name" variant="standard" />
              </Paper>
              <Paper variant="elevation" elevation={3} className="paper">
                <TextField
                  id="Discord"
                  label="Discord Name"
                  variant="standard"
                />
              </Paper>
              <Paper variant="elevation" elevation={3} className="paper">
                <TextField id="Leeftijd" label="Leeftijd" variant="standard" />
              </Paper>
              <Paper variant="elevation" elevation={3} className="paper">
                <TextField
                  id="Plusmunten"
                  label="Plusmunten 3+"
                  variant="standard"
                />{" "}
              </Paper>
              <Paper variant="elevation" elevation={3} className="paper">
                <TextField
                  id="Minpunten"
                  label="Minpunten 2+"
                  variant="standard"
                />{" "}
              </Paper>
              <Paper variant="elevation" elevation={3} className="paper">
                <TextField
                  id="Motivatie"
                  label="Motivatie 50+ Woorden"
                  variant="standard"
                />{" "}
              </Paper>
              <Paper variant="elevation" elevation={3} className="paper">
                <TextField
                  id="Ervaring"
                  label="Ervaring kwa gangs"
                  variant="standard"
                />{" "}
              </Paper>
              <Paper variant="elevation" elevation={3} className="paper">
                <TextField
                  id="Bezittingen"
                  label="Bezittingen in de stad"
                  variant="standard"
                />{" "}
              </Paper>
              <Paper variant="elevation" elevation={3} className="paper">
                <TextField
                  id="Voldoe"
                  label="Voldoe je aan de eisen?"
                  variant="standard"
                />{" "}
              </Paper>
              <Paper variant="elevation" elevation={3} className="paper">
                <TextField
                  id="Waarom"
                  label="Waarom ons en niet een andere gang?"
                  variant="standard"
                />{" "}
              </Paper>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="text">
              <Paper variant="elevation" elevation={3} className="paper">
                14k Triad, 14K Triad is een nieuwe beruchte gang in Haarlem
                Roleplay.
                <br />
                Wij zijn een rijke,slimme en taktische gang. Wij doen dagelijks
                Grote scenarios. Zoals overvallen,geizelingen en transporten.
                <br />
                Wij hebben een aantal eisen maar ook heel veel te bieden! Wij
                zoeken nog leden tevegens!
                <br />
                Denk jij dat je bij onze gang past? Maak zsm een sollicitatie
                aan En dan misschien tot snel!!
                <br />
                Hieronder vind je onze eisen en wat we te bieden hebben!
                <br />
                Eisen 15+ <br />
                Actief <br />
                In bezit van wapens <br />
                Goeie roleplay kunnen neerzetten <br />
                Motivatie hebben <br />
                Goeie porto protocol en communicatie Volwassen gedrag <br />
                Aardig zijn en niet toxic gedragen <br />
                Dit zijn onze eisen! Zijn er natuurlijk een aantal maar wij
                willen een profesionele gang samenstellen! en tevegens hebben
                wij ook veel te bieden! Wat hebben wij te bieden? Wapeninkoop{" "}
                <br />
                F6 Menu <br />
                Mooi ganghuis <br />
                Goeie shooters <br />
                Goeie roleplay scenarios <br />
                Ervaren leden en bosses <br />
                Een actieve en volwassen gang <br />
                Profesionele discord en eigen bot <br />
                Custom website <br />
                Grote giveaways onder de gang <br />
                En nog veel meer!! <br />
                Lijkt jou dit nou wat? Maar zsm een sollicitatie aan of
                contacteer glow_osrb op discord en je hoort zsm van ons terug!!
                <br />
                Mvg, 14k Triad.
              </Paper>
            </div>
          </TabPanel>
        </Tabs>
      </Grid>
      <Grid item xs={2}>
        <div className="right-bar"></div>
      </Grid>
    </Grid>
  );
}
