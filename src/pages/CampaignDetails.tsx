import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICampaign} from "../types";
import campaignsData from "../data/Campaigns.json";
import {
    Accordion,
    Anchor,
    Avatar,
    Button,
    Card,
    Container,
    Flex,
    Grid,
    Group,
    Image,
    Paper,
    PaperProps,
    Progress,
    Stack,
    Text,
    TextProps,
    Title,
    TitleProps,
    UnstyledButton
} from "@mantine/core";
import {IconFlag, IconHeart, IconHeartFilled, IconSeparator, IconShare, IconTag} from "@tabler/icons-react";
import {useDisclosure, useToggle} from "@mantine/hooks";
import {DonationDrawer, ShareModal, UserCard} from "../components";
import {PublicLayout} from "../layout";
import {Helmet} from "react-helmet";
import * as dayjs from "dayjs";
import * as LocalizedFormat from "dayjs/plugin/localizedFormat"
import {notifications} from "@mantine/notifications";

const CampaignDetailsPage = (): JSX.Element => {
    dayjs.extend(LocalizedFormat)
    const {id} = useParams();
    const [campaign, setCampaign] = useState<ICampaign>();
    const [opened, {open, close}] = useDisclosure(false);
    const [donateOpened, {open: donateOpen, close: donateClose}] = useDisclosure(false);
    const [following, setFollowing] = useToggle();

    const paperProps: PaperProps = {
        p: "md",
        shadow: "sm",
    }

    const titleProps: TitleProps = {
        size: 32,
        weight: 700,
        transform: 'capitalize',
        sx: {lineHeight: '40px'}
    }

    const subTitleProps: TextProps = {
        size: 20,
        weight: 500,
        sx: {lineHeight: '28px'}
    }

    const iconSize = 18;

    useEffect(() => {
        setCampaign(campaignsData.data.find(_ => _.id === id))
    }, [id]);

    return (
        <>
            <Helmet>
                <title>{campaign?.title}</title>
            </Helmet>
            <PublicLayout compressedNav={false}>
                <Container size="lg">
                    <Grid>
                        <Grid.Col lg={8}>
                            <Stack>
                                <Card padding="md" shadow="sm">
                                    <Card.Section>
                                        <Image src={campaign?.mainImage} height={480}/>
                                    </Card.Section>
                                    <Stack mt="md">
                                        <Title>{campaign?.title}</Title>
                                        <Flex gap="xs" align="center">
                                            <Text size="sm">Fundraise campaign created by</Text>
                                            <UnstyledButton component={Anchor}>
                                                <Flex gap="xs" align="center">
                                                    <Avatar src={campaign?.createdByImage} radius="xl" size="sm"/>
                                                    <Text size="sm">{campaign?.createdBy}</Text>
                                                </Flex>
                                            </UnstyledButton>
                                            <IconSeparator size={18}/>
                                            <Text component={Anchor} size="sm">{campaign?.country}</Text>
                                            <IconSeparator size={18}/>
                                            <Text component={Anchor} size="sm">{campaign?.category}</Text>
                                        </Flex>
                                        <Text {...subTitleProps}>Our story</Text>
                                        <Text size="sm">{campaign?.description}</Text>
                                    </Stack>
                                </Card>
                                <Paper {...paperProps}>
                                    <Text {...subTitleProps} mb="sm">Organizer</Text>
                                    <UserCard/>
                                </Paper>
                                <Paper {...paperProps}>
                                    <Flex gap="sm" align="center">
                                        <Text>Created on {dayjs(campaign?.createdAt).format('LL')}</Text>
                                        <IconSeparator size={iconSize}/>
                                        <Group spacing={2}>
                                            <IconTag size={iconSize}/>
                                            <Text component={Anchor}>{campaign?.category}</Text>
                                        </Group>
                                    </Flex>
                                </Paper>
                                <Button leftIcon={<IconFlag size={iconSize}/>} variant="subtle" color="secondary">Report
                                    campaign</Button>
                            </Stack>
                        </Grid.Col>
                        <Grid.Col lg={4}>
                            <Stack>
                                <Paper {...paperProps}>
                                    <Stack spacing="sm">
                                        <Title {...titleProps} align="center">{campaign?.amountRaised}</Title>
                                        <Text fw={500} align="center" color="dimmed">raised of {campaign?.goal}</Text>
                                        <Progress value={campaign?.daysLeft} size="md"/>
                                        <Flex justify="space-between">
                                            <Text fw={500}>{campaign?.daysLeft}% Funded</Text>
                                            <Text fw={500}>{campaign?.contributors} Donors</Text>
                                        </Flex>
                                        <Button size="xl" onClick={donateOpen}>Donate</Button>
                                        <Button leftIcon={<IconShare size={iconSize}/>} variant="outline"
                                                onClick={open}>
                                            Share with friends
                                        </Button>
                                        <Button
                                            leftIcon={following ? <IconHeartFilled size={iconSize}/> :
                                                <IconHeart size={iconSize}/>}
                                            variant={following ? 'filled' : 'subtle'}
                                            color="secondary"
                                            onClick={() => {
                                                setFollowing();
                                                notifications.show({
                                                    title: 'Notification',
                                                    message: `${following ? 'Following' : 'Unfollowed'} this campaign`,
                                                    withBorder: true,
                                                    styles: (theme) => ({
                                                        root: {
                                                            backgroundColor: theme.colors.blue[6],
                                                            borderColor: theme.colors.blue[6],

                                                            '&::before': {backgroundColor: theme.white},
                                                        },

                                                        title: {color: theme.white},
                                                        description: {color: theme.white},
                                                        closeButton: {
                                                            color: theme.white,
                                                            '&:hover': {backgroundColor: theme.colors.blue[7]},
                                                        },
                                                    }),
                                                })
                                            }}
                                        >
                                            {following ? 'Unfollow' : 'Follow'} this campaign
                                        </Button>
                                    </Stack>
                                </Paper>
                                <Paper {...paperProps}>
                                    <Text {...subTitleProps} mb="md">Donation FAQ</Text>
                                    <Accordion defaultValue="customization" variant="filled">
                                        <Accordion.Item value="customization">
                                            <Accordion.Control>When will {campaign?.createdBy} get my
                                                payment?</Accordion.Control>
                                            <Accordion.Panel>Your payment is sent directly to Dora so it immediately
                                                helps
                                                their campaign.</Accordion.Panel>
                                        </Accordion.Item>

                                        <Accordion.Item value="flexibility">
                                            <Accordion.Control>How secure is the payment process?</Accordion.Control>
                                            <Accordion.Panel>Payments are made in a highly-secure environment. We use
                                                industry leading technology (such as SSL) to keep your information safe
                                                and encrypted</Accordion.Panel>
                                        </Accordion.Item>
                                    </Accordion>
                                </Paper>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </Container>
                <ShareModal opened={opened} onClose={close} campaign={campaign} iconSize={iconSize}/>
                <DonationDrawer campaign={campaign} opened={donateOpened} onClose={donateClose} iconSize={iconSize}/>
            </PublicLayout>
        </>
    );
};

export default CampaignDetailsPage;
