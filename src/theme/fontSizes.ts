type FontSizes = "button" | "text" | "title";
type FontSizesCategories = "desktop" | "mobile";

export const fontSizes: {
  [key in FontSizesCategories]: { [key in FontSizes]: string };
} = {
  desktop: {
    button: "1.2em",
    text: "1.5em",
    title: "3em",
  },
  mobile: {
    button: "1em",
    text: "1em",
    title: "1.5em",
  },
};
