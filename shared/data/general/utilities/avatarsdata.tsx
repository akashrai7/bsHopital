//Avatars
interface AvatarType {
    id: number;
    class: string;
    src: string;
}
export const Avatardata: AvatarType[] = [
    { id: 1, class: "avatar-radius-0", src: "../../../assets/images/faces/1.jpg" },
    { id: 1, class: "", src: "../../../assets/images/faces/2.jpg" },
    { id: 1, class: "avatar-rounded", src: "../../../assets/images/faces/3.jpg" },
]

interface Icontype {
    id: number;
    class: string;
    src: string;
    icon: string;
    class1: string;
    height:number;
    width:number;
}
export const Avataricon: Icontype[] = [
    { id: 1, class: "xs", src: "../../../assets/images/faces/2.jpg", icon: "camera", class1: "success", height:20, width:20},
    { id: 2, class: "sm", src: "../../../assets/images/faces/3.jpg", icon: "edit", class1: "secondary", height:28, width:28},
    { id: 3, class: "md", src: "../../../assets/images/faces/14.jpg", icon: "plus", class1: "warning", height:40, width:40},
    { id: 4, class: "lg", src: "../../../assets/images/faces/13.jpg", icon: "edit", class1: "info", height:48, width:48},
    { id: 5, class: "xl", src: "../../../assets/images/faces/15.jpg", icon: "camera", class1: "success", height:64, width:64},
    { id: 6, class: "xxl", src: "../../../assets/images/faces/9.jpg", icon: "plus", class1: "danger", height:80, width:80},
]

//Avatar Sizes
export const Avatarsize = [
    { id: 1, class: "xs", src: "../../../assets/images/faces/4.jpg", height:20, width:20 },
    { id: 2, class: "sm", src: "../../../assets/images/faces/5.jpg", height:28, width:28 },
    { id: 3, class: "md", src: "../../../assets/images/faces/6.jpg", height:40, width:40 },
    { id: 4, class: "lg", src: "../../../assets/images/faces/7.jpg" , height:48, width:48},
    { id: 5, class: "xl", src: "../../../assets/images/faces/8.jpg" , height:64, width:64},
    { id: 6, class: "xxl", src: "../../../assets/images/faces/9.jpg" , height:80, width:80},
]

//Avatar With Online
export const Avataronline = [
    { id: 1, class: "xs online", src: "../../../assets/images/faces/8.jpg", height:20, width:20 },
    { id: 2, class: "sm online", src: "../../../assets/images/faces/10.jpg", height:28, width:28 },
    { id: 3, class: "md online", src: "../../../assets/images/faces/12.jpg", height:40, width:40 },
    { id: 4, class: "lg online", src: "../../../assets/images/faces/13.jpg", height:48, width:48 },
    { id: 5, class: "xl online", src: "../../../assets/images/faces/14.jpg", height:64, width:64 },
    { id: 6, class: "xxl online", src: "../../../assets/images/faces/15.jpg", height:80, width:80 },
]

//Avatar With Offline
export const Avataroffline = [
    { id: 1, class: "xs offline", src: "../../../assets/images/faces/2.jpg", height:20, width:20 },
    { id: 2, class: "sm offline", src: "../../../assets/images/faces/3.jpg", height:28, width:28 },
    { id: 3, class: "md offline", src: "../../../assets/images/faces/4.jpg", height:40, width:40 },
    { id: 4, class: "lg offline", src: "../../../assets/images/faces/5.jpg", height:48, width:48 },
    { id: 5, class: "xl offline", src: "../../../assets/images/faces/6.jpg" , height:64, width:64},
    { id: 6, class: "xxl offline", src: "../../../assets/images/faces/7.jpg", height:80, width:80 },
]

//Avatars With Number
export const Avatarnumber = [
    { id: 1, class: "xs", src: "../../../assets/images/faces/2.jpg", icon: "camera", class1: "primary", data: '2' , height:20, width:20},
    { id: 2, class: "sm", src: "../../../assets/images/faces/3.jpg", icon: "edit", class1: "secondary", data: '5', height:28, width:28 },
    { id: 3, class: "md", src: "../../../assets/images/faces/14.jpg", icon: "plus", class1: "warning", data: '1', height:40, width:40 },
    { id: 4, class: "lg", src: "../../../assets/images/faces/13.jpg", icon: "edit", class1: "info", data: '7', height:48, width:48 },
    { id: 5, class: "xl", src: "../../../assets/images/faces/15.jpg", icon: "camera", class1: "success", data: '3', height:64, width:64 },
    { id: 6, class: "xxl", src: "../../../assets/images/faces/9.jpg", icon: "plus", class1: "danger", data: '9', height:80, width:80 },
]

//Avatars With Number
interface StackType {
    id: number;
    src: string;
}
export const Avatarstack: StackType[] = [
    { id: 1, src: "../../../assets/images/faces/2.jpg" },
    { id: 2, src: "../../../assets/images/faces/8.jpg" },
    { id: 3, src: "../../../assets/images/faces/2.jpg" },
    { id: 4, src: "../../../assets/images/faces/10.jpg" },
    { id: 5, src: "../../../assets/images/faces/4.jpg" },
    { id: 6, src: "../../../assets/images/faces/13.jpg" },
]

//Avatar With Initials
interface InitialType {
    id: number;
    data: string;
    color: string;
    data1: string;
    height:number;
    width:number
}
export const Avatarinitial: InitialType[] = [
    { id: 1, data: "xs", color: "primary", data1: "XS" , height:20, width:20},
    { id: 2, data: "sm", color: "secondary", data1: "SM" , height:28, width:28},
    { id: 3, data: "md", color: "warning", data1: "MD" , height:40, width:40},
    { id: 4, data: "lg", color: "danger", data1: "LG" , height:48, width:48},
    { id: 5, data: "xl", color: "success", data1: "XL", height:64, width:64 },
    { id: 6, data: "xxl", color: "info", data1: "XXL", height:80, width:80 },
]