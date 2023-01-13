import React from 'react'
import {useState} from 'react'


const Shop: React.FC<{
}>
 = () => {

    const [tab, setTab] = useState<"tab1" | "tab2" | "tab3">("tab1")


    const Tab1 = () => {
        setTab("tab1")
    }
    
    const Tab2 = () => {
        setTab("tab2")
    }

    const Tab3 = () => {
        setTab("tab3")
    }

    return(
        <div className= "bg-white w-full">
            <button className = "bg-blue-500"
                onClick = {Tab1}
            >
                Bar Upgrades

            </button>
            <button className = "bg-blue-500"
                onClick = {Tab2}>
                Clicker Upgrades
            </button>
            <button className = "bg-blue-500"
                onClick = {Tab3}>
                Rocket Upgrades
            </button>

            <div>
                {tab == "tab1" && <div>
                    <p>hello</p></div>}
            </div>
            <div>
                {tab == "tab2" && <div>
                    <p>NO</p></div>}
            </div>
            <div>
                {tab == "tab3" && <div>
                    <p>beep boop bap</p></div>}
            </div>
        </div>
    );
}

export default Shop