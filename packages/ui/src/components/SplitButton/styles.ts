import { cva } from "class-variance-authority";

export const iconButtonLeftBorderIconVariant = cva([], {
  variants: {
    variant: {
      primary: [],
      outline: ["border-l-transparent"],
      ghost: ["border-l-transparent"],
    },
    tone: {
      default: [],
      destructive: [],
      "monochrome-light": [],
      "monochrome-dark": [],
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      tone: "default",
      className: [
        "border-l-mainColors-light-400 dark-scheme:hover:border-l-mainColors-light-400 light-scheme:hover:border-l-mainColors-light-400",
      ],
    },
    {
      variant: "primary",
      tone: "destructive",
      className: ["border-l-white dark-scheme:hover:border-l-white light-scheme:hover:border-l-white"],
    },
    {
      variant: "primary",
      tone: "monochrome-light",
      className: ["border-l-slate-600 dark-scheme:hover:border-l-slate-600 light-scheme:hover:border-l-slate-600"],
    },
    {
      variant: "primary",
      tone: "monochrome-dark",
      className: ["border-l-white dark-scheme:hover:border-l-white light-scheme:hover:border-l-white"],
    },
  ],
});
