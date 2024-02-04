import React from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Titulo, CategoryArea, CategoryList, ProductArea, ProductList, ProductPaginationArea, ProductPaginationItem } from './styled';
import Header from '../../components/Header';
import api from '../../api';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem/Index';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';
let searchTimer = null;
 const HomeScreen = () => {
    const history = useNavigate();
    const [headerSearch, setHeaderSearch] = React.useState('');
    const [categories, setCategories] = React.useState([]);

    const [activeCategory, setActiveCategory] = React.useState(0);
    const [products, setProducts] = React.useState([]);

    const [totalPages, setTotalPages] = React.useState(0);
    const [activePage, setActivePage] = React.useState(1);
const [activeSearch, setActiveSearch] = React.useState('');
const [loading, setLoading] = React.useState(false);
const [modalStatus, setModalStatus] = React.useState(false);
const [modalData, setModalData] = React.useState({});

    React.useEffect(()=>{
        const getCategories = async () => {
            const cat = await api.getCategories();
            console.log(`🚀 ~ getCategories ~ cat:`, cat);
            if (cat.error === '') {
                setCategories(cat.result);

            }
           // ReactTooltip.rebuild();
        }
        getCategories();
    }, []);

    const getProducts = async () => {
        setLoading(true); // Inicia o loading

        const prods = await api.getProducts(activeCategory, activePage, activeSearch);
        console.log(`🚀 ~ getProducts ~ prods:`, prods);
        if (prods.error === '') {
            setProducts(prods.result.data);
            setTotalPages(prods.result.pages);
            setActivePage(prods.result.page);
            setLoading(false); // Finaliza o loading


        }
    }
    React.useEffect(()=>{
        clearTimeout(searchTimer);
    searchTimer = setTimeout(()=>{
        if (headerSearch !== '') {
            console.log(`🚀 ~ headerSearch`, headerSearch);

            setActiveSearch(headerSearch);

        }
         }
    , 2000);

    }, [headerSearch])//chama para acaaddaa dependencia


    React.useEffect(()=>{
        setProducts([]);
        getProducts();
    }, [activeCategory, activePage, activeSearch])//chama para acaaddaa dependencia



    const handleButtonClick = () => {
        history.push('/tela2/testador');
    }

    const handleProductClick = (data) => {
        setModalData(data);
        setModalStatus(true);
    }

    return (
        <Container>
        <Header
        search={headerSearch}
        onSearch={setHeaderSearch}

        />
        {categories.length > 0 &&

        <CategoryArea>
            <CategoryList>
            <CategoryItem

             data={{id:0,
                name:'Todas as categorias',
                image:'/assets/food-and-restaurant.png'
            }}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}

             />
            {categories.map((item, index)=>(
                <CategoryItem
                key={index}
                data={item}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                />
            ))}
            </CategoryList>
            </CategoryArea>



        }

{loading ? (
    <div>Loading...</div>
) : (
    products.length > 0 && (
        <ProductArea>
            <ProductList>
                {products.map((item, index)=>(
                    <ProductItem
                    key={index}
                    data={item}
                    onClick={handleProductClick}

                    />
                ))}
            </ProductList>
        </ProductArea>
    )
)}



        {totalPages > 0 &&
        <ProductPaginationArea>
                {[...Array(totalPages).keys()].map((item, index)=>(
                    <ProductPaginationItem
                    key={index}
                    $active={activePage}
                    onClick={()=>setActivePage(item+1)}
                    >
                        {item+1}
                    </ProductPaginationItem>
                ))}

           <div>Página {activePage} de {totalPages}</div>
        </ProductPaginationArea>
        }

<Modal
    status={modalStatus}
    setStatus={setModalStatus}
    modalData={modalData}
    renderProduct={(data) => (
        <ModalProduct
            data={data}
            setStatus={setModalStatus}
        />
    )}
/>


         </Container>
    );
}

export default HomeScreen;