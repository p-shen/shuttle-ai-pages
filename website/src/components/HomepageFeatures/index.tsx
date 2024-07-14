import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  jpegSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Personalized',
    jpegSrc: require('@site/static/img/personalized.jpeg').default,
    description: (
      <>
        Shuttle AI is personalized to your own health data.
      </>
    ),
  },
  {
    title: 'Private',
    jpegSrc: require('@site/static/img/private.jpeg').default,
    description: (
      <>
        Shuttle AI anonymizes your data so your information is kept private.
      </>
    ),
  },
  {
    title: 'Powered by LLMs',
    jpegSrc: require('@site/static/img/ai_llm.jpeg').default,
    description: (
      <>
        Powered by LLMs that deeply understands healthcare.
      </>
    ),
  },
];

function Feature({ title, jpegSrc, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={jpegSrc} alt={title} style={{ width: '250px', height: 'auto' }} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
