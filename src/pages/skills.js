import {Container, createStyles, Title, Text} from "@mantine/core";
import {EntitiesGrid} from "../components/Mass/EntitiesGrid";
import {SEOHead} from "../components/layout/SEOHead";

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
            padding: "3.5% 10%",
        },
    },

    title: {
        marginBottom: theme.spacing.md,
        textAlign: "center",

        [theme.fn.smallerThan('sm')]: {
            marginBottom: theme.spacing.sm,
        },
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
}));

export default function Skills({partners}) {
    const {classes} = useStyles();

    return (
        <>
            <SEOHead
                title="My Skillset"
                keywords="Breathe Accra, breathe accra partnerships, ghana air quality collaboration, community engagement, ghana air quality monitoring, ghana pollution reduction, sustainability, breathe accra partners, organizations that partner with breathe accra, companies that partner with breathe accra, government agencies that partner with breathe accra, foundations that partner with breathe accra, breathe accra non-profit partners
                breathe accra community partners, breathe accra international partners"
                description="Meet our partners who have joined hands with us towards the common goal of improving air quality and reducing pollution in Accra. Learn about their contributions, resources and expertise that help us achieve our mission."
            />

            <>
                <Container size="lg" data-purpose="page-header" className={classes.topLevel}>
                    <Title order={3} className={classes.title}>My Skillset</Title>

                    <Text className={classes.light}>
                        Here are the skills and tools I have in my toolbox
                    </Text>
                </Container>

                <Container className={classes.spaceIn} fluid>
                    <EntitiesGrid
                        entityList={partners}
                    />
                </Container>
            </>
        </>
    );
};

export async function getStaticProps(context) {
    const partners = [
        {
            logo: {
                image: "/images/partners/cleanairfund.svg",
                width: 115
            },
            // title: 'Clean Air Fund Ghana',
            description:
                "The Clean Air Fund is the funder of the Breathe Accra project. The Fund's support is helping to" +
                " ensure that the project is able to deliver a cleaner and healthier environment for the people of Accra."
        },{
            logo: {
                image: "/images/partners/epa.png",
                width: 200
            },
            // title: 'Ghana EPA',
            description:
                'Ghana EPA is the regulatory body responsible for environmental protection in Ghana, and hence an important' +
                ' partner of the Breathe Accra project. They provide technical support and expertise to the beneficiary' +
                ' districts in the monitoring and control of air pollution.',
        },
        {
            logo: {
                image: "/images/partners/ucc.png",
                width: 60
            },
            // title: 'University of Cape Coast',
            description:
                "University of Cape Coast (UCC) provides the enabling environment for the Breathe Accra project to achieve" +
                " its objectives"
        },
        {
            logo: {
                image: "/images/partners/ama-logo.png",
                width: 200
            },
            // title: 'Accra Metropolitan Assembly',
            description:
                'Accra Metropolitan Assembly is the local government authority responsible for the Accra Metropolitan Area. ' +
                'The assembly hosts one of our reference grade monitors at City Hall and serves as a model district for the other beneficiary districts',
        },
        {
            logo: {
                image: "/images/partners/kokma.jpg",
                width: 225
            },
            // title: 'Korle Klottey Municipal',
            description:
                'Korle Klottey Municipal Assembly is the local government authority responsible for the Korle Klottey ' +
                'Municipal Area. The assembly hosts one of our reference grade monitors at the Kwame Nkrumah Interchange ' +
                'and serves as a model district for the other beneficiary districts',
        },
        {
            logo: {
                image: "/images/partners/clarity_logo.svg",
                width: 215
            },
            // title: 'Clarity Air',
            description:
                "Clarity Movement provides the Breathe Accra project with state-of-the-art, solar-powered Node-S air quality sensors to" +
                " monitor air quality across Accra. Clarity provides the necessary technology and technical support" +
                " needed to ensure accurate data collection and analysis.",
        },
        {
            logo: {
                image: "/images/partners/blueswireless_logo.svg",
                width: 225
            },
            // title: 'Blues Wireless',
            description:
                'Blue Wireless provides the Breathe Accra project with IoT sensors and communication technology to help' +
                ' collect and transmit real-time air quality data. This data is important for identifying air pollution' +
                ' hotspots across the city and informing air quality improvement strategies.',
        },
        {
            logo: {
                image: "/images/partners/afriqair.png",
                width: 180
            },
            // title: 'Afriq Air',
            description:
                'AfriqAir provides technical support and expertise to the project as well as connecting us to similar' +
                ' initiatives on the continent to learn best practices. They also provide us with a platform through' +
                ' their workshops and conferences for sharing the lessons learnt on the project and best practices',
        },
    ];

    return {
        props: {
            partners,
        }
    }
}