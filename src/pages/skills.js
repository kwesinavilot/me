import { Container, Divider, createStyles, SimpleGrid, Stack, ThemeIcon, Title, Space, Text } from "@mantine/core";
import { SEOHead } from "../components/layout/SEOHead";
import {
    IconAssembly, IconBrandGolang, IconBrandPhp, IconBrandJavascript, IconUsers, IconWriting, IconMessageCircleShare,
    IconMicrophone2, IconServer2, IconDog, IconFeather, IconBrandMongodb, IconViewfinder, IconBrandMysql, IconBrandHtml5, IconCoffee, IconBrandPython,
    IconBrandLaravel, IconBrandNodejs, IconBrandDjango, IconBrandNextjs, IconBrandReact, IconBrandPrisma, IconBrandVue, IconBrandMantine, IconBrandTailwind,
    IconBrandBootstrap, IconBrandUbuntu, IconJetpack, IconBrandVscode, IconBrandGit, IconBrandGithub, IconBrandGoogleMaps, IconBrandDocker, IconBrandAzure,
    IconBrandAws, IconCloudComputing

} from "@tabler/icons-react";

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
            padding: "3.5% 6%",
        },
    },

    title: {
        marginBottom: theme.spacing.md,
        textAlign: "center",

        [theme.fn.smallerThan('sm')]: {
            marginBottom: theme.spacing.sm,
        },
    },

    subtitle: {
        marginBottom: theme.spacing.md,
        textAlign: "left",

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

    noTop: {
        paddingTop: "0 !important",
    }
}));

export function Skill({ icon: Icon, title, description }) {
    return (
        <Stack align="center">
            <ThemeIcon
                size={50}
                color="main.2"
                radius={40}
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
            >
                <Icon size="1.5rem" stroke={1.5} />
            </ThemeIcon>

            <Text mt="sm" color="black" mb={7} fw={700}>
                {title}
            </Text>

            <Text size="md" color="black" sx={{ lineHeight: 1.6 }}>
                {description}
            </Text>
        </Stack>
    );
}

const softSkillsData = [
    {
        icon: IconAssembly,
        title: 'Problem Solving',
        description:
            'I thrive in solving complex challenges and enjoy participating in ideation challenges and hackathons. These experiences have honed my ability to think critically and develop innovative solutions effectively.',
    },
    {
        icon: IconMessageCircleShare,
        title: 'Communication',
        description:
            'My strong communication skills, both written and verbal, facilitate clear and effective interactions. This talent allows me to convey ideas and information accurately, fostering understanding among team members, clients, and stakeholders.',
    },
    {
        icon: IconUsers,
        title: 'Teamwork',
        description:
            'I enjoy collaborating with others and contribute effectively to team goals. My willingness to work as part of a team fosters strong group dynamics, and I thrive on the sense of accomplishment that comes from achieving team objectives.',
    },
    {
        icon: IconViewfinder,
        title: 'Leadership',
        description:
            'I possess leadership qualities that inspire and guide others towards success. My ability to motivate and lead by example helps create a conducive work environment and promotes a sense of direction within the team.',
    },
    {
        icon: IconMicrophone2,
        title: 'Public Speaking',
        description:
            'I am a confident and articulate public speaker. This skill enables me to convey information convincingly, engage audiences, and represent the organization or project effectively in various settings.',
    },
    {
        icon: IconWriting,
        title: 'Writing',
        description:
            'With strong writing skills, I can create clear, concise, and engaging written content. This proficiency is valuable for crafting reports, documents, and proposals that are not only informative but also captivating.',
    }
];

const languagesData = [
    {
        icon: IconBrandPhp,
        title: 'PHP (8 years)',
        description:
            "With 8 years of experience in PHP, I've honed my skills in server-side scripting, making me proficient in web development.",
    },
    {
        icon: IconBrandJavascript,
        title: 'JavaScript (7 years)',
        description:
            'Having worked with JavaScript for 7 years, I can confidently say I excel in building interactive and responsive web applications.',
    },
    {
        icon: IconBrandPython,
        title: 'Python (5 years)',
        description:
            'My proficiency in Python empowers me to work on data analysis, create predictive models, and develop data-driven solutions.',
    },
    {
        icon: IconCoffee,
        title: 'Java (5 years)',
        description:
            'My Java skills enable me to contribute to a variety of projects and collaborate with teams developing different types of software.',
    },
    {
        icon: IconBrandHtml5,
        title: 'HTML + CSS (7 years)',
        description:
            "I've mastered HTML and CSS, enabling me to craft well-structured web pages and create visually appealing designs, ensuring a top-notch user experience.",
    },
    {
        icon: IconBrandGolang,
        title: 'Golang (1 year - Still learning)',
        description:
            "Although still in the learning phase, I'm gearing up to work on blockchains, low-level cloud computing, microservices, and scalable application development."
    }
];

