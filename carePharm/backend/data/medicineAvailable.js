const medicineAvailable = [
  {
    DRG_SERIAL_NO: 107088,
    NAME: "xavir",
    DRG_FILLING: "30 TABLET",
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "20 MILLIGRAM/1 TABLET",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "B01AX06",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",

    JPP: 33.64,

    PHARM_P: 26.7,
  },
  {
    DRG_SERIAL_NO: 965093,
    NAME: "xavir",
    DRG_FILLING: "28 TABLET",
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "20 MILLIGRAM/1 TABLET",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "B01AX06",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",

    JPP: 31.4,
    PHARM_P: 24.92,
  },
  {
    DRG_SERIAL_NO: 84992,
    NAME: "Cefalix 250 mg",
    DRG_FILLING: 20,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "250 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "J01DB01",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 2.25,

    PHARM_P: 1.79,
  },
  {
    DRG_SERIAL_NO: 106153,
    NAME: "Cefalix 500mg",
    DRG_FILLING: 500,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "500 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "J01DB01",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 74.38,

    PHARM_P: 59.03,
  },
  {
    DRG_SERIAL_NO: 84993,
    NAME: "Cefalix 500mg",
    DRG_FILLING: 20,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "500 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "J01DB01",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 3.5,

    PHARM_P: 2.78,
  },
  {
    DRG_SERIAL_NO: 93848,
    BARCODE: 6251870041110,
    NAME: "Fixol 15mg",
    DRG_FILLING: 30,
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "15 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "M01AC06",

    DRG_PRIMARY_CMP_COUNTRY: "سويسرا",

    JPP: 5.41,

    PHARM_P: 4.29,
  },
  {
    DRG_SERIAL_NO: 106251,
    BARCODE: 6251870041103,
    NAME: "Fixol 15mg",
    DRG_FILLING: 10,
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "15 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "M01AC06",

    DRG_PRIMARY_CMP_COUNTRY: "سويسرا",

    JPP: 2,

    PHARM_P: 1.59,
  },
  {
    DRG_SERIAL_NO: 105691,
    NAME: "Arina 10mg ODT",
    DRG_FILLING: 30,
    DOSAGE: "Orodispersible tablet",
    DRG_CONCENTRATE: "10 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AX12",
    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 14,

    PHARM_P: 11.11,
  },
  {
    DRG_SERIAL_NO: 105692,
    NAME: "Arina 15mg ODT",
    DRG_FILLING: 30,
    DOSAGE: "Orodispersible tablet",
    DRG_CONCENTRATE: "15 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AX12",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 15.5,

    PHARM_P: 12.3,
  },
  {
    DRG_SERIAL_NO: 257936,
    NAME: "Rifencin Soft Gelatin Cap",
    DRG_FILLING: 60,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "25 mg, 46.67 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",

    DRG_PRIMARY_CMP_COUNTRY: "بلجيكا",
  },
  {
    DRG_SERIAL_NO: 106950,
    NAME: "Rifencin Soft Gelatin Cap",
    DRG_FILLING: 20,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "25 mg, 46.67 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",

    DRG_PRIMARY_CMP_COUNTRY: "بلجيكا",
  },
  {
    DRG_SERIAL_NO: 97764,
    NAME: "Sulfi 10 mg",
    DRG_FILLING: "30 F.C.T",
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "10 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "G04BD08",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",

    JPP: 12.09,

    PHARM_P: 9.59,
  },
  {
    DRG_SERIAL_NO: 97765,
    BARCODE: 6251870079007,
    NAME: "Sulfi 5 mg",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "G04BD08",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",

    JPP: 20.5,

    PHARM_P: 16.27,
  },
  {
    DRG_SERIAL_NO: 86349,
    BARCODE: 6251870054004,
    NAME: "Montal 4mg",
    DRG_FILLING: 30,
    DOSAGE: "Chewable tablet",
    DRG_CONCENTRATE: "4 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "R03DC03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 9.93,

    PHARM_P: 7.88,
  },
  {
    DRG_SERIAL_NO: 107358,
    NAME: "Montal 4mg",
    DRG_FILLING: 1000,
    DOSAGE: "Chewable tablet",
    DRG_CONCENTRATE: "4 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "R03DC03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 281.35,

    PHARM_P: 223.28,
  },
  {
    DRG_SERIAL_NO: 107359,
    NAME: "Montal 5mg",
    DRG_FILLING: 1000,
    DOSAGE: "Chewable tablet",
    DRG_CONCENTRATE: "5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "R03DC03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 313.37,

    PHARM_P: 248.69,
  },
  {
    DRG_SERIAL_NO: 86348,
    BARCODE: 6251870054103,
    NAME: "Montal 5mg",
    DRG_FILLING: 30,
    DOSAGE: "Chewable tablet",
    DRG_CONCENTRATE: "5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "R03DC03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 11.06,

    PHARM_P: 8.78,
  },
  {
    DRG_SERIAL_NO: 83034,
    BARCODE: 6251870043107,
    NAME: "Exopex 10mg F.C tab",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "as Oxalate 10 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N06AB10",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 9.41,

    PHARM_P: 7.47,
  },
  {
    DRG_SERIAL_NO: 257498,
    NAME: "Exopex 10mg F.C tab",
    DRG_FILLING: 1000,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "as Oxalate 10 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N06AB10",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 266.62,

    PHARM_P: 211.59,
  },
  {
    DRG_SERIAL_NO: 257500,
    NAME: "Exopex 20mg F.C Tab",
    DRG_FILLING: 1000,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "as Oxalate 20 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N06AB10",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 485.92,

    PHARM_P: 385.63,
  },
  {
    DRG_SERIAL_NO: 83035,
    BARCODE: 6251870043305,
    NAME: "Exopex 20mg F.C Tab",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "as Oxalate 20 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N06AB10",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 17.15,

    PHARM_P: 13.61,
  },
  {
    DRG_SERIAL_NO: 47482,
    BARCODE: 6251870000018,
    NAME: "TQ-Vanc 500mg Vial",
    DRG_FILLING: "1 vial",
    DOSAGE: "Powder for solution for infusion",
    DRG_CONCENTRATE: "500 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "J01XA01",

    DRG_PRIMARY_CMP_COUNTRY: "المانيا",
  },
  {
    DRG_SERIAL_NO: 51725,
    BARCODE: 6251870000025,
    NAME: "TQ-Vanc 500mg Vial",
    DRG_FILLING: "10 Vials",
    DOSAGE: "Powder for solution for infusion",
    DRG_CONCENTRATE: "500 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "J01XA01",

    DRG_PRIMARY_CMP_COUNTRY: "المانيا",
  },
  {
    DRG_SERIAL_NO: 353727,
    NAME: "D3 Max 50000",
    DRG_FILLING: "10 Caps",
    DOSAGE: "Soft Gelatin Capsule",
    DRG_CONCENTRATE: "1.25 MILLIGRAM/1 CAPSULE",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A11CC05",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 6.11,
    PHARM_P: 4.85,
  },
  {
    DRG_SERIAL_NO: 951982,
    NAME: "D3 Max 50000",
    DRG_FILLING: 1000,
    DOSAGE: "Soft Gelatin Capsule",
    DRG_CONCENTRATE: "1.25 MILLIGRAM/1 CAPSULE",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A11CC05",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 519.35,
    PHARM_P: 412.16,
  },
  {
    DRG_SERIAL_NO: 107633,
    BARCODE: 6251870039001,
    NAME: "D3 Max 50000",
    DRG_FILLING: "20 Caps",
    DOSAGE: "Soft Gelatin Capsule",
    DRG_CONCENTRATE: "1.25 MILLIGRAM/1 CAPSULE",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A11CC05",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 11.76,
    PHARM_P: 9.33,
  },
  {
    DRG_SERIAL_NO: 96693,
    NAME: "DONEX 5 mg ODT",
    DRG_FILLING: 30,
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N06DA02",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",

    JPP: 17.51,

    PHARM_P: 13.9,
  },
  {
    DRG_SERIAL_NO: 96692,
    NAME: "Donex 10mg ODT",
    DRG_FILLING: 30,
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "10 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N06DA02",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",

    JPP: 23.2,

    PHARM_P: 18.41,
  },
  {
    DRG_SERIAL_NO: 72386,
    BARCODE: 6251870030206,
    NAME: "Rosatin 10mg",
    DRG_FILLING: 30,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "10 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "C10AA07",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 10.33,

    PHARM_P: 8.2,
  },
  {
    DRG_SERIAL_NO: 72387,
    BARCODE: 6251870030008,
    NAME: "Rosatin 20mg",
    DRG_FILLING: 30,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "20 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "C10AA07",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 11.72,

    PHARM_P: 9.3,
  },
  {
    DRG_SERIAL_NO: 72385,
    BARCODE: 6251870030305,
    NAME: "Rosatin 5mg",
    DRG_FILLING: 30,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "C10AA07",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 6.76,

    PHARM_P: 5.36,
  },
  {
    DRG_SERIAL_NO: 105733,
    BARCODE: 6251870039100,
    NAME: "D3 max",
    DRG_FILLING: "30 Capsules",
    DOSAGE: "Capsule, soft",
    DRG_CONCENTRATE: "10000 IU",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A11CC05",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 5.04,
    PHARM_P: 4,
  },
  {
    DRG_SERIAL_NO: 87795,
    BARCODE: 6251870056008,
    NAME: "Procard Plus 150/12.5",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "150 mg, 12.5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "C09DA04",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 5.99,

    PHARM_P: 4.75,
  },
  {
    DRG_SERIAL_NO: 853432,
    NAME: "Quel 100mg",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "100 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AH04",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 9.43,

    PHARM_P: 7.48,
  },
  {
    DRG_SERIAL_NO: 87691,
    NAME: "Quel 100mg",
    DRG_FILLING: 60,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "100 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AH04",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 17.97,

    PHARM_P: 14.26,
  },
  {
    DRG_SERIAL_NO: 853433,
    NAME: "Quel 200mg",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "200 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AH04",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 18.87,

    PHARM_P: 14.98,
  },
  {
    DRG_SERIAL_NO: 87692,
    NAME: "Quel 200mg",
    DRG_FILLING: 60,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "200 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AH04",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 35.95,

    PHARM_P: 28.53,
  },
  {
    DRG_SERIAL_NO: 56028,
    BARCODE: 6251870000124,
    NAME: "Seizam 1000mg",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "1000 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N03AX14",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 21.77,

    PHARM_P: 17.28,
  },
  {
    DRG_SERIAL_NO: 56030,
    BARCODE: 6251870000094,
    NAME: "Seizam 250mg",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "250 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N03AX14",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 5.21,

    PHARM_P: 4.13,
  },
  {
    DRG_SERIAL_NO: 168686,
    NAME: "Seizam 500mg",
    DRG_FILLING: 1000,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "500 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N03AX14",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 300.62,

    PHARM_P: 238.57,
  },
  {
    DRG_SERIAL_NO: 56029,
    BARCODE: 6251870000100,
    NAME: "Seizam 500mg",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "500 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N03AX14",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 10.61,

    PHARM_P: 8.42,
  },
  {
    DRG_SERIAL_NO: 102997,
    NAME: "Barolex 25mg",
    DRG_FILLING: 30,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "25 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "C02DB02",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 4.37,
    PHARM_P: 3.47,
  },
  {
    DRG_SERIAL_NO: 102998,
    NAME: "Barolex 50mg",
    DRG_FILLING: 30,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "50 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "C02DB02",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 4.37,
    PHARM_P: 3.47,
  },
  {
    DRG_SERIAL_NO: 73384,
    NAME: "BI-ACT 500mg/2.5mg",
    DRG_FILLING: 28,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "2.5 mg, 500 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A10BD02",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 3.01,

    PHARM_P: 2.39,
  },
  {
    DRG_SERIAL_NO: 94094,
    NAME: "BI-ACT 500mg/2.5mg",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "2.5 mg, 500 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A10BD02",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 3.23,

    PHARM_P: 2.56,
  },
  {
    DRG_SERIAL_NO: 73385,
    NAME: "BI-ACT 500mg/5mg",
    DRG_FILLING: 28,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "5 mg, 500 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A10BD02",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 3.01,

    PHARM_P: 2.39,
  },
  {
    DRG_SERIAL_NO: 93497,
    BARCODE: 6251870031203,
    NAME: "BI-ACT 500mg/5mg",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "5 mg, 500 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A10BD02",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 3.23,

    PHARM_P: 2.56,
  },
  {
    DRG_SERIAL_NO: 93496,
    BARCODE: 6251870031005,
    NAME: "Bi-ACT 250mg /1.25mg",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "1.25 mg, 250 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A10BD02",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 1.97,

    PHARM_P: 1.56,
  },
  {
    DRG_SERIAL_NO: 73386,
    NAME: "Bi-ACT 250mg /1.25mg",
    DRG_FILLING: 28,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "1.25 mg, 250 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A10BD02",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 1.83,

    PHARM_P: 1.45,
  },
  {
    DRG_SERIAL_NO: 93743,
    BARCODE: 6251870072107,
    NAME: "Torix 120mg Tab",
    DRG_FILLING: 7,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "120 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "M01AH05",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 3.97,
    PHARM_P: 3.15,
  },
  {
    DRG_SERIAL_NO: 93742,
    BARCODE: 6251870072008,
    NAME: "Torix 90mg Tab",
    DRG_FILLING: 14,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "90 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "M01AH05",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 7.21,

    PHARM_P: 5.72,
  },
  {
    DRG_SERIAL_NO: 324672,
    BARCODE: 6251870095083,
    NAME: "Torix 90mg Tab",
    DRG_FILLING: 28,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "90 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "M01AH05",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 13.74,

    PHARM_P: 10.9,
  },
  {
    DRG_SERIAL_NO: 92453,
    BARCODE: 6251870042100,
    NAME: "Amilian 100mg",
    DRG_FILLING: 30,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "100 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AL05",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 8.18,
    PHARM_P: 6.49,
  },
  {
    DRG_SERIAL_NO: 106945,
    NAME: "Amilian 100mg",
    DRG_FILLING: 1000,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "100 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AL05",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 231.71,
    PHARM_P: 183.89,
  },
  {
    DRG_SERIAL_NO: 92452,
    BARCODE: 6251870042209,
    NAME: "Amilian 200mg",
    DRG_FILLING: 30,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "200 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AL05",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 16.81,
    PHARM_P: 13.34,
  },
  {
    DRG_SERIAL_NO: 106946,
    NAME: "Amilian 200mg",
    DRG_FILLING: 1000,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "200 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AL05",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 476.28,
    PHARM_P: 377.98,
  },
  {
    DRG_SERIAL_NO: 92454,
    BARCODE: 6251870042001,
    NAME: "Amilian 50mg",
    DRG_FILLING: 30,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "50 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AL05",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 7.02,
    PHARM_P: 5.57,
  },
  {
    DRG_SERIAL_NO: 106947,
    NAME: "Amilian 50mg",
    DRG_FILLING: 1000,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "50 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AL05",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 198.86,
    PHARM_P: 157.82,
  },
  {
    DRG_SERIAL_NO: 107532,
    NAME: "Montal 10mg",
    DRG_FILLING: 1000,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "10 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "R03DC03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 313.37,

    PHARM_P: 248.69,
  },
  {
    DRG_SERIAL_NO: 89341,
    BARCODE: 6251870054202,
    NAME: "Montal 10mg",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "10 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "R03DC03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 11.06,

    PHARM_P: 8.78,
  },
  {
    DRG_SERIAL_NO: 95344,
    BARCODE: 6251870077003,
    NAME: "Quel xR 50 mg",
    DRG_FILLING: 60,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "50 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AH04",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",

    JPP: 14.6,
    PHARM_P: 11.59,
  },
  {
    DRG_SERIAL_NO: 106970,
    NAME: "Quel xr 200 mg",
    DRG_FILLING: 1000,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "200 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AH04",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",

    JPP: 592.72,
    PHARM_P: 470.38,
  },
  {
    DRG_SERIAL_NO: 95345,
    BARCODE: 6251870077201,
    NAME: "Quel xr 200 mg",
    DRG_FILLING: 60,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "200 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AH04",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",

    JPP: 40.88,
    PHARM_P: 32.44,
  },
  {
    DRG_SERIAL_NO: 66486,
    BARCODE: 6251870000056,
    NAME: "Levar 5mg",
    DRG_FILLING: 10,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "R06AE09",

    DRG_RENUAL_NO: "56 ع ت/BG/2022",
    RE_REGISTRATION_DATE: "04/19/2022",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 1.55,

    PHARM_P: 1.23,
  },
  {
    DRG_SERIAL_NO: 66487,
    BARCODE: 6251870000063,
    NAME: "Levar 5mg F.C Tab",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "R06AE09",

    DRG_RENUAL_NO: "56 ع ت/BG/2022",
    RE_REGISTRATION_DATE: "04/19/2022",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    JPP: 4.38,

    PHARM_P: 3.48,
  },
  {
    DRG_SERIAL_NO: 57927,
    BARCODE: 6251870013001,
    NAME: "Anarix 1mg",
    DRG_FILLING: 28,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "1 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "L02BG03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 79.74,
    PHARM_P: 63.28,
  },
  {
    DRG_SERIAL_NO: 101094,
    BARCODE: 6251870000230,
    NAME: "Anarix 1mg",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "1 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "L02BG03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 85.44,
    PHARM_P: 67.81,
  },
  {
    DRG_SERIAL_NO: 308464,
    NAME: "Platloc 75 mg",
    DRG_FILLING: 1050,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "(as Clopidogrel bisulfate) 75 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "B01AC04",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 363.06,
    PHARM_P: 288.12,
  },
  {
    DRG_SERIAL_NO: 107753,
    NAME: "Platloc 75 mg",
    DRG_FILLING: 28,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "(as Clopidogrel bisulfate) 75 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "B01AC04",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 11.39,
    PHARM_P: 9.04,
  },
  {
    DRG_SERIAL_NO: 90092,
    NAME: "Platloc 75 mg",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "(as Clopidogrel bisulfate) 75 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",

    ATCCODE: "B01AC04",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 12.23,
    PHARM_P: 9.71,
  },
  {
    DRG_SERIAL_NO: 107754,
    NAME: "Platloc 75 mg",
    DRG_FILLING: 84,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "(as Clopidogrel bisulfate) 75 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",

    ATCCODE: "B01AC04",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 32.24,
    PHARM_P: 25.59,
  },
  {
    DRG_SERIAL_NO: 326372,
    NAME: "Vaznor 10mg Tab",
    DRG_FILLING: 1000,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "10 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "C08CA01",
    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 123.53,
    PHARM_P: 98.03,
  },
  {
    DRG_SERIAL_NO: 82736,
    BARCODE: 6251870044104,
    NAME: "Vaznor 10mg Tab",
    DRG_FILLING: 30,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "10 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "C08CA01",
    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 4.36,
    PHARM_P: 3.46,
  },
  {
    DRG_SERIAL_NO: 326373,
    NAME: "Vaznor 5mg",
    DRG_FILLING: 1000,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "C08CA01",
    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 123.53,
    PHARM_P: 98.03,
  },
  {
    DRG_SERIAL_NO: 82735,
    BARCODE: 6251870044005,
    NAME: "Vaznor 5mg",
    DRG_FILLING: 30,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "C08CA01",
    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 4.36,
    PHARM_P: 3.46,
  },
  {
    DRG_SERIAL_NO: 85944,
    NAME: "Exopex 15mg",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "as Oxalate 15 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N06AB10",
    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 15.69,
    PHARM_P: 12.45,
  },
  {
    DRG_SERIAL_NO: 85943,
    BARCODE: 6251870043008,
    NAME: "Exopex 5mg",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "as Oxalate 5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N06AB10",
    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 6.38,
    PHARM_P: 5.06,
  },
  {
    DRG_SERIAL_NO: 90547,
    BARCODE: 6251870056107,
    NAME: "Procard Plus 300/12.5mg",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "300 mg, 12.5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "C09DA04",
    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 5.99,

    PHARM_P: 4.75,
  },
  {
    DRG_SERIAL_NO: 85791,
    NAME: "Procard 300mg",
    DRG_FILLING: 28,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "300 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "C09CA04",
    DRG_RENUAL_NO: "7 ع ت/BG/2022",
    RE_REGISTRATION_DATE: "02/22/2022",
    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 4,

    PHARM_P: 3.17,
  },
  {
    DRG_SERIAL_NO: 64535,
    BARCODE: 6251870000148,
    NAME: "Olexa 10mg",
    DRG_FILLING: 30,
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "10 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AH03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 30.64,
    PHARM_P: 24.32,
  },
  {
    DRG_SERIAL_NO: 55879,
    NAME: "Olexa 10mg",
    DRG_FILLING: 28,
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "10 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AH03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 28.6,
    PHARM_P: 22.7,
  },
  {
    DRG_SERIAL_NO: 107599,
    NAME: "Olexa 10mg",
    DRG_FILLING: 1000,
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "10 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AH03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 868.21,
    PHARM_P: 689.01,
  },
  {
    DRG_SERIAL_NO: 55878,
    NAME: "Olexa 5mg",
    DRG_FILLING: 28,
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AH03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 17.44,
  },
  {
    DRG_SERIAL_NO: 107600,
    BARCODE: 6251870000131,
    NAME: "Olexa 5mg",
    DRG_FILLING: 1000,
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AH03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 529.43,
    PHARM_P: 420.16,
  },
  {
    DRG_SERIAL_NO: 64534,
    BARCODE: 6251870000131,
    NAME: "Olexa 5mg",
    DRG_FILLING: 30,
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AH03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 18.69,
    PHARM_P: 14.83,
  },
  {
    DRG_SERIAL_NO: 4260652,
    NAME: "TQ-Fer",
    DRG_FILLING: "120 ML/1 BOT",
    DOSAGE: "Syrup",
    DRG_CONCENTRATE: "10 MG/1 ML",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N/A",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
  },
  {
    DRG_SERIAL_NO: 970933,
    NAME: "Vit-Plus",
    DRG_FILLING: "60 TAB /1 BOX",
    DOSAGE: "Prolonged release film coated tablet",
    DRG_CONCENTRATE: "500 MG/1 TAB , 1000 IU/1 TAB , 25 MG/1 TAB",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N/A",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
  },
  {
    DRG_SERIAL_NO: 99795,
    BARCODE: 6251870000247,
    NAME: "Androdex 50mg",
    DRG_FILLING: 28,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "50 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "L02BB03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 68.5,
    PHARM_P: 54.36,
  },
  {
    DRG_SERIAL_NO: 59334,
    BARCODE: 6251870014008,
    NAME: "Androdex 50mg",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "50 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "L02BB03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    JPP: 73.51,
    PHARM_P: 58.34,
  },
  {
    DRG_SERIAL_NO: 98341,
    BARCODE: 6251870082007,
    NAME: "GLEPTAL 50mg",
    DRG_FILLING: "30 Tablet",
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "50 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A10BH02",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 6.98,

    PHARM_P: 5.54,
  },
  {
    DRG_SERIAL_NO: 108338,
    BARCODE: 6251870082014,
    NAME: "GLEPTAL 50mg",
    DRG_FILLING: "60 Tablet",
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "50 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A10BH02",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 13.26,
    PHARM_P: 10.52,
  },
  {
    DRG_SERIAL_NO: 107357,
    NAME: "GLEPTAL 50mg",
    DRG_FILLING: "1000 Tablet",
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "50 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A10BH02",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 197.77,

    PHARM_P: 156.95,
  },
  {
    DRG_SERIAL_NO: 102848,
    BARCODE: 6251870088207,
    NAME: "EPIGRAIN 100mg",
    DRG_FILLING: "60 Film",
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "100 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N03AX11",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 21.77,

    PHARM_P: 17.28,
  },
  {
    DRG_SERIAL_NO: 102847,
    NAME: "EPIGRAIN 200mg",
    DRG_FILLING: "60 Film",
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "200 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N03AX11",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 39.35,

    PHARM_P: 31.23,
  },
  {
    DRG_SERIAL_NO: 102850,
    BARCODE: 6251870088009,
    NAME: "EPIGRAIN 25 mg",
    DRG_FILLING: "60 Film",
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "25 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N03AX11",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 5.39,

    PHARM_P: 4.28,
  },
  {
    DRG_SERIAL_NO: 102849,
    BARCODE: 6251870088108,
    NAME: "EPIGRAIN 50mg",
    DRG_FILLING: "60 Film",
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "50 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N03AX11",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 14.28,

    PHARM_P: 11.33,
  },
  {
    DRG_SERIAL_NO: 92543,
    BARCODE: 6251870029019,
    NAME: "Muxava 400mg",
    DRG_FILLING: 7,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "400 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "J01MA14",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 13.31,

    PHARM_P: 10.56,
  },
  {
    DRG_SERIAL_NO: 92544,
    BARCODE: 6251870029002,
    NAME: "Muxava 400mg",
    DRG_FILLING: 5,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "400 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "J01MA14",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 10.42,

    PHARM_P: 8.27,
  },
  {
    DRG_SERIAL_NO: 106967,
    NAME: "Momint ( Sildenafil Citrate ) 25 mg",
    DRG_FILLING: "30 Chewable Tab",
    DOSAGE: "Chewable tablet",
    DRG_CONCENTRATE: "as Sildenafil Citrate 25 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "G04BE03",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 12.01,
    PHARM_P: 9.53,
  },
  {
    DRG_SERIAL_NO: 97493,
    NAME: "Momint ( Sildenafil Citrate ) 25 mg",
    DRG_FILLING: "4 Chewable Tab",
    DOSAGE: "Chewable tablet",
    DRG_CONCENTRATE: "as Sildenafil Citrate 25 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "G04BE03",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 1.76,

    PHARM_P: 1.4,
  },
  {
    DRG_SERIAL_NO: 1640154,
    NAME: "Momint ( Sildenafil Citrate ) 25 mg",
    DRG_FILLING: "10 Chewable Tab",
    DOSAGE: "Chewable tablet",
    DRG_CONCENTRATE: "as Sildenafil Citrate 25 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "G04BE03",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 3.32,
    PHARM_P: 2.63,
  },
  {
    DRG_SERIAL_NO: 97495,
    BARCODE: 6251870081208,
    NAME: "Momint 100mg Chew tab",
    DRG_FILLING: 4,
    DOSAGE: "Chewable tablet",
    DRG_CONCENTRATE: "as Sildenafil Citrate100 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "G04BE03",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 3.84,
    PHARM_P: 3.05,
  },
  {
    DRG_SERIAL_NO: 97494,
    BARCODE: 6251870081109,
    NAME: "Momint 50mg Chew Tab",
    DRG_FILLING: 4,
    DOSAGE: "Chewable tablet",
    DRG_CONCENTRATE: "as Sildenafil Citrate 50 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "G04BE03",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 2.88,
    PHARM_P: 2.29,
  },
  {
    DRG_SERIAL_NO: 104745,
    NAME: "EXOPEX 20mg ODT",
    DRG_FILLING: "30 ODT",
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "20 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N06AB10",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 17.15,
    PHARM_P: 13.61,
  },
  {
    DRG_SERIAL_NO: 104747,
    NAME: "Exopex 10mg ODT",
    DRG_FILLING: "30 ODT",
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "10 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N06AB10",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 10.46,
    PHARM_P: 8.3,
  },
  {
    DRG_SERIAL_NO: 104746,
    NAME: "Exopex 15mg ODT",
    DRG_FILLING: "30 ODT",
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "15 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N06AB10",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 15.69,
    PHARM_P: 12.45,
  },
  {
    DRG_SERIAL_NO: 104748,
    NAME: "Exopex 5mg ODT",
    DRG_FILLING: "30 ODT",
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N06AB10",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 6.38,
    PHARM_P: 5.06,
  },
  {
    DRG_SERIAL_NO: 95696,
    BARCODE: 6251870047006,
    NAME: "TQ-Zal 15 mg",
    DRG_FILLING: 14,
    DOSAGE: "Delayed Release Capsules",
    DRG_CONCENTRATE: "15 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A02BCF03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 3.4,

    PHARM_P: 2.7,
  },
  {
    DRG_SERIAL_NO: 108463,
    BARCODE: 6251870047006,
    NAME: "TQ-Zal 15 mg",
    DRG_FILLING: 28,
    DOSAGE: "Delayed Release Capsules",
    DRG_CONCENTRATE: "15 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A02BCF03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 6.46,
    PHARM_P: 5.13,
  },
  {
    DRG_SERIAL_NO: 257953,
    NAME: "TQ-Zal 30mg",
    DRG_FILLING: 1050,
    DOSAGE: "Delayed Release Capsules",
    DRG_CONCENTRATE: "30 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A02BC03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 216.75,
    PHARM_P: 172.01,
  },
  {
    DRG_SERIAL_NO: 108464,
    BARCODE: 6251870047105,
    NAME: "TQ-Zal 30mg",
    DRG_FILLING: 28,
    DOSAGE: "Delayed Release Capsules",
    DRG_CONCENTRATE: "30 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A02BC03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 6.46,
    PHARM_P: 5.13,
  },
  {
    DRG_SERIAL_NO: 95695,
    BARCODE: 6251870047105,
    NAME: "TQ-Zal 30mg",
    DRG_FILLING: 14,
    DOSAGE: "Delayed Release Capsules",
    DRG_CONCENTRATE: "30 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A02BC03",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 3.4,

    PHARM_P: 2.7,
  },
  {
    DRG_SERIAL_NO: 965680,
    NAME: "Alfo 300 capsule",
    DRG_FILLING: "300 MG/1 CAP",
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "300 MG/1 CAP",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N/A",

    DRG_PRIMARY_CMP_COUNTRY: "بلغاريا",
  },
  {
    DRG_SERIAL_NO: 102745,
    NAME: "Dutamax 0.5mg",
    DRG_FILLING: "30 Capsules",
    DOSAGE: "Soft Gelatin Capsule",
    DRG_CONCENTRATE: "0.5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "G04CB02",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 14.9,

    PHARM_P: 11.82,
  },
  {
    DRG_SERIAL_NO: 105363,
    BARCODE: 6251870034211,
    NAME: "Feverol Advance 500mg Tab",
    DRG_FILLING: 100,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "500 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N02BE01",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 3.1,

    PHARM_P: 2.46,
  },
  {
    DRG_SERIAL_NO: 94697,
    BARCODE: 6251870034204,
    NAME: "Feverol Advance 500mg Tab",
    DRG_FILLING: 30,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "500 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N02BE01",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 1.34,

    PHARM_P: 1.06,
  },
  {
    DRG_SERIAL_NO: 56389,
    BARCODE: 6251870000216,
    NAME: "Chemozar 1g",
    DRG_FILLING: "1 Vial",
    DOSAGE: "Powder for solution for infusion",
    DRG_CONCENTRATE: "1 g",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "L01BC05",

    DRG_RENUAL_NO: "44 ع ت/BG/2022",
    DRG_PRIMARY_CMP_COUNTRY: "الهند",
  },
  {
    DRG_SERIAL_NO: 106252,
    BARCODE: 6251870080003,
    NAME: "Dislara 2.5 mg ODT",
    DRG_FILLING: 10,
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "2.5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "R06AX27",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 1.1,

    PHARM_P: 0.87,
  },
  {
    DRG_SERIAL_NO: 97893,
    BARCODE: "'06251870080010",
    NAME: "Dislara 2.5 mg ODT",
    DRG_FILLING: 30,
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "2.5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "R06AX27",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 3.11,

    PHARM_P: 2.47,
  },
  {
    DRG_SERIAL_NO: 97892,
    BARCODE: 6251870080102,
    NAME: "Dislara 5mg ODT",
    DRG_FILLING: 10,
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "R06AX27",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 1.1,

    PHARM_P: 0.87,
  },
  {
    DRG_SERIAL_NO: 106201,
    BARCODE: "'06251870080119",
    NAME: "Dislara 5mg ODT",
    DRG_FILLING: 30,
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "R06AX27",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",

    PHARM_P: 2.47,
  },
  {
    DRG_SERIAL_NO: 96944,
    BARCODE: 6251870063303,
    NAME: "Neurica 50mg",
    DRG_FILLING: 14,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "50 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N03AX16",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 5.83,
    PHARM_P: 4.63,
  },
  {
    DRG_SERIAL_NO: 96541,
    BARCODE: 6251870000070,
    NAME: "Prostanic 0.4mg",
    DRG_FILLING: 30,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "0.4 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "G04CA02",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",

    PHARM_P: 7.58,
  },
  {
    DRG_SERIAL_NO: 359327,
    NAME: "Redex 20mg",
    DRG_FILLING: 4,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "20 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "G04BE08",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 10.96,
    PHARM_P: 8.7,
  },
  {
    DRG_SERIAL_NO: 70837,
    BARCODE: 6251870024007,
    NAME: "Redex 20mg",
    DRG_FILLING: 5,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "20 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "G04BE08",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 13,

    PHARM_P: 10.32,
  },
  {
    DRG_SERIAL_NO: 90694,
    BARCODE: 6251870024014,
    NAME: "Redex 20mg",
    DRG_FILLING: 2,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "20 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "G04BE08",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 5.77,

    PHARM_P: 4.58,
  },
  {
    DRG_SERIAL_NO: 95141,
    BARCODE: 6251870073005,
    NAME: "Feverol Extra 500mg/65mg Tab",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "500 mg, 65 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N02BE51",
    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 1.34,

    PHARM_P: 1.06,
  },
  {
    DRG_SERIAL_NO: 58340,
    BARCODE: 6251870000155,
    NAME: "Procard 150mg",
    DRG_FILLING: 28,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "150 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "C09CA04",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 4,
    PHARM_P: 3.17,
  },
  {
    DRG_SERIAL_NO: 47740,
    BARCODE: 6251870000032,
    NAME: "TQ-Vanc 1000mg Vial",
    DRG_FILLING: "1 Vial",
    DOSAGE: "Powder for solution for infusion",
    DRG_CONCENTRATE: "1 g",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "J01XA01",

    DRG_PRIMARY_CMP_COUNTRY: "المانيا",
  },
  {
    DRG_SERIAL_NO: 51724,
    BARCODE: 6251870000049,
    NAME: "TQ-Vanc 1000mg Vial",
    DRG_FILLING: "10 Vials",
    DOSAGE: "Powder for solution for infusion",
    DRG_CONCENTRATE: "1 g",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "J01XA01",

    DRG_PRIMARY_CMP_COUNTRY: "المانيا",
  },
  {
    DRG_SERIAL_NO: 965094,
    NAME: "xavir",
    DRG_FILLING: "28 TABLET",
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "15 MILLIGRAM/1 TABLET",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "B01AX06",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 31.4,
    PHARM_P: 24.92,
  },
  {
    DRG_SERIAL_NO: 107195,
    NAME: "xavir",
    DRG_FILLING: "30 TABLET",
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "15 MILLIGRAM/1 TABLET",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "B01AX06",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 33.64,

    PHARM_P: 26.7,
  },
  {
    DRG_SERIAL_NO: 106559,
    BARCODE: "'06251870084018",
    NAME: "Nashat",
    DRG_FILLING: 20,
    DOSAGE: "Soft Gelatin Capsule",
    DRG_CONCENTRATE: "400 MILLIGRAM/1 CAPSULE",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "M01AE01",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 2.69,
    PHARM_P: 2.13,
  },
  {
    DRG_SERIAL_NO: 98691,
    NAME: "Parcalin 1mg",
    DRG_FILLING: 30,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "1 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N04BD02",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 22.11,

    PHARM_P: 17.55,
  },
  {
    DRG_SERIAL_NO: 953485,
    NAME: "Parcalin 1mg",
    DRG_FILLING: 28,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "1 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N04BD02",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 20.64,
    PHARM_P: 16.38,
  },
  {
    DRG_SERIAL_NO: 56129,
    BARCODE: 6251870000223,
    NAME: "Estrodex 2.5mg",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "2.5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "L02BG04",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 38.83,

    PHARM_P: 30.82,
  },
  {
    DRG_SERIAL_NO: 970563,
    NAME: "Captafer",
    DRG_FILLING: "30 TAB",
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "0.100 MG, 45 MG, 15 MG, 7.5 MG, 0.6 MG, 400 MG",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N/A",
    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
  },
  {
    DRG_SERIAL_NO: 93341,
    BARCODE: 6251870071001,
    NAME: "Loral 8mg Tab",
    DRG_FILLING: 20,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "8 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "M01AC05",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 4.88,
    PHARM_P: 3.87,
  },
  {
    DRG_SERIAL_NO: 853328,
    NAME: "Loral 8mg Tab",
    DRG_FILLING: 10,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "8 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "M01AC05",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 2.57,
    PHARM_P: 2.04,
  },
  {
    DRG_SERIAL_NO: 958583,
    NAME: "Loral 8mg Tab",
    DRG_FILLING: 30,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "8 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "M01AC05",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 7.25,

    PHARM_P: 5.75,
  },
  {
    DRG_SERIAL_NO: 70687,
    BARCODE: 6251870030107,
    NAME: "Rosatin 40mg",
    DRG_FILLING: 30,
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "(as Calcium)40 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "C10AA07",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 19.22,

    PHARM_P: 15.25,
  },
  {
    DRG_SERIAL_NO: 69433,
    BARCODE: 6251870028111,
    NAME: "Novera 40 mg",
    DRG_FILLING: 30,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "40 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A02BC05",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 10.47,

    PHARM_P: 8.31,
  },
  {
    DRG_SERIAL_NO: 98100,
    BARCODE: 6251870028104,
    NAME: "Novera 40 mg",
    DRG_FILLING: 14,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "40 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A02BC05",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 5.13,

    PHARM_P: 4.07,
  },
  {
    DRG_SERIAL_NO: 965008,
    NAME: "Ceftal 250mg",
    DRG_FILLING: "1000 TAB /1 BOX",
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "250 MG/1 TAB",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "J01DC02",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 284.75,
    PHARM_P: 225.98,
  },
  {
    DRG_SERIAL_NO: 960185,
    NAME: "Ceftal 250mg",
    DRG_FILLING: "10 TAB /1 BOX",
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "250 MG/1 TAB",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "J01DC02",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 3.35,
    PHARM_P: 2.66,
  },
  {
    DRG_SERIAL_NO: 965007,
    NAME: "Ceftal 500mg",
    DRG_FILLING: "1000 TAB /1 BOX",
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "500 MG/1 TAB",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "J01DC02",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",

    PHARM_P: 355.49,
  },
  {
    DRG_SERIAL_NO: 960186,
    NAME: "Ceftal 500mg",
    DRG_FILLING: "10 TAB /1 BOX",
    DOSAGE: "Tablet",
    DRG_CONCENTRATE: "500 MG/1 TAB",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "J01DC02",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 5.27,
    PHARM_P: 4.18,
  },
  {
    DRG_SERIAL_NO: 107353,
    NAME: "Nasaler S.G Cap",
    DRG_FILLING: 20,
    DOSAGE: "Soft Gelatin Capsule",
    DRG_CONCENTRATE: "0.09 mg, 46.67 mg, 68.42 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",

    DRG_PRIMARY_CMP_COUNTRY: "غير محدد",
  },
  {
    DRG_SERIAL_NO: 98101,
    NAME: "Novera 20mg",
    DRG_FILLING: 14,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "20 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A02BC05",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 3.72,

    PHARM_P: 2.95,
  },
  {
    DRG_SERIAL_NO: 69385,
    BARCODE: 6251870028012,
    NAME: "Novera 20mg",
    DRG_FILLING: 30,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "20 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "A02BC05",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 7.6,

    PHARM_P: 6.03,
  },
  {
    DRG_SERIAL_NO: 104548,
    BARCODE: 6251870085039,
    NAME: "Edrak 10mg ODT",
    DRG_FILLING: 30,
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "10 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N06DX01",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 12.5,

    PHARM_P: 9.92,
  },
  {
    DRG_SERIAL_NO: 104547,
    NAME: "Edrak 15 mg ODT",
    DRG_FILLING: 30,
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "15 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N06DX01",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 22.12,

    PHARM_P: 17.55,
  },
  {
    DRG_SERIAL_NO: 104546,
    NAME: "Edrak 20mg ODT",
    DRG_FILLING: 30,
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "20 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N06DX01",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 22.12,

    PHARM_P: 17.55,
  },
  {
    DRG_SERIAL_NO: 104549,
    BARCODE: 6251870085022,
    NAME: "Edrak 5mg ODT",
    DRG_FILLING: 30,
    DOSAGE: "Oral dispersible tablet",
    DRG_CONCENTRATE: "5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N06DX01",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 6.97,

    PHARM_P: 5.53,
  },
  {
    DRG_SERIAL_NO: 72733,
    BARCODE: 6251870024106,
    NAME: "Redex 10mg",
    DRG_FILLING: 5,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "10 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "G04BE08",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 6.5,

    PHARM_P: 5.16,
  },
  {
    DRG_SERIAL_NO: 955634,
    NAME: "Redex 10mg",
    DRG_FILLING: 4,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "10 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "G04BE08",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 5.95,
    PHARM_P: 4.72,
  },
  {
    DRG_SERIAL_NO: 90693,
    BARCODE: 6251870024113,
    NAME: "Redex 10mg",
    DRG_FILLING: 2,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "10 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "G04BE08",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 3.13,

    PHARM_P: 2.48,
  },
  {
    DRG_SERIAL_NO: 72734,
    BARCODE: 6251870024205,
    NAME: "Redex 5mg",
    DRG_FILLING: 30,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "G04BE08",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 35.1,

    PHARM_P: 27.86,
  },
  {
    DRG_SERIAL_NO: 105862,
    BARCODE: 6251870063105,
    NAME: "Neurica 150mg Cap",
    DRG_FILLING: 28,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "150 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N03AX16",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 20.12,

    PHARM_P: 15.97,
  },
  {
    DRG_SERIAL_NO: 966733,
    NAME: "Neurica 150mg Cap",
    DRG_FILLING: 56,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "150 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N03AX16",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 34.5,

    PHARM_P: 27.38,
  },
  {
    DRG_SERIAL_NO: 91096,
    NAME: "Neurica 150mg Cap",
    DRG_FILLING: 50,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "150 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N03AX16",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 34.22,

    PHARM_P: 27.16,
  },
  {
    DRG_SERIAL_NO: 91095,
    NAME: "Neurica 300 mg Cap",
    DRG_FILLING: 50,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "300 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N03AX16",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 46.74,

    PHARM_P: 37.09,
  },
  {
    DRG_SERIAL_NO: 105864,
    BARCODE: 6251870063204,
    NAME: "Neurica 300 mg Cap",
    DRG_FILLING: 28,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "300 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N03AX16",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 26.17,

    PHARM_P: 20.77,
  },
  {
    DRG_SERIAL_NO: 966732,
    NAME: "Neurica 300 mg Cap",
    DRG_FILLING: 56,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "300 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N03AX16",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 47.12,
    PHARM_P: 37.39,
  },
  {
    DRG_SERIAL_NO: 91097,
    NAME: "Neurica 75mg Cap",
    DRG_FILLING: 10,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "75 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N03AX16",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 5.04,

    PHARM_P: 4,
  },
  {
    DRG_SERIAL_NO: 105863,
    BARCODE: 6251870063006,
    NAME: "Neurica 75mg Cap",
    DRG_FILLING: 14,
    DOSAGE: "Capsules",
    DRG_CONCENTRATE: "75 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N03AX16",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 7.05,

    PHARM_P: 5.59,
  },
  {
    DRG_SERIAL_NO: 107292,
    NAME: "Premax 500mg/500mg",
    DRG_FILLING: "50 Vials",
    DOSAGE: "Powder for solution for infusion",
    DRG_CONCENTRATE: "500 mg, 500 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "J01DH51",

    DRG_PRIMARY_CMP_COUNTRY: "ايطاليا",
  },
  {
    DRG_SERIAL_NO: 970649,
    NAME: "Premax 500mg/500mg",
    DRG_FILLING: "10 Vial (20ml)",
    DOSAGE: "Powder for solution for infusion",
    DRG_CONCENTRATE: "500 mg, 500 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "J01DH51",

    DRG_PRIMARY_CMP_COUNTRY: "ايطاليا",
  },
  {
    DRG_SERIAL_NO: 65383,
    BARCODE: 6251870025011,
    NAME: "Premax 500mg/500mg",
    DRG_FILLING: "1 Vial (20ml)",
    DOSAGE: "Powder for solution for infusion",
    DRG_CONCENTRATE: "500 mg, 500 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "J01DH51",

    DRG_PRIMARY_CMP_COUNTRY: "ايطاليا",
  },
  {
    DRG_SERIAL_NO: 89652,
    NAME: "Dapamix S.R",
    DRG_FILLING: 30,
    DOSAGE: "Sustained release tablet",
    DRG_CONCENTRATE: "1.5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "C03BA11",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 4,
    PHARM_P: 3.17,
  },
  {
    DRG_SERIAL_NO: 106944,
    NAME: "Dapamix S.R",
    DRG_FILLING: 1000,
    DOSAGE: "Sustained release tablet",
    DRG_CONCENTRATE: "1.5 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "C03BA11",

    DRG_PRIMARY_CMP_COUNTRY: "الاردن",
    JPP: 113.18,
    PHARM_P: 89.82,
  },
  {
    DRG_SERIAL_NO: 89653,
    NAME: "Quel 25mg",
    DRG_FILLING: 60,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "25 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AH04",

    DRG_PRIMARY_CMP_COUNTRY: "الهند",
    JPP: 12.53,

    PHARM_P: 9.94,
  },
  {
    DRG_SERIAL_NO: 95542,
    NAME: "Quel XR 150 mg",
    DRG_FILLING: 60,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "150 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AH04",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 32.7,
    PHARM_P: 25.95,
  },
  {
    DRG_SERIAL_NO: 95543,
    BARCODE: 6251870077300,
    NAME: "Quel XR 300 mg",
    DRG_FILLING: 60,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "300 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AH04",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 57.5,

    PHARM_P: 45.63,
  },
  {
    DRG_SERIAL_NO: 95544,
    NAME: "Quel XR 400 mg",
    DRG_FILLING: 60,
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "400 mg",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "N05AH04",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 71.67,

    PHARM_P: 56.88,
  },
  {
    DRG_SERIAL_NO: 962391,
    NAME: "xavir",
    DRG_FILLING: "10 Tablets",
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "10 MILLIGRAM/1 TABLET",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "B01AX06",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 8.01,

    PHARM_P: 6.36,
  },
  {
    DRG_SERIAL_NO: 107100,
    NAME: "xavir",
    DRG_FILLING: "30 Tablets",
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "10 MILLIGRAM/1 TABLET",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "B01AX06",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 22.68,

    PHARM_P: 18,
  },
  {
    DRG_SERIAL_NO: 107101,
    NAME: "xavir",
    DRG_FILLING: "30 TABLET/1 BOX",
    DOSAGE: "Film-coated tablet",
    DRG_CONCENTRATE: "2.5 MILLIGRAM/1 TABLET",
    STORES_DESC_L: "Al-Taqqadom Pharmaceutical Industries",
    ATCCODE: "B01AX06",

    DRG_PRIMARY_CMP_COUNTRY: "اليونان",
    JPP: 8.1,

    PHARM_P: 6.43,
  },
];

module.exports = medicineAvailable;
