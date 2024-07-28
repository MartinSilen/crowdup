import { createStyles, rem, Text, Title, TitleProps, UnstyledButton, Group, Image } from "@mantine/core";
import { Link } from "react-router-dom";
import brandIcon from '../assets/img/Logo.svg';
import brandName from '../assets/img/logo-text.svg';

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    justify: 'flex-start',
    height: '100%',
    alignItems: 'center',
    maxHeight: '45px',
    gap: theme.spacing.xs,
  },
  icon: {
    width: 'auto',
    height: '100%',
    maxHeight: '45px',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  topLine: {
    fontFamily: 'Helvetica', // Change this to your preferred font
    fontWeight: 700,
    fontSize: rem(20),
    lineHeight: 1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
  bottomLine: {
    fontFamily: 'Roboto', // Change this to your preferred font
    fontWeight: 400,
    fontSize: rem(22),
    lineHeight: 1,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

interface IProps extends TitleProps {
  asLink?: boolean;
  variant?: 'grayscale' | 'default';
}

const Brand = ({ asLink, variant, ...others }: IProps) => {
  const { classes } = useStyles();

  const content = (
    <Group className={classes.container}>
      <img src={brandIcon} alt="Brand Icon"/>
      <img src={brandName} alt="R-Style Softlab"/>
    </Group>
  );

  return asLink ? (
    <UnstyledButton component={Link} to="/">
      {content}
    </UnstyledButton>
  ) : (
    content
  );
};

export default Brand;
