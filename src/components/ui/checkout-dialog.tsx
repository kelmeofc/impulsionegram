'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { usePackageContext } from "@/providers/package-provider";
import Link from "next/link";
import { useState } from "react";

export function CheckoutDialog({
    children
}: { children: React.ReactNode }) {
    const [user, setUser] = useState('');
    const [checked, setChecked] = useState(false);
    const { productPackage } = usePackageContext() as any;

    return (
        <Dialog>
            <DialogTrigger className="w-full max-w-[365px]">
                {children}
            </DialogTrigger>

            <DialogContent className="bg-[#D5B8EC] overflow-auto max-h-[95vh] w-[95%] z-[999] p-3 rounded-3xl" style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#5A11AF #D5B8EC',
            }}>
                <DialogHeader>
                    <svg width="106" height="102" viewBox="0 0 106 102" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25554 0.126953C4.07906 0.126953 0.693359 3.51265 0.693359 7.68913V72.9304C0.693359 77.1069 4.07906 80.4926 8.25554 80.4926H41.2271L52.2385 99.5649C53.5322 101.806 56.7663 101.806 58.0599 99.5649L69.0713 80.4926H98.4379C102.614 80.4926 106 77.1069 106 72.9304V7.68913C106 3.51266 102.614 0.126953 98.4379 0.126953H8.25554Z" fill="#5A11AF" />
                        <path d="M32.6093 65.1121C32.6093 65.1121 28.4062 65.1121 28.4062 60.9091C28.4062 56.7061 32.6093 44.097 53.6244 44.097C74.6396 44.097 78.8426 56.7061 78.8426 60.9091C78.8426 65.1121 74.6396 65.1121 74.6396 65.1121H32.6093ZM53.6244 39.894C56.9686 39.894 60.1757 38.5655 62.5404 36.2008C64.9051 33.8362 66.2335 30.629 66.2335 27.2849C66.2335 23.9407 64.9051 20.7336 62.5404 18.3689C60.1757 16.0042 56.9686 14.6758 53.6244 14.6758C50.2803 14.6758 47.0731 16.0042 44.7085 18.3689C42.3438 20.7336 41.0153 23.9407 41.0153 27.2849C41.0153 30.629 42.3438 33.8362 44.7085 36.2008C47.0731 38.5655 50.2803 39.894 53.6244 39.894Z" fill="white" />
                    </svg>

                    <DialogTitle className="text-3xl font-bold text-center text-[#3F2553]">Vamos Começar!</DialogTitle>
                </DialogHeader>

                <div className="relative">
                    <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-3 outline-none" style={{
                        transform: 'translateY(-50%)'
                    }}>
                        <path d="M16.0016 11.2C14.7286 11.2 13.5077 11.7057 12.6075 12.6059C11.7073 13.5061 11.2016 14.727 11.2016 16C11.2016 17.273 11.7073 18.4939 12.6075 19.3941C13.5077 20.2943 14.7286 20.8 16.0016 20.8C17.2746 20.8 18.4955 20.2943 19.3957 19.3941C20.2959 18.4939 20.8016 17.273 20.8016 16C20.8016 14.727 20.2959 13.5061 19.3957 12.6059C18.4955 11.7057 17.2746 11.2 16.0016 11.2ZM16.0016 8C18.1233 8 20.1582 8.84286 21.6585 10.3431C23.1587 11.8434 24.0016 13.8783 24.0016 16C24.0016 18.1217 23.1587 20.1566 21.6585 21.6569C20.1582 23.1571 18.1233 24 16.0016 24C13.8799 24 11.845 23.1571 10.3447 21.6569C8.84446 20.1566 8.0016 18.1217 8.0016 16C8.0016 13.8783 8.84446 11.8434 10.3447 10.3431C11.845 8.84286 13.8799 8 16.0016 8ZM26.4016 7.6C26.4016 8.13043 26.1909 8.63914 25.8158 9.01421C25.4407 9.38929 24.932 9.6 24.4016 9.6C23.8712 9.6 23.3625 9.38929 22.9874 9.01421C22.6123 8.63914 22.4016 8.13043 22.4016 7.6C22.4016 7.06957 22.6123 6.56086 22.9874 6.18579C23.3625 5.81071 23.8712 5.6 24.4016 5.6C24.932 5.6 25.4407 5.81071 25.8158 6.18579C26.1909 6.56086 26.4016 7.06957 26.4016 7.6ZM16.0016 3.2C12.0432 3.2 11.3968 3.2112 9.5552 3.2928C8.3008 3.352 7.4592 3.52 6.6784 3.824C6.02498 4.0639 5.43426 4.44842 4.9504 4.9488C4.44961 5.43264 4.06456 6.02333 3.824 6.6768C3.52 7.4608 3.352 8.3008 3.2944 9.5536C3.2112 11.32 3.2 11.9376 3.2 16C3.2 19.96 3.2112 20.6048 3.2928 22.4464C3.352 23.6992 3.52 24.5424 3.8224 25.3216C4.0944 26.0176 4.4144 26.5184 4.9456 27.0496C5.4848 27.5872 5.9856 27.9088 6.6736 28.1744C7.464 28.48 8.3056 28.6496 9.5536 28.7072C11.32 28.7904 11.9376 28.8 16 28.8C19.96 28.8 20.6048 28.7888 22.4464 28.7072C23.6976 28.648 24.5392 28.48 25.3216 28.1776C25.9744 27.9365 26.5649 27.5522 27.0496 27.0528C27.5888 26.5152 27.9104 26.0144 28.176 25.3248C28.48 24.5376 28.6496 23.696 28.7072 22.4448C28.7904 20.68 28.8 20.0608 28.8 16C28.8 12.0416 28.7888 11.3952 28.7072 9.5536C28.648 8.3024 28.4784 7.4576 28.176 6.6768C27.9348 6.02403 27.5505 5.43357 27.0512 4.9488C26.5676 4.44775 25.9768 4.06267 25.3232 3.8224C24.5392 3.5184 23.6976 3.3504 22.4464 3.2928C20.6816 3.2096 20.064 3.2 16 3.2M16 0C20.3472 0 20.8896 0.0159999 22.5968 0.0959999C24.2992 0.176 25.4608 0.4432 26.48 0.84C27.536 1.2464 28.4256 1.7968 29.3152 2.6848C30.1288 3.48463 30.7583 4.45214 31.16 5.52C31.5552 6.5392 31.824 7.7008 31.904 9.4048C31.9792 11.1104 32 11.6528 32 16C32 20.3472 31.984 20.8896 31.904 22.5952C31.824 24.2992 31.5552 25.4592 31.16 26.48C30.7594 27.5484 30.1298 28.5162 29.3152 29.3152C28.5151 30.1285 27.5477 30.758 26.48 31.16C25.4608 31.5552 24.2992 31.824 22.5968 31.904C20.8896 31.9792 20.3472 32 16 32C11.6528 32 11.1104 31.984 9.4032 31.904C7.7008 31.824 6.5408 31.5552 5.52 31.16C4.45172 30.7592 3.48404 30.1295 2.6848 29.3152C1.87109 28.5155 1.24154 27.5479 0.84 26.48C0.4432 25.4608 0.176 24.2992 0.0959999 22.5952C0.0191999 20.8896 0 20.3472 0 16C0 11.6528 0.0159999 11.1104 0.0959999 9.4048C0.176 7.7008 0.4432 6.5408 0.84 5.52C1.24038 4.45149 1.87009 3.48371 2.6848 2.6848C3.48427 1.87077 4.45189 1.24117 5.52 0.84C6.5392 0.4432 7.6992 0.176 9.4032 0.0959999C11.112 0.0207999 11.6544 0 16.0016 0" fill="#1A002D" fill-opacity="0.73" />
                    </svg>

                    <input type="text" value={user} className="text-lg font-medium text-[#584566] w-full py-3 px-8 pl-12 rounded-full" onChange={(event) => {
                        setUser(event.currentTarget.value);
                    }} />
                </div>

                <label className="text-lg flex items-center gap-3 text-white cursor-pointer">
                    <input type="checkbox" value={checked ? 1 : 0} onChange={() => {
                        setChecked(!checked);
                    }} className="w-7 h-7 inline-block" />
                    <span>Li e estou de acordo com os <Link target="_blank" className="underline" href="https://www.impulsionegram.com.br/termos-de-uso/">termos de compra</Link> e de <Link href="https://www.impulsionegram.com.br/termos-de-responsabilidade/" target="_blank" className="underline">responsabilidade</Link>.</span>
                </label>

                {!checked && (
                    <span className="text-lg text-[#D21919] font-medium px-14 w-full text-center mx-auto relative">
                        <svg width="44" height="54" viewBox="0 0 44 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[30%] left-[0%]">
                            <path d="M15.8762 0.438769L14.2496 1.8238L0.612793 13.98L3.20393 17.5093L12.9338 8.83584L12.6543 11.4949C10.4465 32.501 24.1824 51.2101 43.2866 53.2181L43.7575 48.7377C26.8536 46.9611 14.7755 30.5099 16.729 11.9232L17.0087 9.26187L24.7224 19.771L27.9907 16.8575L17.1793 2.13173L15.8762 0.438769Z" fill="#D21919" />
                        </svg>

                        Aceite os termos acima para continuar sua compra
                    </span>
                )}

                <h3 className="text-3xl font-bold text-center text-[#3F2553]">Pagamento</h3>

                <Link href={`https://seguro.impulsionegram.com.br/checkout?aero-add-to-checkout=${productPackage.payment_id}&ig_username=${user}&utm_source=blog&utm_medium=menu&utm_campaign=google-search`} className="text-2xl font-bold text-white py-5 bg-[#5A11AF] flex items-center gap-2 rounded-full justify-center"
                    style={{
                        pointerEvents: checked && user ? 'all' : 'none',
                        opacity: checked && user ? 1 : 0.5
                    }}
                >
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5161 23.5381L16.6988 18.7208C16.5228 18.5448 16.3147 18.5128 16.2027 18.5128C16.0907 18.5128 15.8826 18.5448 15.7066 18.7208L10.8733 23.5541C10.3292 24.0983 9.48094 24.9785 6.64819 24.9785L12.5858 30.9001C13.486 31.7992 14.7063 32.3042 15.9787 32.3042C17.251 32.3042 18.4713 31.7992 19.3716 30.9001L25.3251 24.9625C23.8687 24.9625 22.6524 24.6744 21.5161 23.5381ZM10.8733 9.05429L15.7066 13.8876C15.8346 14.0156 16.0267 14.0956 16.2027 14.0956C16.3788 14.0956 16.5708 14.0156 16.6988 13.8876L21.4841 9.1023C22.6204 7.91799 23.9168 7.64591 25.3731 7.64591L19.4196 1.70835C18.5193 0.809226 17.299 0.304199 16.0267 0.304199C14.7543 0.304199 13.534 0.809226 12.6338 1.70835L6.69621 7.62991C9.51295 7.62991 10.3772 8.55815 10.8733 9.05429Z" fill="white" />
                        <path d="M30.5737 12.8633L26.9728 9.24636H24.9563C24.092 9.24636 23.2278 9.59846 22.6356 10.2226L17.8344 15.0239C17.3863 15.472 16.7941 15.6961 16.202 15.6961C15.5922 15.6875 15.0085 15.4472 14.5695 15.0239L9.73625 10.1746C9.12808 9.56645 8.29586 9.21436 7.41563 9.21436H5.06301L1.39804 12.8953C0.498923 13.7956 -0.00610352 15.0159 -0.00610352 16.2882C-0.00610352 17.5606 0.498923 18.7809 1.39804 19.6811L5.06301 23.3621H7.43164C8.29587 23.3621 9.12809 23.01 9.75225 22.4018L14.5855 17.5686C15.0336 17.1204 15.6258 16.8964 16.218 16.8964C16.8101 16.8964 17.4023 17.1204 17.8504 17.5686L22.6677 22.3858C23.2758 22.994 24.108 23.3461 24.9883 23.3461H27.0048L30.6058 19.7291C31.5087 18.8127 32.0121 17.5761 32.0061 16.2896C32.0001 15.0031 31.4852 13.7713 30.5737 12.8633Z" fill="white" />
                    </svg> Pix
                </Link>

                <Link href={`https://app.monetizze.com.br/checkout/${productPackage.card_id}?src=${user}&utm_source=blog&utm_medium=menu&utm_campaign=google-search`} className="text-2xl font-bold text-white py-5 bg-[#5A11AF] flex items-center gap-2 rounded-full justify-center"
                    style={{
                        pointerEvents: checked && user ? 'all' : 'none',
                        opacity: checked && user ? 1 : 0.5
                    }}
                >
                    <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 9.304  2V18.3042C30 19.8955 29.3679 21.4216 28.2426 22.5468C27.1174 23.6721 25.5913 24.3042 24 24.3042H6C4.4087 24.3042 2.88258 23.6721 1.75736 22.5468C0.632141 21.4216 0 19.8955 0 18.3042V9.3042H30ZM7.515 15.3042H7.5C7.30302 15.3052 7.10816 15.345 6.92655 15.4212C6.74493 15.4975 6.58013 15.6089 6.44154 15.7488C6.16164 16.0316 6.00551 16.4139 6.0075 16.8117C6.00849 17.0087 6.04826 17.2035 6.12455 17.3852C6.20084 17.5668 6.31216 17.7316 6.45214 17.8702C6.59213 18.0088 6.75804 18.1184 6.9404 18.1929C7.12277 18.2674 7.31802 18.3052 7.515 18.3042C7.91283 18.3042 8.29436 18.1462 8.57566 17.8649C8.85697 17.5836 9.015 17.202 9.015 16.8042C9.015 16.4064 8.85697 16.0248 8.57566 15.7435C8.29436 15.4622 7.91283 15.3042 7.515 15.3042ZM16.5 15.3042H13.5C13.1022 15.3042 12.7206 15.4622 12.4393 15.7435C12.158 16.0248 12 16.4064 12 16.8042C12 17.202 12.158 17.5836 12.4393 17.8649C12.7206 18.1462 13.1022 18.3042 13.5 18.3042H16.5C16.8978 18.3042 17.2794 18.1462 17.5607 17.8649C17.842 17.5836 18 17.202 18 16.8042C18 16.4064 17.842 16.0248 17.5607 15.7435C17.2794 15.4622 16.8978 15.3042 16.5 15.3042ZM24 0.304199C25.5913 0.304199 27.1174 0.93634 28.2426 2.06156C29.3679 3.18678 30 4.7129 30 6.3042H0C0 4.7129 0.632141 3.18678 1.75736 2.06156C2.88258 0.93634 4.4087 0.304199 6 0.304199H24Z" fill="white" />
                    </svg> Cartão de Crédito
                </Link>

                <Link href={`https://seguro.impulsionegram.com.br/checkout?aero-add-to-checkout=${productPackage.payment_id}&ig_username=${user}&utm_source=blog&utm_medium=menu&utm_campaign=google-search`} className="text-2xl font-bold text-white py-5 bg-[#5A11AF] flex items-center gap-2 rounded-full justify-center"
                    style={{
                        pointerEvents: checked && user ? 'all' : 'none',
                        opacity: checked && user ? 1 : 0.5
                    }}
                >
                    <svg width="38" height="29" viewBox="0 0 38 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.2591 0.304199H33.2478L30.1841 0.333045L7.81151 0.304199H7.79753L4.58609 0.333045C2.47339 0.337415 0.818726 2.05851 0.818726 4.25512V24.383C0.818726 26.5814 2.47951 28.3042 4.59483 28.3042H4.60794L7.81676 28.2754L30.1867 28.3042H30.2015L33.267 28.2754C34.3056 28.2723 35.3006 27.8579 36.0342 27.1228C36.7679 26.3877 37.1803 25.3918 37.1812 24.3533V4.22628C37.1801 3.18643 36.7665 2.18951 36.0312 1.45423C35.2959 0.718946 34.299 0.305356 33.2591 0.304199ZM9.21007 19.884C9.21007 20.2549 9.06272 20.6107 8.80044 20.8729C8.53816 21.1352 8.18244 21.2826 7.81151 21.2826C7.44059 21.2826 7.08487 21.1352 6.82259 20.8729C6.5603 20.6107 6.41296 20.2549 6.41296 19.884V8.69555C6.41296 8.32463 6.5603 7.9689 6.82259 7.70662C7.08487 7.44434 7.44059 7.29699 7.81151 7.29699C8.18244 7.29699 8.53816 7.44434 8.80044 7.70662C9.06272 7.9689 9.21007 8.32463 9.21007 8.69555V19.884ZM14.8043 22.6811C14.8043 23.052 14.657 23.4078 14.3947 23.6701C14.1324 23.9323 13.7767 24.0797 13.4057 24.0797C13.0348 24.0797 12.6791 23.9323 12.4168 23.6701C12.1545 23.4078 12.0072 23.052 12.0072 22.6811V5.89843C12.0072 5.52751 12.1545 5.17178 12.4168 4.9095C12.6791 4.64722 13.0348 4.49987 13.4057 4.49987C13.7767 4.49987 14.1324 4.64722 14.3947 4.9095C14.657 5.17178 14.8043 5.52751 14.8043 5.89843V22.6811ZM20.3985 21.2826C20.3985 21.6535 20.2512 22.0092 19.9889 22.2715C19.7266 22.5338 19.3709 22.6811 19 22.6811C18.6291 22.6811 18.2733 22.5338 18.011 22.2715C17.7488 22.0092 17.6014 21.6535 17.6014 21.2826V7.29699C17.6014 6.92607 17.7488 6.57034 18.011 6.30806C18.2733 6.04578 18.6291 5.89843 19 5.89843C19.3709 5.89843 19.7266 6.04578 19.9889 6.30806C20.2512 6.57034 20.3985 6.92607 20.3985 7.29699V21.2826ZM25.9928 22.6811C25.9928 23.052 25.8454 23.4078 25.5831 23.6701C25.3209 23.9323 24.9651 24.0797 24.5942 24.0797C24.2233 24.0797 23.8676 23.9323 23.6053 23.6701C23.343 23.4078 23.1957 23.052 23.1957 22.6811V5.89843C23.1957 5.52751 23.343 5.17178 23.6053 4.9095C23.8676 4.64722 24.2233 4.49987 24.5942 4.49987C24.9651 4.49987 25.3209 4.64722 25.5831 4.9095C25.8454 5.17178 25.9928 5.52751 25.9928 5.89843V22.6811ZM31.587 19.884C31.587 20.2549 31.4396 20.6107 31.1774 20.8729C30.9151 21.1352 30.5594 21.2826 30.1884 21.2826C29.8175 21.2826 29.4618 21.1352 29.1995 20.8729C28.9372 20.6107 28.7899 20.2549 28.7899 19.884V8.69555C28.7899 8.32463 28.9372 7.9689 29.1995 7.70662C29.4618 7.44434 29.8175 7.29699 30.1884 7.29699C30.5594 7.29699 30.9151 7.44434 31.1774 7.70662C31.4396 7.9689 31.587 8.32463 31.587 8.69555V19.884Z" fill="white" />
                    </svg> Boleto
                </Link>

                <div className="overflow-auto max-h-[171px] p-5 text-white flex flex-col gap-2 bg-[#CBADE4] rounded-sm">
                    <p>Termo de Responsabilidade e Uso Ético do Serviço</p>
                    <p>Prezado Usuário, seja muito bem-vindo ao ImpulsioneGram!</p>
                    <p>Antes de prosseguir com a contratação de nossos serviços, é crucial que você leia e compreenda o seguinte Termo de Responsabilidade e Uso Ético do Serviço, elaborado em conformidade com o Código de Defesa do Consumidor (Lei nº 8.078/1990), o Marco Civil da Internet (Lei nº 12.965/2014) e a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Ao contratar nossos serviços, você concorda com os termos aqui estabelecidos.</p>
                    <p>Termos e Condições</p>
                    <p>1. Finalidade Lícita: O cliente concorda em utilizar os serviços fornecidos por nossa empresa exclusivamente para fins lícitos e não comerciais, conforme estabelecido pelo artigo 5º, inciso II da Constituição Federal e artigo 37 do Código de Defesa do Consumidor.</p>
                    <p>2. Proibição de Fraude: O cliente se compromete a não utilizar os serviços para engajar em atividades fraudulentas, enganosas ou qualquer outra forma de comportamento inautêntico, em conformidade com o artigo 67 do Código de Defesa do Consumidor.</p>
                    <p>3. Conformidade com as Leis: O cliente deve assegurar que o uso dos serviços está em conformidade com todas as leis e regulamentos aplicáveis, incluindo, mas não se limitando ao Código de Defesa do Consumidor e às diretrizes do Conselho Nacional de Autorregulação Publicitária (CONAR).</p>
                    <p>4. Proteção de Dados: O cliente concorda que qualquer dado pessoal fornecido está em conformidade com a Lei Geral de Proteção de Dados (LGPD), e que a empresa pode processar esses dados para fins de prestação de serviços.</p>
                    <p>5. Isenção de Responsabilidade: A empresa não será responsável por qualquer uso indevido dos serviços que resulte em ações legais, perdas ou danos. O cliente assume total responsabilidade pelo uso dos serviços contratados, conforme artigo 14 do Marco Civil da Internet.</p>
                    <p>6. Indenização: O cliente concorda em indenizar e isentar a empresa de qualquer responsabilidade decorrente do uso indevido dos serviços, incluindo qualquer violação deste Termo de Responsabilidade, em conformidade com o artigo 927 do Código Civil.</p>
                    <p>Ao clicar em &quot;Aceito&quot;, você confirma que leu, entendeu e concorda com os termos e condições acima descritos, fundamentados nas leis aplicáveis. O não cumprimento destes termos pode resultar na rescisão imediata dos serviços e em ações legais.</p>
                    <p>Este Termo de Responsabilidade é uma medida proativa para assegurar que nossos serviços sejam utilizados de forma ética e legal. Agradecemos por sua compreensão e cooperação.</p>
                    <p>Caso você tenha alguma dúvida ou necessite de esclarecimentos adicionais, por favor, entre em contato conosco.</p>
                    <p>Este termo foi elaborado para proteger ambas as partes e garantir um uso ético e responsável dos nossos serviços. Certifique-se de ler e entender completamente antes de prosseguir.</p>
                </div>
            </DialogContent>
        </Dialog>
    );
}