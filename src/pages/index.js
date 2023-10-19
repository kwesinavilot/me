import {
  Title, Container, ActionIcon, createStyles, Group, SimpleGrid, Blockquote, Image, Text, Card, Grid,
} from "@mantine/core";
import { SEOHead } from "../layout/SEOHead";
import { Typewriter } from 'react-simple-typewriter';
import Link from "next/link";
import { IconMail, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  container: {
    padding: "0%",
  },

  spaceIn: {
    padding: "4%",

    [theme.fn.smallerThan('xs')]: {
      paddingTop: "10%",
      paddingBottom: "10%",
    },

    [theme.fn.largerThan('xs')]: {
      padding: "6%",
    },

    [theme.fn.largerThan('sm')]: {
      padding: "5%",
    },
  },

  social: {
    'button': {
      color: theme.colors.main[9]
    },

    'button:hover': {
      color: theme.black,
      backgroundColor: theme.white,
    },

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },

  firstCol: {
    padding: 0,

    [theme.fn.smallerThan('md')]: {
      textAlign: "center",
    },

    [theme.fn.largerThan('md')]: {
      textAlign: "left",
    },
  },

  textAlign: {
    [theme.fn.smallerThan('md')]: {
      textAlign: "center",
    },

    [theme.fn.largerThan('md')]: {
      textAlign: "left",
    },
  },

  card: {
    position: 'relative',
    backgroundColor: theme.white,
    flexDirection: 'column',
    alignItems: 'flex-start',
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },
  },

  cardTitle: {
    textAlign: "center",
    fontWeight: 600,
    color: theme.black,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
}));

const interestData = [
  {
    title: 'Backend Engineering',
    description:
      'I have a deep interest in backend development, where I craft the logic and functionality that powers applications.',
    image: {
      src: "/images/backend.jpg",
      width: 370
    },
  },
  {
    title: 'Data Science',
    description:
      'Data fascinates me, and I enjoy extracting insights from data to inform decisions.',
    image: {
      src: "/images/ds-1.jpg",
      width: 360
    },
  },
  {
    title: 'AI/ML',
    description:
      "I'm exploring the fascinating world of Artificial Intelligence and Machine Learning to build intelligent applications.",
    image: {
      src: "/images/ai-ml-1.jpg",
      width: 365
    },
  },
  {
    title: 'Blockchain',
    description:
      "The potential for blockchain technology to revolutionize industries is a subject of great interest to me.",
    image: {
      src: "/images/block-1.jpeg",
      width: 360
    },
  },
];

export function Interests({ title, image: { src, width }, description }) {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <Image
          src={src}
          width={width}
          height={300}
          alt={title}
        />
      </Card.Section>

      <Title order={4} className={classes.cardTitle}>{title}</Title>

      <Text className={classes.role} c="dimmed">{description}</Text>


    </Card>
  );
}

