export const contentSecurityPolicy = (nonce: string) => {
  return Array.from(
    new Map<string, string[]>([
      ['base-uri', ['\'self\'']],
      ['default-src', ['\'self\'']],
      ['connect-src', ['\'self\'']],
      ['font-src', ['\'self\'']],
      ['form-action', ['\'self\'']],
      ['frame-ancestors', ['\'self\'']],
      ['frame-src', ['\'self\'']],
      ['img-src', [
        '\'self\'',
        'blob:',
        'data:',
        'https://datocms-assets.com',
      ]],
      ['object-src', ['\'none\'']],
      ['script-src', [
        `'nonce-${nonce}'`,
        'https://datocms-assets.com',
        '\'self\'',
        '\'unsafe-eval\'',
      ]],
      ['style-src', [
        '\'self\'',
        '\'unsafe-inline\'',
      ]],
      ['upgrade-insecure-requests', []],
    ]),
  )
    .map(([key, values]) => `${key} ${values.join(' ')};`)
    .join(' ')
    .trim();
};
