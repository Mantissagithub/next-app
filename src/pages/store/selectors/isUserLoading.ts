import { userState } from "../atoms/user";
import {selector} from "recoil";

interface LoadingState{
    isLoading : boolean | null;
}

export const isUserLoading = selector<LoadingState>({
  key: 'userLoadingState',
  get: ({get}) => {
    const state = get(userState);
    return {
        isLoading : state.isLoading,
    }
  },
});
