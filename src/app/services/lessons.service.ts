import { Levels } from "./../models/levels";
import { Lessons } from "./../models/lessons";
import { Observable, Subject } from "rxjs";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LessonsService {

  lessonsCollection: AngularFirestoreCollection<Lessons> = null;

  //load compobox
  levelsCollection: AngularFirestoreCollection<Levels> = null;

  formLessons: Lessons;

  constructor(private firestore: AngularFirestore) {
    this.lessonsCollection = firestore.collection("lessons");
    this.levelsCollection = firestore.collection("levels");
  }

  getAllLessons(): AngularFirestoreCollection<Lessons> {
    return this.lessonsCollection;
  }
  
//load compobox
  getLevels(): AngularFirestoreCollection<Levels> {
    return this.levelsCollection;
  }
  // Code mẫu phần getAll
  // getAllLessons(): Observable<Lessons[]> {
  //   const levelsCollection = this.firestore
  //     .collection<Lessons>("lessons")
  //     .valueChanges();
  //   return levelsCollection;
  // }

  // lấy chi tiết một câu hỏi theo id
  findID(id): Observable<Lessons> {
    const LessonsFound = this.firestore
      .collection("lessons")
      .doc(id)
      .valueChanges();
    return <Observable<Lessons>>LessonsFound;
  }

  /// Thêm câu hỏi

  createLessons(les: Lessons) {
    this.firestore.collection("lessons").add(les);
  }

  updateLessons(lessonsId: string, les: Lessons) {
    this.firestore.doc("lessons/" + lessonsId).update(les);
  }

  deleteLessons(lessonsId: string) {
    this.firestore.doc("lessons/" + lessonsId).delete();
  }

  private listner = new Subject<any>();
  refresh(): Observable<any> {
    return this.listner.asObservable();
  }

  filter(filterBy: String) {
    this.listner.next(filterBy);
  }
}