export default function Home() {
  const { classes, cx } = useStyles();

  const interests = interestData.map((interests, index) => <Interests {...interests} key={index} />)

  return (
    <>
      <SEOHead
        title="Home"
        keywords="andrews kwesi ankomahene, Andrews Kwesi Ankomahene, Kwesi Ankomahene, Kwesi Navilot, Navilot, Andrews Kwesi, Kwesi"
        description="Hello, this is Andrews Kwesi Ankomahene and welcome to my website. Here, you get to hear my story and understand me better."
      />

      <>
        <Container size="xl">
          <Grid m={0} gutter={80} justify="space-around" align="center">
            <Grid.Col span={7} className={classes.firstCol}>
              <Title>Hello, I'm Andrews Kwesi Ankomahene;</Title>

              <Title fz="60px">
                a <Text
                  variant="gradient"
                  gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                  component="span"
                  fw={700}
                  fz="60px"
                >
                  <Typewriter
                    words={['Technopreneur', 'Software Engineer', 'Blockchain Enthusiast']}
                    loop={0}
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </Text>
              </Title>
            </Grid.Col>

            <Grid.Col span={5} p={0}>
              <Image src="/images/headshot.png" />
            </Grid.Col>
          </Grid>
        </Container>

        <Container bg="white" p={0} fluid>
          <Container py="4%" px={0} size="xl">
            <Grid m={0} gutter={100} justify="space-between" align="flex-start">
              <Grid.Col span={6} className={classes.firstCol}>
                <Title order={2} className={classes.textAlign} mb="sm">
                  Overview
                </Title>

                <Text className={classes.textAlign} mb="5%">
                  I love finding workable solutions to problems. I am proficient in languages such as Java, PHP, Python, and JavaScript, and experienced
                  in using frameworks such as Laravel, Django, NextJS, and Vue. I also have intermediate knowledge on Machine Learning and Blockchain technologies.
                </Text>

                <Text className={classes.textAlign} mb="5%">
                  I see my techical skills are my superpowers, and I'm using them to build solutions to the
                  world's problems. I help organizations to improve or create products and services that are
                  just right for them or their customers.
                </Text>

                <Text>
                  My colleagues often describe me as a proactive and resourceful individual with a positive attitude and a strong commitment to meeting goals.
                  I am always seeking an opportunity where I can utilize my technical skills and problem-solving abilities to drive innovation and success and make a
                  positive impact.
                </Text>
              </Grid.Col>

              <Grid.Col span={6} py={0}>
                <Title order={2} className={classes.textAlign} mb="sm">
                  Favourite Quote
                </Title>

                <Blockquote fz="xl" fw={500} color="teal" cite="~ Nelson Mandela">
                  It always seems impossible until it is done.
                </Blockquote>

                <Text className={classes.textAlign} mb="5%">
                  This quote is a powerful reminder that anything is possible if I set my mind to it. Nelson Mandela himself is a testament to this quote,
                  having overcome seemingly insurmountable odds to become the first black president of South Africa.
                </Text>

                <Text>
                  This quote reminds me that even the tallest mountains can be climbed and conquered. It may not seem possible
                  initially, but with an optimistic mindset, focus, patience, and persistence, I can achieve anything.
                  All it takes is the courage to try and the determination to never give up.
                </Text>
              </Grid.Col>
            </Grid>
          </Container>

          <Container py="4%" px={0} size="xl">
            <Title order={2} align="center" mb="3rem">
              My Areas Of Interest
            </Title>

            <SimpleGrid
              cols={4}
              spacing="xl"
              verticalSpacing="xl"
              breakpoints={[
                { maxWidth: 'lg', cols: 3, spacing: 'xl' },
                { maxWidth: 'md', cols: 2, spacing: 'xl' },
                { maxWidth: 'sm', cols: 2, spacing: 'xl' },
                { maxWidth: 'xs', cols: 2, spacing: 'md' },
              ]}
              className={classes.partiesCol}
            >
              {interests}
            </SimpleGrid>
          </Container>
        </Container>

        <Container bg="black" py="4%" px={0} fluid>
          <Title c="white" order={2} align="center" mb="1.5rem">
            Connect With Me
          </Title>

          <Group spacing="2%" className={classes.social} position="center" noWrap>
            <Link href="mailto:andrews.ankomahene@gmail.com" target="_blank">
              <ActionIcon size="xl" variant="subtle" radius="xl">
                <IconMail size={30} stroke={1.25} />
              </ActionIcon>
            </Link>

            <Link href="https://www.linkedin.com/in/andrews-kwesi-ankomahene/" target="_blank">
              <ActionIcon size="xl" variant="subtle" radius="xl">
                <IconBrandLinkedin size={30} stroke={1.25} />
              </ActionIcon>
            </Link>

            <Link href="https://www.twitter.com/kwesinavilot" target="_blank">
              <ActionIcon size="xl" variant="subtle" radius="xl">
                <IconBrandTwitter size={30} stroke={1.25} />
              </ActionIcon>
            </Link>

            <Link href="https://www.instagram.com/thekwesinavilot" target="_blank">
              <ActionIcon size="xl" variant="subtle" radius="xl">
                <IconBrandInstagram size={30} stroke={1.25} />
              </ActionIcon>
            </Link>

            <Link href="https://www.facebook.com/andrewskwesi.ankomahene.3/" target="_blank">
              <ActionIcon size="xl" variant="subtle" radius="xl">
                <IconBrandFacebook size={30} stroke={1.25} />
              </ActionIcon>
            </Link>

            <Link href="https://www.youtube.com/buildwithnavilot" target="_blank">
              <ActionIcon size="xl" variant="subtle" radius="xl">
                <IconBrandYoutube size={30} stroke={1.25} />
              </ActionIcon>
            </Link>
          </Group>
        </Container>
      </>
    </>
  )
}
