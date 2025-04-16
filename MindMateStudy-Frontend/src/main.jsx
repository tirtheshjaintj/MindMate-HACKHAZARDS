import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Analysis from "./components/Analysis.jsx";
import Playground from "./components/Playground.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import AllTherapists from "./pages/allTherapists/AllTherapists.jsx";
import TherapyProfile from "./pages/allTherapists/TherapyProfile.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import SideBar from "./components/SideBar.jsx";
import ChatBot from "./components/Chatbot/ChatBot.jsx";
import VideoCallComponent from "./pages/VideoCall/VideoCallComponent.jsx";
import Appointment from "./pages/appointments/Appointment.jsx";
import { Provider } from "react-redux";
import NotFound from "./pages/NotFound.jsx"; // import the component
import store from "../store/store";
import AllCommunity from "./pages/community/AllCommunity.jsx";
import CreateCommunity from "./pages/community/CreateCommunity.jsx";
import CommunityDashboard from "./pages/community/CommunityDashboard.jsx";
import { ChatProvider } from "./context/ChatProvider.jsx";
import { SocketProvider } from "./context/SocketProvider.jsx";
import MockInterview from './components/MockInterview/MockInterview.jsx';
import ProtectedRouteComponent from './ProtectedComponent.jsx';
import Quiz from './pages/Quiz.jsx';
import Category from './pages/Category.jsx';
import Result from './pages/Result.jsx';
import QuizAnalysis from './pages/QuizAnalysis.jsx';
import Prepare from './pages/Prepares.jsx';
import CommunityVideoCall from "./pages/VideoCall/VideoCallComponent.jsx";
import Summarizer from './pages/Summarizer.jsx';
import NotesPage from './pages/Notes.jsx';
import InterviewReports from './components/MockInterview/InterviewAnalysis.jsx';
import MainDashboard from "./pages/MainDashboard.jsx";
import VerifyOtp from "./pages/auth/VerifyOTP.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/verify-otp", element: <VerifyOtp /> },

      // Protected Routes
      {
        element: <ProtectedRouteComponent />,
        children: [
          {
            element: <SideBar />,
            children: [
              // Chat & Tools
              { path: "/chat", element: <ChatBot /> },
              { path: "/analysis", element: <Analysis /> },
              { path: "/playground", element: <Playground /> },
              { path: "/summarizer", element: <Summarizer /> },

              // Quiz & Preparation
              { path: "/quiz", element: <Category /> },
              { path: "/quiz/:category_id", element: <Quiz /> },
              { path: "/result/:result_id", element: <Result /> },
              { path: "/results", element: <QuizAnalysis /> },
              { path: "/prepare/:category_id", element: <Prepare /> },

              // Interview & Notes
              { path: "/mockInterview", element: <MockInterview /> },
              { path: "/interview-analysis", element: <InterviewReports /> },
              { path: "/notes", element: <NotesPage /> },

              // Dashboard
              { path: "/dashboard", element: <MainDashboard /> },

              // Therapists & Mentors
              { path: "/therapists", element: <AllTherapists /> },
              { path: "/therapist/:id", element: <TherapyProfile /> },
              { path: "/mentors", element: <AllTherapists /> },
              { path: "/mentor/:id", element: <TherapyProfile /> },

              // Video Calls
              { path: "/vc/:roomID", element: <VideoCallComponent /> },
              { path: "/vc/therapist/:roomID", element: <VideoCallComponent /> },
              { path: "/vc/mentor/:roomID", element: <VideoCallComponent /> },

              // Appointments
              { path: "/appointments", element: <Appointment /> },

              // Community
              { path: "/community", element: <AllCommunity /> },
              { path: "/community/dashboard", element: <CommunityDashboard /> },
              { path: "/community/new", element: <CreateCommunity /> },
              { path: "/community/vc/:roomID", element: <CommunityVideoCall /> },

            ],
          },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>
    <Provider store={store}>
      <SocketProvider>
        <ChatProvider>
          <RouterProvider router={router} />
        </ChatProvider>
      </SocketProvider>
    </Provider>
  </GoogleOAuthProvider>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((err) => {
        console.log("Service Worker registration failed:", err);
      });
  });
}
