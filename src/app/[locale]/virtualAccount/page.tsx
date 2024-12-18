import Title from '@/app/components/title';
import { useTranslations } from 'next-intl';
import React from 'react';
import { userInputFiled } from '@/constants';
import { Button } from '@mui/material';
import Link from 'next/link';
import { routing } from '@/i18n/routing';
import Image from 'next/image';
import VAIcon from '@/../public/va.svg';
import AuthIcon from '@/../public/authenticate.svg';
import SuccessIcon from '@/../public/done.svg';
import FilledIcon from '@/../public/filled.svg';

const VirtualAcount = () => {
    const translate = useTranslations();

    return (
        <div className='w-full'>
            <div className='w-full sm:hidden'>
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
            <div className="flex items-center justify-center sm:h-screen w-full">
                <div className='w-full'>
                    <div className='hidden sm:flex items-center justify-center pb-8'>
                        <div className='w-[60%]'>
                            <ol className="flex items-center w-full text-sm font-medium text-center text-white sm:text-base">
                                <li className="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-[#3333ff] after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                    <span className="flex flex-col items-center w-full">
                                        <Image src={FilledIcon} alt='success icon' className="mr-1 w-8 h-8" />
                                        <p className='text-[#3333ff]'>{translate('registerInformation')}</p>
                                    </span>
                                </li>
                                <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                    <span className="flex flex-col items-center w-full">
                                        <Image src={VAIcon} alt='virtual account icon' className="mr-1 w-8 h-8" />
                                        <p>{translate('virtualAccountInformation')}</p>
                                    </span>
                                </li>
                                <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                    <span className="flex flex-col items-center w-full">
                                        <Image src={AuthIcon} alt='authenticate icon' className="mr-1 w-8 h-8" />
                                        <p>{translate('authenticOtp')}</p>
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
                    <div className='hidden sm:block w-full text-white'>
                        <div className='flex items-center justify-center'>
                            <div className='mt-10 px-4 w-[30%]'>
                                {userInputFiled.map((field) => (
                                    <div className='flex items-center justify-between text-white py-2' key={field.keyField}>
                                        <p>{translate(field.title)}</p>
                                        <p>value</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="mt-10 flex items-center justify-center">
                                <div className='py-8'>
                                    <div className="g-recaptcha" data-sitekey={`${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center mt-10">
                                <div className='w-[40%] flex justify-between gap-4'>
                                    <div className='w-1/2'>
                                        <Link href={`/${routing.defaultLocale}/virtualAccount/authOTP`} className='w-full'>
                                            <Button className='text-center bg-white py-2 rounded-lg font-bold w-full text-black'>{translate('confirm')}</Button>
                                        </Link>
                                    </div>
                                    <div className='w-1/2'>
                                        <a href='/' className='w-full'>
                                            <Button className='py-2 bg-black/40 rounded-lg w-full text-center text-white font-bold'>{translate('back')}</Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VirtualAcount;