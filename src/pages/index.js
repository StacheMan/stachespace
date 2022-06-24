import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { TwitchEmbed } from 'react-twitch-embed';
import  { Layout }  from "../components/layout"
// import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import * as embed from "../components/embded.module.css"

const links = [
  {
    text: "Twitter",
    url: "https://twitter.com/MusclestacheG",
    description:
      "Check out my Twitter for random thoughts and stream updates",
  },
  {
    text: "YouTube",
    url: "https://www.youtube.com/channel/UCP9thOaAhuyoyO8iVrHx2BQ/?guided_help_flow=5&disable_polymer=true",
    description:
      "Check out my YouTube, where I post playthroughs and clip compilations.",
  },
  {
    text: "Discord",
    url: "https://discord.gg/G2xvVfA",
    description:
      "Come join the discord to hang out, game, and be notified when I go live",
  },
  {
    text: "TikTok",
    url: "https://www.tiktok.com/@musclestachegaming",
    description:
      "Check out my TikTok, where I post my best edited clips",
  },
]

export const Stream = () => {
  return (
    <div className={embed.playerSpecs}>
      <TwitchEmbed
        channel="musclestache"
        id="musclestache"
        theme="dark"
        muted
        height={600}
        width={1200}
        padding-left={1000}
        margin-left={0}
        onVideoPause={() => console.log(':(')}
      />
    </div>
  );
}

export const IndexPage = () => (
  <Layout>
    {/* <Seo title="Home" /> */}
    <div className={styles.textCenter}>
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
        <b>Musclestache's StacheSpace!</b>
      </h1> 
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li id={link.image} key={link.url} className={styles.listItem}>
          <a
           
            className={styles.listItemLink}
            href={`${link.url}`}
            
          >
            {link.text} ↗
            
          </a>
          <a

            href={`${link.image}`}

          >
            
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

// export { IndexPage, Stream} 

