import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Programs = lazy(() => import("./pages/programs"));
const GetInvolved = lazy(() => import("./pages/get-involved"));
const Donate = lazy(() => import("./pages/donate"));
const Events = lazy(() => import("./pages/events"));
const Blog = lazy(() => import("./pages/blog"));
const Contact = lazy(() => import("./pages/contact"));
const Gallery = lazy(() => import("./pages/gallery"));
const FAQs = lazy(() => import("./pages/faqs"));

const TermsAndConditions = lazy(() => import("./pages/terms-and-conditions"));
const PrivacyPolicy = lazy(() => import("./pages/privacy-policy"));
const DonationPolicy = lazy(() => import("./pages/donation-policy"));


function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="w-8 h-8 border-4 border-[#071125] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
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

          <Route path="/terms-and-conditions" element={<TermsAndConditions />}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
          <Route path="/donation-policy" element={<DonationPolicy />}/>
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
