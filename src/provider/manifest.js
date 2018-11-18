export const manifest = {
  handlers: ['categories', 'posts', 'test'],
  help: {
    categories: {
      description: 'retrieves a list of available categories',
      params: {
        url: 'url of the wordpress website you would like to use'
      }
    },
    posts: {
      description: 'retrieves a list of posts related to a specific category',
      params: {
        url: 'url of the wordpress website category page you would like to use'
      }
    }
  }
};
