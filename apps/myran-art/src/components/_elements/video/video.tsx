interface Props {
  src: string
  preload: 'none' | 'metadata' | 'auto'
}

export const Video: React.FC<Props> = ({ src, preload }) => {
  return (
    <video controls autoPlay preload={preload}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
