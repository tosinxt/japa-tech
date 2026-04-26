import { useEffect, useState } from "react";
import japaLogo from "../assets/JAPALOGO.png";
import { Eye, EyeOff, ArrowLeft, Mail, Lock, Shield, CheckCircle } from "lucide-react";
import { FourSquare } from "react-loading-indicators";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [loginState, setLoginState] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMasked, setIsMasked] = useState(true);
  const [logged, setLogged] = useState("");
  const [loading, setLoading] = useState(false);

  const [resetEmail, setResetEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (logged === "yes") {
      window.location.href = "/admin";
    }
  }, [logged]);

  const login_call = async (email, password) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://server.japatalent.com/japa/v1/admin/login",
        { email, password }
      );
      if (data.message !== "Invalid details") {
        sessionStorage.setItem("tokken", JSON.stringify(data.message));
        sessionStorage.setItem("details", JSON.stringify(data.user_data));
        setLogged("yes");
      } else {
        toast.error("Please check your credentials");
      }
    } catch (ex) {
      console.error(ex);
    } finally {
      setLoading(false);
    }
  };

  const handle_login = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      login_call(email, password);
    } else {
      toast.error("Enter both email and password");
    }
  };

  const LeftPanel = () => (
    <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center h-screen w-1/2 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-36 -translate-y-36"></div>
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-24"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-white/5 rounded-full translate-y-32"></div>
      
      <div className="relative z-10 text-center px-12">
        <div className="mb-8">
          <img src={japaLogo} alt="Japa Logo" className="h-16 mx-auto mb-8" />
        </div>
        <h1 className="text-white font-bold text-5xl mb-6 leading-tight">
          Welcome to <br />
          <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Japa Admin
          </span>
        </h1>
        <p className="text-purple-100 text-lg font-medium leading-relaxed">
          Manage your talent platform with ease. <br />
          Unlock opportunities and drive global success.
        </p>
        
        {/* Feature highlights */}
        <div className="mt-12 space-y-4">
          <div className="flex items-center justify-center gap-3 text-purple-100">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm">Secure Admin Dashboard</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-purple-100">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm">Real-time Analytics</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-purple-100">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm">Global Talent Management</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderRightPanel = () => {
    switch (loginState) {
      case 1:
        return (
          <div className="flex items-center justify-center h-screen w-1/2 bg-gray-50">
            <div className="w-full max-w-md px-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
                  <p className="text-gray-600">Sign in to your admin account</p>
                </div>

                <form onSubmit={handle_login} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        type={isMasked ? "password" : "text"}
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        onClick={() => setIsMasked(!isMasked)}
                      >
                        {isMasked ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <FourSquare color="#fff" size="small" />
                        <span className="ml-2">Signing in...</span>
                      </div>
                    ) : (
                      "Sign In"
                    )}
                  </button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setLoginState(2)}
                      className="text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors"
                    >
                      Forgot your password?
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex items-center justify-center h-screen w-1/2 bg-gray-50">
            <div className="w-full max-w-md px-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <button
                  onClick={() => setLoginState(1)}
                  className="flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to login
                </button>
                
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset Password</h1>
                  <p className="text-gray-600">Enter your email and we'll send you a verification code</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
                        type="email"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setLoginState(3)}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Send Reset Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex items-center justify-center h-screen w-1/2 bg-gray-50">
            <div className="w-full max-w-md px-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <button
                  onClick={() => setLoginState(2)}
                  className="flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </button>
                
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Enter Verification Code</h1>
                  <p className="text-gray-600">
                    We sent a 6-digit code to <br />
                    <span className="font-medium text-purple-600">{resetEmail}</span>
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Verification Code
                    </label>
                    <input
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      type="text"
                      className="w-full py-4 px-4 text-center text-2xl font-mono border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 tracking-widest"
                      placeholder="000000"
                      maxLength="6"
                    />
                  </div>

                  <button
                    onClick={() => setLoginState(4)}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Verify Code
                  </button>

                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Didn't receive the code?{" "}
                      <button className="text-purple-600 hover:text-purple-700 font-medium">
                        Resend
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex items-center justify-center h-screen w-1/2 bg-gray-50">
            <div className="w-full max-w-md px-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <button
                  onClick={() => setLoginState(3)}
                  className="flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </button>
                
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl mb-4">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Password</h1>
                  <p className="text-gray-600">Choose a strong password for your account</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        type="password"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter new password"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm New Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Password Requirements:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        At least 8 characters long
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        Contains uppercase and lowercase letters
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        Contains at least one number
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => setLoginState(1)}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Update Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-row">
      <LeftPanel />
      {renderRightPanel()}
    </div>
  );
};

export default Login;
