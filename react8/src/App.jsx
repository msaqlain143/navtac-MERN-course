import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";
import { useUser } from "./useContext/UseContext"; // 👈 Import the hook

function App() {
  const { user } = useUser(); // 👈 Access user from context

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* 👇 User Info Displayed in App.jsx */}

      {/* Main content with sidebar */}
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-4">
          <div className="bg-yellow-100 text-black text-center p-4">
            <p className="text-lg font-medium">
              Logged in as: <span className="text-blue-700">{user.name}</span> (
              {user.age} years old)
            </p>
          </div>
          <h2 className="text-2xl font-bold">Main Content Area</h2>
          <p>Here goes the content for your page.</p>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
