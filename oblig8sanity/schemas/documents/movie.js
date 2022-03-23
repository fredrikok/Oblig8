export default {
  type: 'document',
  name: 'movie',
  title: 'Movie',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Tittel',
    },
    {
      type: 'reference',
      name: 'actor',
      title: 'Actor',
      to: [{type: 'actor'}]
    },
  ],
}