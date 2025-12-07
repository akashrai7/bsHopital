
interface Selectoption {
    value: number;
    label: string;
}

export const BlogCategory: Selectoption[] = [
    { label: "Select Category", value: 1 },
    { label: "Nature", value: 2 },
    { label: "Sports", value: 3 },
    { label: "Food", value: 4 },
    { label: "Travel", value: 5 },
    { label: "Fashion", value: 6 },
    { label: "Beauty", value: 7 },
] 

export const Publish = [
    { label: "Top Blog", value: 2 },
    { label: "Blogger", value: 3 },
    { label: "Adventure", value: 4 },
    { label: "Landscape", value: 5 },
]

export const Published = [
    { label: "Published", value: 2 },
    { label: "Hold", value: 3 },
]