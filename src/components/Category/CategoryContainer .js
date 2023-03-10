import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './../Category/CategoryCard';
import clothe from "../../images/clothe.png";
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
const CategoryContainer = () => {
    return (
        <Container >
        <div className="admin-content-text mt-2 ">كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-between'>
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
                <CategoryCard title=" أزياء" img={cat2} background="#F4DBA4" />
                <CategoryCard title=" الصحة والجمال" img={labtop} background="#0034FF" />
                <CategoryCard title=" منتجات  الاطفال" img={sale} background="#F4DBA4" />
                <CategoryCard title=" موبايلات" img={clothe} background="#FF6262" />
                <CategoryCard title=" المنزل والمكتب" img={pic} background="#F4DBA4" />
                <CategoryCard title=" الكترونيات" img={clothe} background="#F4DBA4" />
                <CategoryCard title=" الكمبيوتر" img={cat2} background="#F4DBA4" />
                <CategoryCard title=" مستلزمات رياضية" img={labtop} background="#0034FF" />
                <CategoryCard title=" العاب" img={sale} background="#F4DBA4" />
                <CategoryCard title=" مستلزمات السيارات" img={clothe} background="#FF6262" />
                <CategoryCard title=" مستحضرات تجميل" img={pic} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={cat2} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={labtop} background="#0034FF" />
                <CategoryCard title="اجهزة منزلية" img={sale} background="#F4DBA4" />
                <CategoryCard title="اجهزة منزلية" img={clothe} background="#FF6262" />
                <CategoryCard title="اجهزة منزلية" img={pic} background="#F4DBA4" />
            </Row>
        </Container>
    )
}

export default CategoryContainer