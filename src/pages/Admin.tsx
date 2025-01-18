import React, { useState } from 'react';
import { X, Edit2, Code2, ChevronDown, ChevronRight } from 'lucide-react';
import { useInterviewStore } from '../store/interview';
import { Link } from 'react-router-dom';

function Admin() {
  const { companies, questions, addQuestion, removeQuestion, editQuestion, addCompany } = useInterviewStore();
  const [newCompany, setNewCompany] = useState('');
  const [newQuestions, setNewQuestions] = useState('');
  const [editingQuestion, setEditingQuestion] = useState<{
    id: string;
    text: string;
  } | null>(null);
  const [expandedCompanies, setExpandedCompanies] = useState<string[]>([]);

  const handleAddQuestions = () => {
    if (!newCompany.trim() || !newQuestions.trim()) return;
    
    let company = companies.find(
      c => c.name.toLowerCase() === newCompany.toLowerCase()
    );
    
    if (!company) {
      company = addCompany(newCompany);
    }

    const questionsToAdd = newQuestions
      .split(/[\n,]/)
      .map(q => q.trim())
      .filter(q => q.length > 0);

    questionsToAdd.forEach(questionText => {
      const questionExists = questions.some(
        q => q.company_id === company!.id && 
             q.question_text.toLowerCase() === questionText.toLowerCase()
      );

      if (!questionExists) {
        addQuestion(company!.id, questionText);
      }
    });

    setNewQuestions('');
  };

  const handleEditQuestion = (questionId: string, newText: string) => {
    editQuestion(questionId, newText);
    setEditingQuestion(null);
  };

  const toggleCompany = (companyId: string) => {
    setExpandedCompanies(prev => 
      prev.includes(companyId)
        ? prev.filter(id => id !== companyId)
        : [...prev, companyId]
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Question Management</h1>
        <Link 
          to="/code-preview" 
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Code2 className="w-4 h-4" />
          View Code
        </Link>
      </div>

      {/* Add Questions Form */}
      <div className="grid grid-cols-[1fr,2fr,auto] gap-4 mb-8">
        <div className="h-[60px]">
          <input
            type="text"
            placeholder="Company name"
            value={newCompany}
            onChange={(e) => setNewCompany(e.target.value)}
            className="w-full h-full p-2 rounded bg-[#363636] border border-gray-700 text-white"
          />
        </div>
        <div className="h-[60px]">
          <textarea
            placeholder="Enter questions (separate by commas or new lines)"
            value={newQuestions}
            onChange={(e) => setNewQuestions(e.target.value)}
            className="w-full h-full p-2 rounded bg-[#363636] border border-gray-700 text-white resize-none"
          />
        </div>
        <div className="h-[60px]">
          <button
            onClick={handleAddQuestions}
            className="w-full h-full px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
          >
            Add Questions
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {companies.map((company) => {
          const companyQuestions = questions.filter(
            q => q.company_id === company.id
          );
          const isExpanded = expandedCompanies.includes(company.id);

          return (
            <div key={company.id} className="bg-[#2a2a2a] rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCompany(company.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-[#363636] transition-colors"
              >
                <h2 className="text-xl font-semibold text-gray-300">
                  {company.name}
                </h2>
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {isExpanded && (
                <div className="border-t border-[#363636]">
                  {companyQuestions.map((question) => (
                    <div
                      key={question.id}
                      className="flex items-start gap-4 p-4 hover:bg-[#363636] transition-colors group"
                    >
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => setEditingQuestion({
                            id: question.id,
                            text: question.question_text
                          })}
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeQuestion(question.id)}
                          className="text-red-400 hover:text-red-300 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      {editingQuestion?.id === question.id ? (
                        <div className="flex-1 flex gap-2">
                          <input
                            type="text"
                            value={editingQuestion.text}
                            onChange={(e) => setEditingQuestion({
                              ...editingQuestion,
                              text: e.target.value
                            })}
                            className="flex-1 p-2 rounded bg-[#363636] border border-gray-700 text-white"
                          />
                          <button
                            onClick={() => handleEditQuestion(
                              question.id,
                              editingQuestion.text
                            )}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingQuestion(null)}
                            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <p className="flex-1">{question.question_text}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Admin;