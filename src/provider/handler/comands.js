
import { getCategories } from './getCategories';
import { getPosts } from './getPosts';

const test = () => {
  return new Promise(resolve => resolve({}));
};

export const commands = {
  categories: getCategories,
  posts: getPosts,
  test
};
