import client from './apolloClient';
import { get_homepage, get_portfolio, get_global_set } from './queries';

export const globalLoader = async () => {
  try {
    const globalData = await client.query({ query: get_global_set });
    return {
      globalData: globalData.data,
    };
  } catch (error) {
    throw error;
  }
};

export const homePageLoader = async () => {
  try {
    const homepageData = await client.query({ query: get_homepage });
    return {
      homepageData: homepageData.data,
    };
  } catch (error) {
    throw error;
  }
};

export const portfolioPageLoader = async () => {
  try {
    const portfolioData = await client.query({ query: get_portfolio });
    return {
      portfolioData: portfolioData.data,
    };
  } catch (error) {
    return { error };
  }
};
