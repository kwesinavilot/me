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

const worksData = [
    {
        title: 'Breathe Accra',
        description:
            "The Breathe Accra Project uses cutting-edge air quality monitoring sensors to provide open access to hyperlocal air quality data in the Greater Accra Metropolitan Area. We track air pollution levels and recommend interventions.",
        image: {
            src: "./images/breatheaccra.png",
            width: 425
        },
        link: "https://breatheaccra.org/",
    },
    {
        title: 'UTAG-UCC Welfare Portal',
        description:
            'The UTAG-UCC Welfare Portal digitizes and streamlines the process that association members use to request for their membership benefits and provides executives with an easy means to process requests, generate reports and audit their finances.',
        image: {
            src: "./images/utagucc.png",
            width: 425
        },
        link: "https://utagucc.com/",
    },
    {
        title: 'Towncraft',
        description:
            "Towncraft optimizes district-level infrastructure development using 2021 censud data. It assesses population density, service accessibility, and identifies critical infrastructure needs, aiding local governments in informed decision-making.",
        image: {
            src: "./images/towncraft.png",
            width: 365
        },
        link: "https://github.com/kwesinavilot/towncraft",
    },
    {
        title: 'Dwadipa',
        description:
            "Dwadipa was originally an ecommerce platform in the University of Cape Coast. We pivoted to create a B2C and B2B marketplace where vendors can sell to students directly.",
        image: {
            src: "./images/dwadipa1.png",
            width: 420
        },
        link: "#",
    },
    {
        title: 'Bascidol AI',
        description:
            "Bascidol uses machine learning to assist medical officers in determining the acidity levels of a COPD patient's blood and to determine if they have Acid-Base Disorder. Bascidol's speed and accuracy helps doctors to know how best to treat COPD patients.",
        image: {
            src: "./images/bascidol.png",
            width: 420
        },
        link: "#",
    },
    {
        title: 'VOTEC Restaurant Panel & API',
        description:
            "This is the Control Panel and the API for the VOTEC Restaurant mobile app. This part of the infrastructure handles inventory, menus, orders, reports and deliveries. A section of it handles API requests from the mobile and reconciles.",
        image: {
            src: "./images/votec.png",
            width: 420
        },
        link: "#",
    },
    {
        title: 'ServicesKeep',
        description:
            "ServicesKeep is a simple but secured way to store your passwords, bank accounts, identity cards, personal notes and other important details with little stress and no fear. It uses industry-grade cryptography algorithms to protect data both at rest and in transit.",
        image: {
            src: "./images/votec.png",
            width: 420
        },
        link: "#",
    },
    {
        title: 'Tidings Package',
        description:
            "This is a PHP and Laravel package is for sending SMS notifications programmatically through the mNotify platform. It has inbuilt support for queues and message scheduling. It also provides a view that can be used by developers to track their mNotify account.",
        image: {
            src: "./images/tidings.png",
            width: 420
        },
        link: "https://packagist.org/packages/naviware/tidings",
    },
    {
        title: "Dr. Angela Akorsu's Website",
        description:
            "Dr. Angela Dziedzom Akorsu is a Senior Research Fellow and the Head of Department at the Department of Labour and Human Resource Studies , School for Development Studies at the University of Cape Coast. I built her website.",
        image: {
            src: "./images/akorsu.png",
            width: 420
        },
        link: "https://angelaakorsu.onrender.com/",
    },
];

export function Work({ title, image: { src, width }, description, link }) {
    const { classes } = useStyles();

    return (
        <Link
            href={link}
            style={{ textDecoration: 'none', width: '100%' }}
            target="_blank"
        >
            <Card withBorder radius="md" className={classes.card}>
                <Card.Section>
                    <Image
                        src={src}
                        width={width}
                        height={300}
                        alt={title}
                        className={classes.image}
                    />
                </Card.Section>

                <Title order={4} className={classes.cardTitle}>{title}</Title>

                <Text className={classes.role} c="dimmed">{description}</Text>
            </Card>
        </Link>
    );
}

export default function Projects() {
    const { classes, cx } = useStyles();

    const works = worksData.map((works, index) => <Work {...works} key={index} />)

    return (
        <>
            <SEOHead
                title="Projects"
                keywords="andrews kwesi ankomahene, Andrews Kwesi Ankomahene, Kwesi Ankomahene, Kwesi Navilot, Navilot, Andrews Kwesi, Kwesi"
                description="Hello, this is Andrews Kwesi Ankomahene and welcome to my website. Here, you get to hear my story and understand me better."
            />

            <>
                <Container size="lg" data-purpose="page-header" className={classes.topLevel}>
                    <Title order={3} className={classes.title}>My Works</Title>

                    <Text
                        className={classes.light}
                        variant="gradient"
                        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                    >
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
                        {works}
                    </SimpleGrid>
                </Container>
            </>
        </>
    );
}