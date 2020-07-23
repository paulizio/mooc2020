export interface Course{
    name: string;
    exerciseCount: number;
}
export interface CoursePartsProps{
courseParts: Course[];
}

export interface CoursePartBase {
    name: string;
    description?:string;
    exerciseCount: number;
  }
  
 export interface CoursePartOne extends CoursePartBase {
    name: "Fundamentals";
    description: string;
  }
  
 export interface CoursePartTwo extends CoursePartBase {
    name: "Using props to pass data";
    groupProjectCount: number;
  }
  
 export interface CoursePartThree extends CoursePartBase {
    name: "Deeper type usage";
    description: string;
    exerciseSubmissionLink: string;
  }
  export interface CoursePartFour extends CoursePartBase {
    name: "Learning Typescript";
    description: string;
    exerciseCount:number;
  }
  export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree|CoursePartFour;
