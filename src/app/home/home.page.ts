import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  standalone: false,
})
export class HomePage {
  constructor() {}

  // TEMPERATURA

  temp_c = 0;
  res_c = 0;

  converter_c() {
    this.res_c = (9 * this.temp_c + 160) / 5;
  }

  temp_f = 0;
  res_f = 0;

  converter_f() {
    this.res_f = Math.ceil((this.temp_f - 32) * (5 / 9));
  }

  // TRIANGULO

  a = 0;
  b = 0;
  c = 0;
  res_triangulo = "";

  ver_triangulo() {
    if (
      this.a + this.b < this.c ||
      this.b + this.c < this.a ||
      this.a + this.c < this.b
    ) {
      this.res_triangulo = "Os lados não formam um triângulo!";
    } else if (this.a === this.b && this.b === this.c) {
      this.res_triangulo = "Triângulo é um equilátero!";
    } else if (this.a != this.b && this.b != this.c && this.a != this.c) {
      this.res_triangulo = "Triângulo é um escaleno!";
    } else {
      this.res_triangulo = "Triângulo é um isóceles!";
    }
  }

  // MEDIA

  n1 = 0;
  n2 = 0;
  n3 = 0;
  n4 = 0;
  res = 0;
  res_media = "";

  ver_media() {
    this.res = (this.n1 + this.n2 + this.n3 + this.n4) / 4;

    switch (true) {
      case this.res < 3:
        this.res_media = `Você está retido 😢!`;
        break;
      case this.res >= 6:
        this.res_media = `Você está aprovado 😎!`;
        break;
      case this.res >= 3 && this.res < 6:
        this.res_media = `Você está de Recuperação 😐!`;
        break;
      default:
        this.res_media = "Algo deu errado!";
    }
  }
}
