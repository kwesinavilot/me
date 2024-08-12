import { createStyles, Avatar, Title, Header, Group, Burger, Container } from '@mantine/core';
import Link from "next/link";
import { Sidebar } from './SideMenu';
import { useDisclosure } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
    inner: {
        height: 70,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    topLink: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        textDecoration: 'none',
        color: '#868e96',
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
        transition: 'color 0.3s',
        position: 'relative',

        '&:hover': {
            color: theme.black,
        },

        '&:hover::before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: theme.black,
            transition: 'transform 0.3s',
            transform: 'scaleX(1)',
            transformOrigin: 'left center',
        },

        '&::before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: theme.black,
            transition: 'transform 0.3s',
            transform: 'scaleX(0)',
            transformOrigin: 'left center',
        },

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    subLink: {
        textDecoration: 'none',
        lineHeight: 1,
    },

    linkInner: {
        textDecoration: 'none',
        lineHeight: 1,
    },

    linkLabel: {
        marginRight: 5,
    },

    header: {
        backgroundColor: theme.white,

        [theme.fn.largerThan('xs')]: {
            paddingLeft: 20,
            paddingRight: 20,
        },

        [theme.fn.largerThan('sm')]: {
            paddingLeft: 25,
            paddingRight: 25,
        },

        [theme.fn.largerThan('md')]: {
            paddingLeft: '5%',
            paddingRight: '5%',
        },
    }
}));

const headerLinks = [
    {
        link: './me/',
        label: 'Home',
    },
    {
        link: './me/about',
        label: 'About',
    },
    {
        link: './me/projects',
        label: 'Projects',
    },
    {
        link: './me/skills',
        label: 'Skills',
    },
    {
        link: './me/contact',
        label: 'Contact',
    },
];

export function Navigation() {
    const [opened, { open, close }] = useDisclosure(false);
    const { classes } = useStyles();

    const items = headerLinks.map((link) => {
        return (
            <Link
                key={link.label}
                href={link.link || '#'}
                className={classes.topLink}
            >
                {link.label}
            </Link>
        );
    });

    return (
        <>
            <Sidebar opened={opened} close={close} />

            <Header height={70} zIndex={1000} fixed="true" className={classes.header}>
                <Container size="xl" fluid="true">
                    <div className={classes.inner}>
                        <Link
                            href="./me/"
                            style={{ textDecoration: 'none', border: "solid 2px redirect" }}
                        >
                            <Group gap="0.8rem">
                                <Avatar size={30} src="./me/adinkrahene.png"  alt="Andy's Logo" />

                                <Title order={4} color='black'>Kwesi Ankomahene</Title>
                            </Group>
                        </Link>

                        <Group spacing={5} className={classes.links}>
                            {items}
                        </Group>

                        <Burger
                            opened={opened}
                            onClick={open}
                            className={classes.burger}
                            size="md"
                            title="Open navigation"
                            aria-label="Open navigation"
                        />
                    </div>
                </Container>
            </Header>
        </>
    );
}