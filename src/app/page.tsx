import styles from '@/app/page.module.scss'
import { Header, Footer, Banner, Section, Projects, Timeline, Stack } from '@/components'
import { useBreakpoints } from '@/utils/useBreakpoints'

export default function Home() {
  const breakpoints = useBreakpoints()

  return (
    <div className={styles.page}>
      <Header home={true} />
      <main className={styles.main}>
        <Banner id="banner" queueId={0} data={{
          title: '<span>Hi, I\'m Michael</span> A Front End Developer',
          subtitle: 'With 9 years in the industry creating websites',
          buttons: [{
            title: 'Get in touch',
            link: 'mailto:michael@uplord.co.uk',
            class: 'primary large',
          },{
            title: 'Download CV',
            link: '/michael-allen-cv.pdf',
            class: 'link large',
            target: '_blank',
          }],
          image: {
            src: '/images/me.jpeg',
            alt: 'Hi, I\'m Michael',
            sizes: `(max-width: ${breakpoints.md - 1}px) 140px, 500px`,
            width: 500,
            height: 499,
          }
        }} />
        <Section id="about-me" queueId={1} data={{
          title: 'About Michael Allen',
          subtitle: 'Front End Development',
          content:
            `I'm an experienced Front End Developer with excellent collaboration, organization, and teamwork skills. Passionate about developing in HTML, CSS, and JavaScript and always open to exploring new technologies. Over the last 9 years, I've worked with various clients, helping me hone my analytical, debugging, and problem-solving skills to create exceptional websites.`,
          buttons: [
            {
              title: 'Get in touch',
              link: 'mailto:michael@uplord.co.uk',
              class: 'primary',
            },
          ],
          image: {
            src: '/images/me.png',
            alt: 'Michael Allen',
            sizes: `(max-width: ${breakpoints.md - 1}px) 240px, 500px`,
            width: 500,
            height: 617,
          },
        }} />
        <Projects id="projects" queueId={2} data={{
          title: 'Projects I\'ve worked on',
          list: [
            { type: 'svg', name: 'brewdog', tooltip: 'Brewdog' },
            { type: 'svg', name: 'gdk', tooltip: 'German Doner Kebab' },
            { type: 'svg', name: 'subway', tooltip: 'Subway' },
            { type: 'svg', name: 'umbro', tooltip: 'Umbro' },
            { type: 'svg', name: 'superga', tooltip: 'Superga' },
            { type: 'svg', name: 'dundeeunited', tooltip: 'Dundee United Football Club' },
            { type: 'svg', name: 'hungrrr', tooltip: 'Hungrrr' },
            { type: 'svg', name: 'snappy', tooltip: 'Snappy Shopper' },
            { type: 'svg', name: 'macdonalds', tooltip: 'Macdonald Hotels & Resorts' },
            { type: 'svg', name: 'campbells', tooltip: 'Campbells Meat' },
            { type: 'image', src: '/images/petervardy.png', alt: 'Peter Vardy', tooltip: 'Peter Vardy' },
            { type: 'image', src: '/images/carmoney.png', alt: 'CarMoney', tooltip: 'CarMoney' },
          ]
        }} />
        <Timeline id="timeline" queueId={3} data={{
          title: 'My timeline',
          subtitle: 'Browse Michael Allen\'s timeline',
          content: 'I have included here my progress through the world of website development from my beginnings at university to my current work I do now. Each stage has helped to build me up to the developer I am today through lots of different projects big and small.',
          buttons: [{
            title: 'Get in touch',
            link: 'mailto:michael@uplord.co.uk',
            class: 'primary',
          }],
          list: [{
            title: 'Jan 2025 - Present',
            subtitle: 'Software Engineer',
            logo: 'leaseloco',
            link: 'https://www.leaseloco.com/',
            content: '',
          },{
            title: 'Sept 2021 - Jan 2025',
            subtitle: 'Senior Front End Developer',
            logo: 'snappy-logo',
            link: 'https://www.snappyshopper.co.uk/',
            content: '<p>Returning to Hungrrr full time just in time for the merger with Snappy Shopper and continuing to lead the front end of the Hungrrr platform while also assisting the Snappy Shopper team. Updating and improving the ordering platform to keep up with style trends and work better for clients and members in the team.</p><p>Maintaining hundreds of clients websites and making periodic changes to improve their performance and help pull through more sales. Increasing the amount of client enquiries to join the platforms through updates to the B2B websites making it easier to sign up and to keep a track of these leads.</p>',
          },{
            title: 'May 2020 - July 2020',
            subtitle: 'Front End Developer',
            logo: 'hungrrr-logo',
            link: 'https://www.hungrrr.co.uk/',
            content: '<p>Leading front end in the company at the beginning of the pandemic. Integrating a table ordering system for businesses reopening to make the users journey easier and opening up this feature to all the client on this platform.</p><p>Developing an internal business setup tool to make it easier for our team to add businesses to our system and also maintain clients. Continuing to do work for them while back at mtc due to the impact I made in the company even in just a short period of time.</p>',
          },{
            title: 'Sept 2015 - Sept 2021',
            subtitle: 'Front End Developer',
            logo: 'mtc-logo',
            link: 'https://www.mtc.co.uk/',
            content: '<p>While in mtc I have worked in many areas of the company from leading projects to dealing with aftercare for clients. I was able to work on complex projects early into joining the company without needing much assistance to mentoring newer members of staff.</p><p>I have dealt with hundreds of different websites and have the ability to work to tight deadlines without lowering quality. I have been able to work across multiple teams in the company and am quick to adapt to new situations.</p>',
          }]
        }} />
        <Stack id="stack" queueId={4} data={{
          title: 'My current stack',
          list: [{
            icon: 'html5',
            tooltip: 'HTML5',
          },{
            icon: 'css',
            tooltip: 'CSS',
          },{
            icon: 'js',
            tooltip: 'JavaScript',
          },{
            icon: 'sass',
            tooltip: 'Sass',
          },{
            icon: 'react',
            tooltip: 'React',
          },{
            icon: 'nextjs',
            tooltip: 'NextJs',
          },{
            icon: 'typescript',
            tooltip: 'TypeScript',
          },{
            icon: 'git',
            tooltip: 'Git',
          },{
            icon: 'github',
            tooltip: 'Github',
          },{
            icon: 'aws',
            tooltip: 'Amazon Web Services',
          },{
            icon: 'netlify',
            tooltip: 'Netlify',
          },{
            icon: 'vscode',
            tooltip: 'VS Code',
          }]
        }} />
      </main>
      <Footer id="footer" queueId={5} />
    </div>
  )
}
