import Container from '@/components/container';
import React from 'react'

const TermsPage = () => {
  return (
    <Container className="max-w-3xl sm:px-6 lg:px-8 py-12 text-golddark">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <div className="space-y-4 text-golddark/50">
        <section>
          <h2 className="text-xl font-semibold mb-2 text-golddark">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Stiparf&apos;s services, you agree to be bound
            by these Terms and Conditions.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2 text-golddark">2. Use of Services</h2>
          <p>
            You agree to use Stiparf&apos;s services only for lawful purposes and
            in accordance with these Terms and Conditions.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2 text-golddark">
            3. Intellectual Property
          </h2>
          <p>
            All content and materials available on Stiparf&apos;s services are the
            property of Stiparf and are protected by applicable intellectual
            property laws.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2 text-golddark">
            4. Limitation of Liability
          </h2>
          <p>
            Stiparf shall not be liable for any indirect, incidental, special,
            consequential or punitive damages resulting from your use of our
            services.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2 text-golddark">5. Governing Law</h2>
          <p>
            These Terms and Conditions shall be governed by and construed in
            accordance with the laws of the jurisdiction in which Stiparf
            operates.
          </p>
        </section>
      </div>
    </Container>
  )
}

export default TermsPage;