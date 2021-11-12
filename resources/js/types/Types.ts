import { ReactChild, ReactChildren } from "react";
import { Article } from "./Article";
import { User } from "./User";

//components

export interface TypePropsMain {
    children: ReactChildren | React.ReactChild;
}

export interface TypeInput {
    type?: string;
    className?: string;
    label?: string;
    name?: string;
    hint?: string;
}

export interface TypeInputSubmit {
    value?: string;
}

export interface TypeInputCheckbox {
    name?: string;
    label?: string;
    className?: string;
}

export interface TypeInputLabel {
    name?: string;
    label?: string;
}

export interface TypeArticle {
    index?: number;
    article: Article;
}

export interface TypeArticleSection {
    children: any;
    className?: string;
    index?: number;
    expanded?: boolean;
}

export interface TypeArticleHeader {
    children: any;
    url: string | null;
    className?: string;
}

//forms

export interface TypeFormRegister {
    name: { value: string };
    email: { value: string };
    password: { value: string };
    password_confirmation: { value: string };
}

export interface TypeFormLogin {
    email: { value: string };
    password: { value: string };
    remember: { checked: boolean };
}

//props

export interface TypePageProps {
    [key: string]: unknown;
    errors: object;
    user?: User | null;
    news?: Array<Article> | null;
}

//redux actions
export interface TypeReduxAction {
    type: string;
    payload: any;
}

//redux states

export interface TypeNewsState {
    news: Array<Article>;
    selected: Number;
}