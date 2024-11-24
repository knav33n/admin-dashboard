import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import InputWithLabel from "../../components/InputWithLabel";
import Button from "../../components/Button";

const EditProfile = () => {
    const [userDetails, setUserDetails] = useState({
        name: "Charlene Reed",
        username: "charlene",
        email: "charlenereed@gmail.com",
        password: "987987987",
        dateOfBirth: "25 January 1990",
        presentAddress: "San Jose, California, USA",
        permanentAddress: "San Jose, California, USA",
        city: "San Jose",
        postalCode: "45962",
        country: "USA",
    });
    const { name, username, email, password, dateOfBirth, presentAddress, permanentAddress, city, postalCode, country } = userDetails;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="flex md:flex-row flex-col gap-8 items-center md:items-start">
            <div className="mb-8 relative w-32 mt-3 md:mt-0">
                <img
                    src="https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TVOtMm8iXreO6hUmcrhrjjFLZQ3qCNa0K9scyh95epsKOOEIw1Mnb-9ShGMvgUoNI7wQu1SqMcTeMTfdtC4ckNdzMNO8nSfHyUY2Hosjf78bmICouEr3W5PiYc094VxOR-s~nn0QAEFXrrsuQC0MGMrthiZBPzx3CTP74EtLxwfnXT2WAH-tyCweL5F3Rj9jtJCSuJ3yJl0l5sFmUiYxE4F9E5n60uy1F6j7EMyd65SWS60HUvke6dThWL-1MDF6cho6-~KgFrqW6hc-tkQF6oxjtsFh3ZaYMk4h0WthmF0qXivjB~H2hbhJs-lgq6XN4c6QakRHYThUWJAOWkJ7Lg__"
                    alt="Profile"
                    className="w-[90px] h-[90px] rounded-full object-cover"
                />
                <button className="absolute top-[57px] left-[67px] p-2 bg-black rounded-full text-white">
                    <FiEdit2 className="w-4 h-4" />
                </button>
            </div>
            <div className="w-full">
                <div className="flex md:flex-row flex-col justify-between items-center mb-4 gap-8">
                    <InputWithLabel
                        label="Your Name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                    <InputWithLabel
                        label="Username"
                        name="username"
                        value={username}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex md:flex-row flex-col justify-between items-center mb-4 gap-8">
                    <InputWithLabel
                        label="Email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        type="email"
                    />
                    <InputWithLabel
                        label="Password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        type="password"
                    />
                </div>
                <div className="flex md:flex-row flex-col justify-between items-center mb-4 gap-8">
                    <InputWithLabel
                        label="Date of Birth"
                        name="dateOfBirth"
                        value={dateOfBirth}
                        onChange={handleChange}
                    />
                    <InputWithLabel
                        label="Present Address"
                        name="presentAddress"
                        value={presentAddress}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex md:flex-row flex-col justify-between items-center mb-4 gap-8">
                    <InputWithLabel
                        label="Permanent Address"
                        name="permanentAddress"
                        value={permanentAddress}
                        onChange={handleChange}
                    />
                    <InputWithLabel
                        label="City"
                        name="city"
                        value={city}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex md:flex-row flex-col justify-between items-center mb-4 gap-8">
                    <InputWithLabel
                        label="Postal Code"
                        name="postalCode"
                        value={postalCode}
                        onChange={handleChange}
                    />
                    <InputWithLabel
                        label="Country"
                        name="country"
                        value={country}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-8 flex md:justify-end">
                    <Button label="Save" onClick={() => { }} className="w-full md:w-auto" />
                </div>
            </div>
        </div>
    )
}
export default EditProfile