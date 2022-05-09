<template>
  <div>
    <div class="section-to-print">
      <table style="width: 100% !important">
        <thead>
          <tr>
            <td>
              <div class="header-space">&nbsp;</div>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div id="print_content">
                <v-row>
                  <v-spacer></v-spacer>
                  <div>
                    <img width="150" src="../assets/careful_Service_Logo.png" />
                  </div>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-row class="mx-0">
                      <div
                        class="size-10"
                        style="
                          display: flex;
                          align-items: center;
                          justify-content: center;
                        "
                      >
                        <img
                          width="100"
                          class="d-print-block"
                          src="../assets/careful_Service_Logo_quer.png"
                        />
                        | Lukas Seibel
                      </div>
                    </v-row>
                    <p class="mt-3 size-10">
                      Mainzer Str. 75 | 65189 Wiesbaden
                      <br />
                      <br />
                      Auktion & Markt AG
                      <br />
                      Auktionszentrum Frankfurt-Süd
                      <br />
                      Lagerstraße 5
                      <br />
                      <br />
                      64331 Weiterstadt
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <div class="mt-3 pl-16 size-11 strong">
                      <br />
                      <span class="accent--text"> Ihr Ansprechpartner </span>
                      <br />
                      Lukas Seibel
                      <br />
                      <br />
                      <span class="accent--text mr-2">Tel </span> +49162 680
                      5047
                      <br />
                      <span class="accent--text mr-2">Mail </span>
                      info@care-ful.de
                    </div></v-col
                  >
                </v-row>
                <br />
                <br class="hidden-section" />
                <div class="hidden-section">
                  <v-row>
                    <v-col>
                      <b>Rechnung vom</b>
                    </v-col>
                    <v-col>
                      <p class="text-right">29.04.2022</p>
                    </v-col>
                    <v-col>
                      <b>Rechnungsnummer</b>
                    </v-col>
                    <v-col>
                      <p class="text-right">1232342343455</p>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                </div>
                <p class="size-11">
                  Für die optische Begutachtung folgender Fahrzeuge bis
                  einschließlich 11.02.2022 berechne ich Ihnen:
                </p>
                <v-simple-table dense class="w-100">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th>Fahrzeug</th>
                        <th>Fin</th>
                        <th>Datum</th>
                        <th>Betrag</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr :key="car.id" v-for="car in cars">
                        <td class="print-text">
                          {{ car.name }}
                        </td>
                        <td class="print-text">
                          {{ car.fin }}
                        </td>
                        <td class="print-text">
                          {{ car.date }}
                        </td>
                        <td class="print-text">
                          {{ car.cost }}
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <div id="summary">
                  <v-row class="mt-3">
                    <v-col>
                      Leistungserbringungsdatum: 07.02.2022 - 11.02.2022
                    </v-col>
                  </v-row>
                  <v-divider class="my-3"></v-divider>
                  <v-row>
                    <v-col cols="3"
                      ><p>
                        Summe netto <br />
                        6.298,03 €
                      </p></v-col
                    >
                    <v-col cols="3"
                      ><p>
                        19 % Umsatzsteuer <br />
                        1.196,63 €
                      </p></v-col
                    >
                    <v-col cols="6"
                      ><p>
                        Gesamtbetrag <br />
                        7.494,66 €
                      </p></v-col
                    >
                  </v-row>
                  <v-divider></v-divider>
                  <v-divider class="mt-2"></v-divider>
                </div>
                <v-btn
                  class="hidden-section mb-10 mt-5"
                  @click="printInvoice()"
                >
                  Drucken
                </v-btn>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <div class="footer-space">&nbsp;</div>
            </td>
          </tr>
        </tfoot>
      </table>

      <div class="header">
        <v-row>
          <v-col>
            <b>Rechnung vom</b>
          </v-col>
          <v-col>
            <p class="text-right">29.04.2022</p>
          </v-col>
          <v-col>
            <b>Rechnungsnummer</b>
          </v-col>
          <v-col>
            <p class="text-right">1232342343455</p>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </div>
      <div class="footer">
        <v-row>
          <v-col class="p-0" cols="3">
            <img
              width="100"
              class="d-print-block"
              src="../assets/careful_Service_Logo_quer.png"
            />
            <p>
              Mainzer Straße 75
              <br />
              65189 Wiesbaden
            </p>
          </v-col>
          <v-col class="p-0" cols="3">
            <p>
              <span class="accent--text">Tel</span> +49 162 680 5047
              <br />
              <span class="accent--text">Mail</span> info@care-ful.de
              <br />
              <a class="accent--text" href="www.care-ful.de">www.care-ful.de</a>
            </p>
          </v-col>
          <v-col class="p-0" cols="4">
            <p>
              <span class="accent--text">Konto</span> Wiesbadener Volksbank
              <br />
              <span class="accent--text">IBAN</span> DE48 5109 0000 0005 2744 00
              <br />
              <span class="accent--text">BIC</span> WIBADE5W
            </p>
          </v-col>
          <v-col class="p-0" cols="2">
            <p><span class="accent--text">Steuer-Nr.</span> 04082503014</p>
          </v-col></v-row
        >
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/composition-api";
export default {
  setup() {
    const cars = ref([
      {
        id: 1,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 2,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 3,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 4,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 5,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },

      {
        id: 6,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 7,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 8,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 9,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 10,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 11,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 12,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 13,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 14,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 15,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },

      {
        id: 16,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 17,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 18,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 19,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 20,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 21,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 22,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 23,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 24,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 25,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },

      {
        id: 26,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 27,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 28,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 29,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 30,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 31,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 32,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 33,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 34,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 35,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },

      {
        id: 36,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 37,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 38,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
      {
        id: 39,
        name: "BMW X1",
        fin: "khrcXd",
        date: "28.04.2022",
        cost: "40€",
      },
    ]);

    const printInvoice = () => {
      window.print();
    };

    return {
      // return data
      cars,
      // return methods
      printInvoice,
    };
  },
};
</script>
<style>
.header,
.footer {
  display: none;
}
@media print {
  * {
    visibility: hidden;
  }
  .hidden-section {
    display: none !important;
  }
  .print-text {
    font-size: 9px !important;
  }
  .section-to-print,
  .section-to-print * {
    visibility: visible;
  }
  #app_bar {
    display: none;
  }
  #print_content {
    margin-top: -80px;
  }
  #summary {
    break-inside: avoid;
  }
  .header,
  .header-space {
    height: 50px;
    width: 97%;
  }
  .footer,
  .footer-space {
    height: 50px;
  }
  .header {
    display: block;
    position: fixed;
    top: 0;
  }
  .print-text {
    line-height: 1.5 !important;
    font-size: 10px !important;
  }
  .size-10 {
    font-size: 10px !important;
  }
  .size-11 {
    font-size: 11px !important;
  }
  .strong {
    font-weight: 700;
  }
  .v-data-table--dense > .v-data-table__wrapper > table > tbody > tr > td {
    height: 14px !important;
  }
  .footer {
    width: 100%;
    line-height: 1;
    font-size: 10px;
    display: block;
    position: fixed;
    bottom: 0;
  }
}
@page {
}
</style>
