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
import { useState } from 'react';
import { checkFormatNumber, checkPhoneNumber } from '../services/commonService';
import { ErrorProps } from '../types/commonTypes';
import { useRouter } from 'next/navigation';
import { callApi } from '../services/httpServices';
import { API_URL, API_VERSION } from '@/constants';

export default function HomePage() {
    const translate = useTranslations();
    const [formData, setFormData] = useState({
        merchant_name: "",
        merchant_address: "",
        bank_code: "OCB",
        account_number: "",
        nic: "",
        email: "",
        fullname: "",
        phone: "",
        account_name: "",
        sub_account_number: ""
    });

    const [error, setError] = useState<ErrorProps>({});
    const router = useRouter();

    const handleInputInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'phone') {
            let checkPhoneValue = checkPhoneNumber(value);
            if (checkPhoneValue) {
                setFormData((data) => ({
                    ...data,
                    phone: value
                }))
                setError((error) => ({
                    ...error,
                    errorValidPhone: ''
                }))
            } else {
                setError((error) => ({
                    ...error,
                    errorValidPhone: translate('Error.phoneError')
                }))
            }
        } else if (name === 'nic') {
            let checkIdentificationValue = checkFormatNumber(value, 8, 16);
            if (checkIdentificationValue) {
                setFormData((data) => ({
                    ...data,
                    nic: value
                }))
                setError((error) => ({
                    ...error,
                    errorValidId: ''
                }))
            } else {
                setError((error) => ({
                    ...error,
                    errorValidId: translate('Error.identificationError')
                }))
            }
        } else if (name === 'account_number') {
            let checkAccountNumberValue = checkFormatNumber(value, 13, 16);
            if (checkAccountNumberValue) {
                setFormData((data) => ({
                    ...data,
                    account_number: value
                }))
                setError((error) => ({
                    ...error,
                    errorValidAccountNumber: ''
                }))
            } else {
                setError((error) => ({
                    ...error,
                    errorValidAccountNumber: translate('Error.accountError')
                }))
            }
        } else if (name === 'account_name') {
            setFormData((data) => ({
                ...data,
                account_name: value,
                fullname: value
            }))
        }
        else {
            setFormData((data) => ({
                ...data,
                [name]: value
            }))
        }
    }

    const handleOnclickBack = () => {
        router.push('/')
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const checkError = Object.values(error).some((errMessage) => errMessage !== '');
        if (!checkError) {
            try {
                const url = API_URL.API_GENERATE_VA_ACCOUNT;
                const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ0MzNmZTNkMDJiOTc4YzU4YWM4MWZjOWVlZmIwMzNkYzVmYThmNmNmZmVhZTRlZGE3YjBlNDIzZDNkZDNlYzQ2NWQ4YTRhN2Y2YmY0NjE2In0.eyJhdWQiOiI4IiwianRpIjoiNDQzM2ZlM2QwMmI5NzhjNThhYzgxZmM5ZWVmYjAzM2RjNWZhOGY2Y2ZmZWFlNGVkYTdiMGU0MjNkM2RkM2VjNDY1ZDhhNGE3ZjZiZjQ2MTYiLCJpYXQiOjE3MzQ0MjAyMjUsIm5iZiI6MTczNDQyMDIyNSwiZXhwIjoxNzY1OTU2MjI1LCJzdWIiOiIxNjI1OSIsInNjb3BlcyI6W119.GWAzDY1qthf9us3FoZxt2J1wyqhDzU7AoZ4WcnDLjwsDHfJodtTP2MPpx3LznJOXUtM27kVKiapO0rieTvgEgD57SBa67hAVkrPGcpTYPhzepIfk03aG_SudRslnMxElHwUE9mnGrtHWYMURNNBPxtUT75gX8D8h5MOpFbtRK1xcBZxL2zEuP1KLutgnoXiY-YXQToNjewuvCe9KVDmoM9dwafbQYhGGl_IIH7M5jlzOrnuTq9mYAZBlK9kB7IoMKYTChOe5GMhIyNM5kOSjk4aEtbOAAOGqdjnjjhRCQ_ju7NWoV_6tHcf8bMjQn0DkHQc7EWpdCJdF7BIcucYY99XWYPf7qOq1Vw5fzcjR8sVQs40xHWmNL_KO1eSwVAP6_aoFrMmXGQQGGwC7QeC2zLiZfyAHkS1hNsy9wBHpJELiGEnw0YAt8wcIq7Vr5NDGBTe69bI9h7DY9ez3vx7BpIooIW11MlBgcwEcXv7ebNFi_1diWSSChnXMalfBUjdjzXYroJQXF4ah77-vKycUKwfEpI9lJYepPeNichb8yL2cWtYihiCKLJBEulHDM2RBCBjrmJKLi7agUI_00G2yHqQmw2rsvrQNobY0aR9O2Rj-vbXbzjSFzSDeEa_mVhyr72wOjvUKGlvByeLnQxh6ESPNrWD7hQr1VH6IvOxIq0o'
                const method = 'POST';
                const request = await callApi(url, method, formData, API_VERSION, token);
                if (request.status === 200) {
                    setFormData((data) => ({
                        ...data,
                        sub_account_number: request.data.sub_account_number
                    }))
                    localStorage.setItem('dataUser', JSON.stringify(formData))
                    router.push(`/${routing.defaultLocale}/virtualAccount`)
                }
            } catch (error) {
                console.error('Unexpected error:', error);
            }
        }
    }

    return (
        <div className='w-full'>
            <div className='w-full sm:hidden'>
                <div className='w-full'>
                    <Title
                        title={translate('registerInformation')}
                        containerStyles='flex items-center justify-between w-full px-4 py-8 bg-[#00cc66]'
                        titleStyles='text-white font-bold text-lg'
                        onClick={handleOnclickBack}
                    />
                </div>
                <Form onSubmit={handleSubmit} action={''}>
                    <div className='font-bold text-white py-4 px-4 text-sm'>
                        <div key={translate('phone')} className='py-2'>
                            <label htmlFor={translate('phone')}>{translate('phone')}</label>
                            <input
                                id={translate('phone')}
                                name='phone'
                                className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                                onChange={handleInputInfoChange}
                                required
                            />
                        </div>
                        {error.errorValidPhone && <span className='font-bold text-sm text-red-400'>{error.errorValidPhone}</span>}
                        <div key={translate('nic')} className='py-2'>
                            <label htmlFor={translate('nic')}>{translate('nic')}</label>
                            <input
                                id={translate('nic')}
                                name='nic'
                                className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                                onChange={handleInputInfoChange}
                                required
                            />
                        </div>
                        {error.errorValidId && <span className='font-bold text-sm text-red-400'>{error.errorValidId}</span>}
                        <div key={translate('email')} className='py-2 flex items-center justify-between gap-2'>
                            <label htmlFor={translate('email')}>{translate('email')}</label>
                            <input
                                id={translate('email')}
                                name='email'
                                type='email'
                                className='w-3/5 text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                                onChange={handleInputInfoChange}
                                required
                            />
                        </div>
                        <div key={translate('account_name')} className='py-2 flex items-center justify-between gap-2'>
                            <label htmlFor={translate('account_name')}>{translate('account_name')}</label>
                            <input
                                id={translate('account_name')}
                                name='account_name'
                                className='w-3/5 text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                                onChange={handleInputInfoChange}
                                required
                            />
                        </div>
                        <div key={translate('merchant_name')} className='py-2'>
                            <label htmlFor={translate('merchant_name')}>{translate('merchant_name')}</label>
                            <input
                                id={translate('merchant_name')}
                                name='merchant_name'
                                className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                                onChange={handleInputInfoChange}
                                required
                            />
                        </div>
                        <div key={translate('merchant_address')} className='py-2'>
                            <label htmlFor={translate('merchant_address')}>{translate('merchant_address')}</label>
                            <input
                                id={translate('merchant_address')}
                                name='merchant_address'
                                className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                                onChange={handleInputInfoChange}
                                required
                            />
                        </div>
                        <div key={translate('account_number')} className='py-2'>
                            <label htmlFor={translate('account_number')}>{translate('account_number')}</label>
                            <input
                                id={translate('account_number')}
                                name='account_number'
                                className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2 bg-[#00cc66] placeholder-white/90'
                                onChange={handleInputInfoChange}
                                placeholder={translate('placeHolderAccountNumber')}
                                required
                            />
                        </div>
                        {error.errorValidAccountNumber && <span className='font-bold text-sm text-red-400'>{error.errorValidAccountNumber}</span>}
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
                        <Form onSubmit={handleSubmit} action={''}>
                            <div className="flex items-center justify-center">
                                <div className="w-[60%] flex justify-between gap-4">
                                    <div className="w-1/2">
                                        <div key={translate('phone')} className='py-2 w-full'>
                                            <label htmlFor={translate('phone')}>{translate('phone')}</label>
                                            <input
                                                id={translate('phone')}
                                                name='phone'
                                                className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                                                onChange={handleInputInfoChange}
                                                required
                                            />
                                        </div>
                                        {error.errorValidPhone && <span className='font-bold text-sm text-red-600'>{error.errorValidPhone}</span>}
                                        <div key={translate('nic')} className='py-2 w-full'>
                                            <label htmlFor={translate('nic')}>{translate('nic')}</label>
                                            <input
                                                id={translate('nic')}
                                                name='nic'
                                                className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                                                onChange={handleInputInfoChange}
                                                required
                                            />
                                        </div>
                                        {error.errorValidId && <span className='font-bold text-sm text-red-400'>{error.errorValidId}</span>}
                                        <div key={translate('email')} className='py-2 w-full'>
                                            <label htmlFor={translate('email')}>{translate('email')}</label>
                                            <input
                                                id={translate('email')}
                                                type='email'
                                                name='email'
                                                className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                                                onChange={handleInputInfoChange}
                                                required
                                            />
                                        </div>
                                        <div key={translate('account_name')} className='py-2 w-full'>
                                            <label htmlFor={translate('account_name')}>{translate('account_name')}</label>
                                            <input
                                                id={translate('account_name')}
                                                name='account_name'
                                                className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                                                onChange={handleInputInfoChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='w-1/2'>
                                        <div key={translate('merchant_name')} className='py-2 w-full'>
                                            <label htmlFor={translate('merchant_name')}>{translate('merchant_name')}</label>
                                            <input
                                                id={translate('merchant_name')}
                                                name='merchant_name'
                                                className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                                                onChange={handleInputInfoChange}
                                                required
                                            />
                                        </div>
                                        <div key={translate('merchant_address')} className='py-2 w-full'>
                                            <label htmlFor={translate('merchant_address')}>{translate('merchant_address')}</label>
                                            <input
                                                id={translate('merchant_address')}
                                                name='merchant_address'
                                                className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2'
                                                onChange={handleInputInfoChange}
                                                required
                                            />
                                        </div>
                                        <div key={translate('account_number')} className='py-2 w-full'>
                                            <label htmlFor={translate('account_number')}>{translate('account_number')}</label>
                                            <input
                                                id={translate('account_number')}
                                                name='account_number'
                                                className='w-full text-black/80 py-2 rounded-lg font-medium outline-none px-2 bg-[#00cc66] placeholder-white/90'
                                                placeholder={translate('placeHolderAccountNumber')}
                                                onChange={handleInputInfoChange}
                                                required
                                            />
                                        </div>
                                        {error.errorValidAccountNumber && <span className='font-bold text-sm text-red-400'>{error.errorValidAccountNumber}</span>}
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