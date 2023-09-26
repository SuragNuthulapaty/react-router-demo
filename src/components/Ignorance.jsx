import React from 'react'
import junk_price_img from "../images/compare_price_img.jpeg"
import food_stamps from "../images/food_stamps.png"
import food_desert from "../images/food_desert.jpeg"
import single_moms from "../images/single_mothers.jpeg"

export function Ignorance() {
    return (
        <div className='w-100 alig-items-center p-5 pt-2'>
            <h1 className='display-2 font-weight-bold'>Mainstream Ignorance</h1>

            <hr />

            <div className='flex d-flex p-1'>
                <div className='col m-2 rounded p-3' style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <h2 className='display-5 fs-1'>What is Ignorance?</h2>
                    <ul className='text-md fs-5'>
                         <li>
                            Mariam-Webster defines ignorance as "the state or fact of being ignorant : lack of knowledge, education, or awareness"
                         </li>
                         <li>
                            In the case of feminism, this means not considering problems that impact all women, just problems that impact the few that have power, generally white women
                         </li>
                         <li>
                            Essentially, ignorance in feminism leads to the illusion of change, instead of true change for a vast majority of women
                         </li>
                    </ul>
                </div>
                <div className='flex d-flex col m-2 align-items-center justify-content-center'>
                    <img src={junk_price_img} style={{height:'200px',width:'200px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} alt={"junk vs healthy prices"}/>
                </div>
            </div>

            <hr/>

            <div className='flex d-flex p-1'>
                <div className='col m-2 rounded p-3' style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <h2 className='display-5 fs-1'>Who benefits from Ignorance:</h2>
                    <ul className='text-md fs-5'>
                        <li>
                            Despite ignorance being generally considered a bad thing, the way it is implemented in mainstream feminism lends itself to benefit a certain few.
                        </li>
                        <li>
                            These few are the people already in power, both men and women
                        </li>
                        <li>
                            Generally, white women, those who are more priviliged and have more of a platform, settle for solutions that only benefit them, see examples below
                        </li>
                        <li>
                            The result of this is that change for everyone does not manifest, and the changes that are made are slight at best
                        </li>
                        <li>
                            This means actual change does not happen, maintaining the status quo, and putting down those who need help.
                        </li>
                    </ul>
                </div>
                <div className='flex d-flex col m-2 align-items-center justify-content-center'>
                    <img src={food_desert} style={{height:'300px',width:'400px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} alt={"food desert pic"}/>
                </div>
            </div>

            <hr/>

            <div className='flex d-flex p-1'>
                <div className='col m-2 rounded p-3' style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <h2 className='display-5 fs-1'>Examples:</h2>
                    <ul className='text-md fs-5'>
                        <li>
                            Society talks about black children as being more matured compared to other kids. This leads to people fetishizing them and seeing young children as adults in looks and maturity. This leads to a disproportionate amount of pressure on black girls and how they want to look. As this happens to a lesser extent with white girls, the only mainstream solution is victim blaming 
                        </li>
                        <li>
                            Similarly, black women are thought of as more fierce, leading them to be thought of as less innocent when considering possible crimes or illegal activies. This is something generally ignored by mainstream feminism
                        </li>
                        <li>
                            Food access is a large point, but only in the sense of access within markets. There has been little to no talk about reducing the prevelance of food deserts which disproportionately impact marginalized people
                        </li>
                    </ul>
                </div>
                <div className='flex d-flex col m-2 align-items-center justify-content-center'>
                    <img src={food_stamps} style={{height:'200px',width:'300px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} alt={"SNAP logo"}/>
                </div>
            </div>

            <hr/>

            <div className='flex d-flex p-1'>
                <div className='col m-2 rounded p-3' style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <h2 className='display-5 fs-1'>Solutions:</h2>
                    <ul className='text-md fs-5'>
                        <li>
                            For current women leaders in power: make sure you act in a manner that reaches and helps everyone, not just yourself
                        </li>
                        <li>
                            For others with power: ensure you aren't just listening to dominant groups, make sure to take ideas from marginilized people
                        </li>
                        <li>
                            For those without power: make sure you champion and bolster all women, not just those of majority groups
                        </li>
                        <li>
                            Overall: be open to change happening!
                        </li>
                    </ul>
                </div>
                <div className='flex d-flex col m-2 align-items-center justify-content-center'>
                    <img src={single_moms} style={{height:'300px',width:'300px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} alt={"single moms graph"}/>
                </div>
            </div>

            <hr/>

        </div>
    )
}