import {Button, Center, Container, createStyles, Group, Overlay, rem, Stack, Text, Title} from '@mantine/core';
import {IconRocket, IconSparkles, IconStar, IconWorldStar} from "@tabler/icons-react";
import {Link} from "react-router-dom";

const useStyles = createStyles((theme) => ({
    wrapper: {
        position: 'relative',
        paddingTop: rem(180),
        paddingBottom: rem(130),
        backgroundImage:
            'url(src/assets/img/kids.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: rem(640),

        [theme.fn.smallerThan('md')]: {
            height: rem(560),
        },

        [theme.fn.smallerThan('sm')]: {
            paddingTop: rem(80),
            paddingBottom: rem(50),
        },
    },

    inner: {
        position: 'relative',
        zIndex: 1,
        height: rem(640),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        [theme.fn.smallerThan('md')]: {
            height: rem(560),
        }
    },

    title: {
        fontWeight: 400,
        fontSize: rem(64),
        letterSpacing: rem(-1),
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        color: theme.white,
        textAlign: 'center',

        [theme.fn.smallerThan('md')]: {
            fontSize: rem(48),
        },

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(28),
            textAlign: 'left',
            fontWeight: 700,
            padding: 0
        },
    },

    highlight: {
        color: theme.colors.gray[4],
    },

    description: {
        color: theme.white,
        fontSize: rem(24),
        textAlign: 'center',

        [theme.fn.smallerThan('sm')]: {
            fontSize: theme.fontSizes.md,
            textAlign: 'left',
        },
    },

    controls: {
        marginTop: `calc(${theme.spacing.xl} * 1.5)`,
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    control: {
        fontSize: theme.fontSizes.md,
        color: theme.colors.green[4],
        borderWidth: '2px',
        borderRadius: theme.radius.lg,

        '&:not(:first-of-type)': {
            marginLeft: theme.spacing.md,
        },

        [theme.fn.smallerThan('xs')]: {
            '&:not(:first-of-type)': {
                marginTop: theme.spacing.md,
                marginLeft: 0,
            },
        },
    },

    secondaryControl: {
        color: theme.white,
        backgroundColor: 'rgba(255, 255, 255, .4)',

        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, .45) !important',
        },
    },

    badge: {
        justifyContent: 'center',
        width: "200px",
        padding: theme.spacing.sm,
        borderRadius: theme.radius.lg,
        backgroundColor: '#7AE574',
        fontWeight: 700,
        fontSize: "16px"
    }
}));

const HeroSection = () => {
    const {classes, theme} = useStyles();

    return (
        <div className={classes.wrapper}>
            <Overlay color="#000" opacity={0.65} zIndex={1}/>

            <div className={classes.inner}>
                <Container>
                    <Stack spacing="xl">
                        <Center>
                            <Group spacing={4} className={classes.badge}>
                                <IconSparkles size={24} rotate={180} stroke={1.5} color={'white'}/>
                                <Text color={'white'}>Make It Happen</Text>
                            </Group>
                        </Center>
                        <Title className={classes.title}>
                            Help the people, make <Text
                            component="span"
                            inherit
                            variant="gradient"
                            gradient={{from: theme.colors.lime[5], to: theme.colors.green[4]}}
                        >big changes</Text> and <Text
                            component="span"
                            inherit
                            variant="gradient"
                            gradient={{from: theme.colors.green[4], to: theme.colors.lime[5]}}
                        >help this world.</Text>
                        </Title>
                        <Text size="lg" className={classes.description}>
                            Join us and be part of something special. Together we can make a difference and bring your
                            dreams to
                            reality.
                        </Text>
                    </Stack>
                </Container>

                <div className={classes.controls}>
                    <Button className={classes.control} variant="outline" size="lg" component={Link} to="/create-campaign">
                        Start a campaign
                    </Button>
                    <Button className={classes.control} variant="outline" size="lg" component={Link} to="/campaigns">
                        Explore now
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
