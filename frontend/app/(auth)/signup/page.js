"use client";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import React, { useState, useEffect } from "react";
import { Eye, EyeOff, ArrowLeft, Check, X, AlertCircle } from "lucide-react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useJapaStore } from "@/app/store/store";

// Custom input component with animations and better styling
const InputField = ({
  label,
  type = "text",
  placeholder,
  register,
  name,
  errors,
  required = false,
  pattern,
  validationMessage,
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
            pattern,
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
      {validationMessage && !isInvalid && (
        <p className="text-xs text-slate-500 mt-1 leading-snug">{validationMessage}</p>
      )}
    </div>
  );
};

// Password strength indicator
const PasswordStrength = ({ password = '' }) => {
  const getStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 8) strength += 1;
    if (pass.match(/[a-z]+/)) strength += 1;
    if (pass.match(/[A-Z]+/)) strength += 1;
    if (pass.match(/[0-9]+/)) strength += 1;
    if (pass.match(/[!@#$%^&*(),.?":{}|<>]+/)) strength += 1;
    return Math.min(Math.floor((strength / 5) * 100), 100);
  };

  const strength = getStrength(password);
  const strengthText = 
    strength < 20 ? 'Very weak' :
    strength < 40 ? 'Weak' :
    strength < 60 ? 'Fair' :
    strength < 80 ? 'Good' : 'Strong';
  
  const strengthColor = 
    strength < 20 ? 'bg-red-400' :
    strength < 40 ? 'bg-orange-400' :
    strength < 60 ? 'bg-yellow-400' :
    strength < 80 ? 'bg-blue-500' : 'bg-green-500';

  return (
    <div className="w-full mt-1">
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <motion.div 
          className={`h-full ${strengthColor} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${strength}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
      {password.length > 0 && (
        <p className="text-xs text-slate-500 mt-1.5">
          Password strength: <span className="font-medium">{strengthText}</span>
        </p>
      )}
    </div>
  );
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      fName: '',
      lName: '',
      email: '',
      phoneNumber: '',
      password: '',
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formError, setFormError] = useState('');
  
  const password = watch('password', '');
  const signUpUser = useJapaStore((state) => state.register);
  const router = useRouter();

  const onSubmit = async (data) => {
    if (!agreedToTerms) {
      setFormError('Please accept the terms and conditions');
      return;
    }

    try {
      const userData = {
        first_name: data.fName,
        last_name: data.lName,
        phone_number: data.phoneNumber,
        email: data.email,
        pass_word: data.password,
      };

      await signUpUser(userData);
      router.push('/login?registered=true');
    } catch (error) {
      console.error('Signup error:', error);
      setFormError(error.message || 'An error occurred during signup. Please try again.');
    }
  };

  // Password requirements checklist
  const passwordRequirements = [
    { id: 'length', text: 'At least 8 characters', validate: (pwd) => pwd.length >= 8 },
    { id: 'uppercase', text: 'One uppercase letter', validate: (pwd) => /[A-Z]/.test(pwd) },
    { id: 'lowercase', text: 'One lowercase letter', validate: (pwd) => /[a-z]/.test(pwd) },
    { id: 'number', text: 'One number', validate: (pwd) => /[0-9]/.test(pwd) },
    { id: 'special', text: 'One special character', validate: (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd) },
  ];

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
            <h1 className="text-2xl font-bold text-slate-900">Create your account</h1>
            <p className="text-slate-500 text-sm">Start your journey with Japa Talent</p>
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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <InputField
                  label="First name"
                  name="fName"
                  placeholder="John"
                  register={register}
                  errors={errors}
                  required
                />
              </div>
              <div>
                <InputField
                  label="Last name"
                  name="lName"
                  placeholder="Doe"
                  register={register}
                  errors={errors}
                  required
                />
              </div>
            </div>

            <div>
              <InputField
                label="Email address"
                name="email"
                type="email"
                placeholder="you@example.com"
                register={register}
                errors={errors}
                required
                pattern={{
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address',
                }}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-slate-700 text-sm font-medium block">
                Phone number <span className="text-red-500">*</span>
              </label>
              <Controller
                name="phoneNumber"
                control={control}
                rules={{ 
                  required: 'Phone number is required',
                  validate: (value) => value?.length > 5 || 'Please enter a valid phone number'
                }}
                render={({ field }) => (
                  <div className={`border rounded-lg overflow-hidden ${
                    errors.phoneNumber ? 'border-red-500' : 'border-gray-200'
                  }`}>
                    <PhoneInput
                      country={'ng'}
                      value={field.value}
                      onChange={field.onChange}
                      inputClass="w-full h-12 px-4 text-sm focus:outline-none"
                      containerClass="w-full"
                      inputStyle={{
                        width: '100%',
                        border: 'none',
                        borderRadius: '0.5rem',
                      }}
                      buttonStyle={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderRight: '1px solid #e5e7eb',
                        borderRadius: '0.5rem 0 0 0.5rem',
                      }}
                      dropdownStyle={{
                        zIndex: 9999,
                      }}
                    />
                  </div>
                )}
              />
              {errors.phoneNumber && (
                <motion.p 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs flex items-center gap-1 mt-0.5"
                >
                  <AlertCircle size={14} className="flex-shrink-0" />
                  {errors.phoneNumber.message}
                </motion.p>
              )}
            </div>

            <div className="space-y-1.5">
              <InputField
                label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                register={register}
                errors={errors}
                required
                showPasswordToggle={true}
                onTogglePassword={() => setShowPassword(!showPassword)}
              />
              
              {password && (
                <div className="space-y-2 mt-2">
                  <PasswordStrength password={password} />
                  <div className="space-y-1.5 text-xs text-slate-500">
                    {passwordRequirements.map((req) => {
                      const isValid = req.validate(password);
                      return (
                        <div key={req.id} className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                            isValid ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                          }`}>
                            {isValid ? (
                              <Check size={10} strokeWidth={3} />
                            ) : (
                              <X size={10} strokeWidth={3} />
                            )}
                          </div>
                          <span className={isValid ? 'text-gray-700' : 'text-gray-400'}>{req.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-start space-x-3 pt-1">
              <div className="flex items-center h-5 mt-0.5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/50 focus:ring-2 focus:ring-offset-1"
                />
              </div>
              <label htmlFor="terms" className="text-sm text-slate-600 leading-snug">
                I agree to the{' '}
                <Link
                  href="/terms"
                  className="font-medium text-primary hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  href="/privacy"
                  className="font-medium text-primary hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting || !agreedToTerms}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
                isSubmitting || !agreedToTerms
                  ? 'bg-slate-300 cursor-not-allowed'
                  : 'bg-primary hover:bg-primary/90 shadow-sm hover:shadow-md active:shadow-sm'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Creating account...</span>
                </div>
              ) : (
                <span className="font-semibold">Create account</span>
              )}
            </motion.button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100 text-center text-sm text-slate-600">
            <p>
              Already have an account?{' '}
              <Link
                href="/login"
                className="font-medium text-primary hover:underline hover:text-primary/90 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
