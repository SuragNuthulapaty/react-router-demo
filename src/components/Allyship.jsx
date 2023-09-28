import React from 'react'
import junk_price_img from "../images/compare_price_img.jpeg"
import food_stamps from "../images/food_stamps.png"
import food_desert from "../images/food_desert.jpeg"
import single_moms from "../images/single_mothers.jpeg"

export function Allyship() {
    return (
        <div className='w-100 alig-items-center p-5 pt-2'>
            <h1 className='display-2 font-weight-bold'>Allyship</h1>

            <hr />

            <div className='flex d-flex p-1'>
                <div className='col m-2 rounded p-3' style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <h2 className='display-5 fs-1'>What is Allyship?</h2>
                    <ul className='text-md fs-5'>
                        <li>
                            Allyship is when someone of a majority group claims or acts in a manner that is meant to support those of marginalized groups.
                        </li>
                        <li>
                            Being an "ally" can be both a self imposed or given title.
                        </li>
                        <li>
                            Generally speaking, those who self impose their ally title are less likely to engage in actual change compared to those who are given the title.
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
                    <h2 className='display-5 fs-1'>"Allies":</h2>
                    <ul className='text-md fs-5'>
                        <li>
                            Many people who call themselves allies really are not.
                        </li>
                        <li>
                            These people argue that since they once acted in a manner that was an ally, say marching with Dr. Martn Luther King Jr. in Washington, they get the right to call themselves an ally, even without doing anything.
                        </li>
                        <li>
                            Many self-proclaimed allies actually revert back to acting in a manner that is not an ally in any way.
                        </li>
                        <li>
                            People who consider themselves allies often end up hurting the cause rather than helping it.
                        </li>
                    </ul>
                </div>
                <div className='flex d-flex flex-col col m-2 align-items-center justify-content-center'>
                    <img src={food_stamps} style={{height:'200px',width:'300px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} alt={"SNAP logo"}/>
                </div>
            </div>

            <hr/>

            <div className='flex d-flex p-1'>
                <div className='col m-2 rounded p-3' style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                    <h2 className='display-5 fs-1'>What is a true ally?</h2>
                    <ul className='text-md fs-5'>
                        <li>
                            A true ally will be an ally without begging for the recognition.
                        </li>
                        <li>
                            They will understand the privilage they have due to certain characteristics of themself.
                        </li>
                        <li>
                            A true ally will not use past actions to justify any of their current actions.
                        </li>
                        <li>
                            They will always strive to be better for the marginalized groups they are attempting to help.
                        </li>
                        <li>
                            Allies do not speak for the marginalized groups, they provide them a platform to speak through.
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
                    <h2 className='display-5 fs-1'>How can you be an ally?</h2>
                    <ul className='text-md fs-5'>
                        <li>
                            Seek out those asking for help or a platform, don't just barge in.
                        </li>
                        <li>
                            Listen to what is needed, don't just act upon what you think the change should be.
                        </li>
                        <li>
                            Remember that you do not share the same experiences they do, and their views may be different from yous.
                        </li>
                        <li>
                            Understand what privilige you may have and how that can impace your views compared to theirs.
                        </li>
                        <li>
                            Be open to learning and helpign in any way that is needed.
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