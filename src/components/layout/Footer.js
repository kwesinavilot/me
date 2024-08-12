import { createStyles, Image, Text, Container, Title, ActionIcon, Group, Center } from '@mantine/core';
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
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
        textAlign: "center",

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
                <Center className={classes.inner} mx="auto">
                    <div className={classes.logo}>
                        <Link
                            href="/me/"
                            style={{ textDecoration: 'none' }}
                        >
                            <Image mx="auto" width={50} mb="md" src="./adinkrahene.png" alt="Andy's Logo" />

                            <Title order={4} color='black'>Kwesi Ankomahene</Title>
                        </Link>

                        <Text size="md" color="dimmed" className={classes.description}>
                            Life | Loyalty | Impact <br />
                            Living, learning, & leveling up one day at a time.
                        </Text>
                    </div>
                </Center>

                <Container className={classes.afterFooter} size="xl">
                    <Text color="dimmed" size="sm">
                        © 2023 - {new Date().getFullYear()} All rights reserved.
                    </Text>

                    <Text color="dimmed" size="sm" fw="bold">
                        Andrews Kwesi Ankomahene
                    </Text>
                </Container>
            </footer>
        </>
    );
}