import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postJobs } from "../../api calls/api";
import { toast } from "react-toastify";
import { 
  ArrowLeft, 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Clock, 
  Building, 
  Users,
  FileText,
  Star,
  Link as LinkIcon,
  Eye,
  TrendingUp
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useNavigate } from "react-router-dom";

const PostNewJob = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [currentStep, setCurrentStep] = useState(1);
  
  // Form state - Updated based on requirements
  const [formData, setFormData] = useState({
    job_title: "",
    job_category: "",
    job_type: "",
    company_name: "",
    what_you_will_be_doing: "",
    about: "",
    location: "",
    city: "",
    what_we_are_lookin_for: "",
    skills: "",
    link: "",
    experience: ""
  });

  const { mutateAsync: postJob, isPending: jobPending } = useMutation({
    mutationFn: postJobs,
    onSuccess: () => {
      queryClient.invalidateQueries(["jobs", "stats"]);
      toast.success(
        <div>
          <p>Job posted successfully!</p>
          <button 
            onClick={() => navigate("/admin/postjob/manage")}
            className="mt-2 text-sm bg-white text-purple-600 px-3 py-1 rounded hover:bg-gray-50"
          >
            View in Manage Jobs →
          </button>
        </div>,
        {
          autoClose: 5000,
          closeOnClick: false
        }
      );
      // Navigate to manage jobs after successful posting
      setTimeout(() => navigate("/admin/postjob/manage"), 2000);
    },
    onError: (error) => {
      toast.error("Failed to post job. Please try again.");
      console.error(error);
    }
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    // Validate required fields
    if (!formData.job_title || !formData.job_type || !formData.company_name) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Ensure location is properly formatted
    const locationString = formData.location && formData.city 
      ? `${formData.location.trim()}, ${formData.city.trim()}`
      : formData.location.trim() || formData.city.trim() || "";

    const data = {
      job_title: formData.job_title.trim(),
      job_type: formData.job_type.trim(),
      company_name: formData.company_name.trim(),
      location: locationString || "Remote",
      // Required fields with correct data types
      min_salary: 0, // Must be numeric
      max_salary: 0, // Must be numeric  
      skills: formData.skills.trim() || "Not specified", // Must be non-empty string
      technology: [], // Must be array
      link: formData.link.trim() || "https://example.com/apply", // Must be non-empty string
      // Optional fields
      ...(formData.job_category.trim() && { category: formData.job_category.trim() }),
      ...(formData.what_you_will_be_doing.trim() && { what_you_will_be_doing: formData.what_you_will_be_doing.trim() }),
      ...(formData.about.trim() && { about: formData.about.trim() }),
      ...(formData.what_we_are_lookin_for.trim() && { what_we_are_lookin_for: formData.what_we_are_lookin_for.trim() }),
      ...(formData.skills.trim() && { ideal_candidate: formData.skills.trim() }),
      ...(formData.experience.trim() && { experience: formData.experience.trim() }),
      salary_range: "", // Optional field
    };

    console.log("Submitting job data:", data); // Debug log

    try {
      await postJob(data);
    } catch (error) {
      console.error("Error posting job:", error);
      
      // Extract specific error messages if available
      if (error.message && error.message.includes("errors")) {
        try {
          const errorMatch = error.message.match(/\{.*\}/);
          if (errorMatch) {
            const errorObj = JSON.parse(errorMatch[0]);
            if (errorObj.errors && Array.isArray(errorObj.errors)) {
              const errorMessages = errorObj.errors.map(err => err.msg || err.message || err).join(", ");
              toast.error(`Validation errors: ${errorMessages}`);
              return;
            }
          }
        } catch (parseError) {
          console.error("Error parsing error message:", parseError);
        }
      }
      
      toast.error("Failed to post job. Please check all fields and try again.");
    }
  };

  const jobTypes = [
    { id: 1, type: "Remote" },
    { id: 2, type: "Full Time" },
    { id: 3, type: "Part Time" },
    { id: 4, type: "Intern" },
    { id: 5, type: "Volunteer" },
    { id: 6, type: "Contract" },
  ];

  const steps = [
    { id: 1, title: "Basic Information", icon: Briefcase },
    { id: 2, title: "Job Details", icon: FileText },
    { id: 3, title: "Preview & Submit", icon: Eye }
  ];

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
            currentStep >= step.id 
              ? 'bg-purple-600 border-purple-600 text-white' 
              : 'border-gray-300 text-gray-400'
          }`}>
            <step.icon className="w-5 h-5" />
          </div>
          <span className={`ml-2 text-sm font-medium ${
            currentStep >= step.id ? 'text-purple-600' : 'text-gray-400'
          }`}>
            {step.title}
          </span>
          {index < steps.length - 1 && (
            <div className={`w-16 h-0.5 mx-4 ${
              currentStep > step.id ? 'bg-purple-600' : 'bg-gray-300'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Briefcase className="w-5 h-5" />
          Basic Job Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="job_title">Job Title *</Label>
            <Input
              id="job_title"
              value={formData.job_title}
              onChange={(e) => handleInputChange("job_title", e.target.value)}
              placeholder="e.g. Senior Frontend Developer"
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="job_category">Job Category *</Label>
            <Input
              id="job_category"
              value={formData.job_category}
              onChange={(e) => handleInputChange("job_category", e.target.value)}
              placeholder="e.g. Software Development"
              className="h-12"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="company_name">Company Name *</Label>
            <Input
              id="company_name"
              value={formData.company_name}
              onChange={(e) => handleInputChange("company_name", e.target.value)}
              placeholder="e.g. Tech Solutions Inc."
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="experience">Experience Required</Label>
            <Input
              id="experience"
              value={formData.experience}
              onChange={(e) => handleInputChange("experience", e.target.value)}
              placeholder="e.g. 3-5 years"
              className="h-12"
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label>Job Type *</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {jobTypes.map((type) => (
              <label key={type.id} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="job_type"
                  value={type.type}
                  checked={formData.job_type === type.type}
                  onChange={(e) => handleInputChange("job_type", e.target.value)}
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="text-sm font-medium text-gray-700">{type.type}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              placeholder="e.g. New York"
              className="h-12"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              placeholder="e.g. Manhattan"
              className="h-12"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderStep2 = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Job Details & Requirements
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="what_you_will_be_doing">What You'll Be Doing *</Label>
            <Textarea
              id="what_you_will_be_doing"
              value={formData.what_you_will_be_doing}
              onChange={(e) => handleInputChange("what_you_will_be_doing", e.target.value)}
              placeholder="Describe the main responsibilities and daily tasks"
              className="min-h-[120px]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="about">About the Job *</Label>
            <Textarea
              id="about"
              value={formData.about}
              onChange={(e) => handleInputChange("about", e.target.value)}
              placeholder="Provide a brief summary of the job and company"
              className="min-h-[120px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="what_we_are_lookin_for">What We're Looking For *</Label>
            <Textarea
              id="what_we_are_lookin_for"
              value={formData.what_we_are_lookin_for}
              onChange={(e) => handleInputChange("what_we_are_lookin_for", e.target.value)}
              placeholder="Key qualifications and requirements"
              className="min-h-[120px]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="skills">Skills *</Label>
            <Textarea
              id="skills"
              value={formData.skills}
              onChange={(e) => handleInputChange("skills", e.target.value)}
              placeholder="Required technical skills and competencies"
              className="min-h-[120px]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="link">Application Link</Label>
          <Input
            id="link"
            value={formData.link}
            onChange={(e) => handleInputChange("link", e.target.value)}
            placeholder="https://company.com/apply"
            className="h-12"
          />
        </div>
      </CardContent>
    </Card>
  );

  const renderStep3 = () => {
    console.log("Preview formData:", formData); // Debug log
    
    return (
      <div className="space-y-6">
        {/* Job Header Card */}
        <Card className="overflow-hidden">
          <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white p-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{formData.job_title || "Job Title"}</h1>
                  <div className="flex items-center gap-4 text-purple-100">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      <span>{formData.company_name || "Company Name"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{formData.location || "Location"}{formData.city ? `, ${formData.city}` : ""}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                  <div className="flex items-center gap-2 text-white">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{formData.job_type || "Job Type"}</span>
                  </div>
                </div>
              </div>
              
              {formData.job_category && (
                <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                  <Briefcase className="w-3 h-3 mr-2" />
                  {formData.job_category}
                </div>
              )}
            </div>
          </div>
        </Card>

      {/* Job Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileText className="w-5 h-5 text-purple-600" />
                About the Job
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {formData.about || "No job description provided yet. Please fill in the job details in the previous steps."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Users className="w-5 h-5 text-blue-600" />
                What You'll Be Doing
              </CardTitle>
            </CardHeader>
            <CardContent>
              {formData.what_you_will_be_doing ? (
                <ul className="space-y-3">
                  {formData.what_you_will_be_doing.split(".").filter(item => item.trim()).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item.trim()}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">No responsibilities listed yet.</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Star className="w-5 h-5 text-green-600" />
                What We're Looking For
              </CardTitle>
            </CardHeader>
            <CardContent>
              {formData.what_we_are_lookin_for ? (
                <ul className="space-y-3">
                  {formData.what_we_are_lookin_for.split(".").filter(item => item.trim()).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item.trim()}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 italic">No requirements specified yet.</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="w-5 h-5 text-orange-600" />
                Experience Required
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 font-medium">
                {formData.experience || "Not specified"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Star className="w-5 h-5 text-purple-600" />
                Required Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              {formData.skills ? (
                <div className="flex flex-wrap gap-2">
                  {formData.skills.split(",").filter(skill => skill.trim()).map((skill, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200"
                    >
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No skills specified yet.</p>
              )}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <LinkIcon className="w-5 h-5 text-purple-600" />
                Apply Now
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-3">Ready to join our team?</p>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                <LinkIcon className="w-4 h-4 mr-2" />
                {formData.link ? "Apply for this position" : "Application link not set"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/admin/postjob")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Jobs
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/admin/postjob/manage")}
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Manage Jobs
          </Button>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Post New Job</h1>
        <p className="text-gray-600 mt-2">Create a new job posting for your organization</p>
      </div>

      {renderStepIndicator()}

      <div className="mb-8">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
      </div>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        
        <div className="flex gap-2">
          {currentStep < 3 ? (
            <Button
              onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={jobPending}
              className="bg-purple-600 hover:bg-purple-700"
            >
              {jobPending ? "Posting..." : "Post Job"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostNewJob;
