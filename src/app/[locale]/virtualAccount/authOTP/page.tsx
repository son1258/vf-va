import { useTranslations } from 'next-intl';
import React from 'react';
import { routing } from '@/i18n/routing';
import Link from 'next/link';
import { Button } from '@mui/material';
import Title from '@/app/components/title';
import Image from 'next/image';
import AuthIcon from '@/../public/authenticate.svg';
import SuccessIcon from '@/../public/done.svg';
import FilledIcon from '@/../public/filled.svg';
import Form from 'next/form';
const AuthOTP = () => {
    const translate = useTranslations();
    return (
        <div className='text-center text-white'>
            <div className='w-full sm:hidden'>
                <Title
                    title={translate('authenticOtp')}
                    containerStyles='flex items-center justify-between w-full px-4 py-8 bg-[#00cc66]'
                    titleStyles='text-white font-bold text-lg'
                />
            </div>
            <div className='hidden sm:flex items-center justify-center pt-20 '>
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
            <p className='font-bold pt-32 pb-32'>{translate('inputOTP')}</p>
            <div className='flex items-center justify-center w-full'>
                <div className='w-[80%] sm:w-[20%]'>
                    <Form action={`/${routing.defaultLocale}/virtualAccount/authOTP/success`} className='w-full'>
                        <div className='flex items-center justify-between gap-4'>
                            <input className='py-3 w-1/6 bg-white text-black rounded-[8px] text-center' required maxLength={1} />
                            <input className='py-3 w-1/6 bg-white text-black rounded-[8px] text-center' required maxLength={1} />
                            <input className='py-3 w-1/6 bg-white text-black rounded-[8px] text-center' required maxLength={1} />
                            <input className='py-3 w-1/6 bg-white text-black rounded-[8px] text-center' required maxLength={1} />
                            <input className='py-3 w-1/6 bg-white text-black rounded-[8px] text-center' required maxLength={1} />
                            <input className='py-3 w-1/6 bg-white text-black rounded-[8px] text-center' required maxLength={1} />
                        </div>
                        <p className='mt-20'>{translate('notReciveOTP')}</p>
                        <p>{translate('resent')}</p>
                        <div className='mt-32 flex items-center justify-center'>

                            <Button type='submit' className='w-full text-center bg-white py-2 rounded-lg text-black font-bold'>{translate('confirm')}</Button>

                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default AuthOTP;