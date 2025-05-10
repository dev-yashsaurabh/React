import { useState } from "react";
import Button from "../shared/Button";

function BgChanger() {
    const [color, setColor] = useState('blue');
    return (
        <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}}>
            <div className="absolute flex justify-center flex-wrap inset-x-0 bottom-12">
                <div className="flex justify-center flex-wrap rounded-full px-4 py-2 bg-white gap-3">
                    <Button onClick={() => setColor("red")} bgColor="red" />
                    <Button onClick={() => setColor("green")} bgColor="green" />
                    <Button onClick={() => setColor("yellow")} bgColor="yellow" />
                    <Button onClick={() => setColor("blue")} bgColor="blue" />
                </div>
            </div>
        </div>
    )
}

export default BgChanger;