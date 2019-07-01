type Colors =
  | "black"
  | "cobalt"
  | "darkslateblue"
  | "darkslategray"
  | "primary"
  | "primaryDark"
  | "silver"
  | "white"
  | "whitesmoke";

export const colors: { [key in Colors]: string } = {
  black: "#000",
  cobalt: "#3b4895",
  darkslateblue: "#36356d",
  darkslategray: "#2a2a2a",
  primary: "#e64643",
  primaryDark: "#c7433a",
  silver: "#c2c2c2",
  white: "#fff",
  whitesmoke: "#f2f2f2",
};