const databaseData = [
    {
        icon: IconBrandMysql,
        title: 'MySQL (8 years)',
        description:
            "Leveraged MySQL in various backend projects, enhancing my ability to design and maintain robust databases for scalable applications.",
    },
    {
        icon: IconFeather,
        title: 'SQLite (5 years)',
        description:
            'Utilized SQLite in lightweight applications, allowing for efficient storage management in projects with mobile and embedded system constraints.',
    },
    {
        icon: IconDog,
        title: 'PostgreSQL (4 years)',
        description:
            'Gained experience with PostgreSQL through complex data integration tasks, optimizing performance in enterprise-level applications.',
    },
    {
        icon: IconServer2,
        title: 'MS SQL Server (3 years)',
        description:
            'Worked with MS SQL Server on business intelligence solutions, contributing to effective data analysis and reporting systems.',
    },
    {
        icon: IconBrandMongodb,
        title: 'MongoDB (3 years)',
        description:
            "Applied MongoDB in projects requiring flexible, schema-less data structures, facilitating rapid development of dynamic applications. Used it also in AI/ML applications.",
    }
];

const framriesData = [
    {
        icon: IconBrandLaravel,
        title: 'Laravel (6 years)',
        description:
            "Laravel's elegant syntax and rich ecosystem make it a go-to choice to build robust and scalable web applications efficiently and quickly, especially when clients demand it.",
    },
    {
        icon: IconBrandNodejs,
        title: 'Node.js (5 years)',
        description:
            "My 5 years of experience with Node.js allow me to build server-side applications using JavaScript, beneficial for scalable and real-time applications.",
    },
    {
        icon: IconBrandDjango,
        title: 'Django (5 years)',
        description:
            "Developed and maintained scalable web applications using Django's comprehensive toolkit, focusing on security and rapid development, making it a key framework in my arsenal.",
    },
    {
        icon: IconBrandNextjs,
        title: 'NextJS (5 years)',
        description:
            "Specialized in building high-performance, SEO-friendly React applications with server-side rendering, enhancing user experience and search engine visibility.",
    },
    {
        icon: IconBrandReact,
        title: 'React (6 years)',
        description:
            'Mastered the creation of dynamic and interactive user interfaces, utilizing React to build responsive and robust web applications.',
    },
    {
        icon: IconBrandPrisma,
        title: 'Prisma (4 years)',
        description:
            'Efficiently interacted with databases through Prisma, leveraging its intuitive and type-safe ORM to streamline backend development.',
    },
    {
        icon: IconBrandVue,
        title: 'Vue (2 years)',
        description:
            "Vue's simplicity and flexibility enable me to build interactive web applications with ease.",
    },
    {
        icon: IconBrandMantine,
        title: 'Mantine (5 years)',
        description:
            "With Mantine, I can expedite the development of highly functional and visually appealing user interfaces by utilizing its pre-built, customizable components.",
    },
    {
        icon: IconBrandTailwind,
        title: 'TailwindCSS (5 years)',
        description:
            "I'm skilled at using utility-first CSS frameworks to style web applications efficiently, streamlining the design process and enhancing development productivity.",
    },
    {
        icon: IconBrandBootstrap,
        title: 'Bootstrap (6 years)',
        description:
            "I've worked with Bootstrap to create responsive, mobile-first web designs, delivering deliver consistent and visually appealing interfaces.",
    }
];

const devToolsData = [
    {
        icon: IconBrandUbuntu,
        title: 'Linux (7 years)',
        description:
            "My proficiency in Linux, both as a development environment and for hosting, offers several advantages in the software engineering and deployment process.",
    },
    {
        icon: IconJetpack,
        title: 'JetBrains IDEs (8 years)',
        description:
            "With 8 years of experience using JetBrains IDEs, I've honed my coding skills and productivity by leveraging their powerful features for coding, debugging, and version control.",
    },
    {
        icon: IconBrandVscode,
        title: 'VS Code (6 years)',
        description:
            "VS Code's versatility, extensibility, and rich ecosystem of extensions enhance my coding efficiency and enable me to work on various programming languages.",
    },
    {
        icon: IconBrandGit,
        title: 'Git (6 years)',
        description:
            "My proficiency in Git helps me manage and track changes in code, collaborate with teams, and ensure version control for software projects.",
    },
    {
        icon: IconBrandGithub,
        title: 'GitHub (6 years)',
        description:
            'I am experienced at code sharing and contributing to open-source projects and collaborate with other developers worldwide.',
    },
    {
        icon: IconBrandGoogleMaps,
        title: 'Google Maps (5 years)',
        description:
            "Leveraging Google Maps, I've integrated location-based services into applications, enhancing user experiences by providing geospatial data and mapping capabilities.",
    },
    {
        icon: IconBrandDocker,
        title: 'Docker (3 years)',
        description:
            "I've used Docker for containerization, which ensures consistent and efficient deployment of applications across different environments.",
    },
    {
        icon: IconCloudComputing,
        title: 'Google Cloud (4 years)',
        description:
            "Leveraged Google Cloud's robust services and infrastructure to develop, deploy, and scale applications efficiently, ensuring optimal performance and reliability.",
    },
    {
        icon: IconBrandAzure,
        title: 'Microsoft Azure (4 years)',
        description:
            "Utilized Azure's secure and scalable environment to develop and deploy AI/ML and critical applications, enhancing cloud-based solutions with Microsoft's cloud platform.",
    },
    {
        icon: IconBrandAws,
        title: 'AWS (3 years)',
        description:
            "I can leverage the scalability, reliability, and security for cloud-based projects that AWS provides to deploy and scale various applications.",
    },
];

