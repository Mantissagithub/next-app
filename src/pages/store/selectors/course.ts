import { userState } from "../atoms/user";
import {selector} from "recoil";
import { courseState } from "../atoms/course";
import {Course} from "../atoms/course";

export const isCourseLoading = selector<boolean>({
  key: 'isCourseLoaingState',
  get: ({get}) => {
    const state = get(courseState);

    return state.isLoading;
  },
});

export const courseDetails = selector<Course | null>({
  key: 'courseDetailsState',
  get: ({get}) => {
    const state = get(courseState);
    return state.course;
  },
});

export const courseTitle = selector<string | null>({
  key: 'courseTitleState',
  get: ({get}) => {
    const state = get(courseState);
    if (state.course) {
        return state.course ? state.course.title : null;
    }
    return "";
  },
});

export const coursePrice = selector<number | null | "">({
  key: 'coursePriceState',
  get: ({get}) => {
    const state = get(courseState);
    if (state.course) {
        return state.course.price ;
    }
    return "";
  },
});

export const courseImage = selector<string | null>({
  key: 'courseImageState',
  get: ({get}) => {
    const state = get(courseState);
    if (state.course) {
        return state.course ? state.course.image : null;
    }
    return "";
  },
});

