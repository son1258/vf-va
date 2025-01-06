"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import Title from "@/app/components/title";
import Image from "next/image";
import AuthIcon from "@/../public/authenticate.svg";
import SuccessIcon from "@/../public/done.svg";
import FilledIcon from "@/../public/filled.svg";
import { checkFormatNumber, concatenateCharacter } from "@/app/services/commonService";
import { API_URL, API_VERSION } from "@/constants";
import { callApi } from "@/app/services/httpServices";
import { routing } from "@/i18n/routing";

const AuthOTP = () => {
    const translate = useTranslations();
    const router = useRouter();
    const getDataUser = localStorage.getItem("dataUser");
    const dataUser = getDataUser ? JSON.parse(getDataUser) : null;
    const [isErrorOTP, setIsErrorOTP] = useState(false);

    const [codeOTP, setCodeOTP] = useState({
        first_number: "",
        second_number: "",
        third_number: "",
        fourth_number: "",
        fifth_number: "",
        sixth_number: "",
    });

    const handleOnclickBack = () => {
        router.push(`/${routing.defaultLocale}/virtualAccount`)
    };

    const handleInputOTP = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (["first_number", "second_number", "third_number", "fourth_number", "fifth_number", "sixth_number"].includes(name)) {
            const isValidInput = checkFormatNumber(value, 1, 1);
            if (isValidInput) {
                setCodeOTP((prev) => ({ ...prev, [name]: value }));
            }
        }
    };

    const handleConfirmOTP = async (event: React.FormEvent) => {
        event.preventDefault();
        if (dataUser) {
            const getOTP = concatenateCharacter(codeOTP);
            const subAccountNumber = dataUser.sub_account_number;
            const url = API_URL.API_ACTIVE_OTP;
            const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ0MzNmZTNkMDJiOTc4YzU4YWM4MWZjOWVlZmIwMzNkYzVmYThmNmNmZmVhZTRlZGE3YjBlNDIzZDNkZDNlYzQ2NWQ4YTRhN2Y2YmY0NjE2In0.eyJhdWQiOiI4IiwianRpIjoiNDQzM2ZlM2QwMmI5NzhjNThhYzgxZmM5ZWVmYjAzM2RjNWZhOGY2Y2ZmZWFlNGVkYTdiMGU0MjNkM2RkM2VjNDY1ZDhhNGE3ZjZiZjQ2MTYiLCJpYXQiOjE3MzQ0MjAyMjUsIm5iZiI6MTczNDQyMDIyNSwiZXhwIjoxNzY1OTU2MjI1LCJzdWIiOiIxNjI1OSIsInNjb3BlcyI6W119.GWAzDY1qthf9us3FoZxt2J1wyqhDzU7AoZ4WcnDLjwsDHfJodtTP2MPpx3LznJOXUtM27kVKiapO0rieTvgEgD57SBa67hAVkrPGcpTYPhzepIfk03aG_SudRslnMxElHwUE9mnGrtHWYMURNNBPxtUT75gX8D8h5MOpFbtRK1xcBZxL2zEuP1KLutgnoXiY-YXQToNjewuvCe9KVDmoM9dwafbQYhGGl_IIH7M5jlzOrnuTq9mYAZBlK9kB7IoMKYTChOe5GMhIyNM5kOSjk4aEtbOAAOGqdjnjjhRCQ_ju7NWoV_6tHcf8bMjQn0DkHQc7EWpdCJdF7BIcucYY99XWYPf7qOq1Vw5fzcjR8sVQs40xHWmNL_KO1eSwVAP6_aoFrMmXGQQGGwC7QeC2zLiZfyAHkS1hNsy9wBHpJELiGEnw0YAt8wcIq7Vr5NDGBTe69bI9h7DY9ez3vx7BpIooIW11MlBgcwEcXv7ebNFi_1diWSSChnXMalfBUjdjzXYroJQXF4ah77-vKycUKwfEpI9lJYepPeNichb8yL2cWtYihiCKLJBEulHDM2RBCBjrmJKLi7agUI_00G2yHqQmw2rsvrQNobY0aR9O2Rj-vbXbzjSFzSDeEa_mVhyr72wOjvUKGlvByeLnQxh6ESPNrWD7hQr1VH6IvOxIq0o'
            const method = 'POST';
            const body = {
                sub_account_number: subAccountNumber,
                otp: getOTP,
            };

            try {
                const response = await callApi(url, method, body, API_VERSION, token);
                if (response) {
                    router.push(`/${routing.defaultLocale}/virtualAccount/authOTP/success`);
                } else {
                    setIsErrorOTP(true);
                    console.error("OTP confirmation failed");
                }
            } catch (error) {
                console.error("Error confirming OTP:", error);
            }
        }
    };

    return (
        <div className="text-center text-white">
            <div className="w-full sm:hidden">
                <Title
                    title={translate("authenticOtp")}
                    containerStyles="flex items-center justify-between w-full px-4 py-8 bg-[#00cc66]"
                    titleStyles="text-white font-bold text-lg"
                    onClick={handleOnclickBack}
                />
            </div>
            <div className="hidden sm:flex items-center justify-center pt-20">
                <div className="w-[60%]">
                    <ol className="flex items-center w-full text-sm font-medium text-center text-white sm:text-base">
                        <li className="flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-[#3333ff] after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                            <span className="flex flex-col items-center w-full">
                                <Image src={FilledIcon} alt="success icon" className="mr-1 w-8 h-8" />
                                <p className="text-[#3333ff]">{translate("registerInformation")}</p>
                            </span>
                        </li>
                        <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-[#3333ff] after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                            <span className="flex flex-col items-center w-full">
                                <Image src={FilledIcon} alt="success icon" className="mr-1 w-8 h-8" />
                                <p className="text-[#3333ff]">{translate("virtualAccountInformation")}</p>
                            </span>
                        </li>
                        <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                            <span className="flex flex-col items-center w-full">
                                <Image src={AuthIcon} alt="authenticate icon" className="mr-1 w-8 h-8" />
                                <p>{translate("authenticOtp")}</p>
                            </span>
                        </li>
                        <li className="flex items-center">
                            <span className="flex flex-col items-center w-full">
                                <Image src={SuccessIcon} alt="success icon" className="mr-1 w-8 h-8" />
                                <p>{translate("service")}</p>
                            </span>
                        </li>
                    </ol>
                </div>
            </div>
            <p className="font-bold pt-32 pb-32">{translate("inputOTP")}</p>
            <div className="flex items-center justify-center w-full">
                <div className="w-[80%] sm:w-[20%]">
                    <form onSubmit={handleConfirmOTP} className="w-full">
                        <div className="flex items-center justify-between gap-4">
                            {["first_number", "second_number", "third_number", "fourth_number", "fifth_number", "sixth_number"].map((name) => (
                                <input
                                    key={name}
                                    name={name}
                                    className="py-3 w-1/6 bg-white text-black rounded-[8px] text-center"
                                    required
                                    maxLength={1}
                                    onChange={handleInputOTP}
                                />
                            ))}
                        </div>
                        {/* {isErrorOTP && } */}
                        <div className="mt-32 flex items-center justify-center">
                            <Button type="submit" className="w-full text-center bg-white py-2 rounded-lg text-black font-bold">
                                {translate("confirm")}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AuthOTP;
