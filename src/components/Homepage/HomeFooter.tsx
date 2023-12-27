import { Container, Group, Anchor } from '@mantine/core';
import {
  GitHubLogoIcon,
} from '@radix-ui/react-icons';
import '@mantine/core/styles.css';
import classes from '../../css/FooterSocial.module.css';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },
  { link: '#', label: 'Blog' },
  { link: '#', label: 'Careers' },
];

export default function FooterSimple() {
  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <img src={`img/logo.svg`} alt="Logo" className="h-10" />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}