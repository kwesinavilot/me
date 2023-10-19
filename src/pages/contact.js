import {
    Button, Group, Container, createStyles, Flex, SimpleGrid, Stack,
    Text, ThemeIcon, Title, Space, LoadingOverlay
} from "@mantine/core";
import { AreaMap } from "../components/Map/AreaMap";
import { IconBrandWhatsapp, IconMapPin, IconPhoneCall, IconMail } from '@tabler/icons-react'
import { FloatingLabelInput, FloatingLabelTextarea } from "../components/Forms/FloatingLabelInputs";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { SEOHead } from "../components/Layout/SEOHead";

const data = [
    {
        icon: IconMapPin,
        title: "Location",
        medium: {
            first: "University of Cape Coast,",
            second: "Cape Coast, Ghana",
        }
    },
    {
        icon: IconMail,
        title: "Email",
        medium: {
            first: "aamegah@ucc.edu.gh",
            second: "info@breatheaccra.org",
        }
    },
    {
        icon: IconPhoneCall,
        title: "Call",
        medium: {
            first: "+233243032676",
            second: "+233245868379",
        }
    },
    {
        icon: IconBrandWhatsapp,
        title: "WhatsApp",
        medium: {
            first: "+233243032676",
            second: "+233245868379",
        }
    }
]

const useStyles = createStyles((theme) => (
    {
        topLevel: {
            padding: "5%",
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

        container: {
            padding: "0%"
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
                padding: "5%",
            },
        },

        itemTitle: {
            color: theme.colors.main[3],
            marginBottom: `calc(${theme.spacing.xs} / 2)`,
        },

        errorMessage: {
            color: "#ff0000",
            fontWeight: 600,
            fontSize: theme.spacing.md,
            textAlign: "center",
            marginBottom: theme.spacing.md
        },

        learnMoreButton: {
            borderRadius: theme.radius.sm,
            position: "relative",
            display: "inline-block",
            transition: "all 0.3s ease-in-out",
            backgroundColor: theme.colors.main[5],

            '&:hover': {
                backgroundColor: theme.colors.main[3],
            },
        },

        points: {
            [theme.fn.smallerThan('xs')]: {
                marginLeft: "auto",
                marginRight: "auto"
            }
        }
    }));

export function ContactMedium({ icon: Icon, title, medium }) {
    const classes = useStyles();

    return (
        <Flex
            gap="lg"
            justify={{ xs: 'center', sm: 'flex-start' }}
            align="flex-start"
            direction="row"
            className={classes.points}
        // mx="auto"
        >
            <ThemeIcon size={50} radius={40} color="main.5">
                <Icon size="1.5rem" stroke={1.5} />
            </ThemeIcon>

            <Stack align="left" justify="flex-start" spacing="xs">
                <Text fw={700} fz="lg">
                    {title}
                </Text>
                <Text>{medium.first}</Text>
                <Text>{medium.second}</Text>
            </Stack>
        </Flex>
    );
}

