export const getHref = ({
  parent,
  target,
}: {
  parent?: string | null;
  target?: string | null;
}) => {
  return parent ? `/${parent}/${target}` : `/${target}`;
};
