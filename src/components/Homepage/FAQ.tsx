import { Container, Title, Accordion } from '@mantine/core';
import '@mantine/core/styles.css';
import classes from '../../css/FaqSimple.module.css';

const groceries = [
  {
    emoji: '🏛️',
    value: 'Is Ribir stable now?',
    description:
      'The core framework of Ribir is in a basically stable state, and the API and syntax will be iterated with a cautious attitude. Although the widget library already has many available widgets, it is still in a very rough state, and there will be major changes in each version.',
  },
  {
    emoji: '💻',
    value: 'What platforms are currently supported?',
    description:
      'The 0.1 version only covers the Mac, Linux and Windows platforms. You can try to compile the project to the corresponding mobile and web ends, but they have not been verified.',
  },
  {
    emoji: '🏗️',
    value: 'How is Ribir progressing?',
    description:
      'In all important designs of the entire framework, performance is an important factor we consider. According to the performance of real development projects we have observed, the overall experience meets expectations. We expect it to eventually have excellent performance. But to be honest, we have never done any detailed performance measurement and analysis, so we have not done any code optimization work. We expect this work to be carried out comprehensively after the full platform coverage and the widget library are relatively stable - or we have encountered detailed performance bottlenecks before that.',
  },
];

export default function FAQ() {
  // See groceries data above
  const items = groceries.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji} className={classes.itemTitle}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel className={classes.content}>
        {item.description}
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div className={classes.wrapper}>
      <Container size="lg" className={classes.wrapper}>
        <Title ta="center" className={classes.title}>
          Frequently Asked Questions
        </Title>
        <Accordion variant="contained" defaultValue="Is Ribir stable now?">
          {items}
        </Accordion>
     </Container>
    </div>
  );
}