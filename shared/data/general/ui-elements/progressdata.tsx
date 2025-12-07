
interface ProgressType {
    id: number;
    data: number;
}
export const progressdata: ProgressType[] = [
    { id: 1, data: 0 },
    { id: 2, data: 25 },
    { id: 3, data: 50 },
    { id: 4, data: 75 },
    { id: 5, data: 100 },
]

interface StripType {
    id: number;
    data: number;
    color: string;
}
export const Stripeddata: StripType[] = [
    { id: 1, data: 10, color: "primary" },
    { id: 2, data: 25, color: "secondary" },
    { id: 3, data: 50, color: "success" },
    { id: 4, data: 75, color: "warning" },
    { id: 5, data: 100, color: "info" },
]

export const Labeldata: StripType[] = [
    { id: 1, data: 10, color: "primary" },
    { id: 2, data: 20, color: "secondary" },
    { id: 3, data: 40, color: "success" },
    { id: 4, data: 60, color: "warning" },
    { id: 5, data: 80, color: "info" },
]

interface HeightType {
    id: number;
    data: number;
    class: string;
}
export const Heightdata: HeightType[] = [
    { id: 1, data: 10, class: "progress progress-xs mb-3" },
    { id: 2, data: 25, class: "progress progress-sm mb-3" },
    { id: 3, data: 50, class: "progress  mb-3" },
    { id: 4, data: 75, class: "progress progress-lg mb-3" },
    { id: 5, data: 100, class: "progress progress-xl mb-3" },
]

export const Coloreddata: StripType[] = [
    { id: 1, data: 20, color: "secondary" },
    { id: 2, data: 40, color: "success" },
    { id: 3, data: 60, color: "warning" },
    { id: 4, data: 80, color: "info" },
    { id: 5, data: 100, color: "danger" },
]
interface HeightType1 {
    id: number;
    data: number;
    class: string;
    color: string;
}
export const Animatedata: HeightType1[] = [
    { id: 1, data: 10, color: "primary", class: "mb-3" },
    { id: 2, data: 20, color: "secondary", class: "mb-3" },
    { id: 3, data: 40, color: "success", class: "mb-3" },
    { id: 4, data: 60, color: "info", class: "mb-3" },
    { id: 5, data: 80, color: "warning", class: "" },
]

interface multiple {
    now1: number
    now2: number
    now3: number
    size: string
    class1: string
    class2: string
    class3: string
}
export const Multipleprogress: multiple[] = [
    { class1: "primary", class2: "secondary", class3: "success", now1: 5, now2: 10, now3: 15, size: "xs" },
    { class1: "warning", class2: "info", class3: "danger", now1: 10, now2: 15, now3: 20, size: "sm" },
    { class1: "info", class2: "success", class3: "primary", now1: 15, now2: 20, now3: 25, size: "" },
    { class1: "purple", class2: "teal", class3: "orange", now1: 20, now2: 25, now3: 30, size: "lg" },
    { class1: "success", class2: "danger", class3: "warning", now1: 25, now2: 30, now3: 35, size: "xl" },

];

interface custom2 {
    now: number
    class: string
    class1: string
    class2: string
    class3: string
}
export const CustomProgress2data: custom2[] = [
    { class: "primary", now: 50, class1: "", class2: "", class3: "mb-4" },
    { class: "secondary", now: 60, class1: "", class2: "secondary", class3: "mb-4" },
    { class: "success", now: 70, class1: "", class2: "success", class3: "mb-4" },
    { class: "info", now: 80, class1: "info", class2: "info", class3: "mb-4" },
    { class: "warning", now: 90, class1: "warning", class2: "warning", class3: "" },
];

