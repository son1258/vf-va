import { z } from 'zod';
import { checkPhoneNumber, checkFormatNumber } from './services/commonService';
import { useTranslations } from 'next-intl';

const translate = useTranslations('Error');

export async function createUserForm(prevState: any, formData: FormData){
    const userInformation = z.object({
        mobilephone: z.string().refine((phone) => checkPhoneNumber(phone), {
            message: translate('phoneError'),
        }),
        identificationNumber: z.string().refine((identification) => checkFormatNumber(identification,1,12),{
            message: translate('identificationError'),
        } ),
        email: z.string(),
        customerName: z.string(),
        merchantName: z.string(),
        merchantAddress: z.string(),
        accountNumber: z.string().refine((accountNumber) => checkFormatNumber(accountNumber,13,13), {
            message: translate('accountError'),
        })
    });
   
    try {
        const dataUserInput = userInformation.parse({
            mobilephone: formData.get('mobilephone'),
            identificationNumber: formData.get('identificationNumber'),
            email: formData.get('email'),
            customerName: formData.get('customerName'),
            merchantName: formData.get('merchantName'),
            merchantAddress: formData.get('merchantAddress'),
            accountNumber: formData.get('accountNumber'),
        });
        console.log('Validated User Data:', dataUserInput);

        return dataUserInput;

    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error('Validation failed:', error.errors);
            return { error: error.errors };
        }
        console.error('Unexpected error:', error);
        return { error: 'An unexpected error occurred.' };
    }
}