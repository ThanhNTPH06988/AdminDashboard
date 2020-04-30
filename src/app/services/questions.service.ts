import { Lessons } from "src/app/models/lessons";
import { Questions } from "./../models/questions";
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable, Subject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class QuestionsService {
  formQuestions: Questions;

  questionsCollection: AngularFirestoreCollection<Questions> = null;
  lessonsCollection: AngularFirestoreCollection<Lessons> = null;

  constructor(private firestore: AngularFirestore) {
    this.questionsCollection = firestore.collection("questions");
    this.lessonsCollection = firestore.collection("lessons");
  }

  /// load all ds kèm id
  getAllQuestions(): AngularFirestoreCollection<Questions> {
    return this.questionsCollection;
  }

  getLessons(): AngularFirestoreCollection<Lessons> {
    return this.lessonsCollection;
  }

  // lấy chi tiết một level theo id
  findID(id): Observable<Questions> {
    const questionsFound = this.firestore
      .collection("questions")
      .doc(id)
      .valueChanges();
    return <Observable<Questions>>questionsFound;
  }

  // searchUsers(searchValue){
  //   return this.firestore.collection('levels',ref => ref.where('levelName', '>=', searchValue)
  //     .where('levelName', '<=', searchValue + '\uf8ff'))
  //     .snapshotChanges()
  // }

  /// Thêm câu hỏi

  createQuestions(que: Questions) {
    var temp = que.answers.toString();
    var answers = temp.split(",");
    que.answers = [answers[0], answers[1], answers[2], answers[3]];
    this.firestore.collection("questions").add(que);
  }

  /// Sửa câu hỏi

  updateQuetions(quesId: string, que: Questions) {
    var temp = que.answers.toString();
    var answers = temp.split(",");
    que.answers = [answers[0], answers[1], answers[2], answers[3]];
    this.firestore.doc("questions/" + quesId).update(que);
  }

  // xOá câu hỏi

  deleteQuestions(quesId: string) {
    this.firestore.doc("questions/" + quesId).delete();
  }

  private listner = new Subject<any>();
  refresh(): Observable<any> {
    return this.listner.asObservable();
  }

  filter(filterBy: String) {
    this.listner.next(filterBy);
  }
}
