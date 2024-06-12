import Title from '../title/Title';
import Image from '../../components/images/Image';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Main = ({ data }) => {
  const [panier, setPanier] = useState([]);
  console.log('panier', panier);
  //je crée un nouveau tableau de panier                         
  const [quantity, setQuantity] = useState(0);
  return (
    <>
      <main>
        <section className='wrapperMain'>
          <div className='left'>
            <div className="boxPlats">
              {data?.categories.map((repas, index) => {
                // console.log('data?.categories?.meals?.length:', repas?.meals?.length);
                if (repas?.meals?.length !== 0) {
                  return (
                    <>
                      <div key={index}>
                        <Title title={repas.name} classTxt='titleCateg' />
                      </div>
                      <div className="boxCards">
                        {repas.meals.map((menus, key = menus.id) => {
                          // console.log('menus:', menus);
                          return (
                            <>
                              <article key={key} className='card' onClick={() => {
                                //au clic, je defini la nouvelle valeur de panier en faisant un push des objects menus
                                // console.log('menus on click:', menus);
                                const newPanier = { id: menus.id, title: menus.title, price: menus.price };
                                const panierClone = [...panier]
                                console.log('newPanier:', newPanier);
                                panierClone.push(newPanier)
                                setPanier(panierClone)
                              }}>
                                {/* {console.log('panier after on click:', panier)} */}
                                <div className="left">
                                  <Title title={menus.title} classTxt="titleCard" />
                                  <p></p>
                                  <div className="footerCard">
                                    <p>{menus.description}</p>
                                    <div className='footerCardBottom'>
                                      <p>{menus.price} €</p>
                                      {menus.popular === true ? <p>star</p> : <p></p>}
                                    </div>
                                  </div>
                                </div>
                                <div className="right">
                                  {menus.picture ? <Image src={menus.picture} /> : <div></div>}
                                </div>
                              </article>
                            </>
                          )
                        })}
                      </div>
                    </>
                  )
                }
              })}
            </div>
          </div>
          <aside>
            <article className='panier'>
              <h3>Valider mon panier</h3>
              <div className='shoppingContainer'>
                {/* {console.log('panier on aside', panier)} */}
                {console.log('repas.id in aside:', '\n', panier.id, '\n', 'repas.title in aside:', panier.title, '\n', 'repas.price in aside:', panier.price)}
                {panier.map((repas, key = uuidv4()) => {
                  // { console.log('panier on aside', panier) }
                  { console.log('repas.id in aside:', '\n', repas.id, '\n', 'repas.title in aside:', repas.title, '\n', 'repas.price in aside:', repas.price) }
                  return (
                    <div key={key} className='shoppingCard'>
                      <div>{repas.id}</div>
                      <div>{repas.title}</div>
                      <div>{repas.price}</div>
                    </div>
                  )
                })}
              </div>
            </article>
          </aside>
        </section>
      </main >
    </>
  )
}

export default Main

{/* {console.log('panier on aside', panier)} */ }
{/* {panier.map((repas, index) => {
                  {
                    panier.length !== 0 ? <div>
                    // {console.log('panier on aside', panier)}
                    // console.log('repas in aside:', repas);
                      <div className='boxPanier' key={index} >
                        <div>{repas.id}</div>
                        <div>{repas.title}</div>
                        <div>{repas.price}</div>
                      </div>
                  //   </div> : <p>votre panier est vide</p>
                  }
                })} */}