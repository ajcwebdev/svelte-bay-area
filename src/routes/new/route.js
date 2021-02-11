module.exports = {
  all: async () => [{ slug: 'new' }],
  permalink: ({ request }) => `/${request.slug}/`,
  data: async ({ request }) => {
    return {
      title: 'Svelte Bay Area!!!',
      content: `
      <h2>Hello world</h2>
      <p>Woot!</p>
      `,
    };
  },
};