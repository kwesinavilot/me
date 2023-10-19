import { createStyles, Drawer, Navbar, Group, ScrollArea, UnstyledButton, Collapse, Box, Image } from '@mantine/core';
import Link from 'next/link'
import { IconChevronRight, IconX } from '@tabler/icons';
import { useState } from 'react';
import { useRouter } from 'next/router';


const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.white,
        padding: 0,
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
        marginLeft: theme.spacing.md,

    },

    sublink: {
        fontWeight: 500,
        display: 'block',
        textDecoration: 'none',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        paddingLeft: theme.spacing.md,
        marginLeft: theme.spacing.md,
        fontSize: theme.fontSizes.sm,
        color: theme.colors.gray[7],
        borderLeft: `1px solid ${theme.colors.gray[3]}`,

        '&:hover': {
            backgroundColor: theme.colors.gray[0],
            color: theme.black,
        },
    },

    chevron: {
        transition: 'transform 200ms ease',
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
        label: 'Beneficiary Districts',
        initiallyOpened: false,
        links: [
            {
                link: '/beneficiaries?district=ablekuma-south',
                label: 'AMA - Ablekuma South Sub-Metro',
            },
            {
                link: '/beneficiaries?district=ashiedu-keteke',
                label: 'AMA - Ashiedu Keteke Sub-Metro',
            },
            {
                link: '/beneficiaries?district=okaikoi-south',
                label: 'AMA - Okaikoi South Sub-Metro',
            },
            {
                link: '/beneficiaries?district=ablekuma-central',
                label: 'Ablekuma Central Municipal',
            },
            {
                link: '/beneficiaries?district=ablekuma-north',
                label: 'Ablekuma North Municipal',
            },
            {
                link: '/beneficiaries?district=ablekuma-west',
                label: 'Ablekuma West Municipal',
            },
            {
                link: '/beneficiaries?district=adentan',
                label: 'Adentan Municipal',
            },
            {
                link: '/beneficiaries?district=ayawaso-central',
                label: 'Ayawaso Central Municipal',
            },
            {
                link: '/beneficiaries?district=ayawaso-east',
                label: 'Ayawaso East Municipal',
            },
            {
                link: '/beneficiaries?district=ayawaso-north',
                label: 'Ayawaso North Municipal',
            },
            {
                link: '/beneficiaries?district=ayawaso-west',
                label: 'Ayawaso West Municipal',
            },
            {
                link: '/beneficiaries?district=korle-klottey',
                label: 'Korle Klottey Municipal',
            },
            {
                link: '/beneficiaries?district=la-dadekotopon',
                label: 'La Dadekotopon Municipal',
            },
            {
                link: '/beneficiaries?district=la-nkwantanang',
                label: 'La-Nkwantanang-Madina Municipal',
            },
            {
                link: '/beneficiaries?district=okaikoi-north',
                label: 'Okaikoi North Municipal',
            },
        ],
    },
    {
        link: '/aqi/',
        label: 'Air Quality',
    },
    {
        link: '/historical-data',
        label: 'Historical Data',
    },
    {
        link: '/events',
        label: 'Events',
    },
    {
        link: '/newsletters',
        label: 'Newsletters',
    },
    {
        label: 'Collaborations',
        initiallyOpened: false,
        links: [
            {
                label: "Partnerships",
                link: "/partnerships"
            },
            {
                label: "Network",
                link: "/network"
            },
        ]
    },
    {
        link: '/team',
        label: 'Team',
    },
    {
        link: '/contact',
        label: 'Contact',
    },
];

export function LinksGroup({ label, link, initiallyOpened, links, close }) {
    const { classes, cx } = useStyles();
    const [opened, setOpened] = useState(initiallyOpened || false);
    const router = useRouter();

    const subLinks = links?.map((subLink) => (
        <Link
            className={classes.sublink}
            href={subLink.link}
            key={subLink.label}
            onClick={(event) => {
                // Prevent the default behavior of the onClick event handler
                event.preventDefault();

                // Close the drawer
                close();

                // Navigate to the sublink's href attribute using the Next.js router
                router.replace(subLink.link);
            }}
        >
            {subLink.label}
        </Link>
    ));

    if (subLinks) {
        return (
            <>
                <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
                    <Group position="apart" spacing={0}>
                        <Box ml="md">{label}</Box>

                        <IconChevronRight
                            className={classes.chevron}
                            size="20"
                            stroke={1.5}
                            style={{
                                transform: opened ? `rotate(${90}deg)` : 'none',
                            }}
                        />
                    </Group>
                </UnstyledButton>

                <Collapse in={opened}>{subLinks}</Collapse>
            </>
        );
    }

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
                            style={{ textDecoration: 'none' }}
                        >
                            <Image
                                src="/components/logo-gradient.png"
                                width="130px"
                                alt="Breathe Accra project logo"
                                className={classes.partiesImage}
                            />
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