export default function Skills() {
    const { classes, cx } = useStyles();

    const softSkills = softSkillsData.map((softSkill, index) => <Skill {...softSkill} key={index} />);
    const languages = languagesData.map((language, index) => <Skill {...language} key={index} />);
    const database = databaseData.map((database, index) => <Skill {...database} key={index} />);
    const framries = framriesData.map((framry, index) => <Skill {...framry} key={index} />);
    const devTools = devToolsData.map((devTool, index) => <Skill {...devTool} key={index} />);

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

                    <Text
                        className={classes.light}
                        variant="gradient"
                        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                    >
                        Here are the skills and tools I have in my toolbox
                    </Text>
                </Container>

                <Container className={cx(classes.spaceIn, classes.noTop)} fluid>
                    <Title data-purpose="page-header" order={2} className={classes.subtitle}>
                        Soft Skills
                    </Title>

                    <Space h="xl" />

                    <SimpleGrid
                        cols={3}
                        spacing="xl"
                        verticalSpacing="xl"
                        breakpoints={[
                            { maxWidth: 'lg', cols: 3, spacing: 'xl' },
                            { maxWidth: 'md', cols: 2, spacing: 'xl' },
                            { maxWidth: 'sm', cols: 2, spacing: 'xl' },
                            { maxWidth: 'xs', cols: 1, spacing: 'xl' },
                        ]}
                    >
                        {softSkills}
                    </SimpleGrid>
                </Container>

                <Container className={cx(classes.spaceIn, classes.noTop)} fluid>
                    <Title data-purpose="page-header" order={2} className={classes.subtitle}>
                        Technical Skills
                    </Title>

                    <Container fluid p={0}>
                        <Text size="lg" fw={700}>
                            Languages
                        </Text>

                        <Space h="xl" />

                        <SimpleGrid
                            cols={3}
                            spacing="xl"
                            verticalSpacing="xl"
                            breakpoints={[
                                { maxWidth: 'lg', cols: 3, spacing: 'xl' },
                                { maxWidth: 'md', cols: 2, spacing: 'xl' },
                                { maxWidth: 'sm', cols: 2, spacing: 'xl' },
                                { maxWidth: 'xs', cols: 1, spacing: 'xl' },
                            ]}
                        >
                            {languages}
                        </SimpleGrid>
                    </Container>

                    <Divider my="3%" size="sm" />

                    <Container fluid p={0}>
                        <Text size="lg" fw={700}>
                            Database Systems
                        </Text>

                        <Space h="xl" />

                        <SimpleGrid
                            cols={3}
                            spacing="xl"
                            verticalSpacing="xl"
                            breakpoints={[
                                { maxWidth: 'lg', cols: 3, spacing: 'xl' },
                                { maxWidth: 'md', cols: 2, spacing: 'xl' },
                                { maxWidth: 'sm', cols: 2, spacing: 'xl' },
                                { maxWidth: 'xs', cols: 1, spacing: 'xl' },
                            ]}
                        >
                            {database}
                        </SimpleGrid>
                    </Container>

                    <Divider my="3%" size="sm" />

                    <Container fluid p={0}>
                        <Text size="lg" fw={700}>
                            Frameworks & Libraries
                        </Text>

                        <Space h="xl" />

                        <SimpleGrid
                            cols={3}
                            spacing="xl"
                            verticalSpacing="xl"
                            breakpoints={[
                                { maxWidth: 'lg', cols: 3, spacing: 'xl' },
                                { maxWidth: 'md', cols: 2, spacing: 'xl' },
                                { maxWidth: 'sm', cols: 2, spacing: 'xl' },
                                { maxWidth: 'xs', cols: 1, spacing: 'xl' },
                            ]}
                        >
                            {framries}
                        </SimpleGrid>
                    </Container>

                    <Divider my="3%" size="sm" />

                    <Container fluid p={0}>
                        <Text size="lg" fw={700}>
                            Dev & Deployment Tools
                        </Text>

                        <Space h="xl" />

                        <SimpleGrid
                            cols={3}
                            spacing="xl"
                            verticalSpacing="xl"
                            breakpoints={[
                                { maxWidth: 'lg', cols: 3, spacing: 'xl' },
                                { maxWidth: 'md', cols: 2, spacing: 'xl' },
                                { maxWidth: 'sm', cols: 2, spacing: 'xl' },
                                { maxWidth: 'xs', cols: 1, spacing: 'xl' },
                            ]}
                        >
                            {devTools}
                        </SimpleGrid>
                    </Container>
                </Container>
            </>
        </>
    );
};