import { Component } from "@angular/core";
import { BackgroundMode } from "@ionic-native/background-mode/ngx";
import { BLE } from "@ionic-native/ble/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  listDevice = {};
  user = {};
  isMascota: boolean = false;

  constructor(public backgroundMode: BackgroundMode, public ble: BLE) {
    this.user = JSON.parse(localStorage.getItem("USER"));

    this.backgroundMode.enable();
    this.backgroundMode.on("activate").subscribe(() => {
      console.log("Brackground OK");
      // this.starRadar();
    });
  }

  // starRadar() {
  //   this.bs
  //     .enable()
  //     .then(data => {
  //       console.log("Bluetooth Enable --> " + data);
  //       this.bs
  //         .list()
  //         .then(list => {
  //           this.listDevice = list
  //           this.sendList()
  //         })
  //         .catch(error => {
  //           console.log("Error al obtener la lista --> " + error);
  //         });
  //     })
  //     .catch(error => {
  //       console.log("Ocurio un error en activar el Bluetooth --> " + error);
  //     });
  // }

  // sendList(){

  // }
}
