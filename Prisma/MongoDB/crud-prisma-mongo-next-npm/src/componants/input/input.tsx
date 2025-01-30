import { inputProps } from "@/types"

const Input = ({ name, type, placeholder, value }: inputProps) => {
    return (
        <div>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                className="block w-full p-4 mx-2 border rounded-lg bg-gray-700"
            />
        </div>
    )
}

export default Input