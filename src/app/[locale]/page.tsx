"use client"

import { useTranslations } from 'next-intl';
import Title from '../components/title';
import { routing } from '@/i18n/routing';
import Form from 'next/form';
import { useFormState } from 'react-dom';
import { createUserForm } from '../actions';
import { Button } from '@mui/material';

export default function HomePage() {
    const translate = useTranslations();

    return (
        <div className='w-full'>
            <div className='w-full'>
                <Title
                    title={translate('registerInformation')}
                    containerStyles='flex items-center justify-between w-full px-4 py-8 bg-[#00cc66]'
                    titleStyles='text-white font-bold text-lg'
                />
            </div>
            <Form action={`/${routing.defaultLocale}/virtualAccount`} formMethod='POST'>
                <div className='font-bold text-white py-4 px-4 text-sm'>
                    <div key={translate('mobilephone')} className='py-2'>
                        <label htmlFor={translate('mobilephone')}>{translate('mobilephone')}</label>
                        <input
                            id={translate('mobilephone')}
                            name='mobilephone'
                            className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                            required
                        />
                    </div>
                    <div key={translate('identificationNumber')} className='py-2'>
                        <label htmlFor={translate('identificationNumber')}>{translate('identificationNumber')}</label>
                        <input
                            id={translate('identificationNumber')}
                            name='identificationNumber'
                            className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                            required
                        />
                    </div>
                    <div key={translate('email')} className='py-2 flex items-center justify-between gap-2'>
                        <label htmlFor={translate('email')}>{translate('email')}</label>
                        <input
                            id={translate('email')}
                            name='email'
                            type='email'
                            className='w-3/5 text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                            required
                        />
                    </div>
                    <div key={translate('customerName')} className='py-2 flex items-center justify-between gap-2'>
                        <label htmlFor={translate('customerName')}>{translate('customerName')}</label>
                        <input
                            id={translate('customerName')}
                            name='customerName'
                            className='w-3/5 text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                            required
                        />
                    </div>
                    <div key={translate('merchantName')} className='py-2'>
                        <label htmlFor={translate('merchantName')}>{translate('merchantName')}</label>
                        <input
                            id={translate('merchantName')}
                            name='merchantName'
                            className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                            required
                        />
                    </div>
                    <div key={translate('merchantAddress')} className='py-2'>
                        <label htmlFor={translate('merchantAddress')}>{translate('merchantAddress')}</label>
                        <input
                            id={translate('merchantAddress')}
                            name='merchantAddress'
                            className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                            required
                        />
                    </div>
                    <div key={translate('accountNumber')} className='py-2'>
                        <label htmlFor={translate('accountNumber')}>{translate('accountNumber')}</label>
                        <input
                            id={translate('accountNumber')}
                            name='accountNumber'
                            className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2 bg-[#00cc66] placeholder-white/90'
                            placeholder={translate('placeHolderAccountNumber')}
                            required
                        />
                    </div>
                </div>
                <div className='mt-8 flex items-center justify-center'>
                    <a href={`/${routing.defaultLocale}/link-page-to-create-account`} className='w-[80%]'>
                        <Button className='py-2 bg-white rounded-lg w-full text-center text-black font-bold'>{translate('notHaveOcbAccount')}</Button>
                    </a>
                </div>
                <div className='fixed bottom-8 inset-x-0 flex flex-col justify-center items-center'>
                    <Button type='submit' className='py-2 bg-white rounded-lg w-[80%] text-center font-bold text-black'>{translate('next')}</Button>
                    <a href='/' className='w-[80%]' >
                        <Button className='py-2 bg-black/40 rounded-lg mt-4  w-full text-center text-white font-bold'>{translate('back')}</Button>
                    </a>
                </div>
            </Form >
        </div >
    );
}