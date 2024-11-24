import Slider from "react-slick";
import User from "./User";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const CustomPrevArrow = ({ onClick, className }) => (
    <button className={`w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center ml-2 hover:bg-gray-100 shadow-custom ${className}`} onClick={onClick}>
        <BsChevronLeft className="w-5 h-5 text-gray-400" />
    </button>
);

const CustomNextArrow = ({ onClick, className }) => (
    <button className={`w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center ml-2 md:hover:bg-gray-100 shadow-custom ${className}`} onClick={onClick}>
        <BsChevronRight className="w-5 h-5" color="#718EBF" />
    </button>
);


const UsersCarousel = () => {
    const users = [
        {
            id: "6854",
            img: "https://s3-alpha-sig.figma.com/img/a0bd/5a15/758288ff5165913073569be101d5c4fb?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VOQP8QOpfP4KSr55WuVIeGmPpXnn4moex-5TT95JqUs0z-WyfgpQMCZer3KPNuOJOwq-jjC3qOYOUcNM14B-hA6xR-v9329jwrdMu0YFQ37~SF8w03Dj5FZW~J36XPbgQhgUM9ErHO0SCn7VjoYe9nBpUUg6ea-HEj654IYV1Nc~bcsp-gsDIlza4jvIasIxVIFXoJGxFD~uRehMPX0N7wjwjWFCc8ng5IolxaNnieBw0ABWA3vClolou0SayMMYFERd1xZwQIhhx5I3evjhjrw6AROkTE7Itutez~hX8OpQV8n7prGTYHN1bweuVzVVV1ZI50n5TMa6wSzawspMnA__",
            name: "Livia Bator",
            title: "CEO"
        },
        {
            id: "6887",
            img: "https://s3-alpha-sig.figma.com/img/4596/79f6/c0c1f4c69f7c2368440bfc85e940b511?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OGxVVa5vDQyF4MF03u-mNwb1BGrtFo7Fabanxdei3Abe4idV6Keq8woS3NEs9z8Hn8BIteU6nmD~BCp1LFX-R6hpqesy3bC2GqTerW~zhi~AbldVOBcN4tkMlNxl4nhc09g8ksQU8lTpJLsrkfmdyN9ENdc6ofyjq3FjAnxBfjjIl~~GH8SptIPN8ppwUp1TPBhh3hEbaEXLeL~m1DwMI8K-1XEr8Z89cz20FlLYi-tQ78BH8uBPVTEK38tVZLY9sqQb6lfaP-NLIzLRrNdfNTBKt9TTN2R7vlqNVh39zTmZe93E2~Z9rWCqAQYkBgPqbCMkj-O5zt2mMmC6w~IUiA__",
            name: "Randy Press",
            title: "Director"
        },
        {
            id: "1254",
            img: "https://s3-alpha-sig.figma.com/img/4ca5/afed/9b9f6f81c5acfb0ab11904a63a50981e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N3ErfIAPkZgMGBMhlpHFZ1VwzgbjcGFKCEzOydk3~3BaGpGujvPXRs33sShy29YNiT~ZDLqSpTH139lDnGwJgDdrxmnt7JUzrxuRinrFoPtWqBJz1qiZy2XvdAQmpreoovZYZac9LEuM80EDq8wS7aMohmZMU1U2Wu57Ehc1ouYthLoakF-bih~L-wWxS6CxeRjPBSX4zQkl-KMSJuTSkYeKxjIEmIWSOR6uKIMOj~tlKBqnNNMNK320NlkKMMOhVjKaGBnOMEe8GpY2ijBwkbT20Y1iAWrfBSGS~MJRbQaXLf2CQMdNGW-EyR5ojLzY4StAarldB1tCI9jiNw-yyA__",
            name: "Workman",
            title: "Designer"
        },
        {
            id: "6754",
            img: "https://s3-alpha-sig.figma.com/img/0727/540c/433df02fba013e4fd8c4ed33e379a35d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P1QwE1npOH7xsFhVwwxy6mvoRNT~pRBNC-G3U5uwiW8x~gs5tmcve58waZCrDLmrPg0W2raXHRxXjSz87i-6ED0IZjD~f8jQZ5q5SbUzKufmTfbVhHQQeHv7LGc8MwSu8n2514i-F1obnYBzq6tNb8gy8eSG3~lvIEjwtMQG0~i~3L8x14GjLWSaL7hpIs3bXD06lNIHDVElxRiEP79v~2UmdtRqq0yrukzyDTNVNvR6YI9nLIdofqDiDu6dblL~V4QmHGocAsMCNhZiGZFxpbzxmnONdH-BEkDFIgFaSL2H3Ueof6P0g2uFzgkbx6AtD3w2YotJlQAbbiNlM8kfmA__",
            name: "Workman",
            title: "Designer"
        },
        {
            id: "6664",
            img: "https://s3-alpha-sig.figma.com/img/882c/195c/edaa259e661ce86f92325689f563a01d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aCNwYONWKZoEE4Y4VPd6YJxyJr2a1iK1s6BqM7Vs1w4FVNiE8vjv0qjjiIN3HlDHuBjKMMmp7NxmtMQWFPG90p~-8Zc-UOrHJjYGfTRc34nGoii1sJ51x74xgJlxfhoog20SPOdWvbaJspSR3Bp6jlK1MdbtZWY7ai4LSo9cjn~ikexO4msZBb5pn-dFJkEgYiq2LqvZzBRwPRG2FIF106IZSqmM-O6YnR92V~TJpTFbmr4HSajEjjl3A0SAyRvTpoRG6-ey2F-WudxtN4U-c5gL~uLlk05ha7qnSFcdQfpxsNufK0qm15ftWnrwfk-VplianckhbsjTkqNGIjcXZw__",
            name: "Workman",
            title: "Designer"
        },
    ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className="w-[300px] md:w-[500px]">
            <Slider {...settings}>
                {users.map(user => <User key={user.id} data={user} isActive={user.id === "6854"} />)}
            </Slider>
        </div>
    )
}
export default UsersCarousel