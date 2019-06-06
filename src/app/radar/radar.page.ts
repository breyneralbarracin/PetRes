import { Component, OnInit } from "@angular/core";
import { BLE } from "@ionic-native/ble/ngx";

@Component({
  selector: "app-radar",
  templateUrl: "./radar.page.html",
  styleUrls: ["./radar.page.scss"]
})
export class RadarPage implements OnInit {
  deviceList = {};

  constructor(public ble: BLE) {}

  ngOnInit() {
    this.ble
      .enable()
      .then(data => {
        console.log("Bluetooth Iniciado --> " + data);
        this.searchDevices();
      })
      .catch(err => {
        console.log("Error al iniciar bluetooth --> " + err);
      });
  }

  searchDevices() {
    this.ble
      .isEnabled()
      .then(data => {
        console.log("Bluetooth Habilitado --> " + data);
        this.ble.startScan([]).subscribe(device => {
          console.log("device --> " + device);
          console.log(device.mac)
        });
      })
      .catch(err => {
        console.log("Error en el bluetooth --> " + err);
      });
  }
}
