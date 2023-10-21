import {
    Title, Container, createStyles, Grid, Group, List, Image, Text, Card, getStylesRef, Stack,
} from "@mantine/core";
import { SEOHead } from "../components/layout/SEOHead";

const useStyles = createStyles((theme) => ({
    topLevel: {
        padding: "5%",
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
            padding: "2 5% 3%",
            // background: "purple",
        },
    },

    noTop: {
        paddingTop: "0 !important",
    },

    lowerContainer: {
        background: theme.white,
        padding: 0,

        [theme.fn.smallerThan('lg')]: {
            paddingLeft: "7%",
            paddingRight: "7%",
        },

        [theme.fn.smallerThan('md')]: {
            paddingLeft: "5%",
            paddingRight: "5%",
        },

        [theme.fn.smallerThan('sm')]: {
            paddingBottom: "10%",
        },
    }
}));

const experienceList = [
    {
        title: "Software Engineer",
        organization: "Breathe Accra Project",
        duration: "January 2023 - Present",
        location: "Ghana",
        description: [
            "Developed and maintained the Breathe Accra website and panel.",
            "Set up the project's server infrastructure.",
            "Integrated Clarity, Airnote and Airqo sensors and APIs into Breathe Accra's platforms.",
            "Integrated the Breathe Accra platforms with Google Maps and Google Cloud."
        ]
    },
    {
        title: "Founder & CEO",
        organization: "Naviware",
        duration: "March 2022 - Present",
        location: "Ghana",
        description: [
            "Specialize in ideation, helping clients generate new, innovative solutions for global markets.",
            "Oversee development and deployment of software solutions for clients.",
            "Work closely with clients to help them drive their growth and digital transformation strategy.",
        ]
    },
    {
        title: "District Information Technology Officer",
        organization: "Ghana Statistical Service",
        duration: "May 2021 - August 2021",
        location: "Mpohor District, Western Region, Ghana",
        description: [
            "Built an operations log program for the IT department",
            "Integrated operations log program with Microsoft Access",
            "Supported in networking new departments and plant building to intranet",
            "Repaired laptops and computers",
            "Replaced old and defunct computer systems and components",
            "Responded to calls about computer and network malfunctions",
        ]
    },
    {
        title: "Teaching Assistant",
        organization: "University of Cape Coast",
        duration: "September 2020 - October 2021",
        location: "Cape Coast, Central, Ghana",
        description: [
            "Handled and taught three separate freshmen classes on Microsoft Office Suite.",
            "Handled and taught a freshmen and sophomore class Computer Literacy and Database respectively",
            "Assisted two lecturers in teaching courses such as Introduction to Computing, Software Engineering, Cybersecurity, Programming Techniques and Research Methods"
        ]
    },
    {
        title: "Innovation Consultant (Freelance)",
        organization: "Mindsumo Inc.",
        duration: "December 2018 - Present",
        location: "Ghana",
        description: [
            "Design new breakthrough products and services that met customer needs for several companies",
            "Revamp already existing products or services to better meet the needs of customers of companies",
            "Provide in-depth insights into global markets and propose a feasible market entry strategy",
        ]
    },
    {
        title: "Innovation Consultant (Freelance)",
        organization: "eÿeka by InSites Consulting",
        duration: "January 2019 - July 2023",
        location: "Ghana",
        description: [
            "Design action-provoking posters and info-graphics for market-entry, both globally or locally.",
            "Design and/or revamp products or services for companies",
            "Identify new opportunities and markets for clients, which are essential for mapping out future growth",
            "Provide insight into new business model opportunities for clients",
        ]
    },
    {
        title: "Software Engineer & IT Support Assistant (Internship)",
        organization: "Ghacem Limited",
        duration: "June 2018 to August 2018",
        location: "Takoradi, Western, Ghana",
        description: [
            "Built an operations log program for the IT department",
            "Integrated operations log program with Microsoft Access",
            "Supported in networking new departments and plant building to intranet",
            "Repaired laptops and computers",
            "Replaced old and defunct computer systems and components",
            "Responded to calls about computer and network malfunctions",
        ]
    },
    {
        title: "Co-founder & Fullstack Developer",
        organization: "ANC Teks",
        duration: "February 2017 - August 2020",
        location: "Cape Coast, Central, Ghana",
        description: [
            "Served as project manager and liaised with clients",
            "Served as Quality Assurance Analyst",
            "Built desktop and web applications",
            "Provided technical guidance and mentorship to software developers",
            "Designed software and web apps wireframes and mockups",
        ]
    },
];

