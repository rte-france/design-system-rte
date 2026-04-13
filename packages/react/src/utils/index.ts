import { v4 as uuidv4 } from "uuid";

const generateId = () => {
  return uuidv4();
};

export { generateId };
