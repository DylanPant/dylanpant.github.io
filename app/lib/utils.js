import {clsx} from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs) => {
    // cn = className
    return twMerge(clsx(inputs))
}