const educationList = [
    {
        title: "Master of Philosophy in Computer Science",
        organization: "University of Cape Coast",
        duration: "January, 2022 - Present",
        location: "Cape Coast, Ghana",
        description: [
            "Computational Theory & Formal Languages",
            "Advancec Statistics",
            "Distributed Systems",
            "Articial Intelligence",
            "Data Science"
        ]
    },
    {
        title: "Bachelor of Science in Information Technology",
        organization: "University of Cape Coast",
        duration: "August 2014 - July 2020",
        location: "Cape Coast, Ghana",
        description: [
            "Developed and maintained the Breathe Accra website and panel.",
            "Set up the project's server infrastructure.",
            "Integrated Clarity, Airnote and Airqo sensors and APIs into Breathe Accra's platforms.",
            "Integrated the Breathe Accra platforms with Google Maps and Google Cloud."
        ]
    },
];

export function Experience({ title, organization, duration, location, description }) {
    return (
        <Stack justify="flex-start" spacing={5}>
            <Text size="lg" fw={700}>
                {title}
            </Text>

            <Group wrap="nowrap" gap="xs">
                <Text size="md" fw={600}>{organization}</Text>

                <Text size="md" c="dimmed">•</Text>

                <Text size="md" c="dimmed">
                    {duration}
                </Text>
            </Group>

            <Text size="md">{location}</Text>

            <List withPadding>
                {description.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                ))}
            </List>
        </Stack>
    );
}

export default function Projects() {
    const { classes, cx } = useStyles();

    const experiences = experienceList.map((experience, index) => <Experience {...experience} key={index} />);
    const education = educationList.map((education, index) => <Experience {...education} key={index} />);

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
                        Here is more information about me
                    </Text>
                </Container>

                <Container className={classes.lowerContainer} fluid>
                    <Container pt={0} pb="3%" px={0} size="xl">
                        <Grid gutterSm="lg" gutterXs="md" gutterMd="xl" gutterLg={50} grow>
                            <Grid.Col order={1} xl={9} md={8} sm={7}>
                                <Title order={2} className={classes.entitiesTitle}>Something Small About Myself</Title>

                                <Text size="md" mt="md">
                                    You know, sometimes it is hard to introduce yourself because you know yourself so well that
                                    you do not know where to start with. Let me give a try to see what kind of image
                                    you have about me through my self-description. Here it goes:
                                </Text>

                                <Text size="md" mt="md">
                                    I am a person who is positive about every aspect of life. I call it Optimistic Joy.
                                    There are many things I like to do, to see, and to experience. I like to read, I like to write;
                                    I like to think, I like to dream; I like to talk, I like to listen. I love seeing the sunrise in
                                    the morning, I like gazing at the moon at night too. I love to listen to music, especially Christian rap
                                    and jazz, piano and celo instrumentals. I like to do thought experiments when I'm bored, especially in
                                    the middle of the night when I cannot sleep. I like rain, although I don't like to feel cold.
                                    I don't like to sleep early, I most likely will not sleep at night. I like to be alone, I like to be surrounded by people.
                                    I like my country’s peace. I like noise and buzz of cities, probably because of Takoradi. I like delicious
                                    food and comfortable cloths and shoes. I like good books and movies (action, sci-fi, drama, anime). And, I like to laugh.
                                </Text>
                            </Grid.Col>

                            {/* <Grid.Col order={2} xl={3} md={4} sm={5}>
                            <Image
                                src="/images/parties/individual.svg"
                                width={225}
                                alt="individuals"
                                className={classes.entitiesIcons}
                            />
                        </Grid.Col> */}
                        </Grid>
                    </Container>

                    <Container pt={0} pb="3%" px={0} size="xl">
                        <Title order={2} mb="lg">
                            My Experience
                        </Title>

                        <Stack justify="flex-start" mb="xl" spacing="2rem">
                            {experiences}
                        </Stack>
                    </Container>

                    <Container pt={0} pb="3%" px={0} size="xl">
                        <Title order={2} mb="lg">
                            My Education
                        </Title>

                        <Stack justify="flex-start" mb="xl" spacing="2rem">
                            {education}
                        </Stack>
                    </Container>
                </Container>

                {/* <Container className={classes.middle} size="xl">
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
                </Container> */}
            </>
        </>
    );
}