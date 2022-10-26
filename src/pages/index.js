import { lazy } from "react";

export const Test = lazy(() => import("./test"));
export const NotFound = lazy(() => import("./404/404")); 
export const Home = lazy(() => import("./home/home")); 
export const About = lazy(() => import("./about/About")); 
export const Services = lazy(() => import("./services/Services")); 
export const News = lazy(() => import("./news/news")); 
export const OneNews = lazy(() => import("./news/oneNews")); 
export const Contacts = lazy(() => import("./contactUs/Contact")); 
export const Personal = lazy(() => import("./personal/personal")); 
export const Note = lazy(() => import("./personal/note")); 
export const Profile = lazy(() => import("./personal/profile")); 


