import { Component, OnInit } from "@angular/core";
import { HTTP } from "@ionic-native/http/ngx";

@Component({
  selector: "app-mascotas",
  templateUrl: "./mascotas.page.html",
  styleUrls: ["./mascotas.page.scss"]
})
export class MascotasPage implements OnInit {
  user = {};

  constructor(private http: HTTP) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("USER"));

    this.http
      .get("", {}, {})
      .then(data => {
        console.log("Datos de m --> " + data.data);
      })
      .catch(err => {
        console.log("error en recuperar mascotas --> " + err);
      });
  }

  reportar(id) {
    this.http
      .post("", id, {})
      .then(data => {
        console.log("Post enviado --> " + data);
      })
      .catch(err => {
        console.log("Error en el post --> ", err);
      });
  }
}