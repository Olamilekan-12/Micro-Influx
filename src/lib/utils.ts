import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateText(text: string, limit: number) {
  if (text?.length > limit) {
    return text.slice(0, limit) + "...";
  } else {
    return text;
  }
}

export function formatCurrency(
  amount: number,
  currency = "USD",
  locale = "en-US"
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
}

export const generateHexColor = (): string => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, "0")}`;
};
