import { GalleryBlockFragment } from '@myran/types';

import styles from './gallery.module.scss';
type Props = GalleryBlockFragment;

export const Gallery: React.FC<Props> = ({ images }) => {
  return <div className={styles.root}>Gallery</div>;
};