export default function Contact({ sensors }) {
    const { classes } = useStyles();
    const [isSubmittingForm, setIsSubmittingForm] = useState(false);
    const [formSubmitError, setFormSubmitError] = useState(null);
    const [formSubmitSuccess, setFormSubmitSuccess] = useState(false);

    const mediums = data.map((data, index) => <ContactMedium {...data} key={index} />);

    const form = useForm({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: ""
        },
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsSubmittingForm(true);
        setFormSubmitError(null);

        //process the contact form
        try {
            const res = await fetch('/api/ContactFormHandler', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form.values)
            });

            const data = await res.json();

            if (res.ok) {
                // console.log(data.message);
                setFormSubmitSuccess(true);
            } else {
                // show error message
                console.log(data.error);
                setFormSubmitError(data.error);
            }
        } catch (err) {
            // console.error(err);
            setFormSubmitError('Sorry, an error occurred while submitting the form.');
        }

        setIsSubmittingForm(false);
        // console.log('Just after setting false true! isSubmittingForm:', isSubmittingForm);
    };

    return (
        <>
            <SEOHead
                title="Contact Us"
                keywords="BreatheAccra, breathe accra, contact breathe accra, accra air quality, Accra, Ghana, ghana pollution concern, ask breathe accra, breathe accra mission, breathe accra community, breathe accra support, contact breathe accra, how to contact breathe accra, email breathe accra, phone breathe accra, address breathe accra"
                description="Get in touch with Breathe Accra to learn more about air quality in Accra, Ghana. Contact us to report a concern, ask a question, or find out how you can support our mission to improve the health of our community."
            />

            <>
                <Container size="lg" data-purpose="page-header" className={classes.topLevel}>
                    <Title order={3} className={classes.title}>Contact Us</Title>

                    <Text className={classes.light}>
                        Reach out to us for further information on the project and how to support our activities
                    </Text>
                </Container>

                <AreaMap
                    sensors={sensors}
                    zoom={18}
                    stylersVisibility="on"
                />

                <Container className={classes.spaceIn} fluid>
                    <Title order={3} align="center" mb="3%">
                        Ping Us
                    </Title>

                    <SimpleGrid
                        cols={4}
                        spacing="xl"
                        verticalSpacing="xl"
                        breakpoints={[
                            { maxWidth: 'lg', cols: 4, spacing: 'xl' },
                            { maxWidth: 'md', cols: 2, spacing: 'xl' },
                            { maxWidth: 'sm', cols: 2, spacing: 'xl' },
                            { maxWidth: 'xs', cols: 1, spacing: 'md' },
                        ]}
                        mt="xl"
                    >
                        {mediums}
                    </SimpleGrid>
                </Container>

                <Container className={classes.spaceIn} size="md">
                    {formSubmitSuccess ? (
                        <div data-purpose="contact-us-success">
                            <Title ta="center" color="main.5">Thanks for getting in touch!</Title>
                            <Text ta="center" mt="md" fw={500}>
                                We've received your message and appreciate you contacting us.
                                If your inquiry is urgent, please use the phone numbers listed above to reach us.
                                Otherwise, we will reply by email as soon as possible.
                            </Text>
                        </div>
                    ) : (
                        <>
                            <form name="contact-form" onSubmit={handleSubmit}>
                                {isSubmittingForm && (
                                    <LoadingOverlay
                                        visible={isSubmittingForm}
                                        overlayOpacity={0.5}
                                        overlayBlur={2}
                                        loaderProps={{ size: 'lg' }}
                                    />
                                )}

                                <Title order={3} align="center" mb="xl">
                                    ...or leave a message
                                </Title>

                                {formSubmitError && (
                                    <Text className={classes.errorMessage}>{formSubmitError}</Text>
                                )}

                                <SimpleGrid cols={2} mb="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                                    <FloatingLabelInput
                                        size="md"
                                        radius="xs"
                                        label="Name"
                                        name="name"
                                        placeholder="Enter your name..."
                                        mt="md"
                                        required
                                        {...form.getInputProps('name')}
                                    />

                                    <FloatingLabelInput
                                        size="md"
                                        radius="xs"
                                        label="Email"
                                        name="email"
                                        placeholder="Enter your email..."
                                        mt="md"
                                        required
                                        {...form.getInputProps('email')}
                                    />
                                </SimpleGrid>

                                <Space h="sm" />

                                <FloatingLabelInput
                                    size="md"
                                    radius="xs"
                                    label="Subject"
                                    name="subject"
                                    placeholder="Enter the title for your message..."
                                    required
                                    {...form.getInputProps('subject')}
                                />

                                <Space h="md" />

                                <FloatingLabelTextarea
                                    mt="md"
                                    label="Message"
                                    placeholder="Enter your message..."
                                    maxRows={5}
                                    autosize
                                    name="message"
                                    radius="xs"
                                    size="md"
                                    minRows={2}
                                    required
                                    {...form.getInputProps('message')}
                                />

                                <Group position="center" mt="xl">
                                    <Button type="submit" size="md" className={classes.learnMoreButton}>
                                        Send message
                                    </Button>
                                </Group>
                            </form>
                        </>
                    )}
                </Container>
            </>
        </>
    );
}

export async function getStaticProps() {
    const sensors = [
        { latitude: 5.116299, longitude: -1.294006, districtName: 'Breathe Accra', vicinity: "University of Cape Coast" },
    ];

    return {
        props: {
            sensors,
        }
    }
}
