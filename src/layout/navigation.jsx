import { createStyles, Header, Menu, Group, Burger, Container, ScrollArea, Image, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import Link from "next/link";
// import { Sidebar } from './SideMenu';

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
            color: theme.colors.main[5],
        },

        '&:hover::before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '2px',
            backgroundColor: theme.colors.main[5],
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
            backgroundColor: theme.colors.main[5],
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
            paddingLeft: 30,
            paddingRight: 30,
        },
    }
}));

const headerLinks = [
    {
        link: '/',
        label: 'Home',
    },
    {
        link: '/about',
        label: 'About',
    },
    {
        label: 'Air Quality',
        link: '/aqi',
    },
    {
        link: '/historical-data',
        label: 'Historical Data',
    },
    {
        link: '/contact',
        label: 'Contact',
    },
];

export function Navigation() {
    const [opened, { open, close }] = useDisclosure(false);
    const { classes } = useStyles();

    const items = headerLinks.map((link) => {
        const menuItems = link.links?.map((item, key) => (
            <Link key={key} href={item.link || '#'} className={classes.subLink}>
                <Menu.Item className={classes.linkInner}>
                    {item.label}
                </Menu.Item>
            </Link>
        ));

        if (menuItems) {
            const scrollArea = menuItems.length > 8 ?
                <ScrollArea h={250} scrollbarSize={8} type="auto" offsetScrollbars>
                    {menuItems}</ScrollArea> : menuItems;

            return (
                <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
                    <Menu.Target>
                        <Link
                            href={link.links ? '#' : `${link.link}`}
                            as={link.link}
                            className={classes.topLink}
                        >
                            <span className={classes.linkLabel}>{link.label}</span>
                            <IconChevronDown size={12} stroke={1.5} />
                        </Link>
                    </Menu.Target>

                    <Menu.Dropdown>
                        {scrollArea}
                    </Menu.Dropdown>
                </Menu>
            );
        }

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
            {/* <Sidebar opened={opened} close={close} /> */}

            <Header height={70} zIndex={1000} fixed="true" className={classes.header}>
                <Container size="xl" fluid="true">
                    <div className={classes.inner}>
                        <Link
                            href="/"
                            style={{ textDecoration: 'none', border: "solid 2px redirect" }}
                        >
                            <Image
                                src="/components/logo-gradient.png"
                                width="130px"
                                alt="Breathe Accra project logo"
                                className={classes.partiesImage}
                            />
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