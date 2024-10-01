"use client"

import { useState } from "react";

export default function GreetingForm() {
    const [name, setName] = useState("");
    const [tempName, setTempName] = useState("");

    const submitFunction = (event) => {
        event.preventDefault();
        setName(tempName);
    }

    function handleChange(e) {
        setTempName(e.target.value);
    }

    return (
        <div>
            {!name && (
                <form onSubmit={submitFunction}>
                    <label>What's your name?
                        <input type="text" value={tempName} onChange={handleChange}/>
                    </label>
                    <input type="submit" />
                </form>
            )}

            {name && (
                <h1>Welcome { name }</h1>
            )}
        </div>
    );
}