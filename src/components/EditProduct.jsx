import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import { useFoodData } from '../context/Food-Context';
import { updateProduct } from '../services/product-services';
import { useNavigate } from 'react-router-dom';

const H2 = styled.h2`
  padding-top: 40px;
  margin:0px
`

const Div = styled.div`
  width: 414px;
  height: 100vh;
  border-radius: 20px;
  background: #F6F6F9;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`
const P = styled.p`
  margin:1px;
  margin-top: 35px;
  color: #B8B8BB;
  font-size: 14px;
  font-weight: 600;
  display: flex;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
`

const Input = styled.input`
  border  : none;
  background : none;
  border-bottom: 1px solid #333333;
  color: black;
  font-weight: 400;
  font-size: 18px;
  width:314px
`

const Container = styled.div``

const Textarea = styled.textarea`
  border  : none;
  background : none;
  border-bottom: 1px solid #333333;
  color: black;
  font-weight: 400;
  width:314px
  font-size: 18px;
  width: 316px;
  height: 28px;
`

export default function EditProduct() {
  const navigate = useNavigate();
  const { singleFood, setSingleFood } = useFoodData();

  function handleChange(event) {
    setSingleFood({ ...singleFood, [event.target.name]: event.target.value });
  };

  async function handleSubmit() {
    const product = updateProduct(singleFood.id, singleFood);
    product && navigate("/");
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <H2>Edit Product</H2>
        <Container>
          <P>Name</P>
          <Input
            type="text"
            id="name"
            name="name"
            value={singleFood.name}
            onChange={handleChange}
            placeholder=""
            label=""
          />
        </Container>

        <Container>
          <P>Price</P>
          <Input
            type="number"
            id="price"
            name="price"
            value={singleFood.price}
            onChange={handleChange}
            placeholder=""
            label=""
          />
        </Container>

        <Container>
          <P>Description</P>
          <Textarea

            id="description"
            name="description"
            value={singleFood.description}
            onChange={handleChange}
            placeholder=""
            label=""
          />
        </Container>
        <Container>
          <P>Category</P>
          <Input
            type="text"
            id="category"
            name="category"
            value={singleFood.category}
            onChange={handleChange}
            placeholder=""
            label=""
          />
        </Container>

        <Container>
          <P>Picture URL</P>
          <Input
            type="text"
            id="picture"
            name="picture"
            value={singleFood.picture_url}
            onChange={handleChange}
            placeholder=""
            label=""
          />
        </Container>
        <Button style={{ position: 'absolute', bottom: 12 }} type="submit">Save</Button>
      </Form>
    </Div>
  );
}