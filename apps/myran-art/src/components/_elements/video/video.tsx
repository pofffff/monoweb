interface Props {
  src: string;
  preload: 'none' | 'metadata' | 'auto';
}

export const Video: React.FC<Props> = ({
  src, preload,
}) => {
  return (
    <video preload={preload} autoPlay controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
