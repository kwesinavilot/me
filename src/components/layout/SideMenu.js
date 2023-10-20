import { createStyles, Drawer, Title, Navbar, Group, ScrollArea } from '@mantine/core';
import Link from 'next/link'
import { IconX } from '@tabler/icons-react';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.white,
        padding: 0,
        border: 0,
    },

    header: {
        padding: theme.spacing.md,
        paddingTop: 0,
        marginLeft: `calc(${theme.spacing.md} * -1)`,
        marginRight: `calc(${theme.spacing.md} * -1)`,
        color: theme.black,
        borderBottom: `1px solid ${theme.colors.gray[3]}`,
    },

    linksInner: {
        paddingTop: theme.spacing.xs,
        paddingBottom: theme.spacing.xl,
    },

    control: {
        fontWeight: 500,
        display: 'block',
        width: '100%',
        padding: `${theme.spacing.sm}px 0px`,
        color: theme.black,
        fontSize: theme.fontSizes.md,

        '&:hover': {
            backgroundColor: theme.colors.gray[0],
            color: theme.black,
        },
    },

    topLink: {
        textDecoration: 'none',
        marginLeft: 0,
        marginBottom: theme.spacing.md,
        padding: "2% 0",
        fontSize: theme.fontSizes.lg,
    },
}));

const navLinks = [
    {
        link: '/',
        label: 'Home',
    },
    {
        link: '/about',
        label: 'About',
    },
    {
        link: '/projects',
        label: 'Projects',
    },
    {
        link: '/skills',
        label: 'Skills',
    },
    {
        link: '/contact',
        label: 'Contact',
    },
];

export function LinksGroup({ label, link, close }) {
    const { classes, cx } = useStyles();
    const router = useRouter();

    return (
        <Link
            className={cx(classes.control, classes.topLink)}
            href={link}
            key={label}
            onClick={(event) => {
                // Prevent the default behavior of the onClick event handler
                event.preventDefault();

                // Close the drawer
                close();

                // Navigate to the link's href attribute using the Next.js router
                router.replace(link);
            }}
        >
            {label}
        </Link>
    );
}

export function Sidebar({ opened, close }) {
    const { classes } = useStyles();

    const links = navLinks.map((item) => <LinksGroup {...item} key={item.label} close={close} />);

    return (
        <Drawer
            withCloseButton={false}
            opened={opened}
            onClose={close}
            position="left"
            size="100%"
            zIndex={1050}
        >
            <Navbar p="xs" className={classes.navbar}>
                <Navbar.Section className={classes.header}>
                    <Group position="apart">
                        <Link
                            href="/"
                            style={{ textDecoration: 'none', border: "solid 2px redirect" }}
                        >
                            <Title order={4} color='black'>Kwesi Ankomahene</Title>
                        </Link>

                        <IconX
                            size="25"
                            stroke={1.5}
                            color='gray'
                            onClick={close}
                        />
                    </Group>
                </Navbar.Section>

                <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs" py='xs'>
                    <div className={classes.linksInner}>
                        {links}
                    </div>
                </Navbar.Section>
            </Navbar>
        </Drawer>
    );
}