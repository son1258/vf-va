import React from 'react';
import SuccessIcon from '@/../public/success.svg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { userInputFiled } from '@/constants';
import Link from 'next/link';
import { routing } from '@/i18n/routing';
import { Button } from '@mui/material';

const Success = () => {
    const translate = useTranslations();
    return (
        <div className='text-white'>
            <div className='flex items-center justify-center mt-20'>
                <Image src={SuccessIcon} alt='success icon' className='w-40 h-40' />
            </div>
            <p className='text-center font-bold text-lg py-4'>{translate('registerSuccess')}</p>
            <div className='px-2'>
                {userInputFiled.map((field) => (
                    <div key={field.keyField} className='py-2 flex items-center justify-between'>
                        <p>{translate(`${field.title}`)}</p>
                        <p>value</p>
                    </div>
                ))}
            </div>
            <Link href='/' className='px-4 w-full flex items-center justify-center mt-20'>
                <Button className='text-black py-2 bg-white w-full text-center rounded-lg font-bold'>{translate('success')}</Button>
            </Link>
        </div>
    )
}
export default Success;