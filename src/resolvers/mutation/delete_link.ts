import { Error } from "mongoose";
import { LinkModel } from "../../models/link";
import { Link } from "../../classes";
import { IdInterface, stateInterface } from "../../types";

export const delete_link_resolver = async (
  _: void,
  { _id }: IdInterface
): Promise<stateInterface> => {
  console.log(_id);
  let state: stateInterface;
  try {
    await LinkModel.deleteOne({ _id }).exec();
  } catch (err) {
    state = {
      state: false,
      message: JSON.stringify(err),
    };
    return state;
  }
  state = {
    state: true,
    message: `The link with id: ${_id} is successfully deleted.`,
  };

  return state;
};
