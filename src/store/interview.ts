import { create } from 'zustand';
import { companies as staticCompanies, questions as staticQuestions } from '../data/questions';

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

interface InterviewStore {
  companies: Company[];
  questions: Question[];
  selectedCompany: string | null;
  currentQuestionIndex: number;
  timeLimit: number;
  isRecording: boolean;
  mediaStream: MediaStream | null;
  mediaRecorder: MediaRecorder | null;
  recordedVideo: string | null;
  hasPermission: boolean;
  fetchCompanies: () => void;
  fetchQuestions: (companyId: string) => void;
  setSelectedCompany: (companyId: string) => void;
  setTimeLimit: (seconds: number) => void;
  nextQuestion: () => void;
  requestPermission: () => Promise<void>;
  startRecording: () => Promise<void>;
  stopRecording: () => void;
  set: (state: Partial<InterviewStore>) => void;
  addCompany: (name: string) => Company;
  addQuestion: (companyId: string, questionText: string) => void;
  removeQuestion: (questionId: string) => void;
  editQuestion: (questionId: string, newText: string) => void;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const useInterviewStore = create<InterviewStore>((set, get) => ({
  companies: staticCompanies,
  questions: staticQuestions,
  selectedCompany: null,
  currentQuestionIndex: 0,
  timeLimit: 180,
  isRecording: false,
  mediaStream: null,
  mediaRecorder: null,
  recordedVideo: null,
  hasPermission: false,
  set: (state) => set(state),

  fetchCompanies: () => {
    set({ companies: staticCompanies });
  },

  fetchQuestions: (companyId: string) => {
    const companyQuestions = staticQuestions.filter(q => q.company_id === companyId);
    const shuffled = shuffleArray(companyQuestions);
    const numQuestions = Math.min(
      Math.floor(Math.random() * (7 - 3 + 1)) + 3, 
      shuffled.length
    );
    const selectedQuestions = shuffled.slice(0, numQuestions);
    set({ questions: selectedQuestions, currentQuestionIndex: 0 });
  },

  setSelectedCompany: (companyId: string) => {
    set({ selectedCompany: companyId });
    get().fetchQuestions(companyId);
  },

  setTimeLimit: (seconds: number) => {
    set({ timeLimit: seconds });
  },

  nextQuestion: () => {
    set((state) => ({
      currentQuestionIndex: Math.min(
        state.currentQuestionIndex + 1,
        state.questions.length - 1
      ),
    }));
  },

  requestPermission: async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true,
        audio: true 
      });
      set({ mediaStream: stream, hasPermission: true });
    } catch (error) {
      console.error('Error accessing camera:', error);
      set({ hasPermission: false });
    }
  },

  startRecording: async () => {
    const { mediaStream, timeLimit } = get();
    
    if (!mediaStream) {
      await get().requestPermission();
      return;
    }

    const chunks: BlobPart[] = [];
    const recorder = new MediaRecorder(mediaStream, {
      mimeType: 'video/webm;codecs=vp9,opus'
    });

    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        chunks.push(e.data);
      }
    };

    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      if (get().recordedVideo) {
        URL.revokeObjectURL(get().recordedVideo);
      }
      
      // Stop all tracks in the media stream to ensure the camera is released
      mediaStream.getTracks().forEach(track => track.stop());
      
      set({ 
        recordedVideo: url, 
        isRecording: false,
        mediaStream: null,
        mediaRecorder: null
      });
    };

    set({ mediaRecorder: recorder, isRecording: true });
    recorder.start();

    setTimeout(() => {
      if (get().isRecording) {
        get().stopRecording();
      }
    }, timeLimit * 1000);
  },

  stopRecording: () => {
    const { mediaRecorder } = get();
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
    }
  },

  addCompany: (name: string) => {
    const newCompany: Company = {
      id: crypto.randomUUID(),
      name,
      logo_url: `https://example.com/${name.toLowerCase()}-logo.png`
    };
    set((state) => ({
      companies: [...state.companies, newCompany]
    }));
    return newCompany;
  },

  addQuestion: (companyId: string, questionText: string) => {
    const newQuestion: Question = {
      id: crypto.randomUUID(),
      company_id: companyId,
      question_text: questionText,
      time_limit: 180,
      max_retries: 3
    };
    set((state) => ({
      questions: [...state.questions, newQuestion]
    }));
  },

  removeQuestion: (questionId: string) => {
    set((state) => ({
      questions: state.questions.filter(q => q.id !== questionId)
    }));
  },

  editQuestion: (questionId: string, newText: string) => {
    set((state) => ({
      questions: state.questions.map(q =>
        q.id === questionId
          ? { ...q, question_text: newText }
          : q
      )
    }));
  },
}));