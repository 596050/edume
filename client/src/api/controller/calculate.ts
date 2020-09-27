import { post, RequestArgs } from "../api";

const baseURL = process.env.REACT_APP_SERVICE_BASE_URL;

type PostCodeExecution = {} & RequestArgs;

export const postCalculation = async (props: PostCodeExecution) => {
  const response = await post<{ words: string[]; permutations: string[] }>({
    url: `${baseURL}/calculate/keypad-combination`,
    ...props,
  });
  const { data = { words: [], permutations: [] } } = response || {};
  return data;
};
