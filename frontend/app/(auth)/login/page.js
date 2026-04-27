"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useJapaStore } from "@/app/store/store";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, EyeOff, Check, AlertCircle } from "lucide-react";

// Custom input field component
const InputField = ({
  label,
  type = "text",
  placeholder,
  register,
  name,
  errors,
  required = false,
  showPasswordToggle = false,
  onTogglePassword,
}) => {
  const isInvalid = errors && errors[name];
  
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-slate-700 text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, {
            required: required ? `${label} is required` : false,
          })}
          className={`w-full h-10 px-3.5 py-2 text-sm border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
            isInvalid
              ? 'border-red-300 focus:border-red-300 focus:ring-red-100'
              : 'border-slate-200 focus:border-primary focus:ring-primary/20'
          }`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label={type === 'password' ? 'Show password' : 'Hide password'}
          >
            {type === 'password' ? <Eye size={16} /> : <EyeOff size={16} />}
          </button>
        )}
      </div>
      {isInvalid && (
        <motion.p 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-xs flex items-start gap-1.5 mt-1"
        >
          <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
          <span className="leading-snug">{errors[name].message}</span>
        </motion.p>
      )}
    </div>
  );
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formError, setFormError] = useState('');
  
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const loginUser = useJapaStore((state) => state.login);
  const router = useRouter();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit = async (data) => {
    try {
      const success = await loginUser(data);
      if (success) {
        router.push("/jobs");
      }
    } catch (error) {
      setFormError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 sm:p-6">
      <motion.div 
        className="w-full max-w-md bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 text-center border-b border-slate-100">
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center">
              <Image 
                src="/logo2.svg" 
                alt="Japa Talent" 
                width={160}
                height={42}
                className="h-10 w-auto"
                priority
              />
            </div>
          </Link>
          <div className="mt-6 space-y-1">
            <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>
            <p className="text-slate-500 text-sm">Sign in to your account</p>
          </div>
        </div>

        <div className="p-6 sm:p-8 pt-6">
          {formError && (
            <motion.div 
              className="mb-5 p-3 bg-red-50 text-red-600 text-sm rounded-lg flex items-start gap-2 border border-red-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
              <span className="leading-snug">{formError}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <InputField
              label="Email address"
              name="email"
              type="email"
              placeholder="you@example.com"
              register={register}
              errors={errors}
              required
            />

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-slate-700 text-sm font-medium">
                  Password <span className="text-red-500">*</span>
                </label>
                <Link 
                  href="/resetEmail" 
                  className="text-xs text-primary hover:underline hover:text-primary/90 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <InputField
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                register={register}
                errors={errors}
                required
                showPasswordToggle={true}
                onTogglePassword={togglePasswordVisibility}
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/50 focus:ring-2 focus:ring-offset-1"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700">
                  Remember me
                </label>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
                isSubmitting
                  ? 'bg-slate-300 cursor-not-allowed'
                  : 'bg-primary hover:bg-primary/90 shadow-sm hover:shadow-md active:shadow-sm'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Signing in...</span>
                </div>
              ) : (
                <span className="font-semibold">Sign in</span>
              )}
            </motion.button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100 text-center text-sm text-slate-600">
            <p>
              Don&apos;t have an account?{' '}
              <Link
                href="/signup"
                className="font-medium text-primary hover:underline hover:text-primary/90 transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
