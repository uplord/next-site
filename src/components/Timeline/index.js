import styles from './style.module.scss';
import Link from 'next/link'
import { Svg, Buttons } from '@/components';
import Animated from '@/components/Animated';

export default function Timeline({ dataid }) {
  const buttons = [{
    title: 'Get in touch',
    link: 'mailto:michael@uplord.co.uk',
    class: 'primary',
  }];

  return (
    <Animated dataid={dataid} id="timeline" className={styles.timeline}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.list}>
            <div className={styles.item}>
              <h3>Sept 2021 - Present</h3>
              <h4>Senior Front End Developer</h4>
              <Link href="https://www.snappyshopper.co.uk/" target="_blank">
                <Svg name="snappy-logo" height={32} />
              </Link>
              <p>Returning to Hungrrr full time just in time for the merger with Snappy Shopper and continuing to lead the front end of the Hungrrr platform while also assisting the Snappy Shopper team. Updating and improving the ordering platform to keep up with style trends and work better for clients and members in the team.</p>
              <p>Maintaining hundreds of clients websites and making periodic changes to improve their performance and help pull through more sales. Increasing the amount of client enquiries to join the platforms through updates to the B2B websites making it easier to sign up and to keep a track of these leads.</p>
            </div>
            <div className={styles.item}>
              <h3>May 2020 - July 2020</h3>
              <h4>Front End Developer</h4>
              <Link href="https://www.hungrrr.co.uk/" target="_blank">
                <Svg name="hungrrr-logo" height={32} />
              </Link>
              <p>Leading front end in the company at the beginning of the pandemic. Integrating a table ordering system for businesses reopening to make the users journey easier and opening up this feature to all the client on this platform.</p>
              <p>Developing an internal business setup tool to make it easier for our team to add businesses to our system and also maintain clients. Continuing to do work for them while back at mtc due to the impact I made in the company even in just a short period of time.</p>
            </div>
            <div className={styles.item}>
              <h3>Sept 2015 - Sept 2021</h3>
              <h4>Front End Developer</h4>
              <Link href="https://www.mtc.co.uk/" target="_blank">
                <Svg name="mtc-logo" height={32} />
              </Link>
              <p>While in mtc I have worked in many areas of the company from leading projects to dealing with aftercare for clients. I was able to work on complex projects early into joining the company without needing much assistance to mentoring newer members of staff.</p>
              <p>I have dealt with hundreds of different websites and have the ability to work to tight deadlines without lowering quality. I have been able to work across multiple teams in the company and am quick to adapt to new situations.</p>
            </div>
          </div>
          <div className={styles.text}>
            <h2>My timeline</h2>
            <h3>Browse Michael Allen&apos;s timeline</h3>
            <p>I have included here my progress through the world of website development from my beginnings at university to my current work I do now. Each stage has helped to build me up to the developer I am today through lots of different projects big and small.</p>
            <Buttons data={buttons} className={styles.buttons} />
          </div>
        </div>
      </div>
    </Animated>
  )
}
