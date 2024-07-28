import {
    Box,
    BoxProps,
    Card,
    Container,
    createStyles,
    Grid,
    Image,
    SimpleGrid,
    Stack,
    Text,
    TextProps,
    Title,
    TitleProps
} from "@mantine/core";
import {TitleBadge} from "../../components";
import {Link} from "react-router-dom";
import smilingWoman from "../../assets/img/smiling-woman.png";
import friends from "../../assets/img/friends.png";
import charity from "../../assets/img/charity.png";

const useStyles = createStyles((theme) => ({
    feature: {
        padding: theme.spacing.lg,
        backdropFilter: `blur(16px) saturate(180%)`,
        backgroundColor: `rgba(255, 255, 255, 0.75)`,
        border: `none`,

        '&:hover': {
            backgroundColor: theme.colors.primary[2]
        }
    },
}));

interface IProps {
    boxProps: BoxProps
    titleProps?: TitleProps,
    subtitleProps?: TextProps
}

const WaysToFundSection = ({boxProps, subtitleProps}: IProps) => {
    const {classes, cx, theme} = useStyles();

    return (
        <Box sx={{background: 'linear-gradient(170deg,  rgba(81, 237, 82, 0.3), 10%, #2C2C2C, 90%, rgba(81, 237, 82, 0.3))', color: theme.white}} {...boxProps}>
            <Container fluid p={36}>
                <Grid>
                    <Grid.Col lg={4}>
                        <Stack spacing="xs" justify="center" sx={{height: '100%'}}>
                            <TitleBadge title="Make your impact"/>
                            <Title order={3}>CrowdUp Gives You More</Title>
                            <Text>Supercharge your fundraising efforts with our unique tools,
                                features and personal
                                support. Helping you raise more money than you could elsewhere!</Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col lg={8}>
                        <SimpleGrid cols={3} breakpoints={[{maxWidth: 'sm', cols: 1}]} >
                            <Card
                                className={cx(classes.feature, 'card')}
                                shadow="md"
                                radius="sm"
                                component={Link}
                                to="/create-campaign"
                            >
                                <Card.Section>
                                    <Image
                                        src={smilingWoman}/>
                                </Card.Section>
                                <Text mt="md" align="center" {...subtitleProps}>Yourself</Text>
                            </Card>
                            <Card
                                className={cx(classes.feature, 'card')}
                                shadow="md"
                                radius="sm"
                                component={Link}
                                to="/create-campaign"
                            >
                                <Card.Section>
                                    <Image
                                    src={friends}/>
                                </Card.Section>
                                <Text mt="md" align="center" {...subtitleProps}>Friends & Family</Text>
                            </Card>
                            <Card
                                className={cx(classes.feature, 'card')}
                                shadow="md"
                                radius="sm"
                                component={Link}
                                to="/create-campaign"
                            >
                                <Card.Section>
                                    <Image
                                    src={charity}/>
                                </Card.Section>
                                <Text mt="md" align="center" {...subtitleProps}>Charity</Text>
                            </Card>
                        </SimpleGrid>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
};

export default WaysToFundSection;
