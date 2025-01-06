export type TitleProps = {
    title: string,
    containerStyles?: string,
    titleStyles?: string, 
    onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}

export type HeaderDesktopProps = {
    name: string,
    icon: any,
    containerStyles?: string, 
    iconStyles?: string, 
    spanStyles?: string
};

export type ErrorProps = {
    errorValidPhone?: string, 
    errorValidId?: string,
    errorValidAccountNumber?: string
}