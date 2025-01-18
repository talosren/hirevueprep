import React from 'react';
import { useInterviewStore } from '../store/interview';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function CodePreview() {
  const { companies, questions } = useInterviewStore();

  const generateCode = () => {
    const companiesCode = companies.map((company, index) => ({
      id: String(index + 1),
      name: company.name,
      logo_url: `https://example.com/${company.name.toLowerCase()}-logo.png`
    }));

    const questionsCode = questions.map((question, index) => {
      const companyIndex = companies.findIndex(c => c.id === question.company_id);
      return {
        id: String(index + 1),
        company_id: String(companyIndex + 1),
        question_text: question.question_text,
        time_limit: 180,
        max_retries: 3
      };
    });

    return `// questions.ts
interface Company {
  id: string;
  name: string;
  logo_url: string;
}

interface Question {
  id: string;
  company_id: string;
  question_text: string;
  time_limit: number;
  max_retries: number;
}

export const companies: Company[] = ${JSON.stringify(companiesCode, null, 2)};

export const questions: Question[] = ${JSON.stringify(questionsCode, null, 2)};`;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-8">
        <Link 
          to="/admin" 
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Admin
        </Link>
        <h1 className="text-2xl font-bold">Code Preview</h1>
      </div>
      <div className="bg-[#2a2a2a] rounded-lg p-6 overflow-x-auto">
        <pre className="text-sm font-mono text-gray-300 whitespace-pre">
          {generateCode()}
        </pre>
      </div>
    </div>
  );
}

export default CodePreview;