import React from 'react'

const MenuCard = ({ menuData }) => {
    console.log(menuData);
    return (
        <>
            <section className='main-card--cointainer'>
                {menuData.map((curElem) => {
                    //    isko destructurinmg bolte hai ye shortcut hai hume hr jagah curElem nhi likhna pdega ye likh do o0r hr jagah se curElem hata do same work krenge dono                       const |{id ,name,category, image, description} = curElem;
                    return (
                        <>

                            <div className="card-container" key={curElem.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{curElem.id}</span>
                                        <span className="card-author subtle" >{curElem.name}</span>
                                        <h2 className='card-title'>{curElem.name}</h2>
                                        <span className="card-description subtle">
                                            {curElem.description}

                                        </span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={curElem.image}
                                        alt="images" className='card-media' />
                                    <span className='card-tag subtle' >Order Now</span>

                                </div>

                            </div>

                        </>
                    )
                })}
            </section>

        </>


    )
}

export default MenuCard


