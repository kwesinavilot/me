import { createStyles, Text, Container, ActionIcon, Group, Image, SimpleGrid } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';
import Link from "next/link";

const useStyles = createStyles((theme) => ({
    footer: {
        paddingTop: theme.spacing.xl * 2,
        backgroundColor: theme.colors.main[9],

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },

        [theme.fn.largerThan('xs')]: {
        },

        [theme.fn.largerThan('sm')]: {
            paddingLeft: 25,
            paddingRight: 25,
        },

        [theme.fn.largerThan('md')]: {
            paddingLeft: 30,
            paddingRight: 30,
        },
    },

    logo: {
        maxWidth: 250,

        [theme.fn.smallerThan('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 320,
            margin: 'auto',
        },
    },

    description: {
        marginTop: 10,

        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
            textAlign: 'center',
        },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    groups: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },

        [theme.fn.smallerThan('xl')]: {
            marginLeft: "10%",
        },
    },

    wrapper: {
        width: 160,
    },

    link: {
        display: 'block',
        color: theme.colors.gray[6],
        fontSize: theme.fontSizes.sm,
        paddingTop: 3,
        paddingBottom: 3,
        textDecoration: "none",

        '&:hover': {
            textDecoration: 'underline',
            color: theme.colors.main[5],
        },
    },

    title: {
        fontSize: theme.fontSizes.md,
        fontWeight: 700,
        marginBottom: theme.spacing.xs / 2,
        color: theme.colors.main[5],
    },

    afterFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    social: {
        'button': {
            color: theme.colors.main[5]
        },

        'button:hover': {
            color: theme.colors.main[9],
            backgroundColor: theme.colors.main[5]
        },

        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
        },
    }
}));

const data = [
    {
        title: "About",
        links: [
            { label: "About", link: "/about" },
            { label: "Team", link: "/team" },
            { label: "Events", link: "/events" },
            { label: "Contact Us", link: "/contact" }
        ]
    },
    {
        title: "Air Quality",
        links: [
            { label: "AQI At Your Location", link: '/aqi/' },
            // { label: "By Location", link: '/aqi/districts/' }, //link: '/aqi/location/', },
            // { label: "AQI In Your District", link: "/aqi/districts/" },
            { label: "Historical Data", link: "/historical-data" },
        ]
    },
    {
        title: "Resources",
        links: [
            { label: "Newsletters", link: "/newsletters" },
        ]
    },
    {
        title: "Collaborations",
        links: [
            { label: "Partnerships", link: "/partnerships" },
            { label: "Network", link: "/network" },
        ]
    },
]

export function Footer() {
    const { classes } = useStyles();

    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Link
                key={index}
                className={classes.link}
                href={link.link}
            >
                {link.label}
            </Link>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner} fluid>
                <div className={classes.logo}>
                    <Link
                        href="/"
                        style={{ textDecoration: 'none' }}
                    >
                        <Image
                            src="/components/logo-gradient.png"
                            width="130px"
                            alt="Breathe Accra project logo"
                        />
                    </Link>

                    <Text size="sm" color="dimmed" className={classes.description}>
                        Breathe Accra ensures openly accessible hyperlocal air quality data in the Greater Accra Metropolitan
                        Area for public awareness and influencing air pollution control decision-making.
                    </Text>
                </div>

                <SimpleGrid
                    cols={3}
                    spacing="lg"
                    verticalSpacing="lg"
                    breakpoints={[
                        { maxWidth: 'lg', cols: 5, spacing: 'md' },
                        { maxWidth: 'md', cols: 3, spacing: 'md' },
                    ]}
                    className={classes.groups}
                >
                    {groups}
                </SimpleGrid>
            </Container>

            <Container className={classes.afterFooter} size="xl">
                <Text color="dimmed" size="sm">
                    © 2023 Breath Accra. All rights reserved.
                </Text>

                <Group spacing={0} className={classes.social} position="right" noWrap>
                    <Link href="https://www.facebook.com/breatheaccra" target="_blank">
                        <ActionIcon size="xl" variant="subtle">
                            <IconBrandFacebook size={25} stroke={1.5} />
                        </ActionIcon>
                    </Link>
                    <Link href="https://www.twitter.com/breatheaccra" target="_blank">
                        <ActionIcon size="xl" variant="subtle">
                            <IconBrandTwitter size={25} stroke={1.5} />
                        </ActionIcon>
                    </Link>
                    <Link href="https://www.youtube.com/breatheaccra" target="_blank">
                        <ActionIcon size="xl" variant="subtle">
                            <IconBrandYoutube size={25} stroke={1.5} />
                        </ActionIcon>
                    </Link>
                    <Link href="https://www.instagram.com/breatheaccra" target="_blank">
                        <ActionIcon size="xl" variant="subtle">
                            <IconBrandInstagram size={25} stroke={1.5} />
                        </ActionIcon>
                    </Link>
                </Group>
            </Container>
        </footer>
    );
}