import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'DJ',
    to: '/guia-dj/intro',
    Svg: require('@site/static/img/dj.svg').default,
    description: (
      <>
        Aprende desde cero a mezclar, construir sets con
        transiciones limpias  y crear performance creativos.
      </>
    ),
  },
  {
    title: 'Edición de Audio',
    to: '/guia-edicion/intro',
    Svg: require('@site/static/img/edit.svg').default,
    description: (
      <>
        Empieza a usar un DAW para editar la música que
        vas a tocar en vivo: remix, extended, mashup y más.
      </>
    ),
  },
  {
    title: 'Producción Musical',
    to: '/guia-produccion/intro',
    Svg: require('@site/static/img/production.svg').default,
    description: (
      <>
        Crea tus propias canciones paso a paso: composicón, 
        beatmaking, diseno sonoro, mezcla básica y más.
      </>
    ),
  },
];

function Feature({Svg, title, description, to}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={to} className={styles.featureCardLink}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
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
