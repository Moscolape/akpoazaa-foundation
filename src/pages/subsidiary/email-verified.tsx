import PageWrapper from "../../components/pageWrapper";

const ScholarshipSuccess = () => (
  <PageWrapper>
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">
          🎉 Congratulations!
        </h2>
        <p>Your email has been verified successfully.</p>
        <a
          href="/"
          className="mt-4 inline-block bg-blue-900 text-white px-4 py-2 rounded-md"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  </PageWrapper>
);

export default ScholarshipSuccess;
