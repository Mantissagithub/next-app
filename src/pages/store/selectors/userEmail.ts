import { userState } from "../atoms/user";
import {selector} from "recoil";

interface EmailState{
    userEmail : string | null;
}

export const userEmailState = selector<EmailState>({
  key: 'userEmailState',
  get: ({get}) => {
    const state = get(userState);
    return {
        userEmail: state.userEmail
    };
  },
});
