import Title from '@/app/components/title';
import { useTranslations } from 'next-intl';
import React from 'react';
import { userInputFiled } from '@/constants';
import { Button } from '@mui/material';
import Link from 'next/link';
import { routing } from '@/i18n/routing';

const VirtualAcount = () => {
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
            <div className='mt-10 px-4'>
                {userInputFiled.map((field) => (
                    <div className='flex items-center justify-between text-white py-2' key={field.keyField}>
                        <p>{translate(field.title)}</p>
                        <p>value</p>
                    </div>
                ))}
            </div>
            <div className='fixed bottom-8 inset-x-0 flex flex-col justify-center items-center gap-4'>
                <div className='py-8'>
                    <div className="g-recaptcha" data-sitekey={`${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}></div>
                </div>
                <Link href={`/${routing.defaultLocale}/virtualAccount/authOTP`} className='w-[90%]'>
                    <Button className='text-center bg-white py-2 rounded-lg font-bold w-full text-black'>{translate('confirm')}</Button>
                </Link>
                <Link href='/' className='w-[90%]'>
                    <Button className='text-center font-bold bg-black/30 py-2 rounded-lg text-white w-full'>{translate('back')}</Button>
                </Link>
            </div>
        </div>
    )
}

export default VirtualAcount;