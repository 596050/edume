import { post, RequestArgs } from "../api";

const baseURL = process.env;

type PostCodeExecution = {} & RequestArgs;

export const postCalculation = async (props: PostCodeExecution) => {
  const response = await post({
    url: `${baseURL}`,
    ...props,
  });
  return response;
};
