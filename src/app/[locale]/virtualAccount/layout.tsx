export default function VirtualAcountLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        </div>
    )
}