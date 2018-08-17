import { PhotoPage } from './../photo/photo';
import { OptionsPage } from './../options/options';
import { CustomiseProfilePage } from './../customise-profile/customise-profile';
import { AngularFirestore } from "angularfire2/firestore";
import { AuthService } from "./../../services/auth.service";
import { User } from "./../../app/models/user.interface";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  public user: User = {
    name: "",
    username: "",
    email: "",
    biography: ""
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthService,
    private firestore: AngularFirestore
  ) {
    this.getUser();
  }

  getUser() {
    this.firestore
      .collection("users")
      .doc(this.auth.getUID())
      .valueChanges()
      .subscribe((user: User) => {
        this.user = user;
      });
  }

  optionsButtonClicked() {
    this.navCtrl.push(OptionsPage);
  }

  openPhoto(userID: string, photoID: string) {
    this.navCtrl.push(PhotoPage, {
      userID: userID,
      photoID: photoID,
      source: 'profile'
    });
  }

  ionViewDidLoad() {
    this.getUser();
  }
}
