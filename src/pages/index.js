import {
  Title, Container, createStyles, SimpleGrid, Image, Text, Button, Card, Grid, Col, getStylesRef,
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

  firstCol: {
    padding: 0,

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
        keywords="Breathe Accra, Accra, breathe, ghana air quality, ghana clean air initiative, clean air ghana, ghana environment, ghana air pollution, ghana pollution, breatheaccra, accrabreathe, accra breathe, breathe accra, ghana, ghana air, breathe ghana, air quality in accra, air pollution in accra, how to improve air quality in accra, what causes air pollution in accra, the effects of air pollution on health, the cost of air pollution, how to reduce air pollution, air pollution solutions, air pollution awareness, air pollution prevention"
        description="Breathe Accra ensures openly accessible hyperlocal air quality data in the Greater Accra Metropolitan Area for public awareness and influencing air pollution control decision-making."
      />

      <>
        <Container size="80%">
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
      </>
    </>
  )
}
