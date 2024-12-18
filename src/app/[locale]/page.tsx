"use client"

import { useTranslations } from 'next-intl';
import Title from '../components/title';
import { routing } from '@/i18n/routing';
import Form from 'next/form';
import { Button } from '@mui/material';
import Image from 'next/image';
import UserIcon from '@/../public/user-info.svg';
import VAIcon from '@/../public/va.svg';
import AuthIcon from '@/../public/authenticate.svg';
import SuccessIcon from '@/../public/done.svg';

export default function HomePage() {
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
            <div className="flex items-center justify-center sm:h-screen w-full">
                <div className='w-full'>
                    <div className='hidden sm:flex items-center justify-center pb-8'>
                        <div className='w-[60%]'>
                            <ol className="flex items-center w-full text-sm font-medium text-center text-white sm:text-base">
                                <li className="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                    <span className="flex flex-col items-center w-full">
                                        <Image src={UserIcon} alt='user icon' className="mr-1 w-8 h-8" />
                                        <p>{translate('registerInformation')}</p>
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
                        <Form action={`/${routing.defaultLocale}/virtualAccount`} formMethod='POST'>
                            <div className="flex items-center justify-center">
                                <div className="w-[60%] flex justify-between gap-4">
                                    <div className="w-1/2">
                                        <div key={translate('mobilephone')} className='py-2 w-full'>
                                            <label htmlFor={translate('mobilephone')}>{translate('mobilephone')}</label>
                                            <input
                                                id={translate('mobilephone')}
                                                name='mobilephone'
                                                className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                                                required
                                            />
                                        </div>
                                        <div key={translate('identificationNumber')} className='py-2 w-full'>
                                            <label htmlFor={translate('identificationNumber')}>{translate('identificationNumber')}</label>
                                            <input
                                                id={translate('identificationNumber')}
                                                name='identificationNumber'
                                                className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                                                required
                                            />
                                        </div>
                                        <div key={translate('email')} className='py-2 w-full'>
                                            <label htmlFor={translate('email')}>{translate('email')}</label>
                                            <input
                                                id={translate('email')}
                                                type='email'
                                                name='email'
                                                className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                                                required
                                            />
                                        </div>
                                        <div key={translate('customerName')} className='py-2 w-full'>
                                            <label htmlFor={translate('customerName')}>{translate('customerName')}</label>
                                            <input
                                                id={translate('customerName')}
                                                name='customerName'
                                                className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='w-1/2'>
                                        <div key={translate('merchantName')} className='py-2 w-full'>
                                            <label htmlFor={translate('merchantName')}>{translate('merchantName')}</label>
                                            <input
                                                id={translate('merchantName')}
                                                name='merchantName'
                                                className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                                                required
                                            />
                                        </div>
                                        <div key={translate('merchantAddress')} className='py-2 w-full'>
                                            <label htmlFor={translate('merchantAddress')}>{translate('merchantAddress')}</label>
                                            <input
                                                id={translate('merchantAddress')}
                                                name='merchantAddress'
                                                className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                                                required
                                            />
                                        </div>
                                        <div key={translate('accountNumber')} className='py-2 w-full'>
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
                                </div>
                            </div>
                            <div>
                                <div className="mt-10 flex items-center justify-center">
                                    <a href={`/${routing.defaultLocale}/link-page-to-create-account`} className='w-[20%]'>
                                        <Button className="py-2 bg-white rounded-lg w-full text-center text-black font-bold">{translate('notHaveOcbAccount')}</Button>
                                    </a>
                                </div>
                                <div className="flex items-center justify-center mt-10">
                                    <div className='w-[40%] flex justify-between gap-4'>
                                        <div className='w-1/2'>
                                            <Button type='submit' className='w-full bg-white rounded-lg text-center font-bold text-black'>{translate('next')}</Button>
                                        </div>
                                        <div className='w-1/2'>
                                            <a href='/' className='w-full'>
                                                <Button className='py-2 bg-black/40 rounded-lg w-full text-center text-white font-bold'>{translate('back')}</Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    );
}