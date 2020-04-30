import { Lessons } from 'src/app/models/lessons';
export class Questions {
  id: string;
  lessonId: Lessons;
  content: string;
  answers: Array<any>;
  correctAnswer: number;
}
