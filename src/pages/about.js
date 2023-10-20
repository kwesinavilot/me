import {
    Title, Container, createStyles, SimpleGrid, Image, Text, Card, getStylesRef,
} from "@mantine/core";
import { SEOHead } from "../components/layout/SEOHead";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
    topLevel: {
        padding: "5%",
    },

    spaceIn: {
        [theme.fn.smallerThan('xs')]: {
            padding: "10% 5%",
        },

        [theme.fn.largerThan('xs')]: {
            padding: "10%",
        },

        [theme.fn.largerThan('sm')]: {
            padding: "10%",
        },

        [theme.fn.largerThan('md')]: {
            padding: "3.5% 6%",
        },
    },

    title: {
        marginBottom: theme.spacing.md,
        textAlign: "center",

        [theme.fn.smallerThan('sm')]: {
            marginBottom: theme.spacing.sm,
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
        transition: 'border 150ms ease',

        '&:hover': {
            boxShadow: theme.shadows.xs
        },

        [`&:hover .${getStylesRef('image')}`]: {
            transform: 'scale(1.05)',
        },
    },

    cardTitle: {
        textAlign: "center",
        fontWeight: 600,
        color: theme.black,
        marginTop: theme.spacing.md,
        marginBottom: theme.spacing.sm,
    },

    light: {
        color: theme.colors.main[5],
        fontSize: 35,
        fontWeight: 500,
        textAlign: "center",

        [theme.fn.smallerThan('sm')]: {
            fontSize: 28,
        },
    },

    image: {
        ref: getStylesRef('image'),

        transition: "transform 500ms ease",
    },

    middle: {
        padding: "0 0 5%",
        // background: "red",

        [theme.fn.smallerThan('lg')]: {
            padding: "0 5% 5%",
            // background: "purple",
        },
    },
}));

export default function Projects() {
    const { classes, cx } = useStyles();

    // const works = worksData.map((works, index) => <Work {...works} key={index} />)

    return (
        <>
            <SEOHead
                title="Projects"
                keywords="andrews kwesi ankomahene, Andrews Kwesi Ankomahene, Kwesi Ankomahene, Kwesi Navilot, Navilot, Andrews Kwesi, Kwesi"
                description="Hello, this is Andrews Kwesi Ankomahene and welcome to my website. Here, you get to hear my story and understand me better."
            />

            <>
                <Container size="lg" data-purpose="page-header" className={classes.topLevel}>
                    <Title order={3} className={classes.title}>About Me</Title>

                    <Text className={classes.light}>
                        Here are a few remarkable projects I have worked on
                    </Text>
                </Container>

                <Container className={classes.middle} size="xl">
                    <SimpleGrid
                        cols={3}
                        spacing="xl"
                        verticalSpacing="3rem"
                        breakpoints={[
                            { maxWidth: 'lg', cols: 3, spacing: 'xl' },
                            { maxWidth: 'md', cols: 2, spacing: 'xl' },
                            { maxWidth: 'sm', cols: 2, spacing: 'xl' },
                            { maxWidth: 'xs', cols: 1, spacing: 'xl' },
                        ]}
                        className={classes.partiesCol}
                    >
                        <Text>Hello</Text>
                    </SimpleGrid>
                </Container>
            </>
        </>
    );
}