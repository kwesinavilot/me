import {
    Button, AspectRatio, Group, Grid, Container, createStyles, Flex, SimpleGrid, Stack,
    Text, ThemeIcon, Title, Space, LoadingOverlay
} from "@mantine/core";
import { IconBrandWhatsapp, IconMapPin, IconPhoneCall, IconMail } from '@tabler/icons-react'
import { FloatingLabelInput, FloatingLabelTextarea } from "../components/forms/FloatingLabelInputs";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { SEOHead } from "../components/layout/SEOHead";

const data = [
    {
        icon: IconMapPin,
        title: "Location",
        medium: {
            first: "Ambassadorial Enclave, 20 Aluguntugui St,",
            second: "Accra, Ghana",
        }
    },
    {
        icon: IconMail,
        title: "Email",
        medium: {
            first: "andrews.ankomahene@gmail.com",
            second: "andrews.ankomahene@meltwater.org",
        }
    },
    {
        icon: IconPhoneCall,
        title: "Call",
        medium: {
            first: "+233501212723",
            second: "+233245868379",
        }
    },
    {
        icon: IconBrandWhatsapp,
        title: "WhatsApp",
        medium: {
            first: "+233501212723",
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
                padding: "3.5% 5%",
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
        },

        map: {
            [theme.fn.smallerThan('xs')]: {
                height: '55vh',
            },

            [theme.fn.largerThan('xs')]: {
                height: '55vh',
            },
        },
    }));

export function ContactMedium({ icon: Icon, title, medium }) {
    const classes = useStyles();

    return (
        <Grid.Col span="content">
            <Flex
                gap="lg"
                justify={{ xs: 'center', sm: 'flex-start' }}
                align="flex-start"
                direction="row"
                className={classes.points}
            >
                <ThemeIcon
                    size={50}
                    radius={40}
                    color="main.5"
                    variant="gradient"
                    gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                >
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
        </Grid.Col >
    );
}

export default function Contact() {
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
                title="Contact Me"
                keywords="BreatheAccra, breathe accra, contact breathe accra, accra air quality, Accra, Ghana, ghana pollution concern, ask breathe accra, breathe accra mission, breathe accra community, breathe accra support, contact breathe accra, how to contact breathe accra, email breathe accra, phone breathe accra, address breathe accra"
                description="Get in touch with me to learn more about air quality in Accra, Ghana. Contact us to report a concern, ask a question, or find out how you can support our mission to improve the health of our community."
            />

            <>
                <Container size="lg" data-purpose="page-header" className={classes.topLevel}>
                    <Title order={3} className={classes.title}>Contact Me</Title>

                    <Text
                        className={classes.light}
                        variant="gradient"
                        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                    >
                        Got a question or proposal, or just want to say hello?
                    </Text>
                </Container>

                <AspectRatio className={classes.map} ratio={16 / 9}>
                    <iframe src="https://www.google.com/maps/d/u/3/embed?mid=12AIQNFQTIGw6BuYAPM51BonpmWvlP7M&ehbc=2E312F"
                        width="640"
                        height="480"
                        title="Google map"
                    >
                    </iframe>
                </AspectRatio>

                <Container className={classes.spaceIn} fluid>
                    <Title order={3} align="center" mb="3%">
                        Ping Me
                    </Title>

                    <Grid gutter="5%" justify="center" align="flex-start">
                        {mediums}
                    </Grid>
                </Container>

                <Container className={classes.spaceIn} size="md">
                    {formSubmitSuccess ? (
                        <div data-purpose="contact-us-success">
                            <Title ta="center" color="main.5">Thanks for getting in touch!</Title>
                            <Text ta="center" mt="md" fw={500}>
                                I've received your message and appreciate you contacting me.
                                If your message is urgent, please use the phone numbers listed above to reach me.
                                Otherwise, I will reply by email as soon as possible.
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
                                    <Button
                                        type="submit"
                                        size="md"
                                        className={classes.learnMoreButton}
                                        variant="gradient"
                                        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                                    >
                                        Send Message
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
