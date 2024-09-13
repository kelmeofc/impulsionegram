import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateId(length: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export function scrollTo(event: any) {
  const target = event.currentTarget;

  if (target) {
    const id = target.getAttribute('href');
    const element = document.querySelector(id);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Posição do elemento no documento
      const offset = 90;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  }
}