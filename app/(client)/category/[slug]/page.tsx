import Container from '@/components/container'
import React from 'react'
import { Slug } from '../../../../sanity.types';
import { getAllCategories } from '@/sanity/helpers/queries';
import Title from '@/components/Title';
import CategoryProducts from '@/components/CategoryProducts';

const CategoryPage = async({params}:{params:Promise<{slug:string}>}) => {
const {slug} = await params;
const categories = await getAllCategories();
    return (
    <Container className='py-10'>
      <Title className='text-xl text-golddark'>
        Products by Category
      </Title>
      <CategoryProducts categories={categories} slug={slug} />
      </Container>
  )
}

export default CategoryPage
