import { createStyles, Text, Container, Title, ActionIcon, Group, SimpleGrid } from '@mantine/core';
import Link from "next/link";
import { IconMail, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react';

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
        maxWidth: 350,

        [theme.fn.smallerThan('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: 350,
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
        fontSize: theme.fontSizes.md,
        paddingTop: 3,
        paddingBottom: 3,
        textDecoration: "none",

        '&:hover': {
            textDecoration: 'underline',
            color: theme.black,
        },
    },

    title: {
        fontSize: theme.fontSizes.md,
        fontWeight: 700,
        marginBottom: theme.spacing.xs / 2,
        color: theme.black,
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
            color: theme.colors.main[9]
        },

        'button:hover': {
            color: theme.black,
            backgroundColor: theme.white,
        },

        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
        },

        [theme.fn.smallerThan('md')]: {
            padding: "2%",
        },
    },

    icons: {
        width: 30,

        [theme.fn.smallerThan('md')]: {
            width: 50,
        }
    },
}));

export function Footer() {
    const { classes } = useStyles();

    return (
        <>
            <Container bg="black" py="4%" px={0} fluid>
                <Title c="white" order={2} align="center" mb="1.5rem">
                    Connect With Me
                </Title>

                <Group spacing="2%" className={classes.social} position="center" noWrap>
                    <Link href="mailto:andrews.ankomahene@gmail.com" target="_blank">
                        <ActionIcon size="xl" variant="subtle" radius="xl">
                            <IconMail className={classes.icons} stroke={1.25} />
                        </ActionIcon>
                    </Link>

                    <Link href="https://www.linkedin.com/in/andrews-kwesi-ankomahene/" target="_blank">
                        <ActionIcon size="xl" variant="subtle" radius="xl">
                            <IconBrandLinkedin className={classes.icons} stroke={1.25} />
                        </ActionIcon>
                    </Link>

                    <Link href="https://www.twitter.com/kwesinavilot" target="_blank">
                        <ActionIcon size="xl" variant="subtle" radius="xl">
                            <IconBrandTwitter className={classes.icons} stroke={1.25} />
                        </ActionIcon>
                    </Link>

                    <Link href="https://www.instagram.com/thekwesinavilot" target="_blank">
                        <ActionIcon size="xl" variant="subtle" radius="xl">
                            <IconBrandInstagram className={classes.icons} stroke={1.25} />
                        </ActionIcon>
                    </Link>

                    <Link href="https://www.facebook.com/andrewskwesi.ankomahene.3/" target="_blank">
                        <ActionIcon size="xl" variant="subtle" radius="xl">
                            <IconBrandFacebook className={classes.icons} stroke={1.25} />
                        </ActionIcon>
                    </Link>

                    <Link href="https://www.youtube.com/buildwithnavilot" target="_blank">
                        <ActionIcon size="xl" variant="subtle" radius="xl">
                            <IconBrandYoutube className={classes.icons} stroke={1.25} />
                        </ActionIcon>
                    </Link>
                </Group>
            </Container>

            <footer className={classes.footer}>
                <Container className={classes.inner} fluid>
                    <div className={classes.logo}>
                        <Link
                            href="/"
                            style={{ textDecoration: 'none' }}
                        >
                            <Title order={4} color='black'>Kwesi Ankomahene</Title>
                        </Link>

                        <Text size="md" color="dimmed" className={classes.description}>
                            Life | Loyalty | Impact <br />
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
        </>
    );
}