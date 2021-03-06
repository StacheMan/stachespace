import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { TwitchPlayer } from 'react-twitch-embed';
import Layout from "../components/layout"
//import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import * as embed from "../components/embed.module.css"
import Twitter from "../images/twitter icon3.png"
import YouTube from "../images/youtube icon3.png"
import Discord from "../images/discord icon3.png"
//import TikTok from "../images/TikTok.png"
import Instagram from "../images/instagram icon3.png"

const Frontpage = () => (
  <Layout>
    {/* <Seo title="Home" /> */}
    <div className={styles.textCenter} >
      <StaticImage
        src="../images/Icon.png"
        loading="eager"
        width={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
      />
      <h1>
        <b>Welcome to StacheSpace!</b>
      </h1>
      <p className={styles.textBody}>
        <b>Home of Musclestache, a man with a big mustache with an even bigger personality! <br></br>Follow my socials to keep up to date with everything Stache <h2>↓</h2></b>
      </p>
    </div>
    <ul className={styles.list}>
      <li>
        <a href="https://twitter.com/MusclestacheG">
          <img alt="Twitter" src={Twitter} width={100} height={100}></img>
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCP9thOaAhuyoyO8iVrHx2BQ/?guided_help_flow=5&disable_polymer=true">
          <img alt="YouTube" src={YouTube} width={100} height={100}></img>
        </a>
      </li>
      <li>
        <a href="https://discord.gg/G2xvVfA">
          <img alt="Discord" src={Discord} width={100} height={100}></img>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/musclestachegaming/">
          <img alt="Instagram" src={Instagram} width={100} height={100}></img>
        </a>
      </li>
      {/* <li>
          <a href="https://www.tiktok.com/@musclestachegaming">
            <img alt="TikTok" src={TikTok} width={50} height={50}></img>
          </a>
        </li> */}
    </ul>
    <div className={embed.playerSpecs}>
      <TwitchPlayer
        channel="musclestache"
        id="musclestache"
        theme="dark"
        muted
        height={600}
        width={1200}
        onVideoPause={() => console.log(':(')}
      />
    </div>
  </Layout>
)

export default Frontpage

