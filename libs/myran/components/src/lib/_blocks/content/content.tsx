import clsx from 'clsx';

import { Markdown } from '@shared/components/server';

import { ContentBlockFragment } from '@myran/types';

import styles from './content.module.scss';

type Props = ContentBlockFragment;

export const Content: React.FC<Props> = ({
  center, text,
}) => {
  return text && (
    <div className={clsx(styles.root, center && styles.root__center)}>
      <Markdown text={text} />
    </div>
  );
};
