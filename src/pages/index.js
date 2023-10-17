import {
  Title, Container, createStyles, SimpleGrid, Blockquote, Image, Text, Button, Card, Grid, Col, getStylesRef,
} from "@mantine/core";
import Link from "next/link";
import { SEOHead } from "../layout/SEOHead";
import { Typewriter } from 'react-simple-typewriter'

const useStyles = createStyles((theme) => ({
  container: {
    padding: "0%",

    // [theme.fn.largerThan('xs')]: {
    //     backgroundColor: theme.colors.orange[6],
    // },

    // [theme.fn.largerThan('sm')]: {
    //     backgroundColor: theme.colors.red[6],
    // },

    // [theme.fn.largerThan('md')]: {
    //     backgroundColor: theme.colors.blue[6],
    // },

    // [theme.fn.largerThan('lg')]: {
    //     backgroundColor: theme.colors.yellow[6],
    // },
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
}));

export default function Home() {
  const { classes, cx } = useStyles();

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
        </Container>
      </>
    </>
  )
}
