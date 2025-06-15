export const pages_schema: Page[] = [
    { name: "Home", path: "/" },
    { name: "OSS", path: "/oss" },
];

type Page = {
    name: string;
    path: string;
};
