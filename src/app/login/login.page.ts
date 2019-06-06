import { Component, OnInit } from '@angular/core';
import { HTTP } from "@ionic-native/http/ngx";
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {};

  constructor(private http: HTTP, public navCtrl: NavController) {}

  loginUser() {
    this.navCtrl.navigateRoot('/home')
    // this.http
    //   .get("https://ionicframework.com/", {}, {})
    //   .then(data => {
    //     console.log(data.status);
    //     console.log(data.data); // data received by server
    //     console.log(data.headers);

    //     if(data.data) {
    //       localStorage.setItem('USER', JSON.stringify(this.user))
    //       this.startRadar()
    //       this.navCtrl.navigateForward('/home')
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error.status);
    //     console.log(error.error); // error message as string
    //     console.log(error.headers);
    //   });
  }

  startRadar(){
    
  }

  ngOnInit() {
  }

}
