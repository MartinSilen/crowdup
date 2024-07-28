import {createStyles, Text, TextProps} from "@mantine/core";

const useStyles = createStyles((theme) => ({
    badge: {
        width: "fit-content",
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.xl,
        backgroundColor: theme.colors.primary[4],
        color: theme.white,
        fontWeight: 600,
        fontSize: theme.fontSizes.sm,
        lineHeight: '14px'
    }
}))

interface IProps extends TextProps {
    title: string
}

const TitleBadge = ({title}: IProps) => {
    const {classes} = useStyles();

    return (
        <Text className={classes.badge} mb="lg">{title}</Text>
    );
};

export default TitleBadge;
