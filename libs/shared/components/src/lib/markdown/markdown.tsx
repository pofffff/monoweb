import clsx from 'clsx';
import MarkdownComponent from 'markdown-to-jsx';

import styles from './markdown.module.scss';
interface Props {
  className?: string;
  text: string;
}

export const Markdown: React.FC<Props> = ({
  className, text,
}) => {
  return (
    <MarkdownComponent
      className={clsx(styles.root, className)}
    >
      {text}
    </MarkdownComponent>
  );
};
