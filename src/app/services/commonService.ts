export const checkPhoneNumber = (phoneNumber: string) => {
    const phoneRegex = /^0[1-9][0-9]{8}$/;
    return phoneRegex.test(phoneNumber)
}

export const checkFormatNumber = (identificationNumber: string, numberFrom: number, numberTo: number) => {
    let formatNumberRegex = new RegExp(`^[0-9]{${numberFrom},${numberTo}}$`);
    return formatNumberRegex.test(identificationNumber);
};

export const concatenateCharacter = (characters: any) => {
    return Object.values(characters).join('')
};