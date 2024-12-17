export type TitleProps = {
    title: string,
    containerStyles?: string,
    titleStyles?: string
}

export type ButtonProps = {
    name: string,
    containerStyles?: string,
}

export type FieldProps = {
    nameField: string,
    keyField?: string,
    containerStyles?: string,
    inputFieldStyles?: string,
    placeHolder?: string,
    disabled?: boolean,
    required?: boolean
}

export type UserFormValuesProps = {
    phone: string,
    nic: string,
    email: string,
    registerName: string,
    storeName: string,
    storeAddress: string,
    paymentAccount: string,
    virtualAccountNumber?: string,
}