import React from 'react'
import {useState} from 'react'
import { Item } from '../utils/types'

type Props = {
    item : Item
};

const Shop: React.FC<Props> = ({
    item : {name, texture, itemCost, itemDescription}
}) => {


    const item = {}
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
                    <p>Go to Rocket Section</p>
                    </div>}
            <div>
                {tab == "tab2" && <div>
                    <p>NO</p></div>}
            </div>
            <div>
            {tab == "tab3" && 
                    <><img
                        style={{
                            imageRendering: "pixelated",
                        }}
                        className={"w-[100px] h-[100px]"}
                        src={`assets/drinks/moojito_1.png`}
                    >
                    </img><p>Item Name: {name}  Item Cost: {itemCost} Item Description: {itemDescription}</p></>
                }
            </div>
        </div>
    </div>
    );
}

export default Shop
