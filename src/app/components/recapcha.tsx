import React, { useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface RecaptchaProps {
    onVerify: (token: string | null) => void;
}

const RecaptchaComponent: React.FC<RecaptchaProps> = ({ onVerify }) => {
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    const handleRecaptchaChange = (token: string | null) => {
        onVerify(token);
    };

    useEffect(() => {
        if (recaptchaRef.current) {
            recaptchaRef.current.reset();
        }
    }, []);

    return (
        <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={`${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`}
            onChange={handleRecaptchaChange}
        />
    );
};

export default RecaptchaComponent;
