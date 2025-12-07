//Background Colors

interface Bgcolor {
    id: number;
    color: string;
    class: string;
}
export const bgcolor: Bgcolor[] = [
    { id: 1, color: "primary", class: ".bg-primary" },
    { id: 2, color: "secondary", class: ".bg-secondary" },
    { id: 3, color: "warning", class: ".bg-warning" },
    { id: 4, color: "info", class: ".bg-info" },
    { id: 5, color: "success", class: ".bg-success" },
    { id: 6, color: "danger", class: ".bg-danger" },
    { id: 7, color: "light", class: ".bg-light" },
    { id: 8, color: "dark", class: ".bg-dark" },
];

// Background gradients

interface Bggradient {
    id: number;
    color: string;
    class: string;
}
export const bggradient: Bggradient[] = [
    { id: 1, color: "primary-gradient", class: ".bg-primary-gradient" },
    { id: 2, color: "secondary-gradient", class: ".bg-secondary-gradient" },
    { id: 3, color: "warning-gradient", class: ".bg-warning-gradient" },
    { id: 4, color: "info-gradient", class: ".bg-info-gradient" },
    { id: 5, color: "success-gradient", class: ".bg-success-gradient" },
    { id: 6, color: "danger-gradient", class: ".bg-danger-gradient" },
    { id: 7, color: "light-gradient", class: ".bg-light-gradient" },
    { id: 8, color: "dark-gradient", class: ".bg-dark-gradient" },
];

// Background transparent colors

interface bgtransparent {
    id: number;
    color: string;
    class: string;
}
export const bgtransparent: bgtransparent[] = [
    { id: 1, color: "primary-transparent", class: ".bg-primary-transparent" },
    { id: 2, color: "secondary-transparent", class: ".bg-secondary-transparent" },
    { id: 3, color: "warning-transparent", class: ".bg-warning-transparent" },
    { id: 4, color: "info-transparent", class: ".bg-info-transparent" },
    { id: 5, color: "success-transparent", class: ".bg-success-transparent" },
    { id: 6, color: "danger-transparent", class: ".bg-danger-transparent" },
    { id: 7, color: "light-transparent", class: ".bg-light-transparent" },
    { id: 8, color: "dark-transparent", class: ".bg-dark-transparent" },
];

// Background outline colors

interface Bgoutline {
    id: number;
    color: string;
    class: string;
}
export const bgoutline: Bgoutline[] = [
    { id: 1, color: "outline-primary", class: ".bg-primary-outline" },
    { id: 2, color: "outline-secondary", class: ".bg-secondary-outline" },
    { id: 3, color: "outline-warning", class: ".bg-warning-outline" },
    { id: 4, color: "outline-info", class: ".bg-info-outline" },
    { id: 5, color: "outline-success", class: ".bg-success-outline" },
    { id: 6, color: "outline-danger", class: ".bg-danger-outline" },
    { id: 7, color: "outline-light", class: ".bg-light-outline" },
    { id: 8, color: "outline-dark", class: ".bg-dark-outline" },
];

// Border Colors

interface Bordercolors {
    id: number;
    color: string;
    class: string;
}
export const bordercolors: Bordercolors[] = [
    { id: 1, color: "border-primary", class: ".border-primary" },
    { id: 2, color: "border-secondary", class: ".border-secondary" },
    { id: 3, color: "border-warning", class: ".border-warning" },
    { id: 4, color: "border-info", class: ".border-info" },
    { id: 5, color: "border-success", class: ".border-success" },
    { id: 6, color: "border-danger", class: ".border-danger-border" },
    { id: 7, color: "border-light", class: ".border-light" },
    { id: 8, color: "border-dark", class: ".border-dark" },
];

//Other Colors

interface Othercolors {
    id: number;
    data: string;
}
export const Othercolors: Othercolors[] = [
    { id: 1, data: "100" },
    { id: 2, data: "200" },
    { id: 3, data: "300" },
    { id: 4, data: "400" },
    { id: 5, data: "500" },
    { id: 6, data: "600" },
    { id: 7, data: "700" },
    { id: 8, data: "800" },
    { id: 9, data: "900" },
];
