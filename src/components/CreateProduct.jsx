import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import { createProduct } from '../services/product-services';
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

export default function CreateProduct() {
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      price: +event.target.price.value,
      category: event.target.category.value,
      description: event.target.description.value,
      picture_url: event.target.picture.value,
    }
    const product = await createProduct(data);
    product && navigate('/');
  }

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <H2>Create Product</H2>
        <Container>
          <P>Name</P>
          <Input
            type="text"
            id="name"
            name="name"
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
            placeholder=""
            label=""
          />
        </Container>

        <Container>
          <P>Description</P>
          <Textarea
            id="description"
            name="description"
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
            placeholder=""
            label=""
          />
        </Container>
        <Button style={{ position: 'absolute', bottom: 12 }} type="submit">Create</Button>
      </Form>
    </Div>
  );
}