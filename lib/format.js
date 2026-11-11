const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];

// 7 -> "Seven". Falls back to digits past twelve.
export const numberWord = (n) => words[n] ?? String(n);
