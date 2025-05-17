import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./pages/main/home"));
const About = lazy(() => import("./pages/main/about"));
const Programs = lazy(() => import("./pages/main/programs"));
const GetInvolved = lazy(() => import("./pages/main/get-involved"));
const Donate = lazy(() => import("./pages/main/donate"));
const Events = lazy(() => import("./pages/main/events"));
const Blog = lazy(() => import("./pages/main/blog"));
const Contact = lazy(() => import("./pages/main/contact"));
const Gallery = lazy(() => import("./pages/main/gallery"));
const FAQs = lazy(() => import("./pages/main/faqs"));

const TermsAndConditions = lazy(
  () => import("./pages/subsidiary/terms-and-conditions")
);
const PrivacyPolicy = lazy(() => import("./pages/subsidiary/privacy-policy"));
const DonationPolicy = lazy(() => import("./pages/subsidiary/donation-policy"));

const EducationalSupport = lazy(
  () => import("./pages/subsidiary/educational-support")
);
const CommunityOutreach = lazy(
  () => import("./pages/subsidiary/community-outreach")
);

const Volunteer = lazy(() => import("./pages/subsidiary/volunteer"));
const PartnerWithUs = lazy(() => import("./pages/subsidiary/partner"));
const HostEvent = lazy(() => import("./pages/subsidiary/host-event"));

const ScholarshipApplication = lazy(
  () => import("./pages/subsidiary/scholarship-application")
);

const VerifyEmail = lazy(() => import("./pages/subsidiary/verify-email"));
const EmailVerified = lazy(() => import("./pages/subsidiary/email-verified"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="w-8 h-8 border-4 border-[#be202f] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/frequently-asked-questions" element={<FAQs />} />
          <Route path="/get-involved" element={<GetInvolved />} />

          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/donation-policy" element={<DonationPolicy />} />

          <Route
            path="/programs/educational-support"
            element={<EducationalSupport />}
          />
          <Route
            path="/programs/community-outreach"
            element={<CommunityOutreach />}
          />

          <Route path="/get-involved/volunteer" element={<Volunteer />} />
          <Route path="/get-involved/partner" element={<PartnerWithUs />} />
          <Route path="/get-involved/host-event" element={<HostEvent />} />

          <Route
            path="/programs/educational-support/akpoazaa-foundation-scholarship-beneficiary-registration-form"
            element={<ScholarshipApplication />}
          />

          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/scholarship-success" element={<EmailVerified />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
