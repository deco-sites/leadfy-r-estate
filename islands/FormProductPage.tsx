import { useSignal } from "@preact/signals";
import { normalizePhoneNumberUS } from "../sdk/mask.ts";

export interface Props {
    storeId?: string;
}

const FormProductPage = ({ storeId }: Props) => {

    const name = useSignal("");
    const phone = useSignal("");
    const email = useSignal("");
    const message = useSignal("");
    const buttonText = useSignal("Get in Touch");
    const buttonDisabled = useSignal(false);

    function clearFields() {
        name.value = "";
        phone.value = "";
        email.value = ""
        message.value = "";
    }

    function saveLead() {

        if (phone.value.length < 14) {
            alert("Enter a valid phone number");
            return null
        }
        
        buttonText.value = "Sending...";
        const data = {
            "records": [
                {
                    "fields": {
                        "Name": name.value,
                        "Email": email.value,
                        "Phone": phone.value,
                        "Property": window?.location?.href,
                        "Message": message.value,
                        "Created": new Date().toISOString().split('T')[0]
                    },
                },
            ],
        };

        const options = {
            "method": "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        fetch(`/api/airtable?idLoja=${storeId}`, options)
            .then((response) => {
                if (response.status == 200) {
                    buttonText.value = "Sent!";
                    buttonDisabled.value = true;
                    clearFields();
                }
                setTimeout(() => {
                    buttonText.value = "Get in Touch";
                    buttonDisabled.value = false;
                }, 2000);
            })
    }

    return (
        <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
            <form
                action=""
                onSubmit={(e) => {
                    saveLead();
                    e.preventDefault();
                }}>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-3 border border-gray-300 rounded"
                        value={name.value}
                        required
                        onChange={(e) => {
                            e.preventDefault()
                            name.value = (e.target as HTMLInputElement).value;
                        }}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded"
                        value={email.value}
                        required
                        onChange={(e) => {
                            e.preventDefault()
                            email.value = (e.target as HTMLInputElement).value;
                        }}
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full p-3 border border-gray-300 rounded"
                        value={phone.value}
                        required
                        onChange={(e) => {
                            e.preventDefault()
                            phone.value = normalizePhoneNumberUS((e.target as HTMLInputElement).value);
                        }}
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-3 border border-gray-300 rounded h-24"
                        value={message.value}
                        onChange={(e) => {
                            e.preventDefault()
                            message.value = (e.target as HTMLInputElement).value;
                        }}
                    ></textarea>

                    {/* <div className="flex items-end">
                        <input type="checkbox" className="mt-1 mr-2" />
                        <p className="text-xs text-gray-600">
                            lorem ipsum dolor sit amet consectur
                        </p>
                    </div> */}

                    <button
                        type="submit"
                        className="w-full bg-[#ff3f3f] text-white hover:bg-[#9d3636] px-8 py-3"
                        disabled={buttonDisabled.value}
                    >
                        {buttonText.value}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormProductPage;