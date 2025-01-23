import React, { useEffect, useRef } from 'react';
import { Camera, Pause, Play, ArrowRight } from 'lucide-react';
import { TbReload } from 'react-icons/tb';
import { HiDownload } from 'react-icons/hi';
import { useInterviewStore } from '../store/interview';
import { Timer } from '../components/Timer';

function Interview() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    companies,
    questions,
    selectedCompany,
    currentQuestionIndex,
    timeLimit,
    isRecording,
    mediaStream,
    recordedVideo,
    hasPermission,
    fetchCompanies,
    setSelectedCompany,
    setTimeLimit,
    requestPermission,
    startRecording,
    stopRecording,
    nextQuestion,
    set,
  } = useInterviewStore();

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  useEffect(() => {
    if (videoRef.current) {
      if (mediaStream && !recordedVideo) {
        videoRef.current.srcObject = mediaStream;
      } else if (recordedVideo) {
        videoRef.current.srcObject = null;
      }
    }
  }, [mediaStream, recordedVideo]);

  useEffect(() => {
    return () => {
      if (recordedVideo) {
        URL.revokeObjectURL(recordedVideo);
      }
    };
  }, [recordedVideo]);

  const handleDownload = () => {
    if (recordedVideo) {
      const a = document.createElement('a');
      a.href = recordedVideo;
      a.download = `interview-recording-${Date.now()}.webm`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Interview Practice</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Left Column */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Company
            </label>
            <select
              className="w-full p-2 rounded bg-[#363636] border border-gray-700 text-white"
              value={selectedCompany || ''}
              onChange={(e) => setSele
