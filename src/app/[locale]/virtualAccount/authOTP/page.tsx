import { useTranslations } from 'next-intl';
import React from 'react';
import { routing } from '@/i18n/routing';
import Link from 'next/link';
import { Button } from '@mui/material';
const AuthOTP = () => {
    const translate = useTranslations();
    return (
        <div className='text-center text-white'>
            <p className='font-bold pt-40 pb-32'>{translate('inputOTP')}</p>
            <div className='flex items-center justify-between px-2 gap-4 font-bold text-lg'>
                <input className='py-3 w-1/6 bg-white text-black rounded-[8px] text-center' />
                <input className='py-3 w-1/6 bg-white text-black rounded-[8px] text-center' />
                <input className='py-3 w-1/6 bg-white text-black rounded-[8px] text-center' />
                <input className='py-3 w-1/6 bg-white text-black rounded-[8px] text-center' />
                <input className='py-3 w-1/6 bg-white text-black rounded-[8px] text-center' />
                <input className='py-3 w-1/6 bg-white text-black rounded-[8px] text-center' />
            </div>
            <p className='mt-20'>{translate('notReciveOTP')}</p>
            <p>{translate('resent')}</p>
            <div className='mt-32 flex items-center justify-center'>
                <Link href={`/${routing.defaultLocale}/virtualAccount/authOTP/success`} className='w-[90%]'>
                    <Button className='w-full text-center bg-white py-2 rounded-lg text-black font-bold'>{translate('confirm')}</Button>
                </Link>
            </div>
        </div>
    )
}

export default AuthOTP;