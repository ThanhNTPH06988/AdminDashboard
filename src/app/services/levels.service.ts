import { Levels } from 'src/app/models/levels';
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class LevelsService {

  formLevels: Levels;

  levelsCollection: AngularFirestoreCollection<Levels> = null;
  
  constructor(private firestore: AngularFirestore) {

    this.levelsCollection = firestore.collection("levels");

  }

  /// load all ds kèm id
  getAllLevels(): AngularFirestoreCollection<Levels>{
    return this.levelsCollection;
  }

  // lấy chi tiết một level theo id
  findID(id): Observable<Levels> {
    const levelsFound = this.firestore
      .collection("levels")
      .doc(id)
      .valueChanges();
    return <Observable<Levels>>levelsFound;
  }

  searchUsers(searchValue){
    return this.firestore.collection('levels',ref => ref.where('levelName', '>=', searchValue)
      .where('levelName', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  createLevels(lev: Levels) {
    this.firestore.collection("levels").add(lev);
  }


  updateLevels(levelsId: string,lev: Levels) {
    this.firestore.doc("levels/" + levelsId).update(lev);
  }


  deleteLevels(levelsId: string) {
    this.firestore.doc("levels/" + levelsId).delete();
  }

  private listner = new Subject<any>();
  refresh(): Observable<any> {
    return this.listner.asObservable();
  }

  filter(filterBy: String) {
    this.listner.next(filterBy);
  }
  
}
