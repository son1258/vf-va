"use client"

import React from 'react';
import SuccessIcon from '@/../public/done.svg';
import CircleSuccessIcon from '@/../public/success.svg';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '@mui/material';
import Title from '@/app/components/title';
import Image from 'next/image';
import FilledIcon from '@/../public/filled.svg';
import { useRouter } from 'next/navigation';

const Success = () => {
    const translate = useTranslations();
    const getDataUser = localStorage.getItem('dataUser');
    const dataUser = getDataUser ? JSON.parse(getDataUser) : null;
    const router = useRouter();

    const handleOnclickBack = () => {
        router.push('/')
    }

    return (
        <div className='text-white'>
            <div className='w-full sm:hidden'>
                <Title
                    title={translate('service')}
                    containerStyles='flex items-center justify-between w-full px-4 py-8 bg-[#00cc66]'
                    titleStyles='text-white font-bold text-lg'
                    onClick={handleOnclickBack}
                />
            </div>
            <div className='hidden sm:flex items-center justify-center pb-8 pt-20'>
                <div className='w-[60%]'>
                    <ol className="flex items-center w-full text-sm font-medium text-center text-white sm:text-base">
                        <li className="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-[#3333ff] after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                            <span className="flex flex-col items-center w-full">
                                <Image src={FilledIcon} alt='success icon' className="mr-1 w-8 h-8" />
                                <p className='text-[#3333ff]'>{translate('registerInformation')}</p>
                            </span>
                        </li>
                        <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-[#3333ff] after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                            <span className="flex flex-col items-center w-full">
                                <Image src={FilledIcon} alt='success icon' className="mr-1 w-8 h-8" />
                                <p className='text-[#3333ff]'>{translate('virtualAccountInformation')}</p>
                            </span>
                        </li>
                        <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-[#3333ff] after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                            <span className="flex flex-col items-center w-full">
                                <Image src={FilledIcon} alt='success icon' className="mr-1 w-8 h-8" />
                                <p className='text-[#3333ff]'>{translate('authenticOtp')}</p>
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="flex flex-col items-center w-full">
                                <Image src={SuccessIcon} alt='success icon' className="mr-1 w-8 h-8" />
                                <p>{translate('service')}</p>
                            </span>
                        </li>
                    </ol>
                </div>
            </div>
            <div className='flex items-center justify-center mt-16 sm:mt-8'>
                <Image src={CircleSuccessIcon} alt='success icon' className='w-40 h-40 sm:w-28 sm:h-28' />
            </div>
            <p className='text-center font-bold text-lg py-4'>{translate('registerSuccess')}</p>
            <div className='sm:flex sm:items-center sm:justify-center'>
                {dataUser ? (
                    <div className='mt-10 px-4 sm:w-[30%]'>
                        <div className='flex items-center justify-between text-white py-2' key={translate('phone')}>
                            <p>{translate('phone')}</p>
                            <p>{dataUser.phone}</p>
                        </div>
                        <div className='flex items-center justify-between text-white py-2' key={translate('nic')}>
                            <p>{translate('nic')}</p>
                            <p>{dataUser.nic}</p>
                        </div>
                        <div className='flex items-center justify-between text-white py-2' key={translate('email')}>
                            <p>{translate('email')}</p>
                            <p>{dataUser.email}</p>
                        </div>
                        <div className='flex items-center justify-between text-white py-2' key={translate('account_name')}>
                            <p>{translate('account_name')}</p>
                            <p>{dataUser.account_name}</p>
                        </div>
                        <div className='flex items-center justify-between text-white py-2' key={translate('merchant_name')}>
                            <p>{translate('merchant_name')}</p>
                            <p>{dataUser.merchant_name}</p>
                        </div>
                        <div className='flex items-center justify-between text-white py-2' key={translate('merchant_address')}>
                            <p>{translate('merchant_address')}</p>
                            <p>{dataUser.merchant_address}</p>
                        </div>
                        <div className='flex items-center justify-between text-white py-2' key={translate('virtual_account_number')}>
                            <p>{translate('virtual_account_number')}</p>
                            <p>{ }</p>
                        </div>
                    </div>
                ) : (<></>)}
            </div>
            <Link href='/' className='px-4 w-full flex items-center justify-center mt-20'>
                <Button className='text-black py-2 bg-white w-full sm:w-[20%] text-center rounded-lg font-bold'>{translate('success')}</Button>
            </Link>
        </div>
    )
}
export default Success;