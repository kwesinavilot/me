import { createStyles, Text, Container, Title, ActionIcon, Group, Image, SimpleGrid } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';
import Link from "next/link";

const useStyles = createStyles((theme) => ({
    footer: {
        paddingTop: "3%",
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
            paddingLeft: "5%",
            paddingRight: "5%",
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
        title: "More of Me",
        links: [
            { label: "About", link: "/about" },
            { label: "Projects", link: "/projects" },
            { label: "Skills", link: "/skills" },
            { label: "Contact", link: "/contact" }
        ]
    },
]

export function Footer() {
    const { classes } = useStyles();

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner} fluid>
                <div className={classes.logo}>
                    <Link
                        href="/"
                        style={{ textDecoration: 'none' }}
                    >
                        <Title order={4} color='black'>Kwesi Ankomahene</Title>
                    </Link>

                    <Text size="sm" color="dimmed" className={classes.description}>
                        Life | Love | Impact <br />
                        Living, learning, & leveling up one day at a time.
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
                    <div className={classes.wrapper}>
                        <Text className={classes.title}>More of Me</Text>

                        <Link
                            className={classes.link}
                            href="/about"
                        >
                            About
                        </Link>

                        <Link
                            className={classes.link}
                            href="/projects"
                        >
                            Projects
                        </Link>

                        <Link
                            className={classes.link}
                            href="/skills"
                        >
                            Skills
                        </Link>

                        <Link
                            className={classes.link}
                            href="/contact"
                        >
                            Contact
                        </Link>
                    </div>

                    <div className={classes.wrapper}>
                        <Text className={classes.title}>Say Hello</Text>

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
                    </div>
                </SimpleGrid>
            </Container>

            <Container className={classes.afterFooter} size="xl">
                <Text color="dimmed" size="sm">
                    © 2023 All rights reserved.
                </Text>

                <Text color="dimmed" size="sm" fw="bold">
                    Andrews Kwesi Ankomahene
                </Text>
            </Container>
        </footer>
    );
}