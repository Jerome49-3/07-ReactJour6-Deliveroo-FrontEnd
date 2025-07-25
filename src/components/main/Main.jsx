/* eslint-disable react-hooks/exhaustive-deps */
import Title from "../title/Title";
import Image from "../../components/images/Image";
import Quantity from "../counter/Quantity";
import Price from "../price/Price";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { v4 as uuidv4 } from 'uuid';
import handleAddCaddy from "../../assets/lib/handleClick/handleAddCaddy";
import axios from "axios";

const Main = ({ data, panier, setPanier, faStar }) => {
  // console.log("%cdata in Main:", "color: yellow", data);
  //convention de nommage pour le panier:
  // const [cart, setCart] = useState([]);
  console.log("%cPanier in Main:", "color: yellow", panier);

  //je crée un nouveau tableau de panier
  return (
    <main>
      <section className="wrapperMain">
        <div className="left">
          <div className="boxPlats">
            {data?.categories.map((category, index) => {
              // console.log("category:", category);
              const nameCategory = category.name;
              // console.log("nameCategory:", nameCategory);
              // console.log('data?.categories?.meals?.length:', repas?.meals?.length);
              if (category?.meals?.length !== 0) {
                return (
                  <>
                    <div key={index}>
                      <Title title={category.name} classTxt="titleCateg" />
                    </div>
                    <div className="boxCards">
                      {category.meals.map((menus, key = menus.id) => {
                        // console.log("%cmenus:", "color: orange", menus);
                        return (
                          <>
                            <article
                              key={key}
                              className="card"
                              onClick={(e) =>
                                handleAddCaddy(
                                  e,
                                  axios,
                                  panier,
                                  nameCategory,
                                  menus,
                                  setPanier
                                )
                              }
                            >
                              {/* {console.log('panier after on click:', panier)} */}
                              <div className="left">
                                <Title
                                  title={menus.title}
                                  classTxt="titleCard"
                                />
                                <p></p>
                                <div className="footerCard">
                                  <p>{menus.description}</p>
                                  <div className="footerCardBottom">
                                    <p>{menus.price} €</p>
                                    {menus.popular === true ? (
                                      <FontAwesomeIcon icon={faStar} />
                                    ) : (
                                      <p></p>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="right">
                                {menus.picture ? (
                                  <Image src={menus.picture} />
                                ) : (
                                  <div></div>
                                )}
                              </div>
                            </article>
                          </>
                        );
                      })}
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>
        <aside>
          <article className="panier">
            <h3>Valider mon panier</h3>
            <div className="shoppingContainer">
              {panier?.length > 0 && (
                <div className="boxTitles">
                  <span>Quantity</span>
                  <span>Plats</span>
                  <span>Price</span>
                </div>
              )}
              {panier?.length !== 0 ? (
                <>
                  {panier?.map((elPanier, key = elPanier.id) => {
                    // console.log("elPanier:", elPanier);

                    const elPanierId = elPanier?.idMeal;
                    const elPanierQuantity = elPanier?.quantity;
                    // {
                    //   console.log(
                    //     "elPanier in aside:",
                    //     "\n",
                    //     elPanier.id,
                    //     "\n",
                    //     "elPanier in aside:",
                    //     elPanier.title,
                    //     "\n",
                    //     "elPanier in aside:",
                    //     elPanier.price,
                    //     "\n",
                    //     "elPanier in aside:",
                    //     elPanier.quantity
                    //   );
                    // }
                    return (
                      <div key={key} className="shoppingCard">
                        {/* <div>{repas.id}</div> */}
                        <span>
                          {" "}
                          <Quantity
                            elPanierId={elPanierId}
                            elPanierQuantity={elPanierQuantity}
                          />
                        </span>
                        <span>{elPanier?.title}</span>
                        <Price elPanier={elPanier} />
                      </div>
                    );
                  })}
                </>
              ) : (
                <div>Le panier est vide</div>
              )}
            </div>
          </article>
        </aside>
      </section>
    </main>
  );
};

export default Main;
