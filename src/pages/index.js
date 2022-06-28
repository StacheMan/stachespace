import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { TwitchEmbed } from 'react-twitch-embed';
import   Layout   from "../components/layout"
 import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import * as embed from "../components/embed.module.css"
import Twitter from "../images/twitter1.png"
import YouTube from "../images/youtube.png"
import Discord from "../images/discord.png"
import TikTok from "../images/TikTok.png"

 const Stream = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter} cla>
      <StaticImage
        src="../images/Icon.png"
        loading="eager"
        width={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        <b>Welcome to StacheSpace!</b>
      </h1> 
    </div>
    <div className={embed.playerSpecs}>
    <TwitchEmbed
      channel="musclestache"
      id="musclestache"
      theme="dark"
      muted
      height={600}
      width={1200}
      
       //padding-left={1000}
       //margin-left={0}
      onVideoPause={() => console.log(':(')}
    />
  </div>
    <ul className={styles.list}>
      <li>
          <a href="https://twitter.com/MusclestacheG">
            <img alt="Twitter" src={Twitter} width={50} height={50}></img>
          </a>

          <p className={styles.listItemDescription}>Check out my Twitter for random thoughts and stream updates!</p>
        </li>
        <li>
            <a href="https://www.youtube.com/channel/UCP9thOaAhuyoyO8iVrHx2BQ/?guided_help_flow=5&disable_polymer=true">
              <img alt="YouTube" src={YouTube} width={50} height={50}></img>
            </a>

            <p className={styles.listItemDescription}>Check out my YouTube, where I post my playthroughs and clip compilations!</p>
          </li>
          <li>
          <a href="https://discord.gg/G2xvVfA">
            <img alt="Discord" src={Discord} width={50} height={50}></img>
          </a>

          <p className={styles.listItemDescription}>Come join the discord to hang out, game, and be notified when I go live</p>
        </li>
        <li>
          <a href="https://www.tiktok.com/@musclestachegaming">
            <img alt="TikTok" src={TikTok} width={50} height={50}></img>
          </a>

          <p className={styles.listItemDescription}>Check out my TikTok, where I post my best edited clips</p>
        </li>
    </ul>
  </Layout>
)


export default Stream 

