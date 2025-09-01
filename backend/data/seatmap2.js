const seats = [
  {
    "row": "A",
    "number": 1,
    "status": "available",
    "type": "wheelchair",
    "price": 8.49
  },
  {
    "row": "A",
    "number": 2,
    "status": "available",
    "type": "wheelchair",
    "price": 8.49
  },
  {
    "row": "A",
    "number": 3,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "A",
    "number": 4,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "A",
    "number": 5,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "A",
    "number": 6,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "A",
    "number": 7,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "A",
    "number": 8,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "A",
    "number": 9,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "A",
    "number": 10,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "A",
    "number": 11,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "A",
    "number": 12,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "A",
    "number": 13,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "A",
    "number": 14,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "A",
    "number": 15,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "A",
    "number": 16,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "A",
    "number": 17,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "A",
    "number": 18,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "A",
    "number": 19,
    "status": "available",
    "type": "wheelchair",
    "price": 8.49
  },
  {
    "row": "A",
    "number": 20,
    "status": "available",
    "type": "wheelchair",
    "price": 8.49
  },
  {
    "row": "B",
    "number": 1,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "B",
    "number": 2,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "B",
    "number": 3,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "B",
    "number": 4,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "B",
    "number": 5,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "B",
    "number": 6,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "B",
    "number": 7,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "B",
    "number": 8,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "B",
    "number": 9,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "B",
    "number": 10,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "B",
    "number": 11,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "B",
    "number": 12,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "B",
    "number": 13,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "B",
    "number": 14,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "B",
    "number": 15,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "B",
    "number": 16,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "B",
    "number": 17,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "B",
    "number": 18,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "B",
    "number": 19,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "B",
    "number": 20,
    "status": "available",
    "type": "super_saver",
    "price": 6.99
  },
  {
    "row": "C",
    "number": 1,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "C",
    "number": 2,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "C",
    "number": 3,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "C",
    "number": 4,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "C",
    "number": 5,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "C",
    "number": 6,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "C",
    "number": 7,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "C",
    "number": 8,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "C",
    "number": 9,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "C",
    "number": 10,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "C",
    "number": 11,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "C",
    "number": 12,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "C",
    "number": 13,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "C",
    "number": 14,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "C",
    "number": 15,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "C",
    "number": 16,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "C",
    "number": 17,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "C",
    "number": 18,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "C",
    "number": 19,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "C",
    "number": 20,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "D",
    "number": 1,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "D",
    "number": 2,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "D",
    "number": 3,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "D",
    "number": 4,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "D",
    "number": 5,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "D",
    "number": 6,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "D",
    "number": 7,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "D",
    "number": 8,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "D",
    "number": 9,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "D",
    "number": 10,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "D",
    "number": 11,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "D",
    "number": 12,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "D",
    "number": 13,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "D",
    "number": 14,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "D",
    "number": 15,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "D",
    "number": 16,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "D",
    "number": 17,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "D",
    "number": 18,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "D",
    "number": 19,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "D",
    "number": 20,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "E",
    "number": 1,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "E",
    "number": 2,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "E",
    "number": 3,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "E",
    "number": 4,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "E",
    "number": 5,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "E",
    "number": 6,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "E",
    "number": 7,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "E",
    "number": 8,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "E",
    "number": 9,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "E",
    "number": 10,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "E",
    "number": 11,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "E",
    "number": 12,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "E",
    "number": 13,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "E",
    "number": 14,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "E",
    "number": 15,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "E",
    "number": 16,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "E",
    "number": 17,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "E",
    "number": 18,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "E",
    "number": 19,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "E",
    "number": 20,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "F",
    "number": 1,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "F",
    "number": 2,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "F",
    "number": 3,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "F",
    "number": 4,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "F",
    "number": 5,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "F",
    "number": 6,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "F",
    "number": 7,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "F",
    "number": 8,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "F",
    "number": 9,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "F",
    "number": 10,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "F",
    "number": 11,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "F",
    "number": 12,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "F",
    "number": 13,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "F",
    "number": 14,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "F",
    "number": 15,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "F",
    "number": 16,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "F",
    "number": 17,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "F",
    "number": 18,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "F",
    "number": 19,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "F",
    "number": 20,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "G",
    "number": 1,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "G",
    "number": 2,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "G",
    "number": 3,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "G",
    "number": 4,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "G",
    "number": 5,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "G",
    "number": 6,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "G",
    "number": 7,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "G",
    "number": 8,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "G",
    "number": 9,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "G",
    "number": 10,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "G",
    "number": 11,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "G",
    "number": 12,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "G",
    "number": 13,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "G",
    "number": 14,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "G",
    "number": 15,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "G",
    "number": 16,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "G",
    "number": 17,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "G",
    "number": 18,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "G",
    "number": 19,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "G",
    "number": 20,
    "status": "available",
    "type": "regular",
    "price": 9.49
  },
  {
    "row": "H",
    "number": 1,
    "status": "available",
    "type": "regular",
    "price": 10.49
  },
  {
    "row": "H",
    "number": 2,
    "status": "available",
    "type": "regular",
    "price": 10.49
  },
  {
    "row": "H",
    "number": 3,
    "status": "available",
    "type": "regular",
    "price": 10.49
  },
  {
    "row": "H",
    "number": 4,
    "status": "available",
    "type": "regular",
    "price": 10.49
  },
  {
    "row": "H",
    "number": 5,
    "status": "available",
    "type": "regular",
    "price": 10.49
  },
  {
    "row": "H",
    "number": 6,
    "status": "available",
    "type": "regular",
    "price": 10.49
  },
  {
    "row": "H",
    "number": 7,
    "status": "available",
    "type": "regular",
    "price": 10.49
  },
  {
    "row": "H",
    "number": 8,
    "status": "available",
    "type": "regular",
    "price": 10.49
  },
  {
    "row": "H",
    "number": 9,
    "status": "available",
    "type": "regular",
    "price": 10.49
  },
  {
    "row": "H",
    "number": 10,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "H",
    "number": 11,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "H",
    "number": 12,
    "status": "available",
    "type": "regular",
    "price": 10.49
  },
  {
    "row": "H",
    "number": 13,
    "status": "available",
    "type": "regular",
    "price": 10.49
  },
  {
    "row": "H",
    "number": 14,
    "status": "available",
    "type": "regular",
    "price": 10.49
  },
  {
    "row": "H",
    "number": 15,
    "status": "available",
    "type": "regular",
    "price": 10.49
  },
  {
    "row": "H",
    "number": 16,
    "status": "available",
    "type": "regular",
    "price": 10.49
  },
  {
    "row": "H",
    "number": 17,
    "status": "available",
    "type": "regular",
    "price": 10.49
  },
  {
    "row": "H",
    "number": 18,
    "status": "available",
    "type": "regular",
    "price": 10.49
  },
  {
    "row": "H",
    "number": 19,
    "status": "available",
    "type": "regular",
    "price": 10.49
  },
  {
    "row": "H",
    "number": 20,
    "status": "available",
    "type": "regular",
    "price": 10.49
  },
  {
    "row": "I",
    "number": 1,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "I",
    "number": 2,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "I",
    "number": 3,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "I",
    "number": 4,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "I",
    "number": 5,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "I",
    "number": 6,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "I",
    "number": 7,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "I",
    "number": 8,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "I",
    "number": 9,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "I",
    "number": 10,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "I",
    "number": 11,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "I",
    "number": 12,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "I",
    "number": 13,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "I",
    "number": 14,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "I",
    "number": 15,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "I",
    "number": 16,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "I",
    "number": 17,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "I",
    "number": 18,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "I",
    "number": 19,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "I",
    "number": 20,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "J",
    "number": 1,
    "status": "available",
    "type": "wheelchair",
    "price": 8.49
  },
  {
    "row": "J",
    "number": 2,
    "status": "available",
    "type": "wheelchair",
    "price": 8.49
  },
  {
    "row": "J",
    "number": 3,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "J",
    "number": 4,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "J",
    "number": 5,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "J",
    "number": 6,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "J",
    "number": 7,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "J",
    "number": 8,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "J",
    "number": 9,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "J",
    "number": 10,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "J",
    "number": 11,
    "status": "none",
    "type": "regular",
    "price": null
  },
  {
    "row": "J",
    "number": 12,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "J",
    "number": 13,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "J",
    "number": 14,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "J",
    "number": 15,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "J",
    "number": 16,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "J",
    "number": 17,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "J",
    "number": 18,
    "status": "available",
    "type": "vip",
    "price": 12.99
  },
  {
    "row": "J",
    "number": 19,
    "status": "available",
    "type": "wheelchair",
    "price": 8.49
  },
  {
    "row": "J",
    "number": 20,
    "status": "available",
    "type": "wheelchair",
    "price": 8.49
  }
];

const seatmap2 = {
  "number": 2,
  "capacity": 180,
  "col": 20,
  "row": 10,
  "seatmap": seats
};

export default seatmap2
