import React from 'react'
import junk_price_img from "../images/compare_price_img.jpeg"
import food_stamps from "../images/food_stamps.png"
import food_desert from "../images/food_desert.jpeg"
import single_moms from "../images/single_mothers.jpeg"

export function FoodScarcity() {
    return (
        <div className='w-100 alig-items-center p-5 pt-2'>
            <h1 className='display-2 font-weight-bold'>Food scarcity</h1>

            <hr />

            <div className='flex d-flex p-1'>
                <div className='col m-2 rounded p-3' style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <h2 className='display-5 fs-1'>Facts about food:</h2>
                    <ul className='text-md fs-5'>
                        <li>
                            It is an integral part of our lives, needed for daily function and survival.
                        </li>
                        <li>
                            No matter who we are or what we do, we need food to live.
                        </li>
                        <li>
                            Good food and affordable food are not the same thing in the united states, in fact precisely the opposite. Junk food is very cheap and healthy food is more expensive.
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
                    <h2 className='display-5 fs-1'>Problems with food:</h2>
                    <ul className='text-md fs-5'>
                        <li>
                            Food is not treated as a need for everybody, it is being "gatekept".
                        </li>
                        <li>
                            People do not have the desire to contribute to programs that help protect everyones access to food.
                        </li>
                        <li>
                            There is heavy stigma against people who use food aiding products, like food stamps, to gain access to much needed food.
                        </li>
                        <li>
                            Food deserts cheap food, are not being addressed.
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
                    <h2 className='display-5 fs-1'>Food Deserts:</h2>
                    <ul className='text-md fs-5'>
                        <li>
                            Food deserts are vast areas of space without easy access to cheap, healthy food.
                        </li>
                        <li>
                            In addition, many people in food deserts do not have access to cars or transportation other than unreliable public transit.
                        </li>
                        <li>
                            Because many residents in food deserts rely on public transportation, they take few visits and get lots of food each time. This means they buy lots of non-perishables which are generally less healthy.
                        </li>
                        <li>
                            This forces residents in those areas to have to either spend hours going to get food, or settle with the junk food they can get.
                        </li>
                        <li>
                            People who live in food deserts are disproportionally those of marginilized races, and thus disproportionally impacted by them.
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
                    <h2 className='display-5 fs-1'>Why Is This A Feminist Issue?</h2>
                    <ul className='text-md fs-5'>
                        <li>
                            Those in food deserts generally do not have the means to escape them.
                        </li>
                        <li>
                            They are also a disproportionante amount of women, especially marginilized single mothers, in food deserts.
                        </li>
                        <li>
                            This means lack of access to food, among other things, affect women far more than men.
                        </li>
                        <li>
                            Single mothers also have provide for both themselves and their kids, pushigng them down into the hole of poverty more.
                        </li>
                        <li>
                            All this really means there is no feasible way for a woman living in food scarcity to move out of that state.
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