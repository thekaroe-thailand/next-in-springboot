'use client';

import { useState } from "react";

export default function DropdownList() {
    const [foodList, setFoodList] = useState([
        { name: 'apple' },
        { name: 'mango' },
        { name: 'banana' },
        { name: 'coconut' }
    ]);
    const [food, setFood] = useState('apple');

    return (
        <>
            <select onChange={(e) => setFood(e.target.value)}>
                {foodList.map((item) => (
                    <option value={item.name} key={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>

            <div>Food Selected: {food}</div>
        </>
    )
}