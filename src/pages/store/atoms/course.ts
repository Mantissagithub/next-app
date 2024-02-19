import {atom} from "recoil";

export interface Course{
    _id : string | null;
    title : string | null;
    price : number | null;
    image : string | null;
    description : string | null;
}

interface CourseState {
    isLoading: boolean;
    course: Course | null; // Assuming a `Course` interface exists
  }

export const courseState = atom<CourseState>({
    key: 'courseState',
    default: {
      isLoading: true,
      course: null
    },
  });

// export const Course = atom<Course>({
//     key : 'Course',
//     default:{
//         title : null,
//         price : null,
//         image : null
//     }
// })