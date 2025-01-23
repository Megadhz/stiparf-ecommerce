import Container from '@/components/container';
import OurTeam from '@/components/OurTeam';
import React from 'react'

const AboutPage = () => {
  return (
    <Container className="max-w-6xl lg:px-8 py-12 text-golddark">
      <h1 className="text-3xl font-bold mb-6">About Stiparf</h1>
      <p className="mb-4">
      Stiparf is a leading perfume e-commerce company dedicated to providing innovative solutions for modern businesses. Founded in 2024, we have quickly established ourselves as a leader in digital transformation and software development.
      </p>
      <p className="mb-4">
      Our expert team of developers, designers, and strategists work tirelessly to create custom solutions that help our clients streamline their operations, increase efficiency, and drive growth.
      </p>
      <p>
      At Stiparf, we believe in the power of technology to transform business and improve lives. We are committed to remaining at the forefront of technological advancement and delivering exceptional value to our clients.At Stiparf, we believe in the power of technology to transform business and improve lives. We are committed to remaining at the forefront of technological advancement and delivering exceptional value to our clients.
      </p>

      <OurTeam />
    </Container>
  )
}

export default AboutPage